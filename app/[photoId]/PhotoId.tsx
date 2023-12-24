"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

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
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

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

            <AnimatePresence initial={false} custom={direction}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={photos[photoIndex].url}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                                router.push(`/${nextPhotoId}`);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                                router.push(`/${prevPhotoId}`);
                            }
                        }}
                    />
                </AnimatePresence>
            </AnimatePresence>

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
    );
}
