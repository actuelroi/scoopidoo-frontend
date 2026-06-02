import { ChevronDown, HeartIcon, Star } from "lucide-react"
import Image from "next/image"

import { Inria_Sans, Josefin_Sans, Indie_Flower } from "next/font/google";
import { Separator } from "../ui/separator";

const inria = Inria_Sans({
    weight: '400'
});

const josefin = Josefin_Sans({
    weight: '400'
});

const Indie = Indie_Flower({
    weight: '400'
});

export const CardImages = () => {
    return (
        <section className="mt-10 p-5">
            <div className="flex flex-col gap-2 md:flex-row  max-w-7xl mx-auto">
                <div className="flex flex-col w-full md:w-1/2 items-center justify-center gap-2">

                    <div className="flex w-full  items-center justify-center py-5 bg-white">
                        <div className="flex flex-col gap-2 ">

                            <div className="w-full flex items-center justify-center ">
                                <div className="h-[80vh] w-[60vh] relative  rounded-lg">
                                    <Image src={'/Image/discover.avif'} alt="card image 1" fill className="rounded-lg object-cover" />
                                    <HeartIcon className="absolute top-3 right-3 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full  items-center justify-center py-5 bg-white">
                        <div className="flex flex-col gap-2 ">

                            <div className="w-full flex items-center justify-center ">
                                <div className="h-[80vh] w-[60vh] relative  rounded-lg">
                                    <Image src={'/Image/discover.avif'} alt="card image 1" fill className="rounded-lg object-cover" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full  items-center justify-center py-5 bg-white">
                        <div className="flex flex-col gap-2 ">

                            <div className="w-full flex items-center justify-center ">
                                <div className="h-[80vh] w-[60vh] relative  rounded-lg">
                                    <Image src={'/Image/discover.avif'} alt="card image 1" fill className="rounded-lg object-cover" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`md:w-1/2 w-full flex flex-col p-10 gap-4 ${inria.className} sticky top-12 self-start`}
                >
                    <h1 className="text-lg sm:text-xl md:text-2xl  max-w-lg">
                        Croquettes Diamond Naturals à l'agneau et au riz pour chiens adultes, sac de <span className="font-bold">18 kg</span>
                    </h1>
                    <div className="flex items-center justify-between  p-4">
                        <div className="flex flex-col gap-2">
                            <p className={`text-sm sm:text-base md:text-lg mt-4 ${josefin.className} `}>
                                Par <span className={`text-[#0FAD8F]`}>Chewy</span>
                            </p>
                            <div className="flex item-center gap-2">
                                <p className={`text-start  text-sm ${Indie.className}`}>
                                    323 Avis
                                </p>
                                <Star className="size-3 font-semibold text-yellow-400" />
                                <Star className="size-3 font-semibold text-yellow-400" />
                                <Star className="size-3 font-semibold text-yellow-400" />
                                <Star className="size-3 font-semibold text-yellow-400" />

                            </div>
                        </div>
                        <div className="flex item-center justify-center p-3 px-10 rounded-2xl border border-[#4D28B2] gap-2">
                            <p className={`text-sm sm:text-base md:text-lg  ${josefin.className} text-[#014338] font-bold`}>
                                4.15 €
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-3 `}>
                        <p className={`text-sm sm:text-base md:text-[16px] font-light mt-4 ${josefin.className} `}>
                            Flavor: <span className={`font-semibold`}>Lamb Meal & Rice</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex item-center justify-center p-3 px-10 rounded-2xl border  ">
                                <p className={`text-sm sm:text-base md:text-[16px]  font-medium `}>
                                    Repas de bœuf et riz
                                </p>
                            </div>
                            <div className="flex item-center justify-center p-3 px-10 rounded-2xl border  ">
                                <p className={`text-sm sm:text-base md:text-[16px]  font-medium `}>
                                    Lamb Meal & Rice
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className={`flex flex-col gap-3 `}>
                        <p className={`text-sm sm:text-base md:text-[16px] font-light mt-4 ${josefin.className} `}>
                            Taille: <span className={`font-semibold`}>40kg</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex item-center justify-center p-3 px-10 rounded-2xl border  ">
                                <p className={`text-sm sm:text-base md:text-[16px]  font-medium `}>
                                    60kg
                                </p>
                            </div>
                            <div className="flex item-center justify-center p-3 px-10 rounded-2xl border  ">
                                <p className={`text-sm sm:text-base md:text-[16px]  font-medium `}>
                                    50kg
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex item-center justify-center p-3 px-10 rounded-2xl border  ">
                                <p className={`text-sm sm:text-base md:text-[16px]  font-medium `}>
                                    800kg
                                </p>
                            </div>
                            <div className="flex item-center justify-center p-3 px-10 rounded-2xl border  ">
                                <p className={`text-sm sm:text-base md:text-[16px]  font-medium `}>
                                    50kg
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`flex items-center  gap-3 mt-4 `}>
                        <p className={`text-sm sm:text-base md:text-[16px] font-light  ${josefin.className} `}>
                            Quantite:
                        </p>
                        <ChevronDown className="size-5" />
                    </div>

                    <div className={`flex items-center justify-center gap-3 mt-4  `}>
                        <button className="w-full py-3 rounded-2xl bg-[#10B193] text-white font-medium max-w-sm">
                            Ajouter au panier
                        </button>
                    </div>

                </div>
            </div>
            <Separator className="my-10" />
        </section>
    )
}