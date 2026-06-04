import { Inclusive_Sans } from "next/font/google";
import { ProductList } from "./product-list";
import { Product } from "@/sanity.types";
import { getSimilarProducts } from "@/sanity/helpers";

const inclusive = Inclusive_Sans({
    weight: '400'
});

interface Props {
    data: Product
}

const ArticleSimilar = async ({ data }: Props) => {

    const productSimilar = await getSimilarProducts({
        productId: data._id,
        age: data.age,
        marque: data.marque,
        pays: data.pays,
    });

    return (
        <section className={`lg:px-6 px-1 sm:px-2 min-h-screen ${inclusive.className} mt-8`}  >
            <div className="max-w-7xl mx-auto flex flex-col gap-5 px-5">
                <h1 className="text-lg">Article similaire</h1>


            </div>
            <ProductList data={productSimilar}/>

        </section>
    )
}

export default ArticleSimilar
