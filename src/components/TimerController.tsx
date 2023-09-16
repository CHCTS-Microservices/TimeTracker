'use client'
import React, { useState, useEffect } from 'react';

function TimerController() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState('Stop');

    function toggle() {
        console.log('yello');
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
        setStatus('Stop');
    }

    
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
            <div className="time">{formatTime()}</div>
            <div className={`status ${status}`}>{status}</div>
            <div className="row">
                {/* <button className={`bg-blue-100 button button-start ${status === 'Stop' ? 'button-disabled' : ''}`} disabled={status === 'Stop'} onClick={toggle}> */}
                <button className='bg-blue-500' onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button button-stop" onClick={reset}>
                    Stop
                </button>
            </div>
        </div>
    );
}

export default TimerController;
