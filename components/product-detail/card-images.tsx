'use client'

import { ChevronDown, HeartIcon, MinusCircle, PlusCircle, Star } from "lucide-react"
import Image from "next/image"

import { Inria_Sans, Josefin_Sans, Indie_Flower } from "next/font/google";
import { Separator } from "../ui/separator";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const inria = Inria_Sans({
    weight: '400'
});

const josefin = Josefin_Sans({
    weight: '400'
});

const Indie = Indie_Flower({
    weight: '400'
});

interface CardImageProps {
    data: Product
}

export const CardImages = ({ data }: CardImageProps) => {

    const firstVariant = data.variants?.[0];

    const minimum = data.minimum ?? 1

    const [price, setPrice] = useState(firstVariant?.price ?? "");
    const [flavor, setFlavor] = useState(firstVariant?.flavor ?? "");
    const [taille, setTaille] = useState(firstVariant?.taille ?? "");
    const [show, setShow] = useState(false)

    const [quantity, setQuantity] = useState(minimum)

    const numericPrice = parseFloat(
        (price ?? "0")
            .replace(",", ".")
            .replace(/[^\d.]/g, "")
    );



    const add = () => {
        setQuantity((number) => number + 1)
    }

    const remove = () => {
        if (quantity <= minimum) {
            return;
        }
        setQuantity((number) => number - 1)
    }

    const uniqueSizes = Array.from(
        new Map(
            (data.variants ?? []).map((variant) => [
                `${variant.taille}-${variant.price}`,
                variant,
            ])
        ).values()
    );

    const uniqueFlavor = Array.from(
        new Map(
            (data.variants ?? []).map((variant) => [
                `${variant.flavor}`,
                variant,
            ])
        ).values()
    );



    return (
        <section className="mt-10 p-5">
            <div className="flex flex-col gap-2 md:flex-row  max-w-7xl mx-auto">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    {data.images?.map((image) => (
                        <div
                            key={image._key}
                            className="bg-white p-4 rounded-xl"
                        >
                            <div className="relative aspect-square md:aspect-4/5 w-full overflow-hidden rounded-lg">
                                <Image
                                    src={urlFor(image)
                                        .width(1200)
                                        .height(1500)
                                        .auto("format")
                                        .quality(80)
                                        .url()}
                                    alt={image.alt ?? data.name ?? "Product image"}
                                    fill
                                    sizes=" (max-width: 768px) 90vw,(max-width: 1200px) 40vw,30vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className={`md:w-1/2 w-full flex flex-col p-10 gap-4 ${inria.className} sticky top-12 self-start`}
                >
                    <h1 className="text-lg sm:text-xl md:text-2xl  max-w-lg">
                        {data.description}
                    </h1>
                    <div className="flex items-center justify-between  p-4">
                        <div className="flex flex-col gap-2">
                            <p className={`text-sm sm:text-base md:text-lg mt-4 ${josefin.className} `}>
                                Par <span className={`text-[#0FAD8F]`}>{data.marque}</span>
                            </p>
                            <div className="flex item-center gap-2">
                                <p className={`text-start  text-sm ${Indie.className}`}>
                                    {data.reviewCount} Avis
                                </p>
                                <Star className="size-3 font-semibold text-yellow-400" />
                                <Star className="size-3 font-semibold text-yellow-400" />
                                <Star className="size-3 font-semibold text-yellow-400" />
                                <Star className="size-3 font-semibold text-yellow-400" />

                            </div>
                        </div>
                        <div className="flex item-center justify-center p-3 px-10 rounded-2xl border border-[#4D28B2] gap-2">
                            <p className={`text-sm sm:text-base md:text-lg  ${josefin.className} text-[#014338] font-bold`}>
                                {(numericPrice * quantity).toFixed(2)} €
                            </p>
                        </div>
                    </div>

                    {
                        flavor && (<div className={`flex flex-col gap-3 `}>
                            <p className={`text-sm sm:text-base md:text-[16px] font-light mt-4 ${josefin.className} `}>
                                Flavor: <span className={`font-semibold`}>{flavor}</span>
                            </p>
                            <div className="flex flex-wrap gap-2">

                                {uniqueFlavor.map((variant) => (
                                    <button
                                        key={`size-${variant._key}`}
                                        type="button"
                                        onClick={() => {

                                            setPrice(variant.price ?? "");
                                            setFlavor(variant.flavor ?? "");
                                        }}
                                        className={cn(`rounded-2xl border px-6 py-3 hover:bg-gray-100 cursor-pointer`,
                                            variant.flavor == flavor ? "bg-[#f3b6ed]" : ''
                                        )}
                                    >
                                        {variant.flavor}
                                    </button>
                                ))}
                            </div>
                        </div>)
                    }


                    {
                        taille && (
                            <div className={`flex flex-col gap-3 `}>
                                <p className={`text-sm sm:text-base md:text-[16px] font-light mt-4 ${josefin.className} `}>
                                    Taille: <span className={`font-semibold`}>{taille}</span>
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {uniqueSizes.map((variant) => (
                                        <button
                                            key={`size-${variant._key}`}
                                            type="button"
                                            onClick={() => {

                                                setPrice(variant.price ?? "");
                                                setTaille(variant.taille ?? "");
                                            }}
                                            className={cn(`rounded-2xl border px-6 py-3 hover:bg-gray-100 cursor-pointer`,
                                                variant.taille == taille ? "bg-[#f3b6ed]" : ''
                                            )}
                                        >
                                            {variant.taille}
                                        </button>
                                    ))}
                                </div>

                            </div>
                        )
                    }



                    <div className={`flex items-center  gap-3 mt-4 `}>
                        <p className={`text-sm sm:text-base md:text-[16px] font-light  ${josefin.className} `}>
                            Quantite:
                        </p>
                        <ChevronDown className="size-5 cursor-pointer" onClick={() => show ? setShow(false) : setShow(true)} />
                        <span className="text-2xl font-semibold">{quantity}</span>
                    </div>

                    <div className={cn("flex flex-row  items-center gap-6", show ? 'w-full' : 'w-0')}>
                        <MinusCircle className="size-4 text-gray-400 cursor-pointer" onClick={remove} />

                        <PlusCircle className="size-4 text-gray-400 cursor-pointer" onClick={add} />
                    </div>

                    <div className={`flex items-center justify-center gap-3 mt-4  `}>
                        <button className="w-full py-3 rounded-2xl bg-[#10B193] text-white font-medium max-w-sm">
                            Ajouter au panier
                        </button>
                    </div>

                </div>
            </div>
            <Separator className="my-10" />
        </section>
    )
}