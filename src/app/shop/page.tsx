import Image from "next/image";
import Link from "next/link";

export interface JewelryItem {
  type: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

const toSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

export default async function JewelryPage() {
  const res = await fetch("https://68000237b72e9cfaf72691a3.mockapi.io/shop", {
    cache: "force-cache",
    next: {
        revalidate: 3600
    }
  });
  const json = await res.json();

  const data = json[0] as Record<string, Omit<JewelryItem, 'type'>[]>;

  const allItems: JewelryItem[] = Object.entries(data).flatMap(
    ([type, items]) =>
      items.map((item) => ({
        ...item,
        type,
      }))
  );

  const shuffled = allItems.sort(() => Math.random() - 0.5);
  
  return (
    <div className="mt-20 sm:mt-24 flex flex-wrap items-center justify-center gap-6 px-4 sm:px-10 md:px-16 lg:px-22">
      {shuffled.map((el, index) => (
        <Link
          key={index}
          href={`/shop/${el.type}/${toSlug(el.name)}`}
          className="w-[46%] sm:w-[280px] h-[310px] sm:h-[380px] border rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-[1.03] flex flex-col overflow-hidden bg-white"
        >
          <Image
            src={el.image}
            alt={el.name}
            width={280}
            height={180}
            className="object-cover w-full h-[180px] sm:h-[230px]"
          />
          <div className="flex flex-col flex-grow p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold capitalize mb-1">{el.name}</h3>
            <p className="text-gray-600 truncate text-sm">{el.description}</p>
            <div className="mt-auto">
              <p className="text-black text-sm sm:text-base font-bold">$ {el.price}</p>
              <p className="text-gray-500 text-xs sm:text-sm capitalize">{el.type}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}