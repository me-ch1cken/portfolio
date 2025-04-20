import { Card, CardContent } from "./ui/card";

interface SlideItemProps {
    name: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    tech: string[];
}

export default function SlideItem({name, description, tech, imageUrl, projectUrl, githubUrl}: SlideItemProps) {
    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-sm mb-4">{description}</p>
                <div className="text-xs text-gray-600">{tech.map((techItem) => techItem)}</div>
            </CardContent>
        </Card>
    );
}