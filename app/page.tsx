import Photos from "@/app/Photos";
import type { ImageDatoCms } from "@/components/models/Image";
import getResults from "@/utils/cachedImages";

export default async function Home() {
    const data: ImageDatoCms[] = await getResults();
    console.log(data);
    return <Photos data={data} />;
}
