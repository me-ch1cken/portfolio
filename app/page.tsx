import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "./assets/testimonials";
import ContactForm from "@/components/contact-form";
import { Github, Linkedin } from "lucide-react";
import Head from "next/head";

export default function LandingPage() {

    const skills = [
        { path: 'icons/css.svg', name: 'CSS' },
        { path: 'icons/docker.svg', name: 'Docker' },
        { path: 'icons/googlecloud.svg', name: 'Google Cloud' },
        { path: 'icons/hibernate.svg', name: 'Hibernate' },
        { path: 'icons/html5.svg', name: 'HTML5' },
        { path: 'icons/nextdotjs.svg', name: 'Next.js' },
        { path: 'icons/nodedotjs.svg', name: 'Node.js' },
        { path: 'icons/postgresql.svg', name: 'PostgreSQL' },
        { path: 'icons/python.svg', name: 'Python' },
        { path: 'icons/react.svg', name: 'React' },
        { path: 'icons/springboot.svg', name: 'Spring Boot' },
        { path: 'icons/typescript.svg', name: 'TypeScript' },
        { path: 'icons/vercel.svg', name: 'Vercel' },
    ];

    return (
        <>
            <div className="container mx-auto my-4 lg:px-72 w-[90vw]">
                {/* NAVIGATION */}
                <Navbar />
                {/* CONTENT */}
                <div className="flex items-center space-x-4 my-4">
                    <img
                        src="robbe-cv.jpeg"
                        alt="Robbe"
                        className="w-20 h-20 rounded-full border-2 border-gray-300"
                    />
                    <div>
                        <h1 className="font-bold text-2xl">Hey! 👋</h1>
                        <p className="font-extralight">My name is <u>Robbe</u>, nice to meet you!</p>
                    </div>
                </div>

                <div className="my-4">
                    <h2 className="font-bold text-xl mb-2">🧑‍💻 About me</h2>
                    <p>I&apos;m a young, passionate developer who doesn&apos;t fear a challenge. I don&apos;t limit myself to one tech-stack and keep myself up to date by working on side-projects in my free time.</p>
                </div>

                <h2 className="font-bold text-xl mb-2">💼 What have I worked on?</h2>
                <Carousel />

                <div className="my-4">
                    <h2 className="font-bold text-xl mb-2">💻 What have I worked with before?</h2>
                    <div className="flex justify-start md:justify-start overflow-x-auto gap-3 whitespace-nowrap py-2">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center first:ml-0 last:mr-0 me-2"
                            >
                                <img
                                    src={skill.path}
                                    alt={skill.name}
                                    className="w-8 h-8 mb-1"
                                />
                                <span className="text-xs text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <h2 className="font-bold text-xl">💭 What do people think about me?</h2>
                <AnimatedTestimonials testimonials={testimonials} />

                <div className="my-4">
                    <h2 className="font-bold text-xl">🤝 Want me on your team?</h2>
                    <p className="font-extralight">Reach out to me!</p>
                    <ContactForm />
                </div>
            </div>

            <footer className="bg-gray-200 py-6 mt-8">
                <div className="container mx-auto w-[90vw] lg:px-72 flex flex-col items-center justify-center gap-2 text-gray-600">
                    <div className="flex gap-2">
                        <a href="https://github.com/me-ch1cken" target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5 hover:text-gray-900 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/robbe-decroo/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-5 h-5 hover:text-blue-700 transition" />
                        </a>
                    </div>
                    <p className="text-sm font-extralight">Designed & developed by Robbe Decroo</p>
                </div>
            </footer>
        </>
    )
}