import React from "react";
import {Event, Trial, Activity} from "@/app/utils/types";

type EventDetailProps = {
    event: Event,
}
// showing event details on the main page once user choose a event from side-panel
export default function EventDetail({ event}: EventDetailProps) {
    return (
        <div className="inline-flex flex-col items-start gap-3 relative">
            <div className="pb-1/3">  {/* Maintain the aspect ratio */}
                <div className="bg-[#254985] rounded-[15px] h-[135px] w-[380px] ml-0"> 
                    <div className="relative top-[12px] left-[12px] w-[478px] text-white font-extrabold text-[24px] leading-normal tracking-normal font-inter truncate">
                        {`Trial: ${event.trialName}`} {/*display trial name*/}
                        <br />
                        {`Stage: ${event.stage}`} {/*display current stage of trial*/}
                        <br />
                        {`Activity: ${event.activityName}`} {/*display current activity*/}
                    </div>
                </div>
            </div>
        </div>
    );
};


