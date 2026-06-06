



import { OrderSuccess } from "@/components/orders/order-success";
import { getSession } from "@/lib/session";
import { getMyOrders } from "@/sanity/helpers";
import { redirect } from "next/navigation";
import { toast } from "sonner";


const SuccessPage = async  () => {
  
  const session = await getSession()

  const userId= session?.user.id

  if(!userId){
    toast.error('Vous devez vous authentifier')
    return redirect('/')
  }
  
  const ordersDataFetch  = await getMyOrders(userId);

 
  
  

  

  return (
    <OrderSuccess
    data={ordersDataFetch}
  

    />
  );
};

export default SuccessPage;
