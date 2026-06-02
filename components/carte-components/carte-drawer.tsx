
'use client'
import { Button } from "@/components/ui/button"

import { useCartDrawerStore } from "@/store/carte-drower.store"
import { ChevronDown, X } from "lucide-react"
import { Instrument_Sans } from "next/font/google";
import { IoMdInformationCircle } from "react-icons/io";

import Image from "next/image";

import { Inria_Sans, Josefin_Sans } from "next/font/google";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"

const inria = Inria_Sans({
    weight: '400'
});

const josefin = Josefin_Sans({
    weight: '400'
});





const instrumentSerif = Instrument_Sans({
    weight: "400"
});

export function CarteDrawer() {

    const { isOpen, onClose, onOpen } = useCartDrawerStore()

    return (
        <Sheet open={isOpen}
            onOpenChange={(open) => {
                if (open) onOpen()
                else onClose()
            }}>
            <SheetContent className="">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle>Votre panier (2 articles)</SheetTitle>

                </SheetHeader>
                <div className="flex flex-col overflow-y-auto">
                    <div className="flex flex-col gap-2 px-6  ">
                        <h1 className={`text-start ${instrumentSerif.className} text-sm`}>Sacs</h1>
                        <Separator />
                    </div>
                    <div className="flex gap-4 p-4">
                        <div className="w-30 h-35 relative">
                            <Image src={'/Image/head.png'} alt="hero-1" fill />
                        </div>

                        <div
                            className={`w-full flex flex-col  gap-2 ${inria.className}`}
                        >
                            <h1 className=" max-w-xs">
                                Croquettes Diamond Naturals à l'agneau et au riz pour chiens adultes, sac de <span className="font-bold">18 kg</span>
                            </h1>
                            <div className="flex items-center justify-between  ">

                                <p className={`text-sm sm:text-base md:text-lg  ${josefin.className} text-[#014338] font-bold`}>
                                    4.15 €
                                </p>

                            </div>
                            <div className={`flex flex-col gap-3 `}>
                                <p className={`text-sm  font-light mt-4 ${josefin.className} `}>
                                    Flavor: <span className={`font-semibold`}>Lamb Meal & Rice</span>
                                </p>

                            </div>



                            <div className={`flex flex-col gap-3 `}>
                                <p className={`text-sm  font-light mt-4 ${josefin.className} `}>
                                    Taille: <span className={`font-semibold`}>40kg</span>
                                </p>

                            </div>

                            <div className={`flex items-center  gap-3 mt-4 `}>
                                <p className={`text-sm  font-light  ${josefin.className} `}>
                                    Quantite:
                                </p>
                                <ChevronDown className="size-5" />
                            </div>

                            <Button variant={'destructive'}>Supprimer</Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 px-6  ">
                        <h1 className={`text-start ${instrumentSerif.className} text-sm`}>Autres</h1>
                        <Separator />
                    </div>
                    <div className="flex gap-4 p-4">
                        <div className="w-30 h-35 relative">
                            <Image src={'/Image/head.png'} alt="hero-1" fill />
                        </div>

                        <div
                            className={`w-full flex flex-col  gap-2 ${inria.className}`}
                        >
                            <h1 className=" max-w-xs">
                                Croquettes Diamond Naturals à l'agneau et au riz pour chiens adultes, sac de <span className="font-bold">18 kg</span>
                            </h1>
                            <div className="flex items-center justify-between  ">

                                <p className={`text-sm sm:text-base md:text-lg  ${josefin.className} text-[#014338] font-bold`}>
                                    4.15 €
                                </p>

                            </div>
                            <div className={`flex flex-col gap-3 `}>
                                <p className={`text-sm  font-light mt-4 ${josefin.className} `}>
                                    Flavor: <span className={`font-semibold`}>Lamb Meal & Rice</span>
                                </p>

                            </div>



                            <div className={`flex flex-col gap-3 `}>
                                <p className={`text-sm  font-light mt-4 ${josefin.className} `}>
                                    Taille: <span className={`font-semibold`}>40kg</span>
                                </p>

                            </div>

                            <div className={`flex items-center  gap-3 mt-4 `}>
                                <p className={`text-sm  font-light  ${josefin.className} `}>
                                    Quantite:
                                </p>
                                <ChevronDown className="size-5" />
                            </div>

                            <Button variant={'destructive'}>Supprimer</Button>
                        </div>
                    </div>
                    <h2 className="p-4 text-start text-sm underline">Completer vos choix</h2>


                    <div className="flex grid grid-cols-2 sm:grid-cols-3 lg:grid-cols gap-1">

                        <div className="flex gap-1 p-1">
                            <div className="w-15 h-20 relative">
                                <Image src={'/Image/head.png'} alt="hero-1" fill />
                            </div>

                            <div
                                className={`w-full flex flex-col  gap-1 ${inria.className}`}
                            >
                                <h1 className="  text-xs">
                                    Croquettes Diamond Naturals
                                </h1>
                                <div className="flex items-center justify-between  ">

                                    <p className={`text-xs  ${josefin.className} text-[#014338] font-light`}>
                                        4.15 €
                                    </p>

                                </div>
                                <div className={`flex flex-col gap-1  `}>
                                    <p className={`text-xs  font-light mt-1 ${josefin.className} `}>
                                        Flavor: Lamb Meal & Rice
                                    </p>

                                </div>



                                <div className={`flex flex-col gap-1 `}>
                                    <p className={`text-xs  font-light mt-1 ${josefin.className} `}>
                                        Taille: 40kg
                                    </p>

                                </div>

                                <div className={`flex items-center  gap-1 mt-1 `}>
                                    <p className={`text-xs  font-light  ${josefin.className} `}>
                                        Quantite:
                                    </p>
                                    <ChevronDown className="size-2" />
                                </div>
                                <Button size={'xs'}>
                                    Ajouter
                                </Button>
                            </div>
                        </div>

                        <div className="flex gap-1 p-1">
                            <div className="w-15 h-20 relative">
                                <Image src={'/Image/head.png'} alt="hero-1" fill />
                            </div>

                            <div
                                className={`w-full flex flex-col  gap-1 ${inria.className}`}
                            >
                                <h1 className="  text-xs">
                                    Croquettes Diamond Naturals
                                </h1>
                                <div className="flex items-center justify-between  ">

                                    <p className={`text-xs  ${josefin.className} text-[#014338] font-light`}>
                                        4.15 €
                                    </p>

                                </div>
                                <div className={`flex flex-col gap-1  `}>
                                    <p className={`text-xs  font-light mt-1 ${josefin.className} `}>
                                        Flavor: Lamb Meal & Rice
                                    </p>

                                </div>



                                <div className={`flex flex-col gap-1 `}>
                                    <p className={`text-xs  font-light mt-1 ${josefin.className} `}>
                                        Taille: 40kg
                                    </p>

                                </div>

                                <div className={`flex items-center  gap-1 mt-1 `}>
                                    <p className={`text-xs  font-light  ${josefin.className} `}>
                                        Quantite:
                                    </p>
                                    <ChevronDown className="size-2" />
                                </div>
                                <Button size={'xs'}>
                                    Ajouter
                                </Button>
                            </div>
                        </div>

                        <div className="flex gap-1 p-1">
                            <div className="w-15 h-20 relative">
                                <Image src={'/Image/head.png'} alt="hero-1" fill />
                            </div>

                            <div
                                className={`w-full flex flex-col  gap-1 ${inria.className}`}
                            >
                                <h1 className="  text-xs">
                                    Croquettes Diamond Naturals
                                </h1>
                                <div className="flex items-center justify-between  ">

                                    <p className={`text-xs  ${josefin.className} text-[#014338] font-light`}>
                                        4.15 €
                                    </p>

                                </div>
                                <div className={`flex flex-col gap-1  `}>
                                    <p className={`text-xs  font-light mt-1 ${josefin.className} `}>
                                        Flavor: Lamb Meal & Rice
                                    </p>

                                </div>



                                <div className={`flex flex-col gap-1 `}>
                                    <p className={`text-xs  font-light mt-1 ${josefin.className} `}>
                                        Taille: 40kg
                                    </p>

                                </div>

                                <div className={`flex items-center  gap-1 mt-1 `}>
                                    <p className={`text-xs  font-light  ${josefin.className} `}>
                                        Quantite:
                                    </p>
                                    <ChevronDown className="size-2" />
                                </div>
                                <Button size={'xs'}>
                                    Ajouter
                                </Button>
                            </div>
                        </div>


                    </div>

                    <Separator />

                    

                </div>


                <SheetFooter>
                    <div className="flex items-center justify-between px-4">
                        <h1>Sous-Total</h1>
                        <h1 className="font-semibold text-lg">45 €</h1>
                    </div>
                    <div className="flex items-center gap-2 px-4">
                        <p className="text-sm text-gray-400 ">Livraison prevue le 25 Juin
                        </p>
                        <IoMdInformationCircle className="size-4" />
                    </div>
                    <Button>Passer au paiement</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Vider le panier</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
