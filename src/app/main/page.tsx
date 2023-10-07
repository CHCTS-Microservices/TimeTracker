
"use client"
import TimerController from "@/components/TimerController";
import  {Event, Time} from '@/app/utils/types'
import SidePanel from '@/components/SidePanel';
import API from '@/app/utils/ServiceLayer';
import { useEffect, useState } from "react";
import NoteEditor from '@/components/NoteEditor';
import Delete from "@/components/DeleteEvent";
import EventDetail from "@/components/EventDetail";
import Metadata  from "@/components/Metadata";
import Create from "@/components/EventPopUp";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";

export default function Page() {

    const dataBase = new API();
    const userID : number = 1;
    const [showPopup, setShowPopup] = useState(false); 



    const [events, setEvents] = useState<Event[]>([]);

    // Setting up a state to track which event has been selected by the user
    // Initially set to null, meaning no event is selected at the start
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    
    async function getEvents()
    {
        const events : Event[] = await dataBase.startUp(userID) || [];
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


    async function toggleActive() {
        
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
        await dataBase.updateEvent(selectedEvent);
        
    }

        
        
     // funtion to that saves notes. 
    //TODO link this funtion up with the back-end save for permenent save
    async function saveNotes (newNote : String){
        selectedEvent.notes = newNote;
        setEvents((prevE) =>
        prevE.map((eve) =>
        eve.id === selectedEvent.id ? { ...selectedEvent } : eve));

        if (await dataBase.updateEvent(selectedEvent))
        {
            toast.success('Saved Notes', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            toast.error('Failed to save Notes', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }

    // funtion that deletes the event
    //TODO : TODO link this funtion up with the back-end to delete event. * we could create a new table that holds deleted events (after x days permanently delete it)
    async function deleteEvent()
    {
        if (await dataBase.deleteEvent(selectedEvent))
        {
            const updatedEvents = events.filter((event) => event.id !== selectedEvent?.id);
        setEvents(updatedEvents);
        setSelectedEvent(null);
        toast.success('Deleted Event', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
        else{
            toast.error('Failed to delete Event', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }

    }
        


    async function createEvent(event : Event){

        const newEvent : Event = await dataBase.createEvent(event);
        if (newEvent != null)
        {
            setEvents([...events, event]);
            setSelectedEvent(event);
    
            toast.success('Created Event', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            toast.error('Failed to Create Event', {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }

       

    }


    if (selectedEvent != null)
    {
        return (
            <>
                <div className="p-4 flex space-x-8 ml-10">
                <ToastContainer 
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
                    {/* Left 1/3 */}
                    <div className="w-4/9">
                        {/* Button */}

                        <Create database={dataBase} userID={userID} createEvent={createEvent}/>
                        {/* Sidebar */}
                        <div className="">
                            <SidePanel events={events} selectedEvent={selectedEvent} onEventSelect={handleEventSelect}/>
                        </div>
                    </div>
        
                    {/* Right 2/3 */}
                    <div className="flex-grow mr-5 mt-4">

                        <div className="flex flex-col bg-[#fbd48c] p-4 shadow-md overflow-y-auto overflow-x-auto h-[calc(100vh-140px)] w-2/7 mr-10 min-h-[680px]">
                            {/* First Element - 25% */}
                            <div className="flex items-center rounded-lg p-3 h-[150px] mt-10">
                                {/* First Sub-Element */}
                                <div className="bg-244982 text-4xl mr-[70px]" >
                                    <EventDetail event={selectedEvent}/>
                                </div>
                                
                                {/* Second Sub-Element */}
                                <div  className="flex-grow mt-20">
                                    <Metadata event={selectedEvent}/>
                                        
                                </div>

                                {/* Third Sub-Element */}
                                <div className="items-center ml-auto mr-5">
                                    <TimerController event={selectedEvent} setActive={toggleActive}/>
                                </div>
                            </div>

                            <div className="flex-grow">
                                {/* Third Element - 35% */}
                                <div className="h-7/20 mt-10 ml-4 flex-grow">
                                    <NoteEditor event={selectedEvent} saveNote={saveNotes}/>
                                </div>
                            </div>

                            {/* Delete button */}
                            <div className="mb-0 ml-5">
                                <Delete deleteEvent={deleteEvent}></Delete>
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
                <div className="p-4 space-x-0 ml-10">
                <ToastContainer 
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
                    {/* Left 1/3 */}
                    <div className="w-1/3">
                        {/* Button */}
                        <Create database={dataBase} userID={userID} createEvent={createEvent}/>
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
