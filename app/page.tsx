import Photos from "@/app/Photos";
import type { ImageDatoCms, ImageCarousel } from "@/components/models/Image";

const fetchPhotoDatoCms = async () => {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { revalidate: 3 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: ` {
                reportazZChrztu {
                  img {
                    id
                    url
                  }
                }
              }`,
        }),
    });
    const json = await res.json();
    return json.data.reportazZChrztu.img;
};

export default async function Home() {
    const data: ImageDatoCms[] = await fetchPhotoDatoCms();
    const images: ImageCarousel[] = data.map((item) => ({
        original: item.url,
        thumbnail: item.url,
    }));

    console.log(images);
    return <Photos data={data} images={images} />;
}
