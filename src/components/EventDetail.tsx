import React from "react";
import {Event, Trial, Activity} from "@/app/utils/types";

type EventDetailProps = {
    event: Event,
}
// showing event details on the main page once user choose a event from side-panel
export default function EventDetail({ event}: EventDetailProps) {
    return (
        <div className="items-start gap-3 relative">
            <div className="pb-1/3">  {/* Maintain the aspect ratio */}
                <div className="ml-3 text-3xl font-bold text-black">
                    Trail Information:
                </div>
                <div className="bg-[#254985] rounded-[15px] h-[160px] w-[380px] ml-0 flex items-center"> 
                    <div className="relative left-[12px] w-[478px] text-white font-extrabold text-2xl leading-normal tracking-normal font-inter truncate">
                        {`Trial: ${event.trialName}`} {/*display trial name*/}
                        <br />
                        {`Stage: ${event.stage}`} {/*display current stage of trial*/}
                        <br />
                        {`Activity: ${event.activityName}`} {/*display current activity*/}
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};


