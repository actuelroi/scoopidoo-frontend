import { Inclusive_Sans } from "next/font/google";
import { ProductList } from "./product-list";

const inclusive = Inclusive_Sans({
    weight: '400'
});

const ArticleSimilar = () => {
    return (
        <section className={`lg:px-6 px-1 sm:px-2 min-h-screen ${inclusive.className}`}  >
            <div className="max-w-7xl mx-auto flex flex-col gap-5 px-5">
                <h1 className="text-lg">Article similaire</h1>
                
    
            </div>
            <ProductList />

        </section>
    )
}

export default ArticleSimilar
