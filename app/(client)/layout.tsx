

import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import Navigation from '@/components/home/navigation'
import { PropsWithChildren } from 'react'

const HomeLayout = ({children}:PropsWithChildren) => {
  return (
    <>
      <Header />
     <Navigation />
     {children}
     <Footer />
    </>
  )
}

export default HomeLayout
