"use client";

import { useState } from "react";
import  * as Struct from '@/app/utils/types';
import API from '../app/utils/supabase';
import SidePanel from './SidePanel';
import supabase from '../../supabase';


// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://mqsvuplppswdwhybeeqq.supabase.co';
// // const supabaseKey = process.env.SUPABASE_KEY;
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xc3Z1cGxwcHN3ZHdoeWJlZXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMDY2NjIsImV4cCI6MjAxMDY4MjY2Mn0.7S9S1mWsIJb2Dv9X5Twehy56mO0LffLB_Y5kPsY1pcs';
// const supabase = createClient(supabaseUrl, supabaseKey);

export default function  Testing(user : Struct.User) {
  const test = new API();
  const [count, setCount] = useState<number>(0);
  const dummyEvent : Struct.Event[] = Struct.dummyEvent;
  const tt = async () =>{
    try{
      console.log('ii');
        // let { yello : any , error } = await supabase.from('Activity').select('*');
        

        let { data, error } = await supabase.from('Activity').select('title');
      

        console.log(data);
        // console.log(error);
    }
    catch{
      console.log('fffff');
    }
    
    
  };
  // let a : Struct.User = {
  //   id : 123,
  //   name : 'Fran',
  //   role : 'Test'
  // }

  // function test (){
  //     console.log('this works yay!!');
  //     // number = (number + 10 ) %20;


  function LogEvent(){
    console.log(count)
    console.log(dummyEvent[count]);
    console.log(Struct.timeCalc(dummyEvent[count]));

  }
  // }
  //@ts-ignore
  async function testo(){
    
    // console.log(await supabase.from('Activity').select('*'));
    // console.log(d);

    // console.log(supabaseUrl);
    // console.log(supabaseKey);
    // console.log(process.env);
    tt();
    // let { yello : any, error } = await supabase.from('Activity').select('*');
    // console.log(yello);
    test.create();
  }





  return (
    <div>
      <div className="pb-5 flex">
        <h1 className="text-emerald-600 text-center align-middle text-9xl">
          ohh a Number: {count}
        </h1>
        <h1 className="text-emerald-600 text-center align-middle text-9xl">
           Hello, {user.name} ! 
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
