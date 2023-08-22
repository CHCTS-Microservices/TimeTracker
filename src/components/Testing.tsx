"use client";

import { useState } from "react";

export default function Testing() {
  const [count, setCount] = useState<number>(0);

  // function test (){
  //     console.log('this works yay!!');
  //     // number = (number + 10 ) %20;
  // }

  return (
    <div>
      <div className="pb-5">
        <h1 className="text-emerald-600 text-center align-middle text-9xl">
          ohh a Number: {count}
        </h1>
      </div>

      <div className="bg-purple-800 w-40 h-auto align-middle mx-auto hover:bg-yellow-400">
        <button
          className="text-red-600 hover:text-white"
          onClick={() => setCount((count + 10) % 40)}
        >
          What does this button do??
        </button>
      </div>
    </div>
  );
}
