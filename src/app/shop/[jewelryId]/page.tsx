import { NextPage } from 'next';

type PageProps = {
    params: Promise<{ jewelryId: string }>;
    searchParams?: { [key: string]: string | string[] | undefined };
};

const JewelryId: NextPage<PageProps> = async ({ params }) => {
    const resolvedParams = await params; // Разрешаем промис
    const { jewelryId } = resolvedParams;
    return (
        <>
            <h1>Тип: {jewelryId}</h1>
        </>
    );
};

export default JewelryId;