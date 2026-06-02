
import { Inclusive_Sans } from "next/font/google";


const inclusive = Inclusive_Sans({
    weight: '400'
});


export const ProductDescription = () => {
    return (
        <section className={`lg:px-6 px-1 sm:px-2 min-h-screen ${inclusive.className}`}  >
            <div className="max-w-7xl mx-auto flex flex-col gap-5 px-5">
                <h1 className="text-lg   mb-6">
                    Description du produit
                </h1>


                <h2 className="text-sm md:text-[16px] font-semibold">Details</h2>
                <ul className="flex flex-col gap-3">
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Aliment complet pour chien adulte de taille moyenne</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex ">Riche en protéines de haute qualité pour soutenir la santé musculaire</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Formulé avec des ingrédients naturels pour une digestion optimale</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Sans céréales, sans colorants artificiels ni conservateurs</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Disponible en sacs de 2 kg et 5 kg</li>
                    </div>
                </ul>


                 <h2 className="text-sm md:text-[16px] font-semibold">Information des incredients</h2>
                <ul className="flex flex-col gap-3">
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Aliment complet pour chien adulte de taille moyenne</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex ">Riche en protéines de haute qualité pour soutenir la santé musculaire</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Formulé avec des ingrédients naturels pour une digestion optimale</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Sans céréales, sans colorants artificiels ni conservateurs</li>
                    </div>
                    <div className="flex items-center gap-2" >
                        <div className="w-1 h-1 rounded-full bg-black" />
                        <li className="text-sm md:text-[16px] flex "> Disponible en sacs de 2 kg et 5 kg</li>
                    </div>

                </ul>
            </div>
        </section>
    )
}