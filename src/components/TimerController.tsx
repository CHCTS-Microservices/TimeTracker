import React, { useState, useEffect } from 'react';

function TimerController() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState('Stop');

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
        setStatus('Stop');
    }

    useEffect(() => {
        let interval = null;
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
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);

        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    }

    return (
        <div className="time-controller">
            <div className="time">{formatTime()}</div>
            <div className={`status ${status}`}>{status}</div>
            <div className="row">
                <button className={`button button-start ${status === 'Stop' ? 'button-disabled' : ''}`} disabled={status === 'Stop'} onClick={toggle}>
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
