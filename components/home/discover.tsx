'use client'

import Image from "next/image"
import { Instrument_Sans, Josefin_Sans, Indie_Flower, Inter } from "next/font/google";

import { FaCircleChevronRight } from "react-icons/fa6";

import ProductCard from "../product-detail/product-card";
import { useRouter } from "next/navigation";


const Discover = () => {

    const router = useRouter()
    return (
        <section className="pt-30 lg:px-6 px-1 sm:px-2 min-h-screen bg-[#DBE6DC] ">
            <div className="relative">
                <div className="flex  gap-2 ">
                    <div className="h-full flex flex-col ">
                        <div className="h-[70vh] w-full lg:w-80 relative">
                            <Image src={'/Image/discover.avif'} alt="adorable chien en train de manger" fill className="rounded-3xl" />
                        </div>
                        <div className="flex flex-col items-center gap-1 ">
                            <h1 className="text-lg text-center font-semibold mt-5 text-[#005648]">Découvrez chewy mode</h1>
                            <p className=" text-center text-[#4C7960]">Découvrez des aliments, des friandises et bien plus encore de qualité, conçus par nos experts pour animaux de compagnie chez Chewy.</p>
                        </div>
                    </div>

                    <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ">

                        {
                            [1, 2, 3, 4].map((item) => (
                                <ProductCard key={item} onClick={()=>router.push('/product-detail')}/>
                            ))
                        }


                    </div>
                </div>
                <FaCircleChevronRight className=" absolute right-4 top-1/2 bottom-2/3 size-15 text-white cursor-pointer" />
            </div>

        </section>
    )
}

export default Discover
