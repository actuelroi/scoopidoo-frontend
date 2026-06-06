'use client'

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../ui/table";

import { MY_ORDERS_QUERY_RESULT } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import Link from "next/link";

import { Button } from "../ui/button";
import PriceFormatter from "../PriceFormatter";

interface OrderDetailsDialogProps {
    order: MY_ORDERS_QUERY_RESULT[number] | null;
    isOpen: boolean;
    onClose: () => void;
}

const OrderDetailsDialog: React.FC<OrderDetailsDialogProps> = ({
    order,
    isOpen,
    onClose,
}) => {
    if (!order) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-scroll bg-white">
                <DialogHeader>
                    <DialogTitle>Détails de la commande - {order.orderNumber}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <p>
                        <strong>Customer:</strong> {order.customerName}
                    </p>
                    <p>
                        <strong>Email:</strong> {order.email}
                    </p>
                    <p>
                        <strong>Date:</strong>{" "}
                        {order.orderDate && new Date(order.orderDate).toLocaleDateString()}
                    </p>

                    <p>
                        <strong>Address:</strong>{" "}
                        {[
                            order.shippingAddress?.line1,
                            order.shippingAddress?.line2,
                            order.shippingAddress?.city,
                            order.shippingAddress?.postalCode,
                            order.shippingAddress?.country,
                        ]
                            .filter(Boolean)
                            .join(", ")}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        <span className="capitalize text-green-600 font-medium">
                            {order.status}
                        </span>
                    </p>
                    <p>
                        <strong>Numéro de facture :</strong> {order?.invoice?.number}
                    </p>
                    {order?.invoice && (
                        <Button className="bg-transparent border text-darkColor/80 mt-2 hover:text-darkColor hover:border-darkColor hover:bg-darkColor/10 hoverEffect ">
                            {order?.invoice?.hosted_invoice_url && (
                                <Link href={order?.invoice?.hosted_invoice_url} target="_blank">
                                   Télécharger la facture
                                </Link>
                            )}
                        </Button>
                    )}
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Variant</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Unit Price</TableHead>
                            <TableHead>Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {order.products?.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell className="flex items-center gap-2">
                                    {product?.product?.images && (
                                        <Image
                                            src={urlFor(product?.product?.images[0]).url()}
                                            alt="productImage"
                                            width={50}
                                            height={50}
                                            className="border rounded-sm"
                                        />
                                    )}

                                    {product?.product && product?.product?.name}
                                </TableCell>
                                <TableCell>{product?.quantity}</TableCell>
                                <TableCell>
                                    <PriceFormatter
                                        amount={product?.unitPrice ?? 0}
                                        className="text-black font-medium"
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {product?.product?.images?.[0] && (
                                            <Image
                                                src={urlFor(product.product.images[0]).url()}
                                                alt={product.product.name || ""}
                                                width={50}
                                                height={50}
                                                className="border rounded-sm"
                                            />
                                        )}

                                        <div>
                                            <p>{product?.product?.name}</p>

                                            {product?.flavor && (
                                                <p className="text-xs text-muted-foreground">
                                                    Flavor: {product.flavor}
                                                </p>
                                            )}

                                            {product?.taille && (
                                                <p className="text-xs text-muted-foreground">
                                                    Taille: {product.taille}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className="mt-4 text-right flex items-center justify-end">
                    <div className="w-44 flex flex-col gap-1">
                        <div className="w-full flex items-center justify-between">
                            <strong>Total: </strong>
                            <PriceFormatter
                                amount={order?.totalPrice ?? 0}
                                className="text-black font-bold"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDetailsDialog;