
'use client'
import { Button } from "@/components/ui/button"

import { useCartDrawerStore } from "@/store/carte-drower.store"
import { ChevronDown, X } from "lucide-react"
import { Instrument_Sans } from "next/font/google";
import { IoMdInformationCircle } from "react-icons/io";

import Image from "next/image";

import { Inria_Sans, Josefin_Sans } from "next/font/google";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../ui/sheet"
import useCartStore from "@/store/carte.store";
import { urlFor } from "@/sanity/lib/image";
import { DeliveredDate } from "@/lib/utils";
import { useState } from "react";
import { createCheckoutSession, Metadata } from "@/actions/checkout";
import { toast } from "sonner";

const inria = Inria_Sans({
    weight: '400'
});

const josefin = Josefin_Sans({
    weight: '400'
});




export function CarteDrawer() {

    const { isOpen, onClose, onOpen } = useCartDrawerStore()
    const [isLoading, setIsLoading] = useState(false)

    const { deleteCartProduct, addItem, getGroupedItems, getItemCount, getTotalPrice, items, removeItem, resetCart } = useCartStore()

    const groupedItems = useCartStore((state) => state.getGroupedItems());


    const handleCheckout = async () => {
        setIsLoading(true);
        try {
            const metadata: Metadata = {
                orderNumber: crypto.randomUUID(),
                customerName: "Test-name",
                customerEmail: "Testemail@email.com",
                userId: 'Test-user-ID',
            };
            const checkoutUrl = await createCheckoutSession(groupedItems, metadata);
            if (checkoutUrl) {
                window.location.href = checkoutUrl;
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
            toast.error('Paiement echoue , veuillez re-essayer plus tard!')
        } finally {
            setIsLoading(false);
        }
    };


    const handleResetCart = () => {
        const confirmed = window.confirm("Etes vous sure de vouloir reinstialiser votre cart?");
        if (confirmed) {
            resetCart();
            toast.success("Votre cart a ete reinstialiser avec succes!");
        }
    };




    return (
        <Sheet open={isOpen}
            onOpenChange={(open) => {
                if (open) onOpen()
                else onClose()
            }}>
            <SheetContent className="">
                <SheetHeader className="flex flex-row items-center justify-between">
                    <SheetTitle>Votre panier ({items.length} articles)</SheetTitle>

                </SheetHeader>
                <div className="flex flex-col overflow-y-auto">
                    {items.length === 0 ? (
                        <div className="flex items-center justify-center py-10">
                            <p className="text-muted-foreground">
                                Votre panier est vide
                            </p>
                        </div>
                    ) : (
                        <>
                            {
                                items.map((item) => {
                                    const image = item.product.images?.[0];

                                    const numericPrice = parseFloat(
                                        (item.variant.price ?? "0")
                                            .replace(",", ".")
                                            .replace(/[^\d.]/g, "")
                                    );
                                    const itemCount = getItemCount(item.product._id);


                                    const itemTotal = numericPrice * item.quantity;


                                    return (
                                        <div
                                            key={`${item.product._id}-${item.variant._key}`}
                                            className="flex gap-4 p-4"
                                        >
                                            <div className="w-30 h-35 relative shrink-0">
                                                <Image
                                                    src={
                                                        image?.asset
                                                            ? urlFor(image)
                                                                .width(300)
                                                                .height(400)
                                                                .auto("format")
                                                                .quality(80)
                                                                .url()
                                                            : "/Image/head.png"
                                                    }
                                                    alt={item.product.name ?? "Product"}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>

                                            <div
                                                className={`w-full flex flex-col gap-2 ${inria.className}`}
                                            >
                                                <h1 className="max-w-xs">
                                                    {item.product.description}
                                                </h1>

                                                <p
                                                    className={`text-sm sm:text-base md:text-lg ${josefin.className} text-[#014338] font-bold`}
                                                >
                                                    {itemTotal.toLocaleString("fr-FR", {
                                                        style: "currency",
                                                        currency: "EUR",
                                                    })}
                                                </p>
                                                {item.variant.flavor && (
                                                    <p
                                                        className={`text-sm font-light ${josefin.className}`}
                                                    >
                                                        Saveur:
                                                        <span className="font-semibold ml-1">
                                                            {item.variant.flavor}
                                                        </span>
                                                    </p>
                                                )}

                                                {item.variant.taille && (
                                                    <p
                                                        className={`text-sm font-light ${josefin.className}`}
                                                    >
                                                        Taille:
                                                        <span className="font-semibold ml-1">
                                                            {item.variant.taille}
                                                        </span>
                                                    </p>
                                                )}

                                                <p
                                                    className={`text-sm font-light ${josefin.className}`}
                                                >
                                                    Quantité:
                                                    <span className="font-semibold ml-1">
                                                        {item.quantity}
                                                    </span>
                                                </p>

                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() =>
                                                            removeItem(
                                                                item.product._id,
                                                                item.variant._key
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </Button>

                                                    <span>{item.quantity}</span>

                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() =>
                                                            addItem(
                                                                item.product,
                                                                item.variant
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </Button>
                                                </div>

                                                <Button
                                                    variant="destructive"
                                                    onClick={() =>
                                                        deleteCartProduct(
                                                            item.product._id,
                                                            item.variant._key
                                                        )
                                                    }
                                                >
                                                    Supprimer
                                                </Button>
                                                <Separator />
                                            </div>

                                        </div>
                                    );
                                })
                            }

                        </>
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter>
                        <div className="flex items-center justify-between px-4">
                            <h1>Sous-Total</h1>
                            <h1 className="font-semibold text-lg">
                                {getTotalPrice().toFixed(2)} €
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 px-4">
                            <p className="text-sm text-gray-400 ">Livraison prevue le {DeliveredDate()}
                            </p>
                            <IoMdInformationCircle className="size-4" />
                        </div>
                        <Button
                            onClick={handleCheckout}
                            disabled={isLoading}
                        >
                            {isLoading ? "Traitement" : " Passer au paiement"}
                           
                        </Button>

                        <Button variant="outline" onClick={handleResetCart}>Vider le panier</Button>

                    </SheetFooter>
                )}

            </SheetContent>
        </Sheet>
    )
}
