type ShipIdPageProps = {
    params: {
      jewelryId: string;
      shipId: string;
    };
};
  
export default function ShipId({ params }: ShipIdPageProps) {
    const { jewelryId, shipId } = params;
  
    return (
      <div>
        <h1>Type: {jewelryId}</h1>
        <h2>Name (slug): {shipId}</h2>
      </div>
    );
}