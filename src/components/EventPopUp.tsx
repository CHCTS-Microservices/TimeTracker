import React, { useState } from 'react';

const EventPopup = () => {
  const [showTrialDropdown, setShowTrialDropdown] = useState(false);
  const [showActivitiesDropdown, setShowActivitiesDropdown] = useState(false);

  return (
    <div className="bg-[rgb(26,97,120)] w-[1050px] top-[110px] right-[50px] h-[590px] fixed rounded p-5">
      <div className="mb-5">
        <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center">Trial</label>
        <select className="mx-5" onClick={() => setShowTrialDropdown(!showTrialDropdown)}>
          <option value="trial1">Trial 1</option>
          <option value="trial2">Trial 2</option>
          <option value="trial3">Trial 3</option>
        </select>
        <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center ml-12">Stage2</label>
      </div>

      <div className="mb-5">
        <label className="bg-[rgb(37,73,133)] text-white w-[80px] h-[30px] inline-block rounded text-center">Activity</label>
        <select className="mx-5" onClick={() => setShowActivitiesDropdown(!showActivitiesDropdown)}>
          <option value="activity1">Activity 1</option>
          <option value="activity2">Activity 2</option>
          <option value="activity3">Activity 3</option>
        </select>
      </div>

      <div className="mb-5 mt-16">
        <label className="text-white">Trial Details</label>
        <label className="w-full h-[250px] block bg-white mb-2.5 box-border"></label>
      </div>
      
      <div className="absolute bottom-5 right-5">
        <button className="bg-green-500 text-white py-3 px-8 rounded text-center inline-block m-1 cursor-pointer">Confirm</button>
        <button className="bg-red-500 text-white py-3 px-8 rounded text-center inline-block m-1 cursor-pointer">Cancel</button>
      </div>
    </div>
  );
};

export default EventPopup;
