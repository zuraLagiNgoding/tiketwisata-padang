import Button from '@/components/Elements/Button'
import InputText from '@/components/Elements/InputText'
import Label from '@/components/Elements/Label'
import Select from '@/components/Elements/Select'
import React from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons'

export default function index() {
  return (
    <form className='flex flex-col pt-28 gap-6 pb-10'>
        <div className='flex items-center justify-between px-32 2xl:px-44'>
            <div>
                <h1 className='font-semibold text-[1.5rem] 2xl:text-3xl'>Pesan Tiket</h1>
                <h1 className='font-semibold text-gray-700 text-lg 2xl:text-xl'>Isi detail pemesanan anda</h1>
            </div>
            <div className="flex">
              <Button 
                className="bg-primary text-white"
                text="Lanjut Pemrosesan"
                icon={<ArrowRightCircle />}
                variant="filled"
              />
            </div>  
        </div>
        <div className='flex px-16 2xl:px-24 gap-6'>
            <div className='flex flex-col basis-3/5 gap-6'>
                <div className='bg-white rounded-lg px-12 pb-12 pt-6 shadow-lg'>
                    <h1 className="text-[1.5rem] 2xl:text-3xl font-semibold mb-4 2xl:mb-6">Informasi Anda</h1>
                    <div className='flex flex-col gap-3 mb-3'>
                        <div className="flex flex-col gap-2 2xl:gap-4">
                            <Label name="Nama Kontak" className="text-lg 2xl:text-xl font-semibold"/>
                            <InputText placeholder="Masukkan Nama Kontak"/>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="flex flex-col gap-2 2xl:gap-4 basis-1/2">
                            <Label name="Nomor HP" className="text-lg 2xl:text-xl font-semibold"/>
                            <InputText placeholder="Masukkan Nomor HP"/>
                        </div>
                        <div className="flex flex-col gap-2 2xl:gap-4 basis-1/2">
                            <Label name="Alamat Email" className="text-lg 2xl:text-xl font-semibold"/>
                            <InputText placeholder="Masukkan Alamat Email"/>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg px-12 pb-12 pt-6 shadow-lg'>
                    <h1 className="text-[1.5rem] 2xl:text-3xl font-semibold mb-4 2xl:mb-6">Detail Pembayaran</h1>
                    <div className='flex gap-3 mb-3'>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-2/3 2xl:basis-4/5'>Total</h1>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-1/3 2xl:basis-1/5'>Rp 2.350.000</h1>
                    </div>
                    <hr />
                    <div className='flex gap-3 mb-3 mt-3'>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-2/3 2xl:basis-4/5'>Akomodasi Hotel (3 Malam)</h1>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-1/3 2xl:basis-1/5'>Rp 2.000.000</h1>
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-2/3 2xl:basis-4/5'>Breakfast</h1>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-1/3 2xl:basis-1/5'>Rp 450.000</h1>
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-2/3 2xl:basis-4/5'>Layanan Lainnya</h1>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-1/3 2xl:basis-1/5'>Rp 250.000</h1>
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-2/3 2xl:basis-4/5'>Faxes and Fee</h1>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-1/3 2xl:basis-1/5'>Rp 150.000</h1>
                    </div>
                    <div className='flex mb-3'>
                        <h1 className='text-lg 2xl:text-xl ml-auto'>(2x)</h1>
                    </div>
                    <hr/>
                    <div className='flex gap-3 mt-3'>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-2/3 2xl:basis-4/5'>Diskon Promo</h1>
                        <h1 className='text-lg 2xl:text-xl font-semibold basis-1/3 2xl:basis-1/5'>-Rp 500.000</h1>
                    </div>
                    <div className="flex flex-col gap-4 mt-16">
                        <Label name="Metode Pembayaran" className="text-xl font-semibold"/>
                        <Select
                            className="w-[40%]"
                            placeholder="Pilih Metode Pembayaran"
                            options={[
                            { label: "Langsung", value: "directur" },
                            { label: "Online", value: "marketing" },
                            ]}
                            onChange={() => {}}
                            isSearchable
                        />
                    </div>
                </div>
            </div>
            <div className='basis-2/5'>
                <div className='bg-white rounded-lg px-12 pb-12 pt-6 shadow-lg'>
                    <h1 className="text-[1.5rem] 2xl:text-3xl font-semibold mb-4 2xl:mb-6">Hotel</h1>
                    <Select
                        className="w-full"
                        placeholder="Pilih Hotel"
                        options={[
                        { label: "Hotel 1", value: "directur" },
                        { label: "Hotel 2", value: "marketing" },
                        ]}
                        onChange={() => {}}
                        isSearchable
                    />
                </div>
            </div>
        </div>
    </form>
  )
}
