import Footer from '@/components/home/footer'
import Header from '@/components/home/header'
import Navigation from '@/components/home/navigation'
import { CardImages } from '@/components/product-detail/card-images'
import { ProductDescription } from '@/components/product-detail/product-description'
import ArticleSimilar from '@/components/product-detail/simlar-arcticle'


const page = () => {
  return (
   <>
   <Header/>
   <Navigation/>
   <CardImages/>
   <ProductDescription/>
   <ArticleSimilar/>
   <Footer/>
   
   </>
  )
}

export default page
