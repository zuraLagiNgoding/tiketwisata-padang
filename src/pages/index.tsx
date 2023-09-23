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
import clsx from "clsx";


export default function Dashboard() {
  const { setTitle } = useHeader();
  const router = useRouter();
  const [ ticketAmount, setTicketAmount ] = React.useState<number[]>([])
  const [destination, setDestination] = React.useState(-1)

  React.useEffect(() => {
    setTitle("Dashboard");
  }, []);
  
  React.useEffect(() => {
    if (destination === 0) {
      router.push("/destination/air_terjun_lubuk_hitam")
    } else if (destination === 1) {
      router.push("/destination/banto_royo")
    } else if (destination === 2) {
      router.push("/destination/pantai_pasumpahan")
    }

  }, [destination]);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full bg_custom pt-28 pb-16 2xl:py-36 xl:px-24 px-12 gap-20 items-center" id="#beranda">
        <h1 className="text-white font-bold text-3xl lg:text-6xl basis-7/12">Eksplorasi Destinasi Impian Anda Bersama Kami</h1>
        <div className="flex flex-col gap-6 2xl:px-16 px-10 2xl:pt-7 pt-5 2xl:pb-10 pb-7 basis-5/12 bg-white rounded-2xl">
          <h1 className="text-2xl 2xl:text-3xl font-semibold text-center 2xl:mb-4 text-primary">Rencanakan Wisatamu!</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1 2xl:gap-4">
              <Label name="Destinasi Wisata" className="text-lg 2xl:text-2xl font-semibold"/>
              <Select
                className="w-full text-sm"
                placeholder="Pilih Destinasi Wisata"
                options={[
                  { label: "Directur", value: "directur" },
                  { label: "Marketing", value: "marketing" },
                ]}
                onChange={() => {}}
                isSearchable
              />
            </div>
            <div className="flex flex-col gap-1 2xl:gap-4">
              <Label name="Hari Kunjungan" className="text-lg 2xl:text-2xl font-semibold"/>
              <DatePicker className="text-sm" />
            </div>
            <div className="flex flex-col gap-1 2xl:gap-4">
              <Label name="Jam Kunjungan" className="text-lg 2xl:text-2xl font-semibold"/>
              <DatePicker className="text-sm"/>
            </div>
            <div className="flex flex-col gap-1 2xl:gap-4">
              <Label name="Jumlah Tiket" className="text-lg 2xl:text-2xl font-semibold"/>
              <div className="flex gap-2 items-center select-none px-3 2xl:px-4 pb-1.5">
                <DashCircle className="text-primary cursor-pointer" onClick={() => setTicketAmount(ticketAmount.slice(0, -1))}/>
                <h1>{ticketAmount.length}</h1>
                <PlusCircle className="text-primary cursor-pointer" onClick={() => setTicketAmount([...ticketAmount, ticketAmount.length = ticketAmount.length+1])}/>
              </div>
            </div>
            <div className="flex flex-col gap-1 2xl:gap-4">
              <Label name="Kode Promo" className="text-lg 2xl:text-2xl font-semibold"/>
              <InputText className="text-sm" placeholder="Masukkan Kode Promo"/>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4 2xl:mt-6">
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
        <h1 className="text-primary text-center text-3xl 2xl:text-5xl font-semibold ">Destinasi Wisata Terpopuler <br/> di Padang</h1>
        <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-4 mt-16">
          {destinationDetail.map((item, index) => 
            <>
              <div 
                className={clsx("cursor-pointer rounded-2xl w-[18rem] h-[27rem] bg-cover bg-center", index >= 3 && "hidden")} 
                style={{ backgroundImage: `url(${item.image})`}}
                onClick={() => setDestination(index)}
              >
                <div className="bg-gradient-to-t from-slate-900 to-transparent h-full w-full px-6 py-12 rounded-2xl flex flex-col justify-end">
                  <h1 className="text-2xl 2xl:text-3xl font-medium text-white">{item.name}</h1>
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
