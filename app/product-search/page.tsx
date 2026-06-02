import Footer from "@/components/home/footer"
import Header from "@/components/home/header"
import Navigation from "@/components/home/navigation"
import SearchProduct from "@/components/product-search/search-product"


const page = () => {
  return (
    <>
      <Header/>
      <Navigation/>
      <SearchProduct/>
      <Footer/>
    </>
  )
}

export default page
