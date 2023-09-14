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

  const EventCard: React.FC<{ event: Struct.Event }> = ({ event }) => {
    return (
      // Container for the entire card, background color changes based on the event's active status
        <div className={`m-1 p-1 rounded-lg shadow-md`} style={{ background: event.active ? 'rgb(245, 206, 128)' : 'rgb(118, 167, 176)' }}>
          
          {/* Using flexbox to layout inner elements of the card horizontally */}
          <div className="flex space-x-2 ">


            <div>
              {/*Card: active label. Label indicating whether the event is active ("Tracking") or inactive */}
              <div className={`w-[80px] h-[30px] mt-2 ml-2 rounded-lg shadow-lg text-white text-center  ${event.active ? 'bg-green-600' : 'bg-red-400'}`} >
                <p className="text-xs font-semibold mb-2 mt-2 ml-0 ">{event.active ? 'Tracking' : 'Inactive'}</p>
              </div>

              {/*Card: dynamic time. */}
              <div className={`w-[80px] h-[30px] mt-2 ml-2 rounded-lg shadow-lg text-white text-center  ${event.active ? 'bg-green-600' : 'bg-red-400'}`} >
                <p className="text-xs font-semibold mb-2 mt-2 ml-0 ">{event.active ? 'Tracking' : 'Inactive'}</p>
              </div>
            </div>

            {/*Card: Side panel detail. Container for detailed information about the event */}
            <div className={`w-[200px] h-[100px] rounded-lg shadow-lg text-white `} style={{ background: 'rgb(32, 63, 119)' }}>
                <p className="text-xs m-2 font-semibold ">{event.notes}</p>
                <p className="text-xs m-2">Trail number: {event.trialID}</p>
                <p className="text-xs m-2">Stage:</p>
            </div>
          </div>

        </div>
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
            <div className="m-1 p-1 ml-0 rounded-lg shadow-md w-64 h-full" style={{ background: 'rgb(245, 206, 128)'}}>
                {/* Label indicating the purpose of the dropdown */}
                <label>Select active status:</label>

                {/* Dropdown to select the active status filter. 
                 It updates the `filterActive` state when its value changes. */}
                <select
                    className="ml-2 p-1 border rounded"
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
