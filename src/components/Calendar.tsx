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
import { Trial } from "@/app/utils/types";

import API from '@/app/utils/ServiceLayer';

export default function Calendar() {

  const dataBase = new API();
  const userID : number = 1;

  const [events, setEvents] = useState<Event[]>([]);



  async function getEvents()
  {
     
     const fetchedEvents = await dataBase.getAllEvents(userID);
    if(fetchedEvents) {
      setEvents(fetchedEvents);
    } 


  }

  useEffect(() => {
      getEvents();
  }, []);

  function getColorByStage(stage: String): string {
    switch (stage) {
      case 'Start-Up':
        return 'lightcoral';
      case 'Setup':
        return 'lightblue';
      case 'Conduct':
        return 'lightsalmon';
      case 'Closeout':
          return 'lightgreen';
      default:
        return 'lightgray'; // default color
    }
  }
  
    const fullCalendarEvents = events.flatMap(event => {
        return event.timeLine.map(timeRange => {
          return {
            id: event.id ? event.id.toString() : "defaultId",
            title: event.activityName.toString(),
            start: timeRange.start,
            ...(timeRange.end !== null ? { end: timeRange.end } : {}),
            backgroundColor: getColorByStage(event.stage)
          };
        });
      });
      
      // Then use fullCalendarEvents when rendering FullCalendar.

    //console.log(fullCalendarEvents);

    return (
        <>
        <main className="flex flex-col items-center justify-between w-full">
        <div className="flex w-full">
              <div className="w-5/6 ">
                <FullCalendar
                height="80%"
                plugins={[
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin
                ]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
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
                <div className="ml-8 flex-shrink-0">
                  <h3>Stages Legend:</h3>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 mr-2 bg-red-300"></div> Start-Up
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 mr-2 bg-blue-200"></div> Setup
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 mr-2 bg-red-200"></div> Conduct
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 mr-2 bg-green-200"></div> Closeout
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 mr-2 bg-gray-300"></div> Default
                  </div>
                </div>
        </div>
        </main>
        </>
    )
    }