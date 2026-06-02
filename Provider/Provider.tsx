
'use client'


import { CarteDrawer } from "@/components/carte-components/carte-drawer";
import { CreateAccountModal } from "@/modals/create-account-modal";
import { LoginModal } from "@/modals/login-modal";
import { useEffect, useState } from "react"



export const Provider = ()=>{

    const [client,setClient]= useState(false);

    useEffect(()=>{
        setClient(true)
    },[])


    if(!client){
        return;
    }

    return (
        <>
         <LoginModal/>
         <CreateAccountModal/>
         <CarteDrawer/>
        </>
    )
}


