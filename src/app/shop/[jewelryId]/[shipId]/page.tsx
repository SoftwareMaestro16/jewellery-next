import Image from 'next/image';
import { JewelryItem } from '../../page';

type PageProps = {
  params: Promise<{ jewelryId: string; shipId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const toSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

export default async function ShipId({ params }: PageProps) {
  const resolvedParams = await params; 
  const { jewelryId, shipId } = resolvedParams;

  const res = await fetch('https://68000237b72e9cfaf72691a3.mockapi.io/shop', {
    cache: 'force-cache',
    next: {
      revalidate: 3600,
    },
  });
  const json = await res.json();

  const data = json[0] as Record<string, Omit<JewelryItem, 'type'>[]>;

  const items: JewelryItem[] = data[jewelryId]
    ? data[jewelryId].map((item) => ({
        ...item,
        type: jewelryId,
      }))
    : [];

  const item = items.find((el) => toSlug(el.name) === shipId);

  return (
    <div className="mt-20 sm:mt-24 px-4 sm:px-10 md:px-16 lg:px-22">
      {item ? (
        <div className="max-w-4xl mx-auto bg-white border rounded-lg shadow-md p-6 sm:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="object-cover w-full h-[300px] sm:h-[400px] rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold capitalize mb-2">{item.name}</h1>
              <p className="text-gray-600 text-sm sm:text-base mb-4">{item.description}</p>
              <p className="text-black text-lg sm:text-xl font-bold mb-2">$ {item.price}</p>
              <p className="text-gray-500 text-sm sm:text-base capitalize mb-4">{item.type}</p>
              <button className="mt-auto bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Товар "{shipId}" в категории "{jewelryId}" не найден.</p>
      )}
    </div>
  );
}