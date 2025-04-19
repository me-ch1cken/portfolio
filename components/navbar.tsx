import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./ui/tooltip";

const Navbar: React.FC = () => {
    return (
        <TooltipProvider>
            <nav className="bg-white py-4 flex justify-end">
                <div className="flex gap-6 items-center">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="mailto:rdecroo24@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-black"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Get in touch</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="https://github.com/me-ch1cken"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-black"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>View GitHub</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="https://www.linkedin.com/in/robbe-decroo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-700"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Connect on LinkedIn</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </nav>
        </TooltipProvider>
    );
};

export default Navbar;
