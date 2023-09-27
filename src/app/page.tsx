import Image from 'next/image'
import Test from '@/components/Testing'
import  * as Struct from '@/app/utils/types'
import SidePanel from '@/components/SidePanel';


export default function Home() {
  let a : Struct.User = {
    id : 123,
    name : 'Francis',
    role : 'Test'
  };

  const events : Struct.Event[] = Struct.dummyEvent;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      {/* <div> */}
        {/* need to fix this way */}
        <Test name={a.name} id={a.id} role={a.role}  /> 
      {/* </div> */}
      {/* <SidePanel events={events}/> */}
    </main>
  )
}
