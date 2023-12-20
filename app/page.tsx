import cloudinary from "@/utils/cloudinary";
import type { ImageProps } from "@/utils/types";
import Photos from "@/app/Photos";

export default async function Home() {
    const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
        .sort_by("public_id", "desc")
        .max_results(400)
        .execute();
    let reducedResults: ImageProps[] = [];

    let i = 0;
    for (let result of results.resources) {
        reducedResults.push({
            id: i,
            height: result.height,
            width: result.width,
            public_id: result.public_id,
            format: result.format,
        });
        i++;
    }

    return <Photos reducedResults={reducedResults} />;
}
