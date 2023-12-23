"use client";

import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ImageDatoCms, ImageCarousel } from "@/components/models/Image";
import Image from "next/image";
import { useState } from "react";

export default function Photos({
    data,
    images,
}: {
    data: ImageDatoCms[];
    images: ImageCarousel[];
}) {
    const [galleryCarousel, setGalleryCarousel] = useState(false);
    const galleryRef = useRef(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const hangleGalleryCarousel = () => {
        setGalleryCarousel(!galleryCarousel);
    };

    const scrollToGallery = () => {
        if (!galleryCarousel && galleryRef.current) {
            window.scrollTo({
                top: galleryRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {!galleryCarousel ? (
                <>
                    <main className="mx-auto max-w-[1960px]">
                        {data.length > 0 && (
                            <div className="relative h-screen w-full flex flex-col items-center justify-center">
                                <Image
                                    alt="Next.js Conf photo"
                                    src={data[0].url}
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                                <div className="absolute bg-gradient-to-t from-black/50 to-black/20 inset-0" />
                                <div
                                    className="z-10 flex items-center justify-center text-center flex-col mt-20 text-white space-y-6"
                                    ref={ref}
                                >
                                    <h1
                                        className="text-6xl"
                                        style={{
                                            transform: isInView
                                                ? "none"
                                                : "translateY(200px)",
                                            opacity: isInView ? 1 : 0,
                                            transition:
                                                "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)",
                                        }}
                                    >
                                        Ania & Marek
                                    </h1>
                                    <p
                                        style={{
                                            transform: isInView
                                                ? "none"
                                                : "translateY(100px)",
                                            opacity: isInView ? 1 : 0,
                                            transition:
                                                "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                                        }}
                                        className="font-extralight text-lg tracking-widest"
                                    >
                                        19/12/2023
                                    </p>
                                    <div
                                        style={{
                                            transform: isInView
                                                ? "none"
                                                : "translateX(100px)",
                                            opacity: isInView ? 1 : 0,
                                            transition:
                                                "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
                                        }}
                                    >
                                        <button
                                            onClick={scrollToGallery}
                                            className="border-2 py-2 px-4 hover:bg-white hover:text-black transition-colors text-sm font-medium"
                                        >
                                            Zobacz Galerie
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <nav
                            ref={galleryRef}
                            className="flex z-50 overflow-x-scroll lg:overflow-x-auto bg-white/60 backdrop-blur-sm"
                        >
                            <div className=" w-full flex items-center justify-start lg:justify-end px-3 lg:px-12 py-3">
                                <div className="flex lg:text-sm text-xs">
                                    <button className="flex items-center justify-center space-x-1 hover:bg-black/10 transition-colors rounded-xl py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={0.6}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                            />
                                        </svg>
                                    </button>
                                    <button className="flex items-center justify-center space-x-1 hover:bg-black/10 transition-colors rounded-xl py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={0.6}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                            />
                                        </svg>
                                    </button>
                                    <button className="flex items-center justify-center space-x-1 hover:bg-black/10 transition-colors rounded-xl py-2 px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={0.6}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </button>
                                    <button className="flex items-center justify-center hover:bg-black/10 transition-colors rounded-xl p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={0.6}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </nav>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 px-4">
                            {data.map(({ id, url }) => (
                                <Link
                                    key={id}
                                    href={`/?photoId=${id}`}
                                    as={`/p/${id}`}
                                    shallow
                                    className="after:content group relative block w-full h-52 overflow-hidden"
                                >
                                    <Image
                                        alt="Next.js Conf photo"
                                        src={url}
                                        fill={true}
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute translate-y-full group-hover:translate-y-0 transition-all inset-0 bg-gradient-to-t via-transparent from-black/70 duration-200 ">
                                        <div className="absolute p-2 w-full bottom-0 left-0 flex items-center justify-end text-white space-x-2">
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
                                        </div>
                                    </div>
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
            ) : (
                <div className="relavite">
                    <ImageGallery
                        autoPlay
                        showThumbnails={false}
                        items={images}
                    />
                    <button
                        className="outline-white outline-2 p-1 text-black absolute top-2 right-2 z-20"
                        onClick={hangleGalleryCarousel}
                    >
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
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
