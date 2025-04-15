import Image from 'next/image';
import Link from 'next/link';

export function MainJewelry() {
  return (
    <div className="px-4 xs:px-6 sm:px-12 py-8 sm:py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-5">
        <Link href="/shop/rings" className="group relative block rounded-xl overflow-hidden">
          <Image
            src="/ring.jpg"
            alt="Rings"
            width={250}
            height={250}
            className="w-full max-w-full h-auto aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl xs:text-2xl sm:text-2xl font-extrabold">
            Rings
          </h2>
        </Link>
        <Link href="/shop/earrings" className="group relative block rounded-xl overflow-hidden">
          <Image
            src="/earrings.jpg"
            alt="Earrings"
            width={250}
            height={250}
            className="w-full max-w-full h-auto aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl xs:text-2xl sm:text-2xl font-extrabold">
            Earrings
          </h2>
        </Link>
        <Link href="/shop/bracelet" className="group relative block rounded-xl overflow-hidden">
          <Image
            src="/bracelet.jpg"
            alt="Bracelet"
            width={250}
            height={250}
            className="w-full max-w-full h-auto aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl xs:text-2xl sm:text-2xl font-extrabold">
            Bracelet
          </h2>
        </Link>
        <Link href="/shop/necklace" className="group relative block rounded-xl overflow-hidden">
          <Image
            src="/necklace.jpg"
            alt="Necklace"
            width={250}
            height={250}
            className="w-full max-w-full h-auto aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl xs:text-2xl sm:text-2xl font-extrabold">
            Necklace
          </h2>
        </Link>
        <Link href="/shop/brooch" className="group relative block rounded-xl overflow-hidden">
          <Image
            src="/brooch.jpg"
            alt="Brooch"
            width={250}
            height={250}
            className="w-full max-w-full h-auto aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl xs:text-2xl sm:text-2xl font-extrabold">
            Brooch
          </h2>
        </Link>
        <Link href="/shop/cufflinks" className="group relative block rounded-xl overflow-hidden">
          <Image
            src="/cufflinks.jpg"
            alt="Cufflinks"
            width={250}
            height={250}
            className="w-full max-w-full h-auto aspect-square object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <h2 className="absolute bottom-4 left-4 text-white text-xl xs:text-2xl sm:text-2xl font-extrabold">
            Cufflinks
          </h2>
        </Link>
      </div>
    </div>
  );
}