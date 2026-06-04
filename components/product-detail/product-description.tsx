
import { Inclusive_Sans } from "next/font/google";
import PortableTextRenderer from "../PortableTextRenderer";
import { Product } from "@/sanity.types";


const inclusive = Inclusive_Sans({
    weight: '400'
});

interface Props {
    data: Product
}



export const ProductDescription = ({data}:Props) => {
    return (
        <section className={`lg:px-6 px-1 sm:px-2 min-h-screen ${inclusive.className}`}  >
            <div className="max-w-7xl mx-auto flex flex-col gap-5 px-5">
                <h1 className="text-lg   mb-6">
                    Description du produit
                </h1>

               <PortableTextRenderer value={data.detail}/>
            </div>
        </section>
    )
}