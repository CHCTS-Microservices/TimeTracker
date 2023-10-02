import React, { useState } from 'react';

const EventPopup = () => {
  // State to manage the visibility of the Trial dropdown
  const [showTrialDropdown, setShowTrialDropdown] = useState(false);
  
  // State to manage the visibility of the Activities dropdown
  const [showActivitiesDropdown, setShowActivitiesDropdown] = useState(false);

  return (
      <div
      className='rounded' 
      
      style={{backgroundColor: 'rgb(26,97,120)', width: '1050px', right:'50px', top:'110px', height: '819px', position: 'fixed'}} >
        {/* Line 1 */}
        <div style={{ margin: '20px' }}>
          <button
          className='rounded'
          style={{backgroundColor: 'rgb(37, 73, 133)', color:'white', width:'80px',height:'30px'}} >Trial</button>
          <select 
          style={{ margin: '20px' }}
          onClick={() => setShowTrialDropdown(!showTrialDropdown)}>
            {/* Dropdown options */}
            <option value="trial1">Trial 1</option>
            <option value="trial2">Trial 2</option>
            <option value="trial3">Trial 3</option>
          </select>
          <button 
          className='rounded'
          style={{ margin: '10px', backgroundColor: 'rgb(37, 73, 133)', color:'white',width:'80px',height:'30px'}}>Stage2</button>
        </div>
  
        {/* Line 2 */}
        <div style={{ margin: '20px' }}>
          <button 
          className='rounded'
          style={{backgroundColor: 'rgb(37, 73, 133)', color:'white', width:'80px',height:'30px'}}>Activity</button>
          <select 
          style={{ margin: '20px' }}
          onClick={() => setShowActivitiesDropdown(!showActivitiesDropdown)}>
            {/* Dropdown options */}
            <option value="activity1">Activity 1</option>
            <option value="activity2">Activity 2</option>
            <option value="activity3">Activity 3</option>
          </select>
        </div>
  
        {/* Text Boxes */}
        <div style={{ margin: '10px' }}>
          <label style={{color:'white'}} >Trial Details</label>
          <textarea style={{ width: '100%',marginBottom:'10px',height:'150px'}}></textarea>
          <label style={{color:'white'}}>Note</label>
          <textarea style={{ width: '100%', height:'150px' }}></textarea>
        </div>
      </div>
    );
};

export default EventPopup;
