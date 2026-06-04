import Discover from '@/components/home/discover'
import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import HeroCard from '@/components/home/hero-card'
import { HeroSection } from '@/components/home/hero-section'
import Navigation from '@/components/home/navigation'
import ParfaitSection from '@/components/home/parfait-section'
import TryScoopidoo from '@/components/home/try-scoopidoo'
import { Product } from '@/sanity.types'

import { getFourProducts } from '@/sanity/helpers'
import { Loader } from 'lucide-react'
import { Suspense } from 'react'


const page = async () => {

  const data = await getFourProducts()

  return (
    <>
      <Suspense fallback={
        <div className='flex items-center justify-center'>
          <div className='flex items-center justify-center'>
            <Loader className='animate-spin' />
          </div>
        </div>
      }>


        <Header />
        <Navigation />
        <HeroSection />
        <HeroCard />
        <ParfaitSection />
        <TryScoopidoo />
        <Discover product={data as Product[]} />
        <Footer />
      </Suspense>
    </>
  )
}

export default page
