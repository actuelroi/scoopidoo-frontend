import { Inria_Sans } from "next/font/google";
import Image from "next/image";


const inriaSans = Inria_Sans({
    weight: '400'
});



const page = () => {
    return (
        <section className='p-8'>
            <h1 className={`${inriaSans.className} text-2xl md:text-4xl text-center font-bold mb-12 text-[#003E34]`}>Transformations à faire remuer la queue</h1>
            <div className={`grid grid-cols-2 md:grid-cols-3 ${inriaSans.className} gap-2 md:gap-8 px-5 jmd:px-10`}>
                <div className="flex flex-col bg-white/80  rounded-2xl">
                    <div className=" h-80 ">
                        <div className="bg-linear-gradient from-green-500 to-green-600 w-full rotate-12" />
                        <div className="relative w-full h-full">
                            <Image src={'/Image/avis-1.webp'} alt="avis 1" fill className="rounded-2xl" />
                        </div>
                    </div>
                    <div className="p-4 flex flex-col ">
                        <h1>
                            Après seulement quelques semaines de traitement avec Scoopidoo, c'était formidable de voir que Snoopy Girl faisait trois selles bien formées et parfaites chaque jour, et que son ventre ne gargouillait plus !
                        </h1>
                        <h3>Michelle, la maîtresse de Snoopy Girl</h3>
                    </div>
                </div>
                <div className="flex flex-col bg-white/80  rounded-2xl">
                    <div className=" h-80 ">
                        <div className="bg-linear-gradient from-green-500 to-green-600 w-full rotate-12" />
                        <div className="relative w-full h-full">
                            <Image src={'/Image/avis-2.webp'} alt="avis 1" fill className="rounded-2xl" />
                        </div>
                    </div>
                    <div className="p-4 flex flex-col ">
                        <h1>
                            J&apos;ai passé une commande chez Scoopidoo et les résultats ont été immédiats. Kira, la pointilleuse, a plongé dedans, léchant le bol, et Nala a arrêté de démanger – ça a été un changement tellement incroyable !
                        </h1>
                        <h3>COLLEEN, la maman de fourrure de Nala et Kira</h3>
                    </div>
                </div>
                 <div className="flex flex-col bg-white/80  rounded-2xl">
                    <div className=" h-80 ">
                        <div className="bg-linear-gradient from-green-500 to-green-600 w-full rotate-12" />
                        <div className="relative w-full h-full">
                            <Image src={'/Image/avis-3.webp'} alt="avis 1" fill className="rounded-2xl" />
                        </div>
                    </div>
                    <div className="p-4 flex flex-col ">
                        <h1>
                            L&apos;amélioration de Buddy a été spectaculaire. Fini les démangeaisons ! Son pelage est devenu lisse, doux et brillant. C&apos;est ce qui lui a fait le plus grand bien !
                        </h1>
                        <h3>Ana, la maîtresse de Buddy</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
