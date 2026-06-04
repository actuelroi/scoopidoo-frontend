import Footer from "@/components/home/footer"
import Header from "@/components/home/header"
import Navigation from "@/components/home/navigation"
import SearchProduct from "@/components/product-search/search-product"
import { getAllProducts } from "@/sanity/helpers"
import { Loader } from "lucide-react"
import { Suspense } from "react"


const page = async () => {

   const data = await getAllProducts()


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
        <SearchProduct product={data} />
        <Footer />
      </Suspense>

    </>
  )
}

export default page
