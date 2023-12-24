import { notFound } from "next/navigation";
import getResults from "@/utils/cachedImages";
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

export default async function PhotoPage({
    params: { photoId },
}: PhotoPageProps) {
    const datoCms = await getResults();
    console.log(datoCms);
    const photos: Photo[] = datoCms;
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
