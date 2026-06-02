
import Image from 'next/image'


import { Instrument_Sans, Josefin_Sans, Indie_Flower, Inter } from "next/font/google";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";

const instrumentSans = Instrument_Sans({
    weight: '400'
});

const JosefinSans = Josefin_Sans({
    weight: '400'
});
const Indie = Indie_Flower({
    weight: '400'
});
const inter = Inter({
    weight: '400'
});

interface ProductCardProps{
    onClick: ()=>void;
}


const ProductCard = ({onClick}:ProductCardProps) => {
    return (
        <div className="h-full flex flex-col  bg-[#014338] rounded-t-3xl rounded-b-xl  group relative cursor-pointer" onClick={onClick}>
            <div className="h-[40vh] w-full relative ">
                <Image src={'/Image/discover.avif'} alt="adorable chien en train de manger" fill className="rounded-t-3xl" />

            </div>
            <IoChevronBackCircleOutline className="hidden group-hover:block absolute top-1/3 left-2 size-6 text-gray-300 cursor-pointer" />
            <IoChevronForwardCircleOutline className="hidden group-hover:block absolute top-1/3 right-2 size-6 text-gray-300 cursor-pointer" />
            <div className="flex flex-col items-start gap-3 mt-2 p-3">
                <p className={`text-start text-white text-sm ${instrumentSans.className}`}>
                    Croquettes <span className="font-bold">Chewy</span>  Made Digestive Health à l'agneau et au riz brun pour chiens adultes, sac de 18 kg
                </p>

                <p className={`text-start text-white text-sm ${JosefinSans.className}`}>
                    Par <span className="text-[#0FAD8F] font-semibold">Chewy</span>
                </p>

                <div className="flex item-center gap-2">
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <p className={`text-start text-white text-sm ${Indie.className}`}>
                        323
                    </p>
                </div>

                <p className={`text-start text-white text-xl font-bold ${JosefinSans.className} pl-2`}>
                    4.15 €
                </p>


            </div>

            <div className="flex item-center justify-center my-6">
                <Button className={`bg-[#0FAD8F] text-white hover:bg-[#0FAD8F]/90 border-none p-4 ${inter.className}`} size="lg">
                    Ajouter au panier
                </Button>
            </div>


        </div>
    )
}

export default ProductCard
