import Carousel from "@/components/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {

    return (
        <>
            <div className="container mx-auto my-4 lg:px-72 w-[90vw]">
                {/* NAVIGATION */}
                <nav className="w-full bg-white shadow rounded-sm px-6 py-4 mb-6 flex justify-between items-center sticky top-0 z-50">
                    <Link href="#projects" className="hover:text-blue-600 transition">Projects</Link>
                    <Link href="#tech" className="hover:text-blue-600 transition">Tech Stack</Link>
                    <Link href="#about" className="hover:text-blue-600 transition">About</Link>
                    <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
                </nav>
                {/* CONTENT */}
                <div className="flex items-center space-x-4 my-4">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Robbe"
                        className="w-20 h-20 rounded-full border-2 border-gray-300"
                    />
                    <div>
                        <h1 className="font-bold text-2xl">Hey! 👋</h1>
                        <p className="font-extralight">My name is <u>Robbe</u>, nice to meet you!</p>
                    </div>
                </div>

                <div className="my-4">
                    <h2 className="font-bold text-xl">🧑‍💻 About me</h2>
                    <p>I'm a young, passionate developer who doesn't fear a challenge. I don't limit myself to one tech-stack and keep myself up to date by working on side-projects in my free time.</p>
                </div>

                <Carousel />
            </div>
        </>
    )
}