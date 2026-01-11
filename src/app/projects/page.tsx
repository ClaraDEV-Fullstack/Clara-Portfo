'use client';

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "../../components/SectionTitle";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import 'animate.css';

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
        title: "NextShopSphere E-Commerce",
        description:
            "A production-ready full-stack e-commerce platform with real-world architecture. Features secure authentication, role-based access, product management, and an integrated admin dashboard. Dockerized for consistent deployment.",
        technologies: ["Next.js", "Django", "MySQL", "Docker", "REST APIs"],
        image: "/images/landingpage.png", // Update to your ecommerce image
        demoUrl: "https://nextshopsphere-ui.onrender.com/",
        githubUrl: "https://github.com/ClaraDEV-Fullstack/NextShopSphere",
        status: "Completed",
        featured: true
    },
    {
        id: 2,
        title: "SmartSpend Expense Tracker",
        description:
            "Full-stack mobile application for financial management. Built with a Flutter frontend consuming Django REST APIs. Includes real-time data management and persistent storage for tracking user expenses.",
        technologies: ["Flutter", "Django", "MySQL", "REST APIs"],
        image: "/images/ai-chatbot.jpg", // Update to your mobile app image
        demoUrl: "#",
        githubUrl: "https://github.com/ClaraDEV-Fullstack", // Update to specific repo when ready
        status: "Completed",
        featured: true
    },
    {
        id: 3,
        title: "NextSkill-Hub Job Platform",
        description:
            "A collaborative internship project connecting companies, freelancers, and job seekers. Focused on implementing scalable UI components and seamless API integrations within a real-world development workflow.",
        technologies: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
        image: "/images/NextSkill.png", // Update to project image
        demoUrl: "#",
        githubUrl: "https://github.com/HighTechLabs/nextskillhub",
        status: "In Progress",
        featured: true
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

    // Helper function to get animation class based on index
    const getAnimationClass = (index: number) => {
        const animations = [
            'animate__fadeInLeft',
            'animate__fadeInRight',

            'animate__fadeInDown',
            'animate__zoomIn',
            'animate__bounceIn',
            'animate__rotateIn',
            'animate__lightSpeedInRight',
            'animate__slideInLeft',
            'animate__slideInRight',
            'animate__slideInUp',
            'animate__slideInDown'
        ];
        return animations[index % animations.length];
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    className="text-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-0"
                >
                    {/* Decorative spoke graphic */}
                    <div className="text-center relative mb-8 md:mb-12 w-full max-w-5xl mx-auto px-4">
                        {/* Animated circular glow behind the heading */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        {/* Heading with subtle spin ring */}
                        <div className="relative inline-block">
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-cyan-300/30 rounded-full animate-spin-slow"></div>
                            </div>
                            <h2 className="relative text-2xl md:text-3xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-blue-600 tracking-tight drop-shadow-md">
                                My Projects
                            </h2>
                        </div>

                        {/* Section Description - Enhanced for mobile */}
                        <div className="mt-4 md:mt-5 text-sm md:text-base lg:text-xl text-blue-100/90 max-w-full px-4 md:px-8 lg:px-16 mx-auto leading-relaxed">
                            <div className="max-w-md md:max-w-xl lg:max-w-3xl mx-auto">
                                <span className="font-semibold text-yellow-400">AI-driven</span> full-stack applications
                                <span className="block md:inline mt-1 md:mt-0"> blending innovation with robust development</span>
                            </div>
                        </div>

                        {/* Section Description - Second Part */}
                        <div className="mt-2 md:mt-4 text-sm md:text-base lg:text-xl text-blue-100/90 max-w-full px-4 md:px-8 lg:px-16 mx-auto leading-relaxed">
                            <div className="max-w-lg md:max-w-md lg:max-w-5xl mx-auto">
                                <span className="block md:inline">Each project showcases </span>
                                <span className="font-semibold text-yellow-400">real-world solutions</span>
                                <span className="block md:inline mt-1 md:mt-0"> with intelligent design and scalable architecture</span>
                            </div>
                        </div>

                        {/* Decorative underline */}
                        <div className="mt-4 md:mt-6 flex justify-center">
                            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
                    {["all", "featured", "Completed", "In Progress", "Planning Phase"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item as "all" | "featured" | ProjectStatus)}
                            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                                filter === item ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {item === "all" ? "All Projects" : item}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.3}}
                            transition={{duration: 0.5, delay: index * 0.15}}
                            whileHover={{y: -5}}
                            className={`group animate__animated ${getAnimationClass(index)}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <Card
                                className="overflow-hidden bg-white border-gray-200 h-full flex flex-col shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/20 max-w-sm mx-auto"
                            >
                                {/* Image Section */}
                                <div className="relative h-40 md:h-48 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"
                                    ></div>
                                    <div className="absolute top-3 md:top-4 right-3 md:right-4 z-20">
                                        <span
                                            className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}
                                        >
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
                                <CardContent className="p-4 md:p-5 flex-1 flex flex-col space-y-2 md:space-y-3">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-lg md:text-xl font-bold text-black">{project.title}</h3>
                                        {project.featured && (
                                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Description with line clamp */}
                                    <p className="text-black text-sm md:text-base mb-2 md:mb-3 flex-1 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-xs md:text-sm font-semibold text-black mb-1 md:mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-1 md:gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                                                >
                                                    <span className="text-xs md:text-sm">{getTechIcon(tech)}</span>
                                                    <span className="text-xs font-medium text-black">{tech}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-row justify-between mt-auto gap-2 flex-wrap">
                                        <motion.a
                                            href={project.demoUrl}
                                            className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-xs md:text-sm font-medium justify-center flex-1 text-center"
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
                                            className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-gray-200 text-black rounded-lg text-xs md:text-sm font-medium justify-center flex-1 text-center"
                                            whileHover={{ scale: 1.05, backgroundColor: "#E5E7EB" }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaGithub className="text-xs" />
                                            <span>GitHub</span>
                                        </motion.a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div className="mt-16 md:mt-20 text-center"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.7}}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">More Projects Coming Soon</h3>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8 px-4">
                        I'm currently working on several exciting projects including the Future Expense Tracker and
                        React Django Full-Stack App. Stay tuned!
                    </p>
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium text-sm md:text-base">
                        <FaCode/>
                        <span>Check Back for Updates</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}