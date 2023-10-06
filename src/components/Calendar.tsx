"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { EventSourceInput } from '@fullcalendar/core/index.js'
import { Event } from '@/app/utils/types'

import API from '@/app/utils/ServiceLayer';

export default function Calendar() {

  const dataBase = new API();
  const userID : number = 1;

  const [events, setEvents] = useState<Event[]>([]);

  
  async function getEvents()
  {
     const events : Event[] = await dataBase.startUp(userID);
     setEvents(events);

  }

  useEffect(() => {
      getEvents();
  }, []);

    const fullCalendarEvents = events.flatMap(event => {
        return event.timeLine.map(timeRange => {
          return {
            id: event.id.toString(),
            title: event.activityName.toString(),
            start: timeRange.start,
            ...(timeRange.end !== null ? { end: timeRange.end } : {})
           
          };
        });
      });
      
      // Then use fullCalendarEvents when rendering FullCalendar.

    //console.log(fullCalendarEvents);

    return (
        <>
        <main className="flex flex-col items-center justify-between w-full h-screen overflow-hidden">
            <div className="w-full h-full overflow-hidden">
                <FullCalendar
                plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin
                ]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'resourceTimelineWook, dayGridMonth,timeGridWeek,dayGridDay'
                  }}
                events={fullCalendarEvents}
                
                nowIndicator={true}
                editable={true}
                droppable={true}
                selectable={true}
                selectMirror={true}
                // dateClick={{}}
                // drop={}
                // eventClick={}
                />
                </div>
                
        </main>
        </>
    )
    }