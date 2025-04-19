
type PageProps = {
    params: Promise<{ jewelryId: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  };
  
  export default async function JewelryId({ params }: PageProps) {
    const resolvedParams = await params; // Resolve params promise
    // const resolvedSearchParams = await searchParams; 
    const { jewelryId } = resolvedParams;
  
    return (
      <>
      </>
    );
  }