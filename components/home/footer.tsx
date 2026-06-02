import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
    weight: '400'
});

const Footer = () => {
  return (
    <section className={`mt-40 flex flex-col items-center justify-center ${inter.className}`}>
         <div className='w-18 h-1 bg-black'/>
         <div className='flex p-10 items-center gap-6'>
            <h2 className='text-xs sm:text-sm md:text-[16px] '>
                Copyright © 2026, Scoupidou, Inc.
            </h2>
            <h2 className='text-xs sm:text-sm md:text-[16px] '>
                Conditions d'utilisation
            </h2>
            <h2 className='text-xs sm:text-sm md:text-[16px] '>
                Politique de confidentialité (mise à jour le 11 novembre 2025)
            </h2>
         </div>
    </section>
  )
}

export default Footer
