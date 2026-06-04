'use client'

import { BiSearch } from "react-icons/bi"
import { Input } from "../ui/input"
import { FilterSearch } from "./filter-search"

import { RiFilter3Fill } from "react-icons/ri"
import { useState } from "react"
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet"
import Logo from "../home/logo"
import { Filtered } from "./fitered"
import { Product } from "@/sanity.types"


interface SearchProductProps{
    product: Product[]
}

const SearchProduct = ({product}:SearchProductProps) => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <section className="w-full">
      <div className="flex items-center justify-center max-w-sm md:max-w-xl my-10 mx-auto gap-5">
        <div className="w-full relative flex items-center justify-center">
          <Input />
          <BiSearch className="absolute top-2 right-2" />
        </div>
        <RiFilter3Fill className="size-6 lg:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
      </div>
      <FilterSearch product={product} />

      <Sheet open={isOpen} onOpenChange={setIsOpen} >
        <SheetContent className="bg-background flex flex-col gap-10 items-start justify-start z-999 p-6" >
          <SheetTitle>
            Filtrer par:
          </SheetTitle>
          <Logo />
          <div className="flex flex-col gap-5 w-full">
            <Filtered/>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default SearchProduct
