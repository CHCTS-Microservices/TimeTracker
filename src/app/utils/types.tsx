// Type rules defined here -> globally accessable
export type Event = {
    id : number;
    userID : number;
    date : Date;
    title? : string; //* no needed i think
    trialID : number; 
    activityID : number;
    timeLine : Time[];
    active : boolean;
    totalTime : number;
    notes : string
}

export type Trial = {
    id: number;
    staffID : number[];
    date : Date;
    title : string;
    unit : string; // this will need to be an enum
    Stage : string; // this will need to be an enum
    activities : number[];
    totalTime? : number;
}

export type Activity = {
    id: number;
    staffID : number[];
    date : Date;
    title : string;
    unit : string; // this will need to be an enum
    totalTime? : number;

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
    notes: "24 hour",
    active : false,
    totalTime : 5
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
    notes: "algorithm",
    active : false,
    totalTime : 3
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
    notes: "Focused",
    active : false,
    totalTime : 3
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
    notes: "pricing structure",
    active : false,
    totalTime : 5
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
    notes: "budgetary management",
    active : false,
    totalTime : 5
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
    notes: "adapter",
    active : false,
    totalTime : 3
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
    notes: "Customizable",
    active : false,
    totalTime : 3
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
    notes: "artificial intelligence",
    active : false,
    totalTime : 5
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
    notes: "local area network",
    active : false,
    totalTime : 5
  }, {
    id: 10,
    userID: 1,
    trialID: 3,
    activityID: 1,
    date : new Date(2023, 9, 12, 9, 20, 42, 11),
    timeLine : [
        {
            start : new Date(2023, 9, 12, 9, 20, 42, 11),
            end : new Date(2023, 9, 12, 16, 10, 42, 11)   
        },
    ],
    notes: "knowledge user",
    active : false,
    totalTime : 7
  }];

  const dummyTrial : Trial[] = [
    {
        id : 1,
        date : new Date("2023-06-16"),
        title : "Meclizine Hydrochloride",
        unit : "Cardiology",
        Stage : "Start-Up",
        activities : [0,1],
        staffID : [1]
    },
    {
        id : 2,
        date : new Date("2023-06-16"),
        title : "Isoniazid",
        unit : "Critical Care",
        Stage : "Start-Up",
        activities : [0,1],
        staffID : [1]
    },
    {
        id : 3,
        date : new Date("2023-06-16"),
        title : "Hydrochlorothiazide ",
        unit : "Haematology",
        Stage : "Start-Up",
        activities : [0,1],
        staffID : [1]
    },
  ];

  const dummyActivity : Activity[] = [
    {
        id : 1,
        title : "Research",
        unit : "All",
        staffID: [1],
        date: new Date("2023-06-16")
    },
    {
        id : 2,
        title : "Testing",
        unit : "All",
        staffID: [1],
        date: new Date("2023-06-16")
    }
  ];
  export {dummyEvent, dummyTrial, dummyActivity};
