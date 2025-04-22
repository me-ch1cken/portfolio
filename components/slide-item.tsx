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
    return (
        <div className="relative w-64 h-40 group overflow-hidden rounded-xl">
            <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-contain bg-white transition duration-300 ease-in-out group-hover:brightness-20"
            />
            <div className="absolute inset-0 ps-4 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
                <h5>{name}</h5>
                <p className="text-white font-extralight text-sm">{description}</p>
                <a className="mt-2 me-2 text-blue-300 text-sm underline cursor-pointer hover:text-blue-400" href={projectUrl}>View project</a>-
                <a className="ms-2 text-sm underline text-blue-300 cursor-pointer hover:text-blue-400" href={githubUrl}>View source code</a>
            </div>
        </div>
    );
}
