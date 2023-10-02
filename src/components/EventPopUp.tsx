import React, { useState } from 'react';

const EventPopup = () => {
  // State to manage the visibility of the Trial dropdown
  const [showTrialDropdown, setShowTrialDropdown] = useState(false);
  
  // State to manage the visibility of the Activities dropdown
  const [showActivitiesDropdown, setShowActivitiesDropdown] = useState(false);

  return (
      <div
      className='rounded' 
      //height:'819px'
      style={{backgroundColor: 'rgb(26,97,120)', width: '1050px', right:'50px', top:'110px', height:'590px' , position: 'fixed'}} >
        {/* Line 1 */}
        <div style={{ margin: '20px' }}>
          <label
          className='rounded'
          style={{
            backgroundColor: 'rgb(37, 73, 133)', 
            color: 'white', 
            width: '80px',
            height: '30px',
            display: 'inline-block',
            lineHeight: '30px', // To vertically center the text
            textAlign: 'center' // To horizontally center the text
        }} >Trial</label>
          <select 
          style={{ margin: '20px' }}
          onClick={() => setShowTrialDropdown(!showTrialDropdown)}>
            {/* Dropdown options */}
            <option value="trial1">Trial 1</option>
            <option value="trial2">Trial 2</option>
            <option value="trial3">Trial 3</option>
          </select>
          <label 
          className='rounded'
          style={{
            marginLeft:'50px',
            backgroundColor: 'rgb(37, 73, 133)', 
            color: 'white', 
            width: '80px',
            height: '30px',
            display: 'inline-block',
            lineHeight: '30px', // To vertically center the text
            textAlign: 'center' // To horizontally center the text
        }} >Stage2</label>
        </div>
  
        {/* Line 2 */}
        <div style={{ margin: '20px' }}>
          <label 
          className='rounded'
          style={{
            backgroundColor: 'rgb(37, 73, 133)', 
            color: 'white', 
            width: '80px',
            height: '30px',
            display: 'inline-block',
            lineHeight: '30px', // To vertically center the text
            textAlign: 'center' // To horizontally center the text
        }} >Activity</label>
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
        <div style={{ margin: '20px',marginTop:'60px' }}>
          <label style={{color:'white'}} >Trial Details</label>
          <label style={{ 
            width: '100%',
            height:'250px',
            display: 'block', // or 'inline-block'
            backgroundColor: 'white',
            marginBottom: '10px',
            boxSizing: 'border-box', // to include padding in element's height and width
            }}></label>
        </div>
        {/* Confirm and Cancel Buttons */}
      <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
        <button style={{
          backgroundColor: '#4CAF50', /* Green */
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '4px'
        }}>Confirm</button>

        <button style={{
          backgroundColor: '#f44336', /* Red */
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          margin: '4px 2px',
          cursor: 'pointer',
          borderRadius: '4px'
        }}>Cancel</button>
      </div>
    </div>
    );
};

export default EventPopup;
