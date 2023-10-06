"use client";

import { useState } from "react";
import {Event, User} from '@/app/utils/types';
import API from '../app/utils/ServiceLayer';
import SidePanel from './SidePanel';
import supabase from '../../supabase';
import test from "node:test";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://mqsvuplppswdwhybeeqq.supabase.co';
// // const supabaseKey = process.env.SUPABASE_KEY;
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xc3Z1cGxwcHN3ZHdoeWJlZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMDY2NjIsImV4cCI6MjAxMDY4MjY2Mn0.7S9S1mWsIJb2Dv9X5Twehy56mO0LffLB_Y5kPsY1pcs';
// const supabase = createClient(supabaseUrl, supabaseKey);

export default function  Testing() {
  const testl = new API();
  const [count, setCount] = useState<number>(0);
  // const dummyEvent : Event[] = dummyEvent;
  // const tt = async () =>{
  //   try{
  //     console.log('ii');
  //       // let { yello : any , error } = await supabase.from('Activity').select('*');
  //       let l : Event;
        

  //       let { data, error } = await supabase.from('Events').select(`id, userID, totalTime, timeLine, active, notes, Trials(id)`).eq('userID', '1');
      

  //       console.log(data);
  //       // console.log(error);
  //   }
  //   catch{
  //     console.log('fffff');
  //   }

    
    
  // };
  // let a : User = {
  //   id : 123,
  //   name : 'Fran',
  //   role : 'Test'
  // }

  // function test (){
  //     console.log('this works yay!!');
  //     // number = (number + 10 ) %20;


  function LogEvent(){
    // console.log(count)
    // console.log(dummyEvent[count]);
    // console.log(timeCalc(dummyEvent[count]));

  }
  
  async function testo(){
    const testl = new API();
    // console.log( await testl.getEvent(1));
    let dd : Event = {
    id:74,
    userID: 1,
    trialID: 2,
    trialName: "TESTING",
    stage : "Start-Up",
    activityID: 2,
    activityName: "asdfsadf",
    date : new Date ("2023-10-07"),
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
    notes: "Yellow",
    active : true,
    totalTime : 5
    };
    // console.log(dd.date);
    // console.log(await testl.getTrials(1));
    // console.log(dd.date.getDate() +'/' + dd.date.getMonth() + '/' + dd.date.getFullYear())
    // console.log(dd);
    // let ff : any = await testl.updateEvent(dd);
    // // let ff : any = await testl.deleteEvent(dd);
    // if (ff != null || ff!= undefined)
    // {
    //   toast.success('Created Event');
    // }
    
    // toast('ffff', {
    //   duration : 4000,
    //   position: 'top-center',
    // });
    // toast.success('Successfully toasted!');
    // console.log('hehe');
    // console.log(ff);
    // dd.notes = "uisahf sdkjlfh dsff";
    // console.log(await testl.deleteEvent(dd));
    
  
  }





  return (
    <div>
       <ToastContainer />
      <div className="pb-5 flex">
        <h1 className="text-emerald-600 text-center align-middle text-9xl">
          ohh a Number: {count}
        </h1>
        <h1 className="text-emerald-600 text-center align-middle text-9xl">
           Hello, ! 
        </h1>
        
      </div>


      <div className="bg-purple-800 w-40 h-auto align-middle mx-auto hover:bg-yellow-400">
        <button
          className="text-red-600 hover:text-white"
          onClick={() => setCount((count + 1) % 10)}
        >
          What does this button do??
        </button>

        
      
      </div>

      <div className="bg-amber-600 w-40 h-auto align-middle mx-auto hover:bg-orange-300">
        <button
          className="text-white hover:text-purple-500"
          onClick={testo}
        >
          heleo 
        </button>
      </div>

      <div >
     
      </div>
      <button
          className="text-yellow-400 hover:text-white"
          onClick={testo}
        >
          Yello
        </button>
    </div>
  );
}
