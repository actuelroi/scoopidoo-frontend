
import { CardImages } from '@/components/product-detail/card-images'
import { ProductDescription } from '@/components/product-detail/product-description'
import ArticleSimilar from '@/components/product-detail/simlar-arcticle'
import { Product } from '@/sanity.types'
import { getProductBySlug } from '@/sanity/helpers'


interface Props{
    params:{
      slug: string
    }
}

const page = async ({params}:Props) => {
  
  const param = await params;
  
  const product = await getProductBySlug(param.slug)
  
  


  return (
   <>
   
   <CardImages data={product as Product}/>
   <ProductDescription data={product as Product}/>
   <ArticleSimilar data={product as Product} /> 
   
   
   </>
  )
}

export default page
