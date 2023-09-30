'use client'
import React, { useEffect, useState } from 'react';
import {Event, Duration} from '@/app/utils/types';
import { timeCalc } from '@/app/utils/globalFuntions';



// Interface to define the expected props for the SidePanel component
interface SidePanelProps {
  events: Event[];
  onEventSelect: (event: Event) => void;
  selectedEvent: Event | null;
}

function SidePanel({ events, selectedEvent, onEventSelect}: SidePanelProps) {
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
  function formatDuration(duration: Duration): string {
    return `${duration.hours}h ${duration.minutes}m ${duration.seconds}s`;
  } 

  interface EventCardProps {
    event: Event;
    onEventSelect: (event: Event) => void;
    selectedEvent: Event | null;
  }

  // an interface for the props expected by the `EventCard` component.
  const EventCard: React.FC<EventCardProps> = ({ event, selectedEvent, onEventSelect }) => {

    // Check if the current event is the selected event based on their IDs.
    const isSelected = selectedEvent?.id === event.id;

    // Get the initial duration using timeCalc function
    const initialDuration = timeCalc(event);
    const initialSeconds = initialDuration.hours * 3600 + initialDuration.minutes * 60 + initialDuration.seconds;

    // Set the initial seconds
    const [seconds, setSeconds] = useState(0);
    // const isActive = event.active;

    useEffect(() => {
        let interval: any = null;
        if (event.active) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [event.active]);

    const formatTime = () => {
      // Add initial time to the current elapsed time (in seconds)
      const initialSeconds = initialDuration.hours * 3600 + initialDuration.minutes * 60 + initialDuration.seconds;
      const totalSeconds = seconds + initialSeconds;
      const getSeconds = `0${(totalSeconds % 60)}`.slice(-2);
      const min = Math.floor(totalSeconds / 60);
      const getMinutes = `0${min % 60}`.slice(-2);
      const totalHours = Math.floor(totalSeconds / 3600);
      
      // Check if total hours exceed 24, then convert it to days
      if (totalHours >= 24) {
          const days = Math.floor(totalHours / 24);
          const getHours = `0${totalHours % 24}`.slice(-2);
          return `${days}D ${getHours}h ${getMinutes}m ${getSeconds}s`;
      } else {
          const getHours = `0${totalHours}`.slice(-2);
          return `${getHours}h ${getMinutes}m ${getSeconds}s`;
      }
   }
  
      
    return (
        // Container for the entire card, background color changes based on if the event is selected 
        <button className={`m-1 p-1 side-pannel-width rounded-lg shadow-md ${isSelected ? 'bg-[#f5ce80]' : 'bg-[#76a7b0]'} hover:bg-[#f5ce80]`} onClick={() => onEventSelect(event)}>
          
          {/* Using flexbox to layout inner elements of the card horizontally */}
          <div className="flex space-x-2 ">
            <div>
              {/*Card: active label. Label indicating whether the event is active ("Tracking") or inactive. The background color changes based on the event's active status */}
              <div className={`flex items-center justify-center w-[80px] h-[30px] mt-2 ml-2 rounded-lg shadow-lg text-white  ${event.active ? 'bg-green-600' : 'bg-red-400'}`} >
                <p className="text-xs font-semibold">{event.active ? 'Tracking' : 'Inactive'}</p>
              </div>

              {/*Card: dynamic time. */}
              <div className={`flex items-center justify-center w-[80px] h-[30px] mt-2 ml-2 rounded-lg shadow-lg bg-white`}>
                <p className="text-xs font-semibold  bg-white text-black">{formatTime()}</p>
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
    const [filterActive, setFilterActive] = useState<boolean | null>(null);

    // Filtering the list of events based on the active status filter.
    const filteredEvents = filterActive !== null
        ? events.filter(event => event.active === filterActive)
        : events;

        return (
          <div style={{left: '50px', position: 'fixed', overflow: 'auto' }}>
              {/* Filter */}
              <div className="m-1 p-1 ml-0 rounded-lg shadow-md text-black" style={{ background: 'rgb(245, 206, 128)', width: '330px' }}>
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
              <div className="bg-gray-100 p-4 shadow-md " style={{ background: 'rgb(26, 97, 120)', height: 'calc(784px - 2.5rem)', overflowY: 'auto', width: '330px' }}>
                  {filteredEvents.map(event => (
                       <EventCard key={event.id} event={event} selectedEvent={selectedEvent} onEventSelect={onEventSelect}/>
                  ))}
              </div>
          </div>
      )
      
    
  // );
}

export default SidePanel;
