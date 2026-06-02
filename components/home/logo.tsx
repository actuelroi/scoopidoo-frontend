import Link from 'next/link'
import { Irish_Grover } from "next/font/google";


const geistSans = Irish_Grover({
    weight: '400'
});

const Logo = () => {
    return (
        <Link href={'/'} className={`text-3xl cursor-pointer ${geistSans.className} text-[#005648]`}>
            Scoopidoo
        </Link>
    )
}

export default Logo
