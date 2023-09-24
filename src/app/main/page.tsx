
"use client"
import TimerController from "@/components/TimerController";
import  * as Struct from '@/app/utils/types'
import SidePanel from '@/components/SidePanel';
import API from '../utils/ServiceLayer';
import { useEffect, useState } from "react";

export default function Page() {

    const dataBase = new API();
    const userID : number = 1;

    const [events, setEvents] = useState<Struct.Event[]>([]);
    const [selectedEvent, setEvent] = useState<Struct.Event>();
    // const events : Struct.Event[] = await dataBase.startUp(1);
    // const selectedEvent : Struct.Event = events[0];

    async function getEvents()
    {
       const events : Struct.Event[] = await dataBase.startUp(userID);
       setEvents(events);
       setEvent(events[0]);
    }

    useEffect(() => {
        getEvents();
    }, []);
        
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
                        Create Activity
                    </button>
                    {/* Sidebar */}
                    <div className="">
                    <SidePanel events={events}/>
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
                                Joseph's work here
                            </div>
                            {/* Second Sub-Element */}
                            <div className="flex justify-between items-center" style={{width: '40%'}}>
                                <TimerController />
                            </div>
                        </div>
                        {/* Second Element - 25% */}
                        <div  style={{ height: '25%'}}>
                                
                        </div>
                        {/* Third Element - 25% */}
                        <textarea className="bg-white text-black p-4 rounded-lg" style={{ height: '34%'}}>Note</textarea>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
}
