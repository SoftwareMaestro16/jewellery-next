import { NextPage } from 'next';

type PageProps = {
    params: {
        jewelryId: string;
    };
};

const JewelryId: NextPage<PageProps> = async ({ params }) => {
    const { jewelryId } = params;
    return (
        <>
            <h1>Type: {jewelryId}</h1>
        </>
    );
};

export default JewelryId;