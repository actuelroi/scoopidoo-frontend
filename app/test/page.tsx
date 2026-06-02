'use client'

import { Button } from "@/components/ui/button";
import { deleteSession, Session } from "@/lib/session";
import { useLogStore } from "@/store/login.store";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";


export default function Home() {

  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const { onOpen } = useLogStore()
   
  const router = useRouter()
  
  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => {
        setSession(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && !session) {
      onOpen();
    }
  }, [loading, session, onOpen]);


  const handleLogout = async () => {
    setIsLoading(true)
    try {

      // const response = await axios.post(
      //   `${process.env.NEXT_PUBLIC_BACK_URL}/api/user/logout`,
      //   {},{
      //     headers: {
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${session?.accessToken}`
      // },
      //   }
      // );

      await deleteSession()
      setSession(null);
      toast.success('Deconnecter avec success')
      router.refresh()

    } catch (error: any) {
      console.log(error.response?.data);
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ??
          "Something went wrong"
        );
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div>
      hello world
      {session ? (
       <div className="flex flex-col gap-4">
         <p>{session.user.email}</p>
         <Button variant={'destructive'} onClick={handleLogout} disabled={isLoading}>
          Logout
         </Button>
       </div>
      ) : (
        <div />


      )
      }

      
    </div>
  );
}
