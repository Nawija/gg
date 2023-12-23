"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface PhotoIdProps {
    photos: { id: string; url: string }[];
    nextPhotoId: string;
    prevPhotoId: string;
    photoIndex: number;
}
export default function PhotoId({
    photos,
    nextPhotoId,
    prevPhotoId,
    photoIndex,
}: PhotoIdProps) {
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                router.push(`/${nextPhotoId}`);
            } else if (e.key === "ArrowRight") {
                router.push(`/${prevPhotoId}`);
            } else if (e.key === "Escape") {
                router.push(`/`);
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [router, prevPhotoId, nextPhotoId]);

    const arrowBtn =
        "p-2 border font-semibold rounded-lg bg-gray-100 text-gray-900 absolute top-[80%] lg:top-1/2 hover:bg-white hover:text-red-600 transition-colors";

    return (
        <div className="flex items-center justify-center h-screen w-full relative overflow-hidden">
            <div
                className={`p-1 flex items-center justify-center text-center mx-auto top-0 left-0 h-full w-full relative`}
            >
                <Link
                    href={`/${nextPhotoId}`}
                    className={`${arrowBtn} lg:left-2 left-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                    </svg>
                </Link>
                <div className="w-full h-full relative flex items-center justify-center -z-10">
                    <Image
                        src={photos[photoIndex].url}
                        alt="photo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <Link
                    href={`/${prevPhotoId}`}
                    className={`${arrowBtn} lg:right-2 right-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
