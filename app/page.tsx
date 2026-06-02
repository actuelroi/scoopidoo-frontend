import Discover from '@/components/home/discover'
import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import HeroCard from '@/components/home/hero-card'
import { HeroSection } from '@/components/home/hero-section'
import Navigation from '@/components/home/navigation'
import ParfaitSection from '@/components/home/parfait-section'
import TryScoopidoo from '@/components/home/try-scoopidoo'


const page = () => {
  return (
   <>
    <Header/>
    <Navigation/>
    <HeroSection/>
    <HeroCard/>
    <ParfaitSection/>
    <TryScoopidoo/>
    <Discover/>
    <Footer/>
   </>
  )
}

export default page
