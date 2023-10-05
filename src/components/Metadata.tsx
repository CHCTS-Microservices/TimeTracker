"use client"

import {Event, Trial, Activity} from "@/app/utils/types";
import React from "react";

type MetadataProps = {
    event: Event,
}


export default function Metadata ({ event}: MetadataProps) {
    return (
        <div className="inline-flex flex-col items-start gap-3 h-72 relative">
            <div className="pb-1/3">  {/* Maintain the aspect ratio */}
                <div className="bg-white rounded-[15px] h-[150px] w-[1000px] relative"> 
                    <div className="relative top-[12px] left-[12px] w-[462px] text-black font-extrabold text-[18px] leading-normal tracking-normal font-inter">
                        {`Trial id: ${event.trialID}`}
                        <br />
                        {`Activity id: ${event.activityID}`}
                        <br />
                        {`Event id: ${event.id}`}
                        <br />
                        {`Unit: ${event.unit}`}
                        {/* <br />
                        {`Activity: ${event.activityName}`} */}
                    </div>
                </div>
            </div>
        </div>
    );
};


