import { Inria_Sans, Irish_Grover,Inter } from "next/font/google";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";


const inriaSans = Inria_Sans({
    weight: '400'
});

const irish = Irish_Grover({
    weight: '400'
});
const inter = Inter({
    weight: '400'
});


const TryScoopidoo = () => {
    return (
        <section className='mt-30 relative p-10 bg-linear-to-b from-[#003930] to-[#009F86] rounded-3xl min-h-screen'>

            <div className="absolute top-0 left-60 w-30 h-20 bg-[#FFFAEC] rounded-b-3xl px-2 ">
                <p className={`text-sm text-center text-[#32766A] font-semibold ${inriaSans.className} mb-2`} style={{ lineHeight: '1.2', fontSize: '10px' }}>
                    Apprecier par nos cliens
                </p>
                <div className="p-2 text-center items-center bg-[#014338] relative">
                    <FaCheckCircle className="text-[#10B193] font-semibold absolute -top-1 left-2" />
                    <h3 className={` text-[#FFFAEC] font-bold ${irish.className}`}>
                        Scoopidoo
                    </h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-15 p-8 max-w-6xl mx-auto ">
                <div className="flex flex-col gap-5 p-5 items-center justify-center">
                    <h1 className={`text-5xl font-bold text-white mb-6 ${inter.className}`}>
                        Amélioration des selles de mon chien en <span className="text-[#10B193]">14 jours</span>
                    </h1>
                  
                        <p className={`text-sm py-3 text-center max-w-80 px-6 rounded-2xl bg-[#FFFAEC] text-[#01443A] cursor-pointer mb-4 mt-10 ${inriaSans.className}`}>
                            Essayez Scoopidoo
                        </p>
                    
                </div>

                <div className="flex ">
                    <div className={`flex flex-col  justify-between items-center`}>
                        <Image src={'/Image/better-1.webp'} alt="chien heureux après avoir mangé" width={100} height={100}  />
                        <Image src={'/Image/better-2.webp'} alt="chien heureux après avoir mangé" width={100} height={100}  />
                        <Image src={'/Image/better-3.webp'} alt="chien heureux après avoir mangé" width={100} height={100}  />
                    </div>
                    <div className={`flex flex-col  relative w-150 h-100 justify-between items-center`}>
                        <Image src={'/Image/better-4.webp'} alt="chien heureux après avoir mangé" fill  />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default TryScoopidoo
