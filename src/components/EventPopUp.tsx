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
  // it will need to find out which trial has been selected
  trials.find(function (trial){
    if (e.target.value == trial.title)
    {
      setTrial(trial);
    }
  })

}

// Funtion sets the selected Activity
const handleActivityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
  // it will need to find out which activty has been selected
  activities.find(function (activity){
    if (e.target.value == activity.title)
    {
      setActivity(activity);
    }
  })
}


  function testo(){
    console.log('activities', activities);
  }

 
    return (
      <div className="bg-[rgb(26,97,120)] w-[1050px] top-[110px] right-[50px] h-[590px] fixed rounded p-5">
        <div className="mb-5">
          <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center">Trial</label>
          <select className="mx-5" onChange={handleTrialChange}>
          {trials.map((trial) => (
            <option key={trial.id} value={trial.id}>
              {trial.title}
            </option>
          ))}
          </select>
          <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center ml-12">Stage2</label>
        </div>
  
        <div className="mb-5">
          <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center">Activity</label>
          <select className="mx-5" onChange={handleActivityChange} >
            {activities.map((activity) => (
            <option key={activity.id} value={activity.id}>
                {activity.title}
            </option>
             ))}
          </select>
        </div>
  
        <div className="mb-5 mt-16">
          <label className="text-white">Trial Details</label>
          <label className="w-full h-[250px] block bg-white mb-2.5 box-border"></label>
        </div>
        
        <div className="absolute bottom-5 right-5">
          <button className="bg-green-500 text-white py-3 px-8 rounded text-center inline-block m-1 cursor-pointer" onClick={testo}>Confirm</button>
          <button className="bg-red-500 text-white py-3 px-8 rounded text-center inline-block m-1 cursor-pointer">Cancel</button>
        </div>
      </div>
    );

}


