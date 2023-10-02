import React from "react";
import {Event, Trial, Activity} from "@/app/utils/types";

type EventDetailProps = {
    event: Event,
    // trial: Trial,
    // activity: Activity
}

export default function EventDetail({ event}: EventDetailProps) {
    return (
        <div className="h-[200px] w-[486px]">
            <div className="h-[200px] w-[488px] relative left-[400px]">
                <div className="bg-[#254985] rounded-[15px] h-[200px] w-[486px] relative">
                    <div className="absolute top-[12px] left-[12px] w-[462px] text-white font-extrabold text-[24px] leading-normal tracking-normal font-inter">
                        {`Trial: ${event.trialName}`}
                        <br />
                        {`Stage: ${event.stage}`}
                        <br />
                        {`Activity: ${event.activityName}`}
                    </div>
                </div>
            </div>
        </div>
    );
};



