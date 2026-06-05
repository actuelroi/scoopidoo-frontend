"use client";
import { Product } from "@/sanity.types";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import useCartStore from "@/store/carte.store";
import { Button } from "./ui/button";
import { toast } from "sonner";

import { Inter } from "next/font/google";
import PriceFormatter from "./PriceFormatter";
import QuantityButtons from "./QuantityButtons";



interface Props {
    product: Product;
    className?: string;
    variant: {
        flavor?: string;
        taille?: string;
        price?: string;
        _key: string;
    };

}


const inter = Inter({
    weight: '400'
});


const AddToCartButton = ({ product, className, variant }: Props) => {
    const { addItem, getItemCount } = useCartStore();
    const [isClient, setIsClient] = useState(false);

    const itemCount = getItemCount(product?._id);

    const selectedVariant = product.variants?.find(
        (v) => v._key === variant._key
    );

    const isOutOfStock = (selectedVariant?.stock ?? 0) <= 0;

    const numericPrice = parseFloat(
        (variant.price ?? "0")
            .replace(",", ".")
            .replace(/[^\d.]/g, "")
    );


    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) {
        return null;
    }
    return (
         <div className="flex item-center justify-center my-6">
        
         {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Quantity</span>
            <QuantityButtons product={product} variant={variant} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              amount={variant?.price ? numericPrice * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <Button
                onClick={() => {
                    addItem(product, variant);
                    toast.success(
                        `${product?.name?.substring(0, 12)}... added successfully!`
                    );
                }}
                disabled={isOutOfStock}
                className={cn(
                    "bg-[#0FAD8F] text-white hover:bg-[#0FAD8F]/90 border-none p-4 tracking-wide hover:text-white cursor-pointer hoverEffect",
                    className,
                    inter.className
                )}
                size="lg"
            >
                Ajouter au panier
            </Button>

      )}
        </div>
    );
};

export default AddToCartButton;