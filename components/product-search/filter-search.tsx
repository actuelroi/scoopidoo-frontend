'use client'
import { Inria_Sans } from "next/font/google";
import { ProductList } from "../product-detail/product-list";
import { Filtered } from "./fitered";





const inria = Inria_Sans({
    weight: '400'
});



export const FilterSearch = () => {


    

    return (
        <section className={`lg:px-8 px-2 ${inria.className}`}>

            <div className="flex gap-2">
                <div className="min-w-[40vh] h-full border-r sticky top-12 self-start hidden lg:block">
                    <Filtered/>
                </div>

                <ProductList/>
            </div>

        </section>
    )
}

