// Main Page
import  EventDetail  from "@/components/EventDetail";
import Metadata from "@/components/Metadata";
import Box from "@/components/Metadata";
// This is the main page. Make and Import components in /Components/x and setup the how the dashboard page works here. To play with layout use layout.tsx file

// dummy data based on types structure provided i ./utils.types
// use for displaying main page at the momemnt
const dummyTimeMultiple = [
    {
        start: new Date(new Date().setHours(10, 0, 0, 0)), // Today at 10:00 AM
        end: new Date(new Date().setHours(11, 30, 0, 0))   // Today at 11:30 AM
    },
    {
        start: new Date(new Date().setHours(14, 0, 0, 0)), // Today at 2:00 PM
        end: new Date(new Date().setHours(15, 30, 0, 0))   // Today at 3:30 PM
    }
];

const dummyEvent = {
    id: 999,
    userID: 1,
    date: new Date(),
    title: "Dummy Event",
    trialID: 99,
    activityID: 99,
    time: dummyTimeMultiple,
    active: true,
    totalTime: 60,
    notes: "This is a dummy event for demonstration purposes."
}

const dummyTrial = {
    id: 99,
    users: [1, 2],
    date: new Date(),
    title: "Dummy Trial",
    unit: "Dummy Unit",
    Stage: "Dummy Stage",
    activities: [99],
    totalTime: 60,
    metadata: "Dummy metadata."
}

const dummyActivity = {
    id: 99,
    users: [1, 2],
    date: new Date(),
    title: "Dummy Activity",
    unit: "Dummy Unit",
    totalTime: 60,
    metadata: "Dummy metadata."
}


export default async function Page() {
    // Assume these variables are supposed to come from some data source.
    let someEvent = null;      // replace with real data when available
    let relatedTrial = null;   // replace with real data when available
    let relatedActivity = null;// replace with real data when available

    // Use dummy data if real data is not available
    someEvent = someEvent || dummyEvent;
    relatedTrial = relatedTrial || dummyTrial;
    relatedActivity = relatedActivity || dummyActivity;

    return (
        <>
            <h1 className="text-red-500 text-center align-middle">
                THIS HERE IS MAIN PAGE
            </h1>
            <div>
            </div>

        </>
    );
}