'use client';

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "../../components/SectionTitle";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";

// Dynamic imports for icons to reduce bundle size
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => mod.FaGithub));
const FaExternalLinkAlt = dynamic(() => import("react-icons/fa").then(mod => mod.FaExternalLinkAlt));
const FaCode = dynamic(() => import("react-icons/fa").then(mod => mod.FaCode));
const FaDatabase = dynamic(() => import("react-icons/fa").then(mod => mod.FaDatabase));
const FaReact = dynamic(() => import("react-icons/fa").then(mod => mod.FaReact));
const FaPython = dynamic(() => import("react-icons/fa").then(mod => mod.FaPython));
const SiNextdotjs = dynamic(() => import("react-icons/si").then(mod => mod.SiNextdotjs));
const SiTailwindcss = dynamic(() => import("react-icons/si").then(mod => mod.SiTailwindcss));
const SiTypescript = dynamic(() => import("react-icons/si").then(mod => mod.SiTypescript));
const SiMysql = dynamic(() => import("react-icons/si").then(mod => mod.SiMysql));
const SiFirebase = dynamic(() => import("react-icons/si").then(mod => mod.SiFirebase));
const SiDjango = dynamic(() => import("react-icons/si").then(mod => mod.SiDjango));

// Types
type ProjectStatus = "Completed" | "In Progress" | "Planning Phase";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
    status: ProjectStatus;
    featured?: boolean;
}

// Static projects data (optimized for production)
const projects: Project[] = [
    {
        id: 1,
        title: "AI-Powered Expense Tracker",
        description:
            "Built with Django (backend) and Flutter (mobile frontend). Automatically categorizes expenses and predicts spending patterns using AI analytics. Dynamic charts, budget tracking, and personalized financial recommendations.",
        technologies: ["Django", "Flutter", "AI Analytics", "Python"],
        image: "/images/expense-tracker.jpg",
        demoUrl: "#", // Replace with deployed link later
        githubUrl: "https://github.com/ClaraDEV-Fullstack",
        status: "In Progress",
        featured: true
    },
    {
        id: 2,
        title: "Smart Job Matching Platform",
        description:
            "A web platform connecting job seekers and recruiters with AI-driven recommendations. Matches candidates to jobs based on skills and experience. Recruiters get ranked candidate suggestions automatically.",
        technologies: ["React", "Next.js", "Django", "AI Recommendations"],
        image: "/images/portfolio-website.jpg",
        demoUrl: "#", // Replace with deployed link later
        githubUrl: "https://github.com/ClaraDEV-Fullstack",
        status: "Planning Phase",
        featured: true
    },
    {
        id: 3,
        title: "Personalized Learning Platform",
        description:
            "Recommends courses and resources based on user preferences and learning history. Features AI-driven quizzes, dynamic progress tracking, and adaptive learning paths to personalize user experiences.",
        technologies: ["React", "Next.js", "AI Personalization", "UX/UI"],
        image: "/images/react-django-app.jpg",
        demoUrl: "#", // Replace with deployed link later
        githubUrl: "https://github.com/ClaraDEV-Fullstack",
        status: "Planning Phase",
        featured: false
    },
    {
        id: 4,
        title: "AI Customer Recommendation Chatbot",
        description:
            "An intelligent chatbot built with natural language processing (NLP) and machine learning. It interacts with customers in real-time, understands preferences, and provides personalized product or service recommendations. Integrated with business APIs and capable of learning user behavior over time for improved accuracy.",
        technologies: ["Python", "Django REST", "React", "NLP", "OpenAI API", "Dialogflow"],
        image: "/images/ai-chatbot.jpg", // Replace with actual chatbot image later
        demoUrl: "#", // Replace with deployed link later
        githubUrl: "https://github.com/ClaraDEV-Fullstack",
        status: "In Progress",
        featured: true,
    }
];


