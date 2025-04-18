import Carousel from "@/components/carousel";
import Navbar from "@/components/navbar";

export default function LandingPage() {

    const skills = [
        { path: 'css.svg', name: 'CSS' },
        { path: 'docker.svg', name: 'Docker' },
        { path: 'googlecloud.svg', name: 'Google Cloud' },
        { path: 'hibernate.svg', name: 'Hibernate' },
        { path: 'html5.svg', name: 'HTML5' },
        { path: 'nextdotjs.svg', name: 'Next.js' },
        { path: 'nodedotjs.svg', name: 'Node.js' },
        { path: 'postgresql.svg', name: 'PostgreSQL' },
        { path: 'python.svg', name: 'Python' },
        { path: 'react.svg', name: 'React' },
        { path: 'springboot.svg', name: 'Spring Boot' },
        { path: 'typescript.svg', name: 'TypeScript' },
        { path: 'vercel.svg', name: 'Vercel' },
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
            </div>
        </>
    )
}