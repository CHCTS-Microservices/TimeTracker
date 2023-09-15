import Image from 'next/image'
import Test from '@/components/Testing'
import  * as Struct from '@/app/utils/types'
import SidePanel from '@/components/SidePanel';
import EventDetail from '@/components/EventDetail';
import Box from '@/components/Metadata';

export default function Home() {
  let a : Struct.User = {
    id : 123,
    name : 'Francis',
    role : 'Test'
  };

  const events : Struct.Event[] = Struct.dummyEvent;
  const trials : Struct.Trial[] = Struct.dummyTrial;
  const activities : Struct.Activity[] = Struct.dummyActivity;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <div> */}
        {/* need to fix this way */}
        {/* <Test name={a.name} id={a.id} role={a.role}  />  */}
      {/* </div> */}

      {/* <div className="flex-container">
      <SidePanel events={events}/>
      <EventDetail event={events[0]} trial={trials[0]} activity={activities[0]} /> </div> */}
      <SidePanel events={events}/>
      <EventDetail event={events[0]} trial={trials[0]} activity={activities[0]} />
      {/* <Box metadata={activities[0].} /> */}
    </main>
  )
}