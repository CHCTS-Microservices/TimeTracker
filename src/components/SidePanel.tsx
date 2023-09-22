'use client'
import React, { useState } from 'react';
import  * as Struct from '@/app/utils/types';

// Interface to define the expected props for the SidePanel component
interface SidePanelProps {
    events: Struct.Event[];
  }




function SidePanel( {events} : SidePanelProps) {
    // sort events by active then by time
    events.sort((a, b) => {
      if (a.active && !b.active) {
          return -1; 
      } else if (!a.active && b.active) {
          return 1;
      } else {
        // sort by date if both have the same active status
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
  });




  // convert the given duration object into a human-readable string.
  function formatDuration(duration: Struct.Duration): string {
    return `${duration.hours}h ${duration.minutes}m ${duration.seconds}s`;
  } 

  const EventCard: React.FC<{ event: Struct.Event }> = ({ event }) => {
    
    return (
      // Container for the entire card, background color changes based on the event's active status
        // <button className={`m-1 p-1 rounded-lg shadow-md`} style={{ background: event.active ? 'rgb(245, 206, 128)' : 'rgb(118, 167, 176)' }}> // Not really. THis should change color based on if the event is selected

        // ${event.active ? 'bg-[#f5ce80]' :'bg-[#76a7b0] ' }
        <button className={`m-1 p-1 side-pannel-width rounded-lg shadow-md bg-[#76a7b0] hover:bg-[#f5ce80]`} >
          
          {/* Using flexbox to layout inner elements of the card horizontally */}
          <div className="flex space-x-2 ">
            <div>
              {/*Card: active label. Label indicating whether the event is active ("Tracking") or inactive */}
              <div className={`flex items-center justify-center w-[80px] h-[30px] mt-2 ml-2 rounded-lg shadow-lg text-white  ${event.active ? 'bg-green-600' : 'bg-red-400'}`} >
                <p className="text-xs font-semibold">{event.active ? 'Tracking' : 'Inactive'}</p>
              </div>

              {/*Card: dynamic time. */}
              <div className={`flex items-center justify-center w-[80px] h-[30px] mt-2 ml-2 rounded-lg shadow-lg bg-white`} >
                <p className="text-xs font-semibold  bg-white text-black">{formatDuration(Struct.timeCalc(event))}</p>
              </div>
            </div>

            {/*Card: Side panel detail. Container for detailed information about the event */}
            <div className={`w-[200px] h-[100px] rounded-lg shadow-lg text-white `} style={{ background: 'rgb(32, 63, 119)' }}>
                <p className="text-xs m-2 font-semibold ">Trial: {event.trialName}</p>
                <p className="text-xs m-2">Stage: {event.stage}</p>
                <p className="text-xs m-2">Activity: {event.activityName}</p>
            </div>
          </div>

        </button>
    );
  }




    // State for managing the active filter status. 
    // It can be either `true` (Trackinig), `false` (Inactive), or `null` (show all).
    const [filterActive, setFilterActive] = useState<boolean | null>(null);

    // Filtering the list of events based on the active status filter.
    // If `filterActive` is null, show all events. Otherwise, show events that match the active status.
    const filteredEvents = filterActive !== null
        ? events.filter(event => event.active === filterActive)
        : events;

  return (

        <div>
          {/* Filter */}
            <div className="m-1 p-1 ml-0 rounded-lg shadow-md w-64 h-full text-black" style={{ background: 'rgb(245, 206, 128)'}}>
                {/* Label indicating the purpose of the dropdown */}
                <label>Select active status:</label>

                {/* Dropdown to select the active status filter. 
                 It updates the `filterActive` state when its value changes. */}
                <select
                    className="ml-2 p-1 border rounded bg- white"
                    value={filterActive === null ? '' : filterActive.toString()}
                    onChange={e => setFilterActive(e.target.value === '' ? null : e.target.value === 'true')}
                >
                    <option value="">All</option>
                    <option value="true">Tracking</option>
                    <option value="false">Inactive</option>
                </select>
            </div>

            {/* Event Cards */}
            <div className="w-64 h-full bg-gray-100 p-4 shadow-md " style={{ background: 'rgb(26, 97, 120)' }}>
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}

      
            </div>
        </div>)


    
  // );
}

export default SidePanel;
