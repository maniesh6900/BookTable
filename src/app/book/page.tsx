"use client"
import axios from 'axios'
import { useState } from 'react';

export default function Home() {

 interface Booking {
    _id: number;
    date: string;
    time: string;
    guests: number;
    name: string;
    contact: string;
  }

  const backendUrl = "http://localhost:5000/api"

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    name: '',
    contact: ''
  });

  const [confirmation, setConfirmation] = useState<Booking>();
  const [conform, setConform] = useState("")
  

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post(`${backendUrl}/create/booking`,formData );
    setConfirmation(response.data.message);
    console.log(response.data.message);
    };

  const handleDelete = async (e: any) =>{
      e.preventDefault();
    const id =  confirmation?._id
    console.log(id);
    const response:any = await axios.post(`${backendUrl}/delete/booking`, id);
    setConform(response.data.message)
    console.log(response.data.message)
  }

  return (
    <div 
     className='h-full w-1/2 translate-x-1/2 '
    >
      <h1
        className='text-center font-bold p-20 text-5 text-5xl'
      >Restaurant Table Booking</h1>
      <form onSubmit={handleSubmit}
        className='flex flex-col gap-4 '
      >
        <div 
          className='flex'
        >
        <input type="date" name="date" value={formData.date} 
        onChange={handleChange} required placeholder='date'
        className='text-black w-full mr-1 rounded-sm px-1'
        />

        <input type="time" name="time" value={formData.time}
         onChange={handleChange} required placeholder='time' 
         className='text-black w-full mr-1 rounded-sm px-1'
         />
         </div>
        <input type="number" name="guests" value={formData.guests} 
        onChange={handleChange} required placeholder="Number of Guests"
          className='text-black rounded-sm px-1'
        />
        <input type="text" name="name" value={formData.name} 
        onChange={handleChange} required placeholder="Name"
        className='text-black rounded-sm px-1'
        
        />
        <input type="text" name="contact" value={formData.contact} 
        onChange={handleChange} required placeholder="Number/Email"
        className='text-black rounded-sm px-1'

        />
        <button type="submit"
        className='bg-blue-500 w-24 h-10 mb-4 transform-x-1/2 rounded-lg'
        >Book</button>
      </form>
      
      <div 
        className='bg-white text-black p-10 '
      >
        {
          confirmation && (
            <>
            <p className='text-green-600 font-bold' >Sucessfully booked place for you and your guests
            thanks for using our service.

            </p>
            <div className='font-bold'>Guests : {confirmation?.guests}</div>
            <div className='font-bold'>Time : {confirmation?.time}</div>
            <div className='font-bold'>Date : {confirmation?.date}</div>
            <div className='font-bold'>Name : {confirmation?.name}</div>
            <div className='font-bold'>Contact : {confirmation?.contact}</div>
            </>
          ) 
        }
      </div>

      <button 
        type='button'
        onClick={handleDelete}
        className="my-4 bg-blue-500 p-2 rounded-lg"
      >
        Delete Slot
      </button>

      {conform && (<p>deleted your Booking</p>)}

  </div>

  );
}
