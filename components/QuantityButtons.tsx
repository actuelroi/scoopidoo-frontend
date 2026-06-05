import React from "react";
import { Button } from "./ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";

import { Product } from "@/sanity.types";
import { twMerge } from "tailwind-merge";
import useCartStore from "@/store/carte.store";
import { toast } from "sonner";

interface Props {
    product: Product;
    variant: {
        flavor?: string;
        taille?: string;
        price?: string;
        stock?: number;
        _key: string;
    };
    className?: string;
    borderStyle?: string;
}

const QuantityButtons = ({ product, className, borderStyle, variant }: Props) => {
    const { addItem, removeItem, getItemCount } = useCartStore();
    const itemCount = getItemCount(product?._id);

    const selectedVariant = product.variants?.find(
        (v) => v._key === variant._key
    );

    const isOutOfStock = (selectedVariant?.stock ?? 0) <= 0;

    const handleRemoveProduct = () => {
        removeItem(
            product._id,
            variant._key
        );

        if (itemCount > 1) {
            toast.success("Quantity decreased successfully!");
        } else {
            toast.success(
                `${product.name?.substring(0, 12)} removed successfully!`
            );
        }
    };
    return (
        <div
            className={twMerge(
                "flex items-center gap-1 pb-1 text-base",
                borderStyle,
                className
            )}
        >
            <Button
                variant="outline"
                size="icon"
                className="w-6 h-6 cursor-pointer"
                onClick={handleRemoveProduct}
                disabled={itemCount === 0 || isOutOfStock}
            >
                <HiMinus />
            </Button>
            <span className="font-semibold w-8 text-center text-darkColor">
                {itemCount}
            </span>
            <Button
                variant="outline"
                size="icon"
                className="w-6 h-6 cursor-pointer"
                onClick={() => {
                    addItem(product,variant);
                    toast.success("Quantity increased successfully!");
                }}
                disabled={isOutOfStock}
            >
                <HiPlus />
            </Button>
        </div>
    );
};

export default QuantityButtons;