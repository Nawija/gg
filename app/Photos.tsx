"use client";

// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import Modal from "@/components/Modal";
import type { ImageProps } from "@/components/models/Image";

interface PhotosProps {
    res: ImageProps[];
}
export default function Photos({ res }: PhotosProps) {
    const images: ImageProps[] = res;
    return (
        <>
            <main className="mx-auto max-w-[1960px]">
                {images.length > 0 && (
                    <div className="h-[80vh] w-full relative flex flex-col items-center justify-center">
                        <Image
                            alt="Next.js Conf photo"
                            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${images[0].public_id}.${images[0].format}`}
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                        <div className="absolute bg-white/70 inset-0" />
                        <h1 className="lg:text-8xl text-4xl text-black/70 z-10 font-thin drop-shadow-2xl">
                            Ogladaj zdjęcia
                        </h1>
                        <div className="z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={0.3}
                                stroke="currentColor"
                                className="lg:w-32 lg:h-32 w-12 h-20 mt-20 cursor-pointer"
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
                )}
                <nav className="sticky top-0 flex z-50 overflow-x-scroll lg:overflow-x-auto bg-gray-100/90 backdrop-blur-sm">
                    <div className=" w-full flex items-center justify-start lg:justify-end px-3 lg:px-12 p-1.5">
                        <div className="flex lg:text-sm text-xs">
                            <button className="flex items-end justify-center space-x-2 hover:bg-white rounded-xl py-2 px-4 w-max">
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
                                        d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                    />
                                </svg>

                                <span>Pobierz Zdjęcia</span>
                            </button>
                            <button className="flex items-end justify-center space-x-2 hover:bg-white rounded-xl py-2 px-4 w-max">
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
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                                <span>Pobierz Ulubione</span>
                            </button>
                            <button className="flex items-end justify-center space-x-2 hover:bg-white rounded-xl py-2 px-4 w-max">
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
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>

                                <span>Ulubione</span>
                            </button>
                            <button className="flex items-end justify-center space-x-2 hover:bg-white rounded-xl py-2 px-4 w-max">
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
                                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                    />
                                </svg>

                                <span>Udostępnij</span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="columns-1 gap-2 sm:columns-2 xl:columns-3 2xl:columns-4 p-2">
                    {images.slice(0, 4).map(({ id, public_id, format }) => (
                        <Link
                            key={id}
                            href={`/?photoId=${id}`}
                            as={`/p/${id}`}
                            shallow
                            className="after:content group relative mb-2 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                        >
                            <Image
                                alt="Next.js Conf photo"
                                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`}
                                height={500}
                                width={500}
                                priority
                            />
                        </Link>
                    ))}
                    {images.slice(4).map(({ id, public_id, format }) => (
                        <Link
                            key={id}
                            href={`/?photoId=${id}`}
                            as={`/p/${id}`}
                            shallow
                            className="after:content group relative mb-2 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                        >
                            <Image
                                alt="Next.js Conf photo"
                                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${public_id}.${format}`}
                                height={500}
                                width={500}
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
