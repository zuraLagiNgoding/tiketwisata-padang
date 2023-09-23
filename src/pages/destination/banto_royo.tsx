import React from 'react'
import { destinationDetail } from "@/data/destination";
import { DashCircle, GeoAlt, GeoAltFill, PlusCircle } from 'react-bootstrap-icons';
import DatePicker from '@/components/Elements/DatePicker';
import Label from '@/components/Elements/Label';
import InputText from '@/components/Elements/InputText';
import Button from '@/components/Elements/Button';
import { useRouter } from 'next/router';

export default function Destination() {
  const router = useRouter()

  const [ ticketAmount, setTicketAmount ] = React.useState<number[]>([])


  return (
    <div className='flex flex-col gap-6 pt-28 pb-10 px-24'>
      <div className='flex flex-col bg-white rounded-lg gap-6 shadow-lg'>
        <div className='flex h-[75vh]'>
          <div 
            className='rounded-l-lg basis-1/3 bg-cover bg-center'
            style={{ backgroundImage: `url(${destinationDetail[1].image})`}}
          >
          </div>
          <div className='flex flex-col basis-2/3 p-6 2xl:p-9 gap-3 relative overflow-x-hidden'>
            <div className='basis-5/12 flex flex-col gap-2 overflow-hidden'>
              <div className='flex items-center justify-between pr-4'>
                <div>
                  <h1 className='text-xl 2xl:text-3xl font-semibold'>{destinationDetail[1].name}</h1>
                  <h1 className='text-base 2xl:text-xl flex gap-2 items-center'><GeoAltFill/>  Jl. Jalanan</h1>
                </div>
                <h1 className='text-xl font-semibold'>Buka</h1>
              </div>
              <p className='text-xs 2xl:text-base overflow-y-auto'>{destinationDetail[1].about}</p>
            </div>
            <div className='basis-6/12 flex grow p-3 items-center overflow-x-auto'>
              <div className='flex gap-6 grow h-full'>
                <div className='bg-gray-400 w-[20rem] 2xl:w-[30rem] h-full rounded-2xl'>
                </div>
                <div className='bg-gray-400 w-[20rem] 2xl:w-[30rem] h-full rounded-2xl'>
                </div>
                <div className='bg-gray-400 w-[20rem] 2xl:w-[30rem] h-full rounded-2xl'>
                </div>
              </div>
            </div>
            <div className='basis-1/12 flex flex-col gap-3'>
              <hr className='mt-auto'></hr>
              <div className='grid grid-cols-3 w-full '>
                <div className='flex flex-col text-center py-2'>
                  <h1 className='text-xs 2xl:text-base'>Jam Buka</h1>
                  <h1 className='text-base 2xl:text-xl font-semibold'>08:00</h1>
                </div>
                <div className='flex flex-col text-center py-2'>
                  <h1 className='text-xs 2xl:text-base'>Jam Tutup</h1>
                  <h1 className='text-base 2xl:text-xl font-semibold'>15:00</h1>
                </div>
                <div className='flex flex-col text-center py-2'>
                  <h1 className='text-xs 2xl:text-base'>Harga Tiket</h1>
                  <h1 className='text-base 2xl:text-xl font-semibold'>Rp 1.000.000</h1>
                </div>
              </div>
            </div>
          </div>
        </div>       
      </div>
      <div className='flex flex-col bg-white rounded-lg gap-4 px-12 pb-12 pt-6 shadow-lg'>
        <h1 className='text-3xl font-semibold mb-4'>Pesan Tiket</h1>
        <hr className=""></hr>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-4 basis-2/5'>
            <div className="flex flex-col gap-2">
              <Label name="Pilih Hari" className="text-lg font-semibold"/>
              <DatePicker className=""/>
            </div>
            <div className="flex flex-col gap-2">
              <Label name="Pilih Waktu" className="text-lg font-semibold"/>
              <DatePicker className=""/>
            </div>
            <div className="flex flex-col gap-4">
              <Label name="Jumlah Tiket" className="text-lg font-semibold"/>
              <div className="flex gap-2 items-center select-none px-3 2xl:px-4 pb-1.5">
                <DashCircle className="text-primary cursor-pointer" onClick={() => setTicketAmount(ticketAmount.slice(0, -1))}/>
                <h1>{ticketAmount.length}</h1>
                <PlusCircle className="text-primary cursor-pointer" onClick={() => setTicketAmount([...ticketAmount, ticketAmount.length = ticketAmount.length+1])}/>
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-col gap-4 mt-8">
              <Label name="Kode Promo" className="text-lg font-semibold"/>
              <InputText placeholder="Masukkan Kode Promo"/>
            </div>
            <div className="flex flex-col gap-4 w-full mt-6">
              <Button 
                className="bg-primary text-white w-1/3 2xl:w-1/4 ml-auto"
                onClick={() => router.push("/order")}
                text="Pesan Tiket"
                variant="filled"
              />
            </div>  
          </div>
          <div 
            className='basis-3/5'
          >
            <div className='w-full h-full bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url("/graphic_1.jpg")`}}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
