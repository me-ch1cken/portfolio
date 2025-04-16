import { Card, CardContent } from "./ui/card";

interface SlideItemProps {
    name: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
}

export default function SlideItem(/*{name, description, imageUrl, projectUrl, githubUrl}: SlideItemProps */) {
    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                <p className="text-sm mb-4">Short project description goes here.</p>
                <div className="text-xs text-gray-600">React • Node.js • PostgreSQL</div>
            </CardContent>
        </Card>
    );
}