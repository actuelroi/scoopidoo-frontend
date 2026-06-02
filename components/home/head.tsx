import Image from 'next/image'
import {Instrument_Sans } from "next/font/google";


const geistSans =Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Head = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-2 top-0 left-0 h-14 bg-[#003E34]'>
      <h4 className={`${geistSans.className} text-white`}>30 % de reduction sur vos deux 1ère commandes</h4>
      <div className=' w-20 h-full relative overflow-hidden'>
        <Image src={'/Image/head.png'} alt='' fill objectFit='cover' className='absolute rotate-12'/>
      </div>
    </div>
  )
}

export default Head
