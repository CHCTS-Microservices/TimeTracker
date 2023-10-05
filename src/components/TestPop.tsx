"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import API from "@/app/utils/ServiceLayer";
import { Trial } from "@/app/utils/types";
import { Activity } from "@/app/utils/types";
import { Event } from "@/app/utils/types";

interface EventPopupProps {
  database: API;
  userID: number;
  createEvent: (newEvent: Event) => void;
  // onClose: () => void;
  // onEventCreate: (newEvent: Event) => void;
}

export default function DeleteEvent({
  database,
  userID,
  createEvent,
}: EventPopupProps) {
  const [open, setOpen] = useState(false);

  // when comfirm button is clicked do the following logic, call parent funtio delete event then close the modal
  //   function handelDelete(){
  //     deleteEvent();
  //     handleOpen;
  //   }

  const [trials, setTrials] = useState<Trial[]>([]);
  const [selectedTrial, setTrial] = useState<Trial>();
  // const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setActivity] = useState<Activity>();

  // Modal/dialog box visibile or not
  // const handleOpen = () => setOpen(!open);
  function handleOpen() {
    setTrials([]);
    setTrial(undefined);
    setActivities([]);
    setActivity(undefined);
    setOpen(!open);
  }

  // sets the Trials -> calls databse to retrive the trials associated to a user
  const getTrials = async () => {
    const trialIDs: number[] = (await database.getTrials(userID)) || [];
    const trialDetails: Trial[] = (await database.getTrialsDet(trialIDs)) || [];
    setTrials(trialDetails);
  };

  // sets the Activities -> calls databse to retrieve activities associated to a trial
  const getActivites = async () => {
    if (selectedTrial != undefined) {
      const activityDet =
        (await database.getActivitiesDet(selectedTrial?.activities)) || [];
      setActivities(activityDet);
    }
  };

  // if database or user changes, call get the Trials
  useEffect(() => {
    getTrials();
  }, [database, userID, open]);

  // if selectd trial changes, call the get Activities
  useEffect(() => {
    setActivity(undefined);
    getActivites();
  }, [selectedTrial]);

  // funtion sets the selected Trial
  const handleTrialChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setTrial(undefined);
      setActivity(undefined);
      return;
    }

    // it will need to find out which trial has been selected
    trials.find(function (trial) {
      if (e.target.value == trial.id.toString()) {
        setTrial(trial);
      }
    });
  };

  // Funtion sets the selected Activity
  const handleActivityButtonPress = (activity: Activity) => {
    setActivity(activity);
  };

  function buildEvent() {
    let newEvent: Event = {
      id: 200,
      userID: userID,
      active: false,
      activityID: selectedActivity?.id,
      activityName: selectedActivity?.title,
      date: new Date(),
      notes: "",
      stage: selectedTrial?.stage,
      timeLine: [],
      totalTime: 0,
      trialID: selectedTrial?.id,
      trialName: selectedTrial?.title,
      unit: selectedTrial?.unit,
    };
    createEvent(newEvent);
    handleOpen();
  }

  return (
    <>
      <Button
        className="w-80 h-20 mt-4 ml-8 bg-blue-500 text-2xl flex-grow text-white rounded"
        onClick={handleOpen}
      >
        Create Event
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Create Event</DialogHeader>
        <DialogBody divider className="grid  gap-4">
          <div className="flex px-4 mb-5">
            <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 rounded text-white inline-block rounded text-center font-bold">
              Trial
            </label>
            <select
              className="mx-5 py-1 px-3 rounded"
              onChange={handleTrialChange}
            >
              <option value="" selected>
                Select a Trial
              </option>
              {trials.map((trial) => (
                <option key={trial.id} value={trial.id}>
                  {trial.title}
                </option>
              ))}
            </select>
            <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 text-white h-[30px] inline-block rounded ml-12 px-2">
              <p>
                <strong> Stage: </strong>{" "}
                {selectedTrial ? selectedTrial.stage : ""}
              </p>
            </label>
          </div>

          <div className="mb-5 mt-5 flex flex-col">
            <label className="text-white">Trial Details</label>
            <label className="w-full  block bg-white mb-2.5 box-border">
              {selectedTrial ? (
                <div>
                  <p>
                    <strong>Title:</strong> {selectedTrial.title}
                  </p>
                  <p>
                    <strong>Unit:</strong> {selectedTrial.unit}
                  </p>
                  <p>
                    <strong>Stage:</strong> {selectedTrial.stage}
                  </p>
                  <p>
                    <strong>Date:</strong> {selectedTrial.date}
                  </p>
                  {selectedTrial.staffID && (
                    <p>
                      <strong>Staff IDs:</strong>{" "}
                      {selectedTrial.staffID.join(", ")}
                    </p>
                  )}
                  {selectedTrial.totalTime && (
                    <p>
                      <strong>Total Time:</strong> {selectedTrial.totalTime}
                    </p>
                  )}
                </div>
              ) : (
                "No trial selected."
              )}
            </label>
          </div>

          {/* Display the Activity label only when Trial is selected */}
          {selectedTrial && (
            <div className="mb-5">
              <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 rounded text-white inline-block rounded text-center font-bold ">
                Activity
              </label>
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => handleActivityButtonPress(activity)}
                  className={`mx-2 py-1 px-3 rounded text-black ${
                    selectedActivity?.id === activity.id
                      ? "bg-[#f5ce80]"
                      : "bg-[#76a7b0]"
                  } hover:bg-[#f5ce80]`}
                >
                  {activity.title}
                </button>
              ))}
            </div>
          )}

                    {/* Display Activity details only when Activity is selected */}
                    {selectedActivity && (
            <div className="mb-5 mt-5">
              <label className="text-white">Activity Details</label>
              <label className="w-full h-[120px] block bg-white mb-2.5 box-border">
                {selectedActivity ? (
                  <div>
                    <p>
                      <strong>Title:</strong> {selectedActivity.title}
                    </p>
                    <p>
                      <strong>Date:</strong> {selectedActivity.date}
                    </p>
                    {selectedActivity.staffID && (
                      <p>
                        <strong>Staff IDs:</strong>{" "}
                        {selectedActivity.staffID.join(", ")}
                      </p>
                    )}
                    {selectedActivity.totalTime && (
                      <p>
                        <strong>Total Time:</strong>{" "}
                        {selectedActivity.totalTime}
                      </p>
                    )}
                  </div>
                ) : (
                  "No activity selected."
                )}
              </label>
            </div>
          )}

         
       
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={buildEvent}>
            Create
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

