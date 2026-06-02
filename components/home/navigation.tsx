import { FaCartShopping } from "react-icons/fa6"
import Logo from "./logo"


import {Instrument_Sans } from "next/font/google";
import { ChevronDown } from "lucide-react";
import Link from "next/link";


const instrumentSans =Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const Navigation = () => {
    return (
        <nav className="flex md:px-12 px-5 py-4 items-center  gap-10">
            <Logo />

            <div className={`flex items-center justify-between flex-1 ${instrumentSans.className} ml-3 font-semibold text-[#003E34]`} >
                <div className="flex items-center gap-2">
                    <h2 className="cursor-pointer">Nos goutés</h2>
                    <ChevronDown className="text-black"/>
                </div>
                <Link href={'/pourquoi-la-vraie'}>Pourquoi la vrai nourriture</Link>
                <Link href={'/avis'}>Avis</Link >
                <Link href={'/centre-aide'}>Centre d&apos;aide</Link >
                <Link href={'/blog'}>Blog</Link>
                <h2 className="cursor-pointer">Se connecter</h2>
                <div className="p-2 bg-[#FF886B] rounded-2xl cursor-pointer">
                    <FaCartShopping className="text-white" />
                </div>
            </div>
        </nav>
    )
}

export default Navigation
