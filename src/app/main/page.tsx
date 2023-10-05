
"use client"
import TimerController from "@/components/TimerController";
import  {Event} from '@/app/utils/types'
import SidePanel from '@/components/SidePanel';
import API from '@/app/utils/ServiceLayer';
import { useEffect, useState } from "react";
import NoteEditor from '@/components/NoteEditor';
import EventDetail from "@/components/EventDetail";
import Metadata  from "@/components/Metadata";

export default function Page() {

    const dataBase = new API();
    const userID : number = 1;

    const [events, setEvents] = useState<Event[]>([]);

    // Setting up a state to track which event has been selected by the user
    // Initially set to null, meaning no event is selected at the start
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    
    async function getEvents()
    {
       const events : Event[] = await dataBase.startUp(userID);
       setEvents(events);

    }

    useEffect(() => {
        getEvents();
    }, []);

    // Handler function to update the selectedEvent state 
    // when an event is selected from the side panel
    function handleEventSelect(event: Event) {
        setSelectedEvent(event);
    }


    // funtion to that saves notes. 
    //TODO link this funtion up with the back-end save for permenent save
    function saveNotes (newNote : String){
        selectedEvent.notes = newNote;
        setEvents((prevE) =>
        prevE.map((eve) =>
        eve.id === selectedEvent.id ? { ...selectedEvent } : eve));
    }

    if (selectedEvent != null)
    {
        return (
            <>
                <div className="p-4 flex">
                    {/* Left 1/3 */}
                    <div className="w-1/3">
                        {/* Button */}
                        <button 
                            className="w-80 h-20 mt-4 ml-8 bg-blue-500 text-2xl flex-grow text-white rounded"
                            
                            style={{ 
                                width: '330px', 
                                height: '75px', 
                                animationDuration: '0ms'
                            }}
                        >
                            Create Event
                        </button>
                        {/* Sidebar */}
                        <div className="">
                        <SidePanel events={events} selectedEvent={selectedEvent} onEventSelect={handleEventSelect}/>
                        </div>
                    </div>
        
                    {/* Right 2/3 */}
                    <div className="w-2/3 ml-10">
                        {/* Form - Tracking */}
                        <div 
                            className="gap-2.5 flex flex-col justify-between font-bold p-4 rounded-lg"
                            style={{ 
                                width: '1020px', 
                                height: '889px',
                                backgroundColor: '#fbd48c',
                                fontFamily: 'Arial'
                            }}
                        >
                            {/* First Element - 25% */}
                            <div className="flex justify-between items-center rounded-lg p-4" style={{ height: '25%'}}>
                                {/* First Sub-Element */}
                                <div className="bg-244982 text-4xl text-black" >
                                    {/* Joseph's work here
                                    <p>{selectedEvent ? selectedEvent.trialName : "No Event Selected"}</p> */}
                                    <EventDetail event={selectedEvent}/>
                                    {/* <Metadata event={selectedEvent}/> */}
                                </div>
                                {/* Second Sub-Element */}
                                <div className="flex justify-between items-center" style={{width: '40%'}}>
                                    <TimerController event={selectedEvent}/>
                                </div>
                            </div>
                            {/* Second Element - 25% */}
                            <div  style={{ height: '25%'}}>
                                <Metadata event={selectedEvent}/>
                                    
                            </div>
                             {/* Third Element - 35% */}
                            <div style={{ height: '35%' }}>
                                <NoteEditor event={selectedEvent} saveNote={saveNotes}/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="p-4 flex">
                    {/* Left 1/3 */}
                    <div className="w-1/3">
                        {/* Button */}
                        <button 
                            className="w-80 h-20 mt-4 ml-8 bg-blue-500 text-2xl flex-grow text-white rounded"
                            
                            style={{ 
                                width: '330px', 
                                height: '75px', 
                                animationDuration: '0ms'
                            }}
                        >
                            Create Event
                        </button>
                        {/* Sidebar */}
                        <div className="">
                        <SidePanel events={events} selectedEvent={selectedEvent} onEventSelect={handleEventSelect}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
        
        
    
}
