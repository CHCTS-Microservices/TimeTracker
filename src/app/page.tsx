import Image from 'next/image'
import Test from '@/components/Testing'



export default function Home() {



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
