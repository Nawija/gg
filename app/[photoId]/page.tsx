import { notFound } from "next/navigation";
import PhotoId from "./PhotoId";

interface Photo {
    id: string;
    url: string;
}

interface DatoCmsResponse {
    data: {
        reportazZChrztu: {
            img: Photo[];
        };
    };
}

interface PhotoPageProps {
    params: {
        photoId: string;
    };
}

const fetchPhotoDatoCms = async (): Promise<DatoCmsResponse> => {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: "{ reportazZChrztu { img { id url } } }",
        }),
    });
    const datoCms = await res.json();
    return datoCms;
};

export default async function PhotoPage({
    params: { photoId },
}: PhotoPageProps) {
    const datoCms = await fetchPhotoDatoCms();
    const photos: Photo[] = datoCms.data.reportazZChrztu.img;
    const photoIndex = photos.findIndex((photo) => photo.id === photoId);

    if (photoIndex === -1) {
        return notFound();
    }
    const nextPhotoIndex = (photoIndex - 1 + photos.length) % photos.length;
    const prevPhotoIndex = (photoIndex + 1) % photos.length;
    const nextPhotoId = photos[nextPhotoIndex].id;
    const prevPhotoId = photos[prevPhotoIndex].id;
    return (
        <div className="flex flex-col max-w-screen-2xl mx-auto mb-20">
            <PhotoId
                photos={photos}
                photoIndex={photoIndex}
                nextPhotoId={nextPhotoId}
                prevPhotoId={prevPhotoId}
            />
        </div>
    );
}
