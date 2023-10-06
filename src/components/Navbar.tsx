import Link from 'next/link';
import { type } from 'os';
import * as React from 'react';

type NavProps = {
  title: string
}


export default function NavBar(props: NavProps) {

    let title = props.title;
    

  return (
    <div className='w-full h-20 flex  bg-blue-gray-500'>
        <div className='my-auto mx-32' >
        <Link className='text-4xl' href="/">{title}</Link>
        </div>
        {/* Implement different color on active/focus state  */}
        <div className='my-auto flex flex-row ml-auto mr-44  justify-end'>
            <Link className='mx-5' href="/main">Main</Link>
            <Link className='mx-5' href="/calendar">Calendar</Link>
            <Link className='mx-5' href="/statistics">Satistics?</Link>
        </div>
    </div>
  );
}