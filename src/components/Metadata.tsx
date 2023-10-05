"use client"

import {Event, Trial, Activity} from "@/app/utils/types";
import React from "react";

type MetadataProps = {
    event: Event,
}

// showing metadata details (relavent details from trial and activity) on the main page once user choose a event from side-panel
export default function Metadata ({ event}: MetadataProps) {
    return (
        <div className="inline-flex flex-col items-start gap-3 h-72 relative">
            <div className="pb-1/3">  {/* Maintain the aspect ratio */}
                <div className="bg-white rounded-[15px] h-[150px] w-[1000px] relative"> 
                    <div className="relative top-[12px] left-[12px] w-[462px] text-black font-extrabold text-[18px] leading-normal tracking-normal font-inter">
                        {`Trial id: ${event.trialID}`} {/*display trial id*/}
                        <br />
                        {`Activity id: ${event.activityID}`} {/*display activity id*/}
                        <br />
                        {`Event id: ${event.id}`} {/*display event id*/}
                        <br />
                        {`Unit: ${event.unit}`} {/*display the associated clinical trial unit name*/}
                        {/*add more detials if users recommend*/}
                    </div>
                </div>
            </div>
        </div>
    );
};


