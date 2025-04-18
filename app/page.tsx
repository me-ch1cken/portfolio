import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "./assets/testimonials";

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
                    <h2 className="font-bold text-xl mb-2">🧑‍💻 About me</h2>
                    <p>I'm a young, passionate developer who doesn't fear a challenge. I don't limit myself to one tech-stack and keep myself up to date by working on side-projects in my free time.</p>
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

                <h2 className="font-bold text-xl">🤝 Want me on your team?</h2>
                <p className="font-extralight">Reach out to me!</p>

            </div>
        </>
    )
}