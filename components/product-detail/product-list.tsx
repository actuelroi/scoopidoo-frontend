'use client'

import { useRouter } from "next/navigation"
import ProductCard from "./product-card"


export const ProductList = ()=>{
    const router = useRouter()
    return(
        <section className="min-h-screen pt-20  px-5">
            <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xlg:grid-cols-5 gap-5">
{
            [1,2,3,4,5,6,7,8].map((item)=>(
                <ProductCard key={item} onClick={()=>router.push('/product-detail')}/>
            ))
         }
            </div>
         
            <div className="flex items-center justify-center my-20">
                <button className="text-center p-5 rounded-2xl bg-[#014338] text-white">
                    Charger d&apos;autres
                </button>
            </div>
        </section>
    )
}