
import Image from 'next/image'


import { Instrument_Sans, Josefin_Sans, Indie_Flower, Inter } from "next/font/google";
import { Star } from "lucide-react";
import { Button } from "../ui/button";

import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from "react-icons/io5";
import { Product } from '@/sanity.types';

import { urlFor } from '@/sanity/lib/image';



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




interface ProductCardProps {
    data: Product,
    onClick:()=> void;
}

const ProductCard = ({ data ,onClick}: ProductCardProps) => {

    const firstVariant = data.variants?.[0];
    const image = data.images?.[0];
    return (
        <div className="h-full flex flex-col  bg-[#014338] rounded-t-3xl rounded-b-xl  group  cursor-pointer" onClick={onClick} >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-t-3xl bg-white" >
                <Image
                    src={
                        image?.asset
                            ? urlFor(image)
                                .width(800)
                                .height(1000)
                                .auto("format")
                                .quality(80)
                                .url()
                            : "/Image/discover.avif"
                    }
                    alt={image?.alt ?? data.name ?? "Product"}
                    fill
                    priority={false}
                    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <IoChevronBackCircleOutline className="hidden group-hover:block absolute top-1/3 left-2 size-6 text-gray-300 cursor-pointer" />
                <IoChevronForwardCircleOutline className="hidden group-hover:block absolute top-1/3 right-2 size-6 text-gray-300 cursor-pointer" />
            </div>

           <div className="flex flex-col flex-1 p-3">
                <p className={`text-start text-white text-sm line-clamp-3 min-h-18  ${instrumentSans.className}`}>
                    {data.description}
                </p>

                <p className={`text-start text-white text-sm ${JosefinSans.className}`}>
                    Par <span className="text-[#0FAD8F] font-semibold">{data.marque?.[0]}</span>
                </p>

                <div className="flex item-center gap-2">
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <Star className="size-3 font-semibold text-yellow-400" />
                    <p className={`text-start text-white text-sm ${Indie.className}`}>
                        {data.reviewCount}
                    </p>
                </div>

                <p className={`text-start text-white text-xl font-bold ${JosefinSans.className} pl-2`}>
                    
                        {firstVariant?.price ?? "--"} €
                    
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
