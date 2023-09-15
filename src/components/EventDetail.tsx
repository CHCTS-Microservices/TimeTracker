import React from "react";
import "./style.css";
import {Event, Trial, Activity} from "../app/utils/types";

type EventDetailProps = {
    event: Event,
    trial: Trial,
    activity: Activity
}

export default function EventDetail({ event, trial, activity }: EventDetailProps) {
    return (
        <div className="eventdetail">
            <div className="trial-info-form">
                <div className="overlap-group">
                    <div className="trial-name-stage">
                        {`Trial: ${trial.title}`}
                        <br />
                        {`Stage: ${trial.Stage}`}
                        <br />
                        {`Activity: ${activity.title}`}
                    </div>
                </div>
            </div>
        </div>
    );
};



