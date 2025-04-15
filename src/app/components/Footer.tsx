import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-200 p-6 sm:p-10 md:px-20 lg:px-28 xl:px-36">
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-10">
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <Image src='/vera-logo.png' alt='vera logo' width={34} height={34} priority />
            <h2 className="font-extrabold text-3xl">VERA</h2>
          </div>
          <h2 className="text-lg">Jewelry Boutique</h2>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h2 className="font-bold mb-1">Collections</h2>
          <ul className="space-y-0.5 text-md">
            <li>New Arrivals</li>
            <li>Bestsellers</li>
            <li>Classics</li>
            <li>Wedding Collection</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h2 className="font-bold mb-1">Information</h2>
          <ul className="space-y-0.5 text-md">
            <li>About Us</li>
            <li>Contacts</li>
            <li>Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h2 className="font-bold mb-1">Contact</h2>
          <ul className="space-y-0.5 text-md">
            <li>+7 (999) 123-45-67</li>
            <li>info@vera-jewelry.ru</li>
            <li>Moscow, Tverskaya St., 1</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}