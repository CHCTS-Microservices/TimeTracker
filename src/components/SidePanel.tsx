import React, { useState } from 'react';
import  * as Struct from '@/app/utils/types';



// side panel decoration


interface SidePanelProps {
    events: Struct.Event[];
  }


function SidePanel( {events} : SidePanelProps) {
    // const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const sortedEvents = events.sort((a, b) => {
      if (a.active && !b.active) {
          return -1; // active events come first
      } else if (!a.active && b.active) {
          return 1;
      } else {
          return new Date(b.date).getTime() - new Date(a.date).getTime(); // sort by date if both have the same active status
      }

    
      
  });

  const EventCard: React.FC<{ event: Struct.Event }> = ({ event }) => {
    return (
        <div className={`m-1 p-1 rounded-lg shadow-md`} style={{ background: event.active ? 'rgb(245, 206, 128)' : 'rgb(118, 167, 176)' }}>
            <div className={`m-2 p-6 rounded-lg shadow-md text-white`} style={{ background: 'rgb(32, 63, 119)' }}>
              <h2 className="text-xl font-semibold mb-2">{event.notes}</h2>
              <p className="mb-2">Trail number: {event.trialID}</p>
              <p className="mb-2">Stage number:</p>
              {/* <p className="text-sm text-gray-500">{event.notes}</p> */}
            </div>
        </div>
    );
}



  


  return (
    <div className="w-64 h-full bg-gray-100 p-4 shadow-md " style={{ background: 'rgb(26, 97, 120)' }}>
        {sortedEvents.map(event => (
            <EventCard key={event.id} event={event} />
        ))}

      
    </div>
  
   
    // <div className="w-64 h-full bg-gray-100 p-4 shadow-md " style={{ background: 'rgb(26, 97, 120)' }}>
    //   <h3 className='text-xl mb-2.5'>Events</h3>
    //   <ul className='pl-0 text-center'>
    //     {sortedEvents.map(event => (
    //       <div className="max-w-sm m-2 rounded overflow-hidden shadow-lg" style={{ background: 'rgb(32, 63, 119)' }}>
    //         <div className="px-6 py-4 text-white font-bold mb-2 text-left">
    //           Trail name: <span>{event.trialID}</span> <br />
    //           Stage number: <span></span> <br />
    //           ActicityID: <span>{event.activityID}</span> <br />

    //         </div>
    //       </div>
    //       // <li key={event.id} className='py-1.5 border-b border-gray-300'>
    //       //   Trail name: <span>{event.trialID}</span> <br />
    //       //   Stage number: <span></span> <br />
    //       //   ActicityID: <span>{event.activityID}</span> <br />
    //       //   {/* <strong>{event.title}</strong><br /> */}
            
    //       //   {/* Date: <span>{event.date.toString()}</span><br /> */}
    //       //   Active: <span>{event.active.toString()}</span>
    //       // </li>
    //     ))}
    //   </ul>
      
    // </div>


    
  );
}

export default SidePanel;
