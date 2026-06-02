import Image from "next/image";
import { Instrument_Sans } from "next/font/google";


const instrumentSans = Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export function HeroSection() {
  return (
    <section className="flex items-center gap-10 justify-center my-10 ">
      <div className=" w-30 h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 relative">
        <Image src={'/Image/hero-1.webp'} alt="hero-1 image" fill />
      </div>
      <div className={`text-center ${instrumentSans.className}  `}>
        <h1 className=" text-2xl sm:text-4xl md:text-6xl font-semibold text-[#003E34]">     Découvrez leur   </h1>
        <h1 className="text-2xl sm:text-4xl md:text-6xl  font-semibold text-[#10B193]">     version   la plus saine</h1>
      </div>

      <div className=" w-30 h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 relative">
        <Image src={'/Image/hero-2.webp'} alt="hero-1 image" fill />
      </div>
    </section>
  )
}