// Map technology names to icons
const getTechIcon = (tech: string) => {
    const iconMap: Record<string, JSX.Element> = {
        "React": <FaReact className="text-cyan-400" />,
        "Next.js": <SiNextdotjs className="text-gray-200" />,
        "TypeScript": <SiTypescript className="text-blue-500" />,
        "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
        "Django": <SiDjango className="text-green-600" />,
        "Python": <FaPython className="text-yellow-400" />,
        "MySQL": <SiMysql className="text-blue-400" />,
        "PostgreSQL": <FaDatabase className="text-blue-600" />,
        "MongoDB": <FaDatabase className="text-green-500" />,
        "Node.js": <FaCode className="text-green-500" />,
        "Express": <FaCode className="text-gray-300" />,
        "JavaScript": <FaCode className="text-yellow-300" />,
        "API Integration": <FaCode className="text-purple-400" />,
        "Chart.js": <FaCode className="text-red-400" />,
        "Geolocation": <FaCode className="text-blue-300" />,
        "Socket.io": <FaCode className="text-gray-400" />,
        "Stripe": <FaCode className="text-purple-500" />,
        "Redux": <FaCode className="text-purple-400" />,
        "Firebase": <SiFirebase className="text-yellow-500" />,
        "REST APIs": <FaCode className="text-blue-400" />
    };

    return iconMap[tech] || <FaCode className="text-gray-400" />;
};

// Status colors
const statusColors: Record<ProjectStatus, string> = {
    "Completed": "bg-green-500",
    "In Progress": "bg-yellow-500",
    "Planning Phase": "bg-blue-500"
};

// Projects Page component
export default function ProjectsPage() {
    const [filter, setFilter] = useState<"all" | "featured" | ProjectStatus>("all");

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.status === filter || (filter === "featured" && project.featured));

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-16 px-4 sm:px-6 lg:px-0"
                >
                    {/* Decorative spoke graphic */}
                    <div className="text-center relative mb-12 w-full max-w-5xl mx-auto px-4">
                        {/* Animated circular glow behind the heading */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        {/* Heading with subtle spin ring */}
                        <div className="relative inline-block">
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-24 h-24 border-4 border-cyan-300/30 rounded-full animate-spin-slow"></div>
                            </div>
                            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-blue-600 tracking-tight drop-shadow-md">
                                My Projects
                            </h2>
                        </div>

                        {/* Section Description - First Part */}
                        <div className="mt-5 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-xl mx-auto leading-relaxed">
                            Explore my recent work — intelligent, full-stack applications blending
                            <span className="font-semibold text-cyan-300"> AI</span>, creativity, and robust development.
                        </div>

                        {/* Section Description - Second Part */}
                        <div className="mt-3 text-base sm:text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                            Each project showcases innovation, scalability, and real-world problem-solving.
                            Hover over a project to reveal its core technologies and live demo.
                        </div>

                        {/* Decorative underline */}
                        <div className="mt-6 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {["all", "featured", "Completed", "In Progress", "Planning Phase"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item as "all" | "featured" | ProjectStatus)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                filter === item ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {item === "all" ? "All Projects" : item}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            whileHover={{y: -5}}
                            className="group"
                        >
                            <Card
                                className="overflow-hidden bg-white border-gray-200 h-full flex flex-col shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20 max-w-sm mx-auto">
                                {/* Image Section */}
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                                    <div className="absolute top-4 right-4 z-20">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <CardContent className="p-5 flex-1 flex flex-col space-y-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-bold text-black">{project.title}</h3>
                                        {project.featured &&
                                            <span
                                                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm px-3 py-1 rounded-full">
                                                Featured
                                            </span>
                                        }
                                    </div>

                                    {/* Description with line clamp */}
                                    <p className="text-black text-base mb-3 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-black mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <div key={i}
                                                     className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition">
                                                    <span className="text-sm">{getTechIcon(tech)}</span>
                                                    <span className="text-xs font-medium text-black">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-row justify-between mt-auto gap-2 flex-wrap">
                                        <motion.a
                                            href={project.demoUrl}
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium justify-center flex-1 text-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt />
                                            <span>View Demo</span>
                                        </motion.a>

                                        <motion.a
                                            href="https://github.com/ClaraDEV-Fullstack"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-lg text-sm font-medium justify-center flex-1 text-center"
                                            whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub />
                                            <span>GitHub</span>
                                        </motion.a>
                                    </div>


                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div className="mt-20 text-center" initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}} transition={{duration: 0.7}}>
                    <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        I'm currently working on several exciting projects including the Future Expense Tracker and
                        React Django Full-Stack App. Stay tuned!
                    </p>
                    <div
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium">
                        <FaCode/>
                        <span>Check Back for Updates</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}