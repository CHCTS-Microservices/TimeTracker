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
import Select from 'react-select';

interface EventPopupProps {
  database: API;
  userID: number;
  createEvent: (newEvent: Event) => void;
}

export default function EventPopUp({
  database,
  userID,
  createEvent,
}: EventPopupProps) {
  const [open, setOpen] = useState(false);

  const [trials, setTrials] = useState<Trial[]>([]);
  const [selectedTrial, setTrial] = useState<Trial>();
  // const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setActivity] = useState<Activity>();
  const trialOptions = trials.map(trial => ({
  value: trial.id,
  label: trial.title
}));

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
  const handleTrialChange = (selectedOption: any) => {
    if (!selectedOption) {
      setTrial(undefined);
      setActivity(undefined);
      return;
    }
  
    const selectedTrialFromList = trials.find(trial => trial.id === selectedOption.value);
    setTrial(selectedTrialFromList);
  };
  

  // Funtion sets the selected Activity
  const handleActivityButtonPress = (activity: Activity) => {
    setActivity(activity);
  };

  function buildEvent() {
    let newEvent: Event = {
      userID: userID,
      active: false,
      // @ts-ignore: Object is possibly 'null'.
      activityID: selectedActivity?.id,
      // @ts-ignore: Object is possibly 'null'.
      activityName: selectedActivity?.title,
      date: new Date(),
      notes: " ",
      // @ts-ignore: Object is possibly 'null'.
      stage: selectedTrial?.stage,
      timeLine: [],
      totalTime: 0,
      // @ts-ignore: Object is possibly 'null'.
      trialID: selectedTrial?.id,
      // @ts-ignore: Object is possibly 'null'.
      trialName: selectedTrial?.title,
      // @ts-ignore: Object is possibly 'null'.
      unit: selectedTrial?.unit,
    };
    createEvent(newEvent);
    handleOpen();
  }

  return (
    <>
      <Button
        className="w-[330px] h-20 mt-4 ml-0 bg-blue-500 text-2xl flex-grow text-white rounded"
        onClick={handleOpen}
      >
        Create Event
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-3xl">Create Event</DialogHeader>
        <DialogBody divider className="grid  gap-4">
          <div className="flex px-4 mb-5">
            {/* might need some UI changes for fonts */}
            <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 text-white rounded text-center font-bold text-2xl flex items-center"> 
              Trial
            </label>
            <Select
            options={trialOptions}
            onChange={(selectedOption) => handleTrialChange(selectedOption)}
            placeholder="Select a Trial"
            className="react-select-container mx-5 py-1 px-3 rounded border-4 border-cyan-200 text-2xl"
            classNamePrefix="react-select"
          />
            <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 text-white rounded ml-12 text-2xl flex items-center">
              <p>
                <strong> Stage: </strong>{" "}
                {selectedTrial ? selectedTrial.stage : ""}
              </p>
            </label>
          </div>

          <div className="mb-5 mt-5 flex flex-col ml-5 mr-5">
            <label className="text-black text-2xl"> Trial Details</label>
            <label className=" block bg-white mb-2.5 border-4 border-blue-gray-700 text-2xl">
              {selectedTrial ? (
                <div>
                  <p>
                    <span className="font-semibold">Title:</span>{" "}
                    {selectedTrial.title}
                  </p>
                  <p>
                    <span className="font-semibold">Unit:</span>{" "}
                    {selectedTrial.unit}
                  </p>
                  <p>
                    <span className="font-semibold">Stage:</span>{" "}
                    {selectedTrial.stage}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span>{" "}  
                    {selectedTrial.date}
                  </p>
                  {selectedTrial.staffID && (
                    <p>
                      <span className="font-semibold">Staff Ids:</span>{" "}
                      {selectedTrial.staffID.join(", ")}
                    </p>
                  )}
                  {selectedTrial.totalTime && (
                    <p>
                      <span className="font-semibold">Total Time:</span>{" "}
                      {selectedTrial.totalTime}
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
            <div className="">
              <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 rounded text-white inline-block text-center font-bold text-2xl ml-5">
                Activity
              </label>
              <div className="flex-col py-4 text-xl ml-2">
                {activities.map((activity) => (
                  <button
                    key={activity.id}
                    onClick={() => handleActivityButtonPress(activity)}
                    className={`mx-2 p-5 rounded-full text-black ${
                      selectedActivity?.id === activity.id
                        ? "bg-[#f5ce80] border-4 border-cyan-200"
                        : "bg-[#76a7b0]"
                    } hover:bg-[#f5ce80]`}
                  >
                    {activity.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Display Activity details only when Activity is selected */}
          {selectedActivity && (
            <div className="mb-5 ml-5 mr-5">
              <label className="text-black text-2xl">Activity Details</label>
              <label className=" block bg-white mb-2.5 border-4 border-blue-gray-700 text-2xl">
                {selectedActivity ? (
                  <div>
                    <p>
                      <span className="font-semibold">Title:</span>{" "}
                      {selectedActivity.title}
                    </p>
                    <p>
                      <span className="font-semibold">Date:</span>{" "}
                      {selectedActivity.date}
                    </p>
                    {selectedActivity.staffID && (
                      <p>
                        <span className="font-semibold">Staff Ids:</span>{" "}
                        {selectedActivity.staffID.join(", ")}
                      </p>
                    )}
                    {selectedActivity.totalTime && (
                      <p>
                        <span className="font-semibold">Total Time:</span>{" "}
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
          <Button
            variant="outlined"
            color="red"
            onClick={handleOpen}
            className="text-xl"
          >
            Cancel
          </Button>
          {selectedActivity ? (
            <Button
              variant="gradient"
              color="green"
              onClick={buildEvent}
              className="text-xl"
            >
              Create
            </Button>
          ) : (
            <div></div>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
}
