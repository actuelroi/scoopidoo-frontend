'use client'

import { BiSearch } from "react-icons/bi"
import { Input } from "../ui/input"
import { FilterSearch } from "./filter-search"

import { RiFilter3Fill } from "react-icons/ri"
import { useMemo, useState } from "react"
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet"
import Logo from "../home/logo"

import { Product } from "@/sanity.types"
import SelectSearch from "./select-search"


interface SearchProductProps{
    product: Product[]
}

const SearchProduct = ({product}:SearchProductProps) => {

  const [isOpen, setIsOpen] = useState(false)
   
  const [selected, setSelected] = useState<string[]>([]);
  
      const filteredProducts = useMemo(() => {
          if (selected.length === 0) return product;
  
          return product.filter((item) => {
              const values = [
                  ...(item.marque ?? []),
                  ...(item.age ?? []),
                  ...(item.proteines ?? []),
                  ...(item.regimes ?? []),
                  ...(item.poils ?? []),
                  ...(item.taille_du_chien ?? []),
                  ...(item.types_d_aliments ?? []),
                  ...(item.saveur ?? []),
                  ...(item.benefices_sante ?? []),
              ];
  
              return selected.some((filter) => values.includes(filter));
          });
      }, [product, selected]);
  
  

  return (
    <section className="w-full">
      <div className="flex items-center justify-center max-w-sm md:max-w-xl my-10 mx-auto gap-5">
        <div className="w-full relative flex items-center justify-center">
          <Input />
          <BiSearch className="absolute top-2 right-2" />
        </div>
        <RiFilter3Fill className="size-6 lg:hidden cursor-pointer" onClick={() => setIsOpen(true)} />
      </div>
      <FilterSearch product={filteredProducts} />

      <Sheet open={isOpen} onOpenChange={setIsOpen} >
        <SheetContent className="bg-background flex flex-col gap-10 items-start justify-start z-999 p-6" >
          <SheetTitle>
            Filtrer par:
          </SheetTitle>
          <Logo />
          <div className="flex flex-col gap-5 w-full">
           <SelectSearch
                        selected={selected}
                        setSelected={setSelected}
                    />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default SearchProduct
