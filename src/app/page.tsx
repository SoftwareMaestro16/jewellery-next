import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainJewelry } from './components/MainJewelry';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="px-4 sm:px-12">
        <div className="relative w-full h-[85vh] mt-20 sm:mt-24">
          <Image
            src="/jewelry.jpg"
            alt="Jewelry"
            fill
            sizes="100vw"
            priority
            className="object-cover rounded-xl z-0"
          />
          <div className="absolute inset-0 bg-black/40 rounded-xl z-10" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-xl px-6 py-8 sm:px-12 sm:py-10 max-w-fit sm:max-w-3xl text-center">
            <h1 className="text-black text-4xl sm:text-5xl font-extrabold mb-4 text-nowrap">
              Welcome to Vera
            </h1>
            <p className="text-black text-xl sm:text-2xl mb-6 ml-3 sm:ml-5 mr-3 sm:mr-5 md:mr-12 md:ml-12">
              Discover a collection of unique jewellery pieces created with love for detail.
            </p>
            <Link
              href="/shop"
              className="inline-block rounded-lg bg-black px-10 py-3.5 text-md font-semibold text-white hover:bg-gray-900"
            >
              Explore Jewelry
            </Link>
          </div>
        </div>
      </div>
      <MainJewelry />
    </>
  );
}