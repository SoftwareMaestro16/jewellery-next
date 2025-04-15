import Image from "next/image"
import Link from "next/link"

export default function NotFound() {

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-3 h-screen">
                <Link href="/" passHref className="flex flex-row items-center justify-center gap-3">
                <Image className='cursor-pointer' src='/vera-logo.png' alt='vera logo' width={125} height={125} priority />
                <div className="flex flex-col cursor-pointer">
                    <h1 className="text-6xl font-extrabold">404</h1>
                    <h2 className="text-4xl sm:text-5xl font-bold">Page Not Found</h2>
                </div>
                </Link>
            </div>
        </>
    )
}