import React from 'react'
import { destinationDetail } from "@/data/destination";
import { GeoAlt, GeoAltFill } from 'react-bootstrap-icons';

export default function Destination() {
  return (
    <div className='pt-28 pb-36 px-24'>
      <div className='flex flex-col bg-white rounded-3xl gap-6 pb-2'>
        <div className='flex h-[75vh]'>
          <div 
            className='rounded-l-3xl basis-1/3 bg-cover bg-center'
            style={{ backgroundImage: `url(${destinationDetail[1].image})`}}
          >
          </div>
          <div className='flex flex-col basis-2/3 p-9 gap-3'>
            <div>
              <h1 className='text-2xl font-semibold'>Cipondoh</h1>
              <h1 className='text-lg flex gap-2 items-center'><GeoAltFill/>  Jl. Jalanan</h1>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem accusantium officiis doloremque magni. Aperiam deleniti necessitatibus inventore unde voluptatibus blanditiis dicta ut voluptas repellendus maxime fugit, nisi repellat, veniam nam.</p>
          </div>
        </div>
        <hr></hr>
        <div className='grid grid-cols-4 w-full '>
          <div className='flex flex-col text-center py-2'>
            <h1>Jam Buka</h1>
            <h1 className='text-xl font-semibold'>08:00</h1>
          </div>
          <div className='flex flex-col text-center py-2'>
            <h1>Jam Tutup</h1>
            <h1 className='text-xl font-semibold'>15:00</h1>
          </div>
          <div className='flex flex-col text-center py-2'>
            <h1>Status</h1>
            <h1 className='text-xl font-semibold'>Buka</h1>
          </div>
          <div className='flex flex-col text-center py-2'>
            <h1>Harga Tiket</h1>
            <h1 className='text-xl font-semibold'>Rp 1.000.000</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
