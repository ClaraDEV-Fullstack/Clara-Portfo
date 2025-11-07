'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
    FaDatabase,
    FaReact,
    FaPython
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiMysql,
    SiFirebase,
    SiDjango
} from "react-icons/si";

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

// Static projects data - showing only 3 projects
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
    }
];

// All projects are featured since we're only showing 3
const featuredProjects = projects;

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

// Card components
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${className}`}>
            {children}
        </div>
    );
};

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default function FeaturedProjectsSection() {
    return (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700">My Works </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        A selection of my recent work. Each project reflects my skills and passion for creating impactful solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <Card className="overflow-hidden bg-white border-gray-200 h-full flex flex-col shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                                <div className="relative h-36 md:h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                                    <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                                        <span className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
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

                                <CardContent className="p-3 md:p-5 flex-1 flex flex-col space-y-2 md:space-y-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-lg md:text-xl font-bold text-black">{project.title}</h3>
                                        {project.featured &&
                                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                                                Featured
                                            </span>
                                        }
                                    </div>

                                    <p className="text-black text-sm md:text-base mb-2 md:mb-3 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div>
                                        <h4 className="text-xs md:text-sm font-semibold text-black mb-1 md:mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-1 md:gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <div key={i} className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 md:px-2 md:py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition">
                                                    <span className="text-xs">{getTechIcon(tech)}</span>
                                                    <span className="text-xs font-medium text-black">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row justify-between mt-auto gap-1 md:gap-2">
                                        <motion.a
                                            href={project.demoUrl}
                                            className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-xs md:text-sm font-medium justify-center"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
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

                <motion.div className="mt-12 md:mt-16 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">More Projects Coming Soon</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-4 md:mb-8 text-sm md:text-base">
                        I'm currently working on several exciting projects. Stay tuned!
                    </p>
                    <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium text-sm md:text-base">
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}