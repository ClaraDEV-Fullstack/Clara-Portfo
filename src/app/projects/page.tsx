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
        title: "Future Expense Tracker",
        description: "A comprehensive expense tracking application with budget management, expense categorization, and financial insights.",
        technologies: ["Django", "Python", "MySQL", "REST APIs", "JavaScript"],
        image: "/images/expense-tracker.jpg",
        demoUrl: "#",
        githubUrl: "#",
        status: "In Progress",
        featured: true
    },
    {
        id: 2,
        title: "React Django Full-Stack App",
        description: "A modern web application combining React frontend with Django backend, featuring user authentication and real-time updates.",
        technologies: ["React", "Django", "Python", "PostgreSQL", "Redux"],
        image: "/images/react-django-app.jpg",
        demoUrl: "#",
        githubUrl: "#",
        status: "Planning Phase",
        featured: true
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description: "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
        image: "/images/ecommerce-platform.jpg",
        demoUrl: "#",
        githubUrl: "#",
        status: "Completed"
    },
    {
        id: 4,
        title: "Task Management App",
        description: "A productivity application for managing tasks and projects with team collaboration features.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        image: "/images/task-management.jpg",
        demoUrl: "#",
        githubUrl: "#",
        status: "Completed"
    },
    {
        id: 5,
        title: "Weather Dashboard",
        description: "Real-time weather information with interactive maps and 5-day forecasts.",
        technologies: ["JavaScript", "API Integration", "Chart.js", "Geolocation"],
        image: "/images/weather-dashboard.jpg",
        demoUrl: "#",
        githubUrl: "#",
        status: "Completed"
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "A responsive portfolio website with project showcase and contact form.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "/images/portfolio-website.jpg",
        demoUrl: "#",
        githubUrl: "#",
        status: "Completed"
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
                    <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-32 h-32 border-4 border-white/20 rounded-full animate-spin-slow"></div>
                        </div>
                        <h2 className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                            My Projects
                        </h2>
                    </div>

                    <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        Recent work I've done. Here are some of my projects, both completed and in progress. Each
                        project reflects my skills and passion for creating impactful solutions.
                    </p>
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
                                    <div className="flex flex-col sm:flex-row justify-between mt-auto gap-2">
                                        <motion.a
                                            href={project.demoUrl}
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-sm font-medium justify-center"
                                            whileHover={{scale: 1.05}}
                                            whileTap={{scale: 0.95}}
                                        >
                                            <FaExternalLinkAlt/>
                                            <span>View Demo</span>
                                        </motion.a>
                                        <motion.a
                                            href="https://github.com/ClaraDEV-Fullstack"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 text-black rounded-lg text-xs md:text-sm font-medium justify-center"
                                            whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub className="text-sm md:text-base" />
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