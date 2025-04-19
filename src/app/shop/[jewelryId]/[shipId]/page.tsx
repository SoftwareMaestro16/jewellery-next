type ShipIdPageProps = {
  params: {
    jewelryId: string;
    shipId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ShipId({ params, searchParams }: ShipIdPageProps) {
  const { jewelryId, shipId } = params;
  
  const query = searchParams?.query || '';
  return (
    <div>
      <h1>Type: {jewelryId}</h1>
      <h2>Name (slug): {shipId}</h2>
      <p>Query: {query}</p>
    </div>
  );
}