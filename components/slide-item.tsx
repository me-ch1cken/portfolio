'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";

interface SlideItemProps {
    name: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    tech: string[];
}

export default function SlideItem({ name, description, tech, imageUrl, projectUrl, githubUrl }: SlideItemProps) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleOverlay = () => {
        if (isMobile) {
            setShowOverlay(prev => !prev);
        }
    };

    const isOverlayVisible = isMobile ? showOverlay : false;

    return (
        <div
            className="relative w-64 h-40 group overflow-hidden rounded-xl"
            onClick={toggleOverlay}
        >
            <img
                src={imageUrl}
                alt={name}
                className={`
                    w-full h-full object-contain bg-white transition duration-300 ease-in-out
                    ${isMobile && showOverlay ? 'brightness-20' : ''}
                    group-hover:brightness-20
                `}
            />

            <div
                className={`
                    absolute inset-0 ps-4 pt-2 text-white text-lg font-semibold
                    transition-opacity duration-300
                    ${isMobile ? (showOverlay ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'}
                `}
            >
                <h5>{name}</h5>
                <p className="text-white font-extralight text-sm">{description}</p>
                <a
                    className="mt-2 me-2 text-blue-300 text-sm underline cursor-pointer hover:text-blue-400"
                    href={projectUrl}
                    target="_blank"
                >
                    Demo
                </a>
                -
                <a
                    className="ms-2 text-sm underline text-blue-300 cursor-pointer hover:text-blue-400"
                    href={githubUrl}
                    target="_blank"
                >
                    Source code
                </a>
                <p className="font-extralight text-xs mt-2">
                    {tech.map((t, i) => (i === tech.length - 1 ? t : t + ' - '))}
                </p>
            </div>
        </div>
    );
}
