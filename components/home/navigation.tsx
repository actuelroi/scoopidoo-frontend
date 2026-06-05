'use client'

import { FaCartShopping } from "react-icons/fa6"
import Logo from "./logo"


import { Instrument_Sans } from "next/font/google";
import { ChevronDown, User, } from "lucide-react";
import Link from "next/link";
import { RiMenuSearchFill } from "react-icons/ri";
import { useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import { Separator } from "../ui/separator";



import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCartDrawerStore } from "@/store/carte-drower.store";
import { Button } from "../ui/button";
import useCartStore from "@/store/carte.store";


const instrumentSans = Instrument_Sans({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});




const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { onOpen } = useCartDrawerStore()
    const { items } = useCartStore()
    return (
        <nav className="flex md:px-12 px-5 py-4 items-center  gap-10 sticky top-0 left-0 right-0 z-50 bg-white ">
            <Logo />

            <div className={`flex items-center justify-between flex-1 ${instrumentSans.className}  font-semibold text-[#003E34]`} >
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2 z-99" >
                        <h2 className="cursor-pointer text-xs md:text-sm text-nowrap lg:text-[16px]">Nos goutés</h2>
                        <ChevronDown className="text-black size-3 sm:size-5" />

                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Nourriture</DropdownMenuLabel>
                            <DropdownMenuItem>Gadgets</DropdownMenuItem>
                            <DropdownMenuItem>Tous</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>


                <RiMenuSearchFill className="lg:hidden cursor-pointer  size-5 md:size-6" onClick={() => setIsOpen(true)} />
                <div className="hidden lg:flex items-center gap-8 text-xs md:text-sm lg:text-[16px] ">
                    <Link href={'/pourquoi-la-vraie'}>Pourquoi la vrai nourriture</Link>
                    <Link href={'/avis'}>Avis</Link >
                    <Link href={'/centre-aide'}>Centre d&apos;aide</Link >
                    <Link href={'/blog'}>Blog</Link>
                </div>
                <User className="size-5 md:hidden" />
                <h2 className="cursor-pointer text-xs hidden md:block md:text-sm  text-nowrap lg:text-[16px]">Se connecter</h2>
                <div className="relative" onClick={onOpen}>
                    <Button className="p-2 bg-[#FF886B] rounded-2xl cursor-pointer" >
                        <FaCartShopping className="text-white" />
                    </Button>
                    {items.length > 0 && (
                        <div className="absolute top-0 -right-2 text-white text-[10px] bg-[#003E34] cursor-pointer px-1.5 py-0.5 rounded-full">
                          {items.length}
                        </div>
                    )}
                </div>

            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetContent className="bg-background flex flex-col gap-10 items-start justify-start z-999 p-6" >
                    <Logo />
                    <div className="flex flex-col gap-5 w-full">
                        <Link href={'/pourquoi-la-vraie'} className="   items-center ">Pourquoi la vrai nourriture</Link>
                        <Separator />
                        <Link href={'/avis'} className="   items-center ">Avis</Link >
                        <Separator />
                        <Link href={'/centre-aide'} className="   items-center ">Centre d&apos;aide</Link >
                        <Separator />
                        <Link href={'/blog'} className="   items-center ">Blog</Link>

                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default Navigation
