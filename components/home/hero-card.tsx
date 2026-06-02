import Image from "next/image"
import {Inria_Sans } from "next/font/google";


const inriaSans =Inria_Sans({
  weight: '400'
});


const HeroCard = () => {

    const cardItem = [
        {
            title: ' Pour une peau et un pelage en pleine santé',
            img: '/Image/hero-card-1.webp',
            color: '#10B193'
        },
        {
            title: ' Pour une haleine plus fraîche',
            img: '/Image/hero-card-2.webp',
            color: '#DAD2C4'

        },
        {
            title: ' Pour de meilleures selles',
            img: '/Image/hero-card-3.webp',
            color: '#257960'
        },
        {
            title: ' Pour un poids optimal',
            img: '/Image/hero-card-4.webp',
            color: '#DBE6DC'
        },
        {
            title: 'Pour le bien-être général',
            img: '/Image/hero-card-5.webp',
            color: '#005648'
        },
    ]

    return (
        <section className="py-4 px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {cardItem.map((item, i) => (
                <div
                    key={i}
                    className="relative h-64 rounded-md p-3 "
                    style={{ backgroundColor: item.color }}
                >
                    <h1 className={`text-white font-semibold relative z-10 ${inriaSans.className}`}>
                        {item.title}
                    </h1>

                    <Image
                        src={item.img}
                        alt="hero-card-image"
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            ))}
        </section>
    )
}

export default HeroCard
