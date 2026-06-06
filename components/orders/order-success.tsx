'use client'

import { Session } from "@/lib/session"
import { MY_ORDERS_QUERY_RESULT } from "@/sanity.types"
import useCartStore from "@/store/carte.store";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Instrument_Sans } from "next/font/google";

interface Props {
    data: MY_ORDERS_QUERY_RESULT,

}



const instrumentSans = Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});




export function OrderSuccess({ data}: Props) {

    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber");
    const clearCart = useCartStore((state) => state.resetCart);

    useEffect(() => {
    if (orderNumber) {
      clearCart();
    }
  }, [orderNumber, clearCart]);


    return (
        <div className={`py-10 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 ${instrumentSans.className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-24 h-24 bg-[#10B193] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                >
                    <Check className="text-white w-12 h-12" />
                </motion.div>

                <h1 className="text-3xl font-bold text-[#003E34] mb-4">
                    Commande confirmée !
                </h1>
                <div className="space-y-4 mb-8 text-left">
                    <p className="text-gray-700">
                        Merci pour votre achat. Nous traitons votre commande et

                        l&apos;expédierons prochainement. Un courriel de confirmation contenant les détails de votre commande vous sera
                        envoyé sous peu.
                    </p>
                    <p className="text-gray-700">
                        Numero de command:{" "}
                        <span className="text-black font-semibold">{orderNumber}</span>
                    </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                    <h2 className="font-semibold text-gray-900 mb-2">
                        Et ensuite ?
                    </h2>
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>Veuillez consulter votre boîte mail pour la confirmation de votre commande.</li>
                        <li>Nous vous informerons lorsque votre commande sera expédiée.</li>
                        <li>Suivez l&apos;état de votre commande à tout moment</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-2">Commandes recentes</h3>
                    <div className="space-y-2">
                        {data.map((order) => (
                            <div
                                key={order?._id}
                                className="flex justify-between items-center bg-gray-50 p-2 rounded"
                            >
                                <span className="text-gray-700 text-sm font-medium">
                                    {order?._id}
                                </span>
                                <span className="text-sm font-medium px-2 py-1 bg-gray-200 rounded-full">
                                    {order.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 py-3 font-semibold bg-[#10B193] text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Accueil
                    </Link>
                    <Link
                        href="/orders"
                        className="flex items-center justify-center px-4 py-3 font-semibold bg-white text-black border border-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
                    >
                        <Package className="w-5 h-5 mr-2" />
                        Commandes
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center justify-center px-4 py-3 font-semibold bg-[#10B193] text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md"
                    >
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Panier
                    </Link>
                </div>
            </motion.div>
        </div>
    )

}