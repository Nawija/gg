"use server";
import cloudinary from "@/utils/cloudinary";
import type { ImageProps } from "@/models/Image";
import Photos from "@/app/Photos";

export default async function Home() {
    const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
        .sort_by("public_id", "desc")
        .max_results(400)
        .execute();
        const res = results.resources
        console.log(res)
   

    return <Photos res={res} />;
}
