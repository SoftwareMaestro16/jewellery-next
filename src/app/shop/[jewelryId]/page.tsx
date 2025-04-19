import { NextPage } from 'next';

interface PageProps {
    params: { [key: string]: string | string[] | undefined };
    searchParams?: { [key: string]: string | string[] | undefined };
}

const JewelryId: NextPage<PageProps> = async ({ params }) => {
    const { jewelryId } = params;
    return (
        <>
            <h1>Type: {jewelryId}</h1>
        </>
    );
};

export default JewelryId;