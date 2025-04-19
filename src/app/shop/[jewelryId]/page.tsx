import { NextPage } from 'next';

type JewelryIdPageProps = {
    params: {
        jewelryId: string;
    };
};

const JewelryId: NextPage<JewelryIdPageProps> = async ({ params }) => {
    const { jewelryId } = params;
    return (
        <>
            <h1>Type: {jewelryId}</h1>
        </>
    );
};

export default JewelryId;