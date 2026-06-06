import OrdersComponent from "@/components/orders/order-component";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getSession } from "@/lib/session";
import { getMyOrders } from "@/sanity/helpers";

import { FileX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const OrdersPage = async () => {
  const session = await getSession();

  const userId = session?.user?.id;

  if (!userId) {
    redirect("/");
  }

  const orders = await getMyOrders(userId);

  return (
    <div className="container p-10">
      {orders?.length > 0 ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              Mes commandes ({orders.length})
            </CardTitle>
          </CardHeader>

          <CardContent>
            <ScrollArea className="w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">
                      N° Commande
                    </TableHead>

                    <TableHead className="hidden md:table-cell">
                      Date
                    </TableHead>

                    <TableHead>
                      Client
                    </TableHead>

                    <TableHead className="hidden sm:table-cell">
                      Email
                    </TableHead>

                    <TableHead>
                      Total
                    </TableHead>

                    <TableHead>
                      Statut
                    </TableHead>

                    <TableHead className="hidden sm:table-cell">
                      Facture
                    </TableHead>

                    <TableHead className="hidden sm:table-cell">
                      Livraison
                    </TableHead>

                    <TableHead>
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <OrdersComponent orders={orders} />
              </Table>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 px-4">
          <FileX className="h-24 w-24 text-gray-400 mb-4" />

          <h2 className="text-2xl font-semibold text-gray-900">
            Aucune commande
          </h2>

          <p className="mt-2 text-sm text-gray-600 text-center max-w-md">
            Vous n&apos;avez encore passé aucune commande.
          </p>

          <Button asChild className="mt-6">
            <Link href="/">
              Continuer les achats
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;