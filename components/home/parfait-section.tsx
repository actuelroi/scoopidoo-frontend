import { Star } from "lucide-react"
import Image from "next/image"
import { Inria_Sans } from "next/font/google";
import { FaCheckCircle } from "react-icons/fa";


const inriaSans = Inria_Sans({
    weight: '400'
});


const ParfaitSection = () => {
    return (
        <section className=" flex flex-col  mt-60 px-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 px-6">
                <div className="flex  justify-center flex-col w-110  pl-6 rounded-3xl">
                    <div className=" w-full h-120 relative">
                        <Image src={'/Image/parfait.png'} alt="adorable chien en train de manger" fill className="rounded-t-3xl" />
                    </div>

                    <div className="flex items-center justify-between bg-[#f4ece0] py-4 px-8 rounded-b-3xl">


                        <div className={`flex flex-col ${inriaSans.className} text-[#32766A]`}>
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl font-semibold ">5.8  </h1>
                                <Star className="size-4 font-semibold" />
                            </div>
                            <h1 className="text-xs">800 +</h1>
                            <h3 className="text-xs">Avis</h3>
                        </div>

                        <div className={`flex flex-col ${inriaSans.className} text-[#32766A]`}>
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl font-semibold ">5   </h1>
                                <h2>Repas</h2>
                            </div>
                            <h1 className="text-xs">Riche en </h1>
                            <h3 className="text-xs">protéines</h3>
                        </div>



                        <div className={`flex flex-col ${inriaSans.className} text-[#32766A]`}>
                            <div className="flex items-center gap-3">
                                <h1 className="text-xl font-semibold ">14  </h1>
                                <h2 >Jours</h2>
                            </div>
                            <h1 className="text-xs">Pour </h1>
                            <h3 className="text-xs">l&apos;amélioration de la santé</h3>
                        </div>
                    </div>
                </div>




                <div className="flex flex-col gap-3">
                    <h1 className={`text-5xl mb-10 font-semibold ${inriaSans.className} text-[#005648]`}>Ce qu'il y a de <br /> mieux avec les aliments frais,<br /> c'est que tout est <span className="text-[#10B193]">parfait. </span> </h1>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-5">

                            <div className={`flex flex-col gap-3 rounded-3xl bg-[#DBE6DC] p-5 ${inriaSans.className} w-2/3 relative -rotate-6`}>
                                <h1 className="text-[#003E34] font-semibold">Plein de nutriments</h1>
                                <p className="text-xs text-[#4C7960]">Cuisson douce pour préserver les nutriments et permettre aux chiens d'en bénéficier</p>
                            </div>

                             <div className={`flex flex-col gap-3 rounded-3xl bg-[#DBE6DC] p-5 ${inriaSans.className} w-2/3 relative rotate-6`}>
                                <h1 className="text-[#003E34] font-semibold">Sans tracas</h1>
                                <p className="text-xs text-[#4C7960]">Les plats sont portionnés et livrés à votre porte</p>
                            </div>
                        </div>


                        <div className="flex flex-col gap-5">

                            <div className={`flex flex-col gap-3 rounded-3xl bg-[#DBE6DC] p-5 ${inriaSans.className} w-2/3 relative -rotate-6`}>
                                <FaCheckCircle className="text-[#003E34] font-semibold"/>
                                <p className="text-xs text-[#4C7960]">Afco complet et équilibré</p>
                            </div>

                             <div className={`flex flex-col gap-3 rounded-3xl bg-[#DBE6DC] p-5 ${inriaSans.className} w-2/3 relative`}>
                                <h1 className="text-[#003E34] font-semibold">Disparu en une seconde</h1>
                                <p className="text-xs text-[#4C7960]">Les aliments frais ont l'odeur et le goût de la nourriture, et les chiens aiment ça.</p>
                            </div>
                             <div className={`flex flex-col gap-3 rounded-3xl bg-[#10B193] p-5 ${inriaSans.className} w-2/3 relative`}>
                                <h1 className="text-white font-semibold">Obtenez votre plan pour chiens</h1>
                                <br /><br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ParfaitSection
