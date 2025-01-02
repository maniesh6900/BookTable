'use client'
import axios from 'axios';
import React, { useState } from 'react'

function page() {
    
    const backendUrl = "http://localhost:5000/api"
    
        interface Booking {
            _id: number;
            date: string;
            time: string;
            guests: number;
            name: string;
            contact: string;
          }

    const [confirmation, setConfirmation] = useState<Booking[]>();

   async function handleClick(){
    const response :any = await axios.get(`${backendUrl}/allbookings`);
    setConfirmation(response.data.data);  
  }

  return (
    <>
    <div className='h-screen w-screen text-center'>

  

    <div 
        className='flex justify-center items-center  w-full'
    >
        <button type='button' onClick={handleClick} 
            className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
            text-center 
            '>get all booked date    
        </button>
    </div>

    <div>
  {
      confirmation &&
      confirmation.map((v :any)=> {
       return <div key={v._id} className="flex p-2 bg-white text-black ">
                <div className='font-bold mx-2'>Time : {v?.time}</div>
                <div className='font-bold'> Date : {v?.date}</div>
            </div>
      }
    )}  
    
    </div>
  </div>
</>
  )
}

export default page