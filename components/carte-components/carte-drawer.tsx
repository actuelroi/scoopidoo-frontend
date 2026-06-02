

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,

    DrawerFooter,
    DrawerHeader,
    DrawerTitle,

} from "@/components/ui/drawer"
import { useCartDrawerStore } from "@/store/carte-drower.store"
import { ChevronDown, X } from "lucide-react"
import { Instrument_Sans } from "next/font/google";

import Image from "next/image";

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



const instrumentSerif = Instrument_Sans({
    weight: "400"
});

export function CarteDrawer() {

    const { isOpen, onClose } = useCartDrawerStore()

    return (
        <Drawer direction="right" open={isOpen} onOpenChange={onClose}>
            <DrawerContent>
                <DrawerHeader className="flex flex-row items-center justify-between">
                    <DrawerTitle>Votre panier</DrawerTitle>
                    <X onClick={onClose} className="cursor-pointer" />
                </DrawerHeader>
                <div className="flex flex-col gap-2 px-6 pt-6 ">
                    <h1 className={`text-start ${instrumentSerif.className} text-lg`}>Sacs</h1>
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
                <h2 className="p-4 text-start text-sm">Completer vos choix</h2>
                <DrawerFooter>
                    <Button>Passer au paiement</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Vider le panier</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
