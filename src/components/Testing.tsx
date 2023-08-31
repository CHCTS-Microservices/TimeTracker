"use client";

import { useState } from "react";
import  * as Struct from '@/app/utils/types';
import API from '../app/utils/cosmos';

export default function Testing(user : Struct.User) {
  const test = new API();
  const [count, setCount] = useState<number>(0);
  // let a : Struct.User = {
  //   id : 123,
  //   name : 'Francis',
  //   role : 'Test'
  // }

  // function test (){
  //     console.log('this works yay!!');
  //     // number = (number + 10 ) %20;
  // }
  function testo(){
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

      <div className="bg-purple-800 w-40 h-auto align-middle mx-auto flex hover:bg-yellow-400">
        <button
          className="text-red-600 hover:text-white"
          onClick={() => setCount((count + 10) % 40)}
        >
          What does this button do??
        </button>
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
