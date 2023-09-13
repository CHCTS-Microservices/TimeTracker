// Type rules defined here -> globally accessable
export type Event = {
    id : number;
    userID : number;
    date? : Date;
    title? : string; //* no needed i think
    trialID : number; 
    activityID : number;
    timeLine? : Time[];
    active? : boolean;
    totalTime? : number;
    notes : string
}

export type Trial = {
    id: number;
    users? : [number];
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
    users? : [number];
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

const dummyEvent : Event[] = [
    {
    id: 1,
    userID: 1,
    trialID: 2,
    activityID: 2,
    date : new Date(2023, 9, 8, 8, 10, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 8, 8, 10, 42, 11),
            end : new Date(2023, 9, 8, 9, 10, 42, 11)   
        },
        {
            start : new Date(2023, 9, 8, 12, 10, 42, 11),
            end : new Date(2023, 9, 8, 16, 10, 42, 11)   
        },
    ],
    notes: "24 hour"
  }, {
    id: 2,
    userID: 1,
    trialID: 3,
    activityID: 1,
    date : new Date(2023, 9, 8, 9, 20, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 8, 9, 20, 42, 11),
            end : new Date(2023, 9, 8, 12, 10, 42, 11)   
        }
    ],
    notes: "algorithm"
  }, {
    id: 3,
    userID: 1,
    trialID: 4,
    activityID: 2,
    date : new Date(2023, 9, 9, 9, 20, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 9, 9, 20, 42, 11),
            end : new Date(2023, 9, 9, 12, 10, 42, 11)   
        }
    ],
    notes: "Focused"
  }, {
    id: 4,
    userID: 1,
    trialID: 1,
    activityID: 1,
    date : new Date(2023, 9, 9, 8, 10, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 9, 8, 10, 42, 11),
            end : new Date(2023, 9, 9, 9, 10, 42, 11)   
        },
        {
            start : new Date(2023, 9, 9, 12, 10, 42, 11),
            end : new Date(2023, 9, 9, 16, 10, 42, 11)   
        },
    ],
    notes: "pricing structure"
  }, {
    id: 5,
    userID: 1,
    trialID: 2,
    activityID: 2,
    date : new Date(2023, 9, 10, 8, 10, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 10, 8, 10, 42, 11),
            end : new Date(2023, 9, 10, 9, 10, 42, 11)   
        },
        {
            start : new Date(2023, 9, 10, 12, 10, 42, 11),
            end : new Date(2023, 9, 10, 16, 10, 42, 11)   
        },
    ],
    notes: "budgetary management"
  }, {
    id: 6,
    userID: 1,
    trialID: 3,
    activityID: 1,
    date : new Date(2023, 9, 10, 9, 20, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 10, 9, 20, 42, 11),
            end : new Date(2023, 9, 10, 12, 10, 42, 11)   
        }
    ],
    notes: "adapter"
  }, {
    id: 7,
    userID: 1,
    trialID: 4,
    activityID: 2,
    date : new Date(2023, 9, 11, 9, 20, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 11, 9, 20, 42, 11),
            end : new Date(2023, 9, 11, 12, 10, 42, 11)   
        }
    ],
    notes: "Customizable"
  }, {
    id: 8,
    userID: 1,
    trialID: 1,
    activityID: 1,
    date : new Date(2023, 9, 11, 8, 10, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 11, 8, 10, 42, 11),
            end : new Date(2023, 9, 11, 9, 10, 42, 11)   
        },
        {
            start : new Date(2023, 9, 11, 12, 10, 42, 11),
            end : new Date(2023, 9, 11, 16, 10, 42, 11)   
        },
    ],
    notes: "artificial intelligence"
  }, {
    id: 9,
    userID: 1,
    trialID: 2,
    activityID: 2,
    date : new Date(2023, 9, 12, 8, 10, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 12, 8, 10, 42, 11),
            end : new Date(2023, 9, 12, 9, 10, 42, 11)   
        },
        {
            start : new Date(2023, 9, 12, 12, 10, 42, 11),
            end : new Date(2023, 9, 12, 16, 10, 42, 11)   
        },
    ],
    notes: "local area network"
  }, {
    id: 10,
    userID: 1,
    trialID: 3,
    activityID: 1,
    date : new Date(2023, 9, 12, 9, 20, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 12, 9, 20, 42, 11),
            end : new Date(2023, 9, 12, 12, 10, 42, 11)   
        },
        {
            start : new Date(2023, 9, 12, 12, 10, 42, 11),
            end : new Date(2023, 9, 12, 16, 10, 42, 11)   
        },
    ],
    notes: "knowledge user"
  }];

  export {dummyEvent};
