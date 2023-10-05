import React from "react";
import {Event, Trial, Activity} from "@/app/utils/types";

type EventDetailProps = {
    event: Event,
}

export default function EventDetail({ event}: EventDetailProps) {
    return (
        <div className="inline-flex flex-col items-start gap-3 relative">
            <div className="pb-1/3">  {/* Maintain the aspect ratio */}
                <div className="bg-[#254985] rounded-[15px] h-[200px] w-[490px] relative "> 
                    <div className="relative top-[12px] left-[12px] w-[478px] text-white font-extrabold text-[24px] leading-normal tracking-normal font-inter">
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


// import React from "react";
// import { Event, Trial, Activity } from "@/app/utils/types";

// type EventDetailProps = {
//     event: Event,
// }

// export default function EventDetail({ event }: EventDetailProps) {
//     return (
//         <div className="relative w-1/3">
//             <div className="pb-1/3"></div>  {/* Maintain the aspect ratio */}
//                 <div className="absolute inset-0 bg-[#254985] rounded-[3vw]">
//                     <div className="p-[2vw] text-white font-bold text-[2vw] font-inter">
//                         {`Trial: ${event.trialName}`}
//                         <br />
//                         {`Stage: ${event.stage}`}
//                         <br />
//                         {`Activity: ${event.activityName}`}
//                     </div>
//                 </div>
//             </div>

//     );
// }

