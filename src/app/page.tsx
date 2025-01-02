
import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className='h-screen w-full text-center p-10 translate-y-1/2 '>
      <h1
        className='text-4xl font-bold'     
        >Welcome to the this site</h1>
      <Link 
      className='text-blue-500 hover:underline my-10'
      href="/book">
        book your appointment
      </Link><br />
      <Link 
      className='text-blue-500 hover:underline my-10'
      href="/getallbookings">
        check booked Dates
      </Link>

    </div>
      
    </>
  )
}

export default page