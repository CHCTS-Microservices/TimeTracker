
"use client"
import TimerController from "@/components/TimerController";
import  {Event, Time} from '@/app/utils/types'
import SidePanel from '@/components/SidePanel';
import API from '@/app/utils/ServiceLayer';
import { useEffect, useState } from "react";
import NoteEditor from '@/components/NoteEditor';

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
    //    setSelectedEvent(events[0]);
 
    }

  
 
    useEffect(() => {
        getEvents();
    }, []);

    // Handler function to update the selectedEvent state 
    // when an event is selected from the side panel
    function handleEventSelect(event: Event) {
        setSelectedEvent(event);
    }

    function toggleActive() {
        
        if (selectedEvent?.active) // if true that means its recording
        {
            selectedEvent.timeLine[selectedEvent.timeLine.length -1].end = new Date();
        }
        else
        {
            let x : Time = {start : new Date(), end : null};
            selectedEvent?.timeLine.push(x);

        }
        // selectedEvent?.track = 0;
        
        selectedEvent.active = !selectedEvent.active;
        console.log(selectedEvent);
        
        console.log(selectedEvent?.active);
        setEvents((prevE) =>
        prevE.map((eve) =>
        eve.id === selectedEvent.id ? { ...selectedEvent } : eve));
        
    }
    // fucntion updateTrack(){

    // }
   
   
    // function testo ()
    // {
    //    console.log('rip');
    //    toggleActive();
    // }
        
        
     // funtion to that saves notes. 
    //TODO link this funtion up with the back-end save for permenent save
    function saveNotes (newNote : String){
        selectedEvent.notes = newNote;
        setEvents((prevE) =>
        prevE.map((eve) =>
        eve.id === selectedEvent.id ? { ...selectedEvent } : eve));
    }

    useEffect(() => {
        // When the component is mounted, set the overflow to 'hidden' on the body element
        document.body.style.overflow = 'hidden';
    
        // When the component will unmount, reset the overflow back to 'auto'
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (selectedEvent != null)
    {
        return (
            <>
                <div className="p-4 flex space-x-4 ml-10">
                    {/* Left 1/3 */}
                    <div className="w-4/9">
                        {/* Button */}
                        <button 
                            className="w-[330px] h-[75px] mt-4 bg-blue-500 text-2xl flex-grow text-white rounded animate-none"
                            
                        >
                            Create Event
                        </button>
                        {/* Sidebar */}
                        <div className="">
                        <SidePanel events={events} selectedEvent={selectedEvent} onEventSelect={handleEventSelect}/>
                        </div>
                    </div>
        
                    {/* Right 2/3 */}
                    <div className="flex-grow mr-5">

                        <div className="bg-[#fbd48c] p-4 shadow-md overflow-y-auto overflow-x-auto h-[calc(100vh-140px)] w-2/7 mr-10">
                            {/* First Element - 25% */}
                            <div className="flex items-center rounded-lg p-4 h-1/4">
                                {/* First Sub-Element */}
                                <div className="bg-244982 text-4xl text-black" >
                                    {/* Joseph's work here */}
                                    <p>{selectedEvent ? selectedEvent.trialName : "No Event Selected"}</p>
                                </div>
                                {/* Second Sub-Element */}
                                <div className="flex items-center ml-auto mr-5">
                                <TimerController event={selectedEvent} setActive={toggleActive}/>
                                </div>
                            </div>
                            {/* Second Element - 25% */}
                            <div  className="h-1/4">
                                    
                            </div>
                             {/* Third Element - 35% */}
                            <div className="h-7/20">
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
                <div className="p-4 flex space-x-0 ml-20">
                    {/* Left 1/3 */}
                    <div className="w-1/3">
                        {/* Button */}
                        <button 
                            className="w-[330px] h-[75px] mt-4 bg-blue-500 text-2xl flex-grow text-white rounded animate-none"
                        
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
