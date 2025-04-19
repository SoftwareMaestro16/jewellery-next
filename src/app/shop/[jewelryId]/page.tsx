import { NextPage } from 'next';

type PageProps = {
  params: Promise<{ jewelryId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const JewelryId: NextPage<PageProps> = async ({ params, searchParams }) => {
  const resolvedParams = await params; // Resolve params promise
  const resolvedSearchParams = await searchParams; // Resolve searchParams promise
  const { jewelryId } = resolvedParams;

  return (
    <>
      <h1>Тип: {jewelryId}</h1>
      <pre>{JSON.stringify(resolvedSearchParams, null, 2)}</pre> {/* Optional: Display searchParams */}
    </>
  );
};

export default JewelryId;