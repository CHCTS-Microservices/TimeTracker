import React, {  useEffect,useState } from 'react';
import supabase from '@supabase/supabase-js'
import API from '@/app/utils/ServiceLayer';
import { Trial } from '@/app/utils/types';
import { Activity } from '@/app/utils/types';




// Interface to define the expected props for the SidePanel component
interface EventPopupProps {
  database : API;
  userID : number;
}


export default function EventPopup({database, userID} : EventPopupProps)
{
  const [showTrialDropdown, setShowTrialDropdown] = useState(false);
  const [showActivitiesDropdown, setShowActivitiesDropdown] = useState(false);
  const [trials, setTrials] = useState<Trial[]>([]);
  const [selectedTrial, setTrial] = useState<Trial>();
  // const [selectedActivities, setSelectedActivities] = useState<number[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setActivity] = useState<Activity>();




  // sets the Trials -> calls databse to retrive the trials associated to a user
  const getTrials = async () => {
    const trialIDs: number[] = (await database.getTrials(userID)) || [];
    const trialDetails: Trial[] = (await database.getTrialsDet(trialIDs)) || [];
    setTrials(trialDetails);
  }


  // sets the Activities -> calls databse to retrieve activities associated to a trial
  const getActivites =async () => {
    const activityDet = (await database.getActivitiesDet(selectedTrial?.activities) || []);
    setActivities(activityDet);
  }


  // if database or user changes, call get the Trials 
useEffect(() => {
    getTrials();
}, [database, userID]);

// if selectd trial changes, call the get Activities
useEffect(() => {
  getActivites();
}, [selectedTrial]);


// funtion sets the selected Trial
const handleTrialChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  if (e.target.value === "") {
    setTrial(undefined); 
    return;
  }
  
  // it will need to find out which trial has been selected
  trials.find(function (trial){
    if (e.target.value == trial.title)
    {
      setTrial(trial);
    }
  })

}

// Funtion sets the selected Activity
const handleActivityButtonPress = (activity: Activity) => {
  setActivity(activity);
};

  function testo(){
    console.log('activities', activities);
  }
 
    return (
      <div className="bg-[rgb(26,97,120)] w-3/5 top-[110px] right-[190px] h-[590px] fixed rounded p-5">
        <div className="mb-5">
          <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center font-bold">Trial</label>
          <select className="mx-5" onChange={handleTrialChange}>
          <option value="" selected>Select a Trial</option>
          {trials.map((trial) => (
            <option key={trial.id} value={trial.id}>
              {trial.title}
            </option>
          ))}
          </select>
          <label className="bg-[rgb(37,73,133)] text-white h-[30px] inline-block rounded ml-12 px-2">
            <p><strong> Stage: </strong> {selectedTrial ? selectedTrial.stage : ""}</p>
          </label>
        </div>

        <div className="mb-5 mt-5">
          <label className="text-white">Trial Details</label>
          <label className="w-full h-[100px] block bg-white mb-2.5 box-border">
            {selectedTrial ? (
              <div>
                <p><strong>Title:</strong> {selectedTrial.title}</p>
                <p><strong>Unit:</strong> {selectedTrial.unit}</p>
                <p><strong>Stage:</strong> {selectedTrial.stage}</p>
                <p><strong>Date:</strong> {selectedTrial.date ? selectedTrial.date.toDateString() : "N/A"}</p>
                {selectedTrial.staffID && <p><strong>Staff IDs:</strong> {selectedTrial.staffID.join(', ')}</p>}
                {selectedTrial.totalTime && <p><strong>Total Time:</strong> {selectedTrial.totalTime}</p>}
                  
              </div>
            ) : (
                "No trial selected."
            )}
          </label>
        </div>

        {/* Display the Activity label only when Trial is selected */}
        {selectedTrial && (
          <div className="mb-5">
            <label className="bg-[rgb(37,73,133)] mx-2 py-1 px-3 rounded text-white inline-block rounded text-center font-bold ">Activity</label>
            {activities.map((activity) => (
              <button 
                key={activity.id} 
                onClick={() => handleActivityButtonPress(activity)} 
                className={`mx-2 py-1 px-3 rounded text-white ${selectedActivity?.id === activity.id ? 'bg-[#76a7b0]' : 'bg-[rgb(37,73,133)]'}`}
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
                  <p><strong>Title:</strong> {selectedActivity.title}</p>
                  <p><strong>Unit:</strong> {selectedActivity.unit}</p>
                  <p><strong>Date:</strong> {selectedActivity.date}</p>
                  {selectedActivity.staffID && <p><strong>Staff IDs:</strong> {selectedActivity.staffID.join(', ')}</p>}
                  {selectedActivity.totalTime && <p><strong>Total Time:</strong> {selectedActivity.totalTime}</p>}
            </div>
              ) : (
                  "No activity selected."
              )}
            </label>
          </div>
        )}

        
        <div className="absolute bottom-5 right-5">
          <button className="bg-green-500 text-white py-3 px-8 rounded text-center inline-block m-1 cursor-pointer" onClick={testo}>Confirm</button>
          <button className="bg-red-500 text-white py-3 px-8 rounded text-center inline-block m-1 cursor-pointer">Cancel</button>
        </div>
      </div>
    );

}


