'use client'

import { useRouter } from "next/navigation"
import ProductCard from "./product-card"
import { Product } from "@/sanity.types"


interface ProductListProps{
      data: Product[]
}

export const ProductList = ({data}:ProductListProps)=>{
    const router = useRouter()


    return(
        <section className="min-h-screen pt-20  px-5">
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xlg:grid-cols-5 gap-5">
{
             data.map((item)=>(
                <ProductCard key={item._id} data={item} onClick={()=>router.push(`/product-detail/${item.slug?.current}`)}/>
            ))
         }
            </div>
         
            <div className="flex items-center justify-center my-20">
                <button className="text-center p-5 rounded-2xl bg-[#014338] text-white cursor-pointer" onClick={()=>router.push('/product-search')}>
                    Charger d&apos;autres
                </button>
            </div>
        </section>
    )
}