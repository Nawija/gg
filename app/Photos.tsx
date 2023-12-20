"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import type { ImageProps } from "@/models/Image";
import { useLastViewedPhoto } from "@/utils/useLastViewedPhoto";

export default function Photos({
    reducedResults,
}: {
    reducedResults: ImageProps;
}) {
    // const router = useRouter();
    // const { photoId } = router.q;
    const images = reducedResults;
    const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

    const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

    // useEffect(() => {
    //     // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    //     if (lastViewedPhoto && !photoId) {
    //         lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
    //         setLastViewedPhoto(null);
    //     }
    // }, [photoId, lastViewedPhoto, setLastViewedPhoto]);
    return (
        <>
            <main className="mx-auto max-w-[1960px]">
                {/* {photoId && (
                    <Modal
                        images={images}
                        onClose={() => {
                            setLastViewedPhoto(photoId);
                        }}
                    />
                )} */}
                {images.slice(0, 1).map(({ public_id, format }) => (
                    <div className="h-[93vh] w-full relative flex flex-col items-center justify-center">
                        <Image
                            alt="Next.js Conf photo"
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="absolute bg-white/70 inset-0" />
                        <h1 className="text-8xl text-black/70 z-10 font-thin drop-shadow-2xl">
                            Ogladaj zdjęcia
                        </h1>
                        <div className="z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={0.3}
                                stroke="currentColor"
                                className="w-32 h-32 mt-12 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    className="fill-black/90"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                                    className="fill-white/90"
                                />
                            </svg>
                        </div>
                    </div>
                ))}
                <nav className="sticky top-0 flex z-50">
                    <div className="bg-gray-100 w-full flex items-center justify-between px-12 p-2">
                        <Link href="/">Jarek Olszewski</Link>
                        <div className="flex text-sm">
                            <button className="flex items-end justify-center space-x-1.5 hover:bg-white rounded-xl py-2 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                    />
                                </svg>

                                <span>Pobierz Zdjęcia</span>
                            </button>
                            <button className="flex items-end justify-center space-x-1.5 hover:bg-white rounded-xl py-2 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                <span>Pobierz Ulubione</span>
                            </button>
                            <button className="flex items-end justify-center space-x-1.5 hover:bg-white rounded-xl py-2 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>

                                <span>Ulubione</span>
                            </button>
                            <button className="flex items-end justify-center space-x-1.5 hover:bg-white rounded-xl py-2 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                    />
                                </svg>

                                <span>Udostępnij</span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 p-4">
                    {images.map(({ id, public_id, format }) => (
                        <Link
                            key={id}
                            href={`/?photoId=${id}`}
                            as={`/p/${id}`}
                            ref={
                                id === Number(lastViewedPhoto)
                                    ? lastViewedPhotoRef
                                    : null
                            }
                            shallow
                            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                        >
                            <Image
                                alt="Next.js Conf photo"
                                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                                style={{
                                    transform: "translate3d(0, 0, 0)",
                                }}
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`}
                                width={720}
                                height={480}
                                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                            />
                        </Link>
                    ))}
                </div>
            </main>
            <footer className="p-6 text-center text-black/80 sm:p-12">
                Thank you to{" "}
                <a
                    href="https://edelsonphotography.com/"
                    target="_blank"
                    className="font-semibold hover:text-black"
                    rel="noreferrer"
                >
                    Josh Edelson
                </a>
                ,{" "}
                <a
                    href="https://www.newrevmedia.com/"
                    target="_blank"
                    className="font-semibold hover:text-black"
                    rel="noreferrer"
                >
                    Jenny Morgan
                </a>
                , and{" "}
                <a
                    href="https://www.garysextonphotography.com/"
                    target="_blank"
                    className="font-semibold hover:text-black"
                    rel="noreferrer"
                >
                    Gary Sexton
                </a>{" "}
                for the pictures.
            </footer>
        </>
    );
}
