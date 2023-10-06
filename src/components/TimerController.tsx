'use client'
import React, { useState, useEffect } from 'react';
import  * as Struct from '@/app/utils/types';


interface TimerControllerProps {
    event: Struct.Event | null;
    setActive: () => void;
  }

function TimerController({event, setActive} : TimerControllerProps) {
    // const [seconds, setSeconds] = useState(0);
    // const [seconds, setSeconds] = useState((Math.floor(event.totalTime / 1000))%60);
    const [seconds, setSeconds] = useState();
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState('Stop');

    function toggle() {
        console.log('to to ', event?.track);

        setActive();
        // toggle();
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
        setStatus('Stop');
    }

     // Need to use Effect on event so it refreshes the notes
     useEffect(() => {
        setIsActive(event.active);
        
       
        if (event.active)
        {
            setStatus('Pause');

            const start = new Date(event?.timeLine[event.timeLine.length -1].start);
            const now = new Date();
            const dur = (now.getTime()-start.getTime());
            // console.log('DUR', dur);
            setSeconds(Math.floor(((event.totalTime+dur) / 1000)));
            

        }
        else{
            setStatus('Stop');
            setSeconds(Math.floor(event.totalTime / 1000));
        }
      }, [event]);
  

    
    useEffect(() => {
        let interval : any = null;
        if (isActive) {
            setStatus('Tracking');
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
            setStatus('Pause');
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const formatTime = () => {
        const getSeconds = `0${(seconds % 60)}`.slice(-2);
        const minutes = `${Math.floor(seconds / 60)}`;
        const min = Math.floor(seconds / 60)
        const getMinutes = `0${min % 60}`.slice(-2);
        const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    }



    return (
    
        <div className="time-controller">
            <div className="flex items-center space-x-4">
                <div className="time p-2 bg-white text-black border rounded-md text-4xl w-[200px]">
                    {formatTime()}
                </div>
                <div className={`status p-2 text-white text-2xl rounded-md ${status === 'Tracking' ? 'bg-green-500' : status === 'Pause' ? 'bg-yellow-900' : 'bg-red-500'}`}>
                    {status}
                </div>
            </div>
            <div className="row">
                <button className={`bg-green-500 text-white text-2xl p-3 rounded-lg ${isActive ? 'bg-yellow-900' : ''}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                {/* <button className="bg-red-500 text-white p-4 rounded-lg" onClick={reset}>
                    Stop
                </button> */}
            </div>
        </div>
    );
}

export default TimerController;
