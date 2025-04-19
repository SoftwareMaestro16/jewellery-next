type JewelryIdPageProps = {
    params: {
      jewelryId: string;
    };
};

export default async function JewelryId({ params }: JewelryIdPageProps) {
    const { jewelryId } = params;
    // https://68000237b72e9cfaf72691a3.mockapi.io/shop

    return (
        <>
            <h1>Type: {jewelryId}</h1>
        </>
    )
}