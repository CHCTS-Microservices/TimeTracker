// Type rules defined here -> globally accessable
export type Event={
    id : number;
    userID : number;
    date : Date;
    title : string;
    trialID : number;
    activityID : number;
    time : [Time];
    active : boolean;
    totalTime : number;
    notes : string
}

export type Trial = {
    id: number;
    users : [number];
    date : Date;
    title : string;
    unit : string; // this will need to be an enum
    Stage : string; // this will need to be an enum
    activities : [number];
    totalTime : number;
    metadata : string; // will need to be flushed out
}

export type Activity = {
    id: number;
    users : [number];
    date : Date;
    title : string;
    unit : string; // this will need to be an enum
    totalTime : number;
    metadata : string; // will need to be flushed out

}

export type Time = {
    start : Date;
    end : null | Date;
}

// will need to be flushed out
export type User = {
    name : string;
    id : number;
    role : string; // will need to be flushed out
}