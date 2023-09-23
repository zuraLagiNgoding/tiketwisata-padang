import React from "react";
import useHeader from "@/stores/header";
import Label from "@/components/Elements/Label";
import Select from "@/components/Elements/Select";
import DatePicker from "@/components/Elements/DatePicker";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import InputText from "@/components/Elements/InputText";
import Button from "@/components/Elements/Button";
import { useRouter } from "next/router";
import { destinationDetail } from "@/data/destination";


export default function Dashboard() {
  const { setTitle } = useHeader();
  const router = useRouter();
  const [ ticketAmount, setTicketAmount ] = React.useState<number[]>([])
  const [destination, setDestination] = React.useState()

  React.useEffect(() => {
    setTitle("Dashboard");
  }, []);
  
  React.useEffect(() => {
    if (destination === 0) {
      router.push("")
    }

  }, [destination]);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full bg_custom py-36 px-28 gap-20 items-center" id="#beranda">
        <h1 className="text-white font-bold text-4xl lg:text-6xl basis-7/12">Eksplorasi Destinasi Impian Anda Bersama Kami</h1>
        <div className="flex flex-col gap-6 px-16 pt-7 pb-10 basis-5/12 bg-white rounded-2xl">
          <h1 className="text-3xl font-semibold text-center mb-4 text-primary">Rencanakan Wisatamu!</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <Label name="Destinasi Wisata" className="text-2xl font-semibold"/>
              <Select
                className="w-full"
                placeholder="Pilih Destinasi Wisata"
                options={[
                  { label: "Directur", value: "directur" },
                  { label: "Marketing", value: "marketing" },
                ]}
                onChange={() => {}}
                isSearchable
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label name="Hari Kunjungan" className="text-2xl font-semibold"/>
              <DatePicker className="" />
            </div>
            <div className="flex flex-col gap-4">
              <Label name="Jam Kunjungan" className="text-2xl font-semibold"/>
              <DatePicker className=""/>
            </div>
            <div className="flex flex-col gap-4">
              <Label name="Jumlah Tiket" className="text-2xl font-semibold"/>
              <div className="flex gap-2 items-center select-none px-3 2xl:px-4 pb-1.5">
                <DashCircle className="text-primary cursor-pointer" onClick={() => setTicketAmount(ticketAmount.slice(0, -1))}/>
                <h1>{ticketAmount.length}</h1>
                <PlusCircle className="text-primary cursor-pointer" onClick={() => setTicketAmount([...ticketAmount, ticketAmount.length = ticketAmount.length+1])}/>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Label name="Kode Promo" className="text-2xl font-semibold"/>
              <InputText placeholder="Masukkan Kode Promo"/>
            </div>
            <div className="flex flex-col gap-4 w-full mt-6">
              <Button 
                className="bg-primary text-white w-1/3 mx-auto"
                text="Pesan Tiket"
                variant="filled"
              />
            </div>     
          </div>
        </div>
      </div>
      <div className="pt-24 pb-36 px-16" id="info_tiket">
        <h1 className="text-primary text-center text-5xl font-semibold ">Destinasi Wisata Terpopuler <br/> di Padang</h1>
        <div className="grid grid-cols-4 2xl:grid-cols-5 gap-4 mt-16">
          {destinationDetail.map((item, index) => 
            <>
              <div 
                className="cursor-pointer rounded-2xl w-[18rem] h-[27rem] bg-cover bg-center" 
                style={{ backgroundImage: `url(${item.image})`}}
                onClick={() => router.push("./destination")}
              >
                <div className="bg-gradient-to-t from-slate-900 to-transparent h-full w-full px-6 py-12 rounded-2xl flex flex-col justify-end">
                  <h1 className="text-3xl font-medium text-white">{item.name}</h1>
                  <h1 className="text-xl text-white">{item.price}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
