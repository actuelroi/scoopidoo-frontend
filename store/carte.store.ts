


import { parsePrice } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
    product: Product;
    variant: {
        flavor?: string;
        taille?: string;
        price?: string;
        _key: string;
    };
    quantity: number;
}


interface CartState {
    items: CartItem[];
    addItem: (
        product: Product,
        variant: CartItem["variant"],
        quantity?: number
    ) => void;
    removeItem: (productId: string, variantKey: string) => void;
    deleteCartProduct: (productId: string, variantKey: string) => void;
    resetCart: () => void;
    getTotalPrice: () => number;
    getItemCount: (productId: string) => number;
    getGroupedItems: () => CartItem[];
}




const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product, variant, quantity = 1) =>
                set((state) => {
                    const existingItem = state.items.find(
                        (item) =>
                            item.product._id === product._id &&
                            item.variant._key === variant._key
                    );

                    if (existingItem) {
                        return {
                            items: state.items.map((item) =>
                                item.product._id === product._id &&
                                    item.variant._key === variant._key
                                    ? {
                                        ...item,
                                        quantity: item.quantity + quantity,
                                    }
                                    : item
                            ),
                        };
                    }

                    return {
                        items: [
                            ...state.items,
                            {
                                product,
                                variant,
                                quantity,
                            },
                        ],
                    };
                }),



            removeItem: (productId, variantKey) =>
                set((state) => ({
                    items: state.items.reduce((acc, item) => {
                        if (
                            item.product._id === productId &&
                            item.variant._key === variantKey
                        ) {
                            if (item.quantity > 1) {
                                acc.push({
                                    ...item,
                                    quantity: item.quantity - 1,
                                });
                            }
                        } else {
                            acc.push(item);
                        }

                        return acc;
                    }, [] as CartItem[]),
                })),



            deleteCartProduct: (productId, variantKey) =>
                set((state) => ({
                    items: state.items.filter(
                        (item) =>
                            !(
                                item.product._id === productId &&
                                item.variant._key === variantKey
                            )
                    ),
                })),



            resetCart: () => set({ items: [] }),

            getTotalPrice: () => {
                return get().items.reduce((total, item) => {
                    return total + parsePrice(item.variant.price) * item.quantity;
                }, 0);
            },


            getItemCount: (productId) => {
                const item = get().items.find((item) => item.product._id === productId);
                return item ? item.quantity : 0;
            },
            getGroupedItems: () => get().items,
        }),
        { name: "cart-store" }
    )
);

export default useCartStore;