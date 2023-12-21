"use server";

import { revalidatePath } from "next/cache";
import cloudinary from "@/utils/cloudinary";
import Photos from "@/app/Photos";

export default async function Home() {
    const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
        .sort_by("public_id", "desc")
        .max_results(400)
        .execute();
    revalidatePath("/");
    const res = results.resources;

    return <Photos res={res} />;
}
