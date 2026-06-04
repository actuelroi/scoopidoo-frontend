'use client'
import { Inria_Sans } from "next/font/google";
import { ProductList } from "../product-detail/product-list";

import { Product } from "@/sanity.types";
import SelectSearch from "./select-search";
import { useMemo, useState } from "react";






const inria = Inria_Sans({
    weight: '400'
});


interface ProductProps {
    product: Product[]
}



export const FilterSearch = ({ product }: ProductProps) => {

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
        <section className={`lg:px-8 px-2 ${inria.className}`}>

            <div className="flex gap-2">
                <div className="min-w-[40vh] h-full border-r sticky top-12 self-start hidden lg:block">
                    <SelectSearch
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>

                <ProductList data={filteredProducts} />
            </div>

        </section>
    )
}

