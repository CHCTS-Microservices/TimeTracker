// funtion that calculates duration
import { Event, Duration } from "@/app/utils/types";

export function timeCalc(event : Event){
    event.totalTime = 0;

    if (event.timeLine)
    {
        event.timeLine.forEach((x) => {
        
            if (x.end != null)
            {
                const timeElap = new Date (x.end).getTime() - new Date (x.start).getTime()
                event.totalTime += timeElap
            }
        });
    }
    
    const totalSeconds = Math.floor(event.totalTime / 1000); // Convert milliseconds to seconds
    const dur : Duration = {
        hours : Math.floor(totalSeconds / 3600),
        minutes : Math.floor((totalSeconds % 3600) / 60),
        seconds : totalSeconds % 60

    };
    // console.log(`${dur.hours} hrs ${dur.minutes} min ${dur.seconds} sec`);
    return dur;

}
