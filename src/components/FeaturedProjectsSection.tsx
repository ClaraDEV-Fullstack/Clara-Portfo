'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMysql, SiDjango } from "react-icons/si";
import { useState } from "react";

// --- Toast Component (Simple & Lightweight) ---
const Toast = ({ message, show }: { message: string, show: boolean }) => {
    if (!show) return null;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 text-white px-6 py-3 rounded-full shadow-2xl border border-yellow-500/50 flex items-center gap-3"
        >
            <span className="text-xl">🚧</span>
            <span className="text-sm font-medium">{message}</span>
        </motion.div>
    );
};

type ProjectStatus = "Completed" | "In Progress";

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl: string;
    githubUrl: string;
    status: ProjectStatus;
}

const projects: Project[] = [
    {
        id: 1,
        title: "NextShopSphere E-Commerce",
        description: "A production-ready full-stack e-commerce platform with real-world architecture. Features secure JWT authentication, complex cart logic, and a Dockerized environment.",
        technologies: ["Next.js", "Django", "MySQL", "Docker", "REST APIs"],
        image: "/images/landingpage.png",
        demoUrl: "https://nextshopsphere-ui.onrender.com/",
        githubUrl: "https://github.com/ClaraDEV-Fullstack/NextShopSphere",
        status: "Completed"
    },
    {
        id: 2,
        title: "SmartSpend Tracker",
        description: "Full-stack mobile application for financial management built with Flutter and Django. Features persistent storage for tracking real-time user expenses and analytics.",
        technologies: ["Flutter", "Django", "MySQL", "REST APIs"],
        image: "/images/dashboard.png",
        demoUrl: "", // Empty string indicates pending deployment
        githubUrl: "https://github.com/ClaraDEV-Fullstack/SmartSpend-App",
        status: "Completed"
    },
    {
        id: 3,
        title: "NextSkill-Hub Job Platform",
        description: "Collaborative internship project connecting freelancers and job seekers. Developed frontend UI components and handled API integrations within a professional team workflow.",
        technologies: ["Next.js", "Django", "PostgreSQL", "Tailwind CSS"],
        image: "/images/NextSkill.png",
        demoUrl: "",
        githubUrl: "https://github.com/HighTechLabs/nextskillhub",
        status: "In Progress"
    }
];

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
        "REST APIs": <FaCode className="text-blue-400" />,
        "Docker": <FaCode className="text-blue-500" />,
        "Flutter": <FaCode className="text-blue-400" /> // Fallback or add Flutter icon if available
    };
    return iconMap[tech] || <FaCode className="text-gray-400" />;
};

export default function FeaturedProjectsSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [toastMessage, setToastMessage] = useState("");
    const [showToast, setShowToast] = useState(false);

    const handleDemoClick = (url: string) => {
        if (url) {
            window.open(url, "_blank");
        } else {
            setToastMessage("Demo is currently being deployed. Check back soon!");
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
        }
    };

    return (
        <section ref={ref} className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black relative">

            {/* Custom Toast Notification */}
            <Toast message={toastMessage} show={showToast} />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-700">My Works</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">Professional full-stack solutions built with scalable architecture.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all flex flex-col h-full group"
                        >
                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <span className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-[10px] font-bold text-white ${project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                    {project.status}
                                </span>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-110"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 4).map((tech, i) => (
                                            <div key={i} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                                                <span className="text-xs">{getTechIcon(tech)}</span>
                                                <span className="text-[10px] font-semibold text-gray-700">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2">
                                    {/* Demo Button - Logic Added */}
                                    <button
                                        onClick={() => handleDemoClick(project.demoUrl)}
                                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition duration-300
                                            ${project.demoUrl
                                            ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg"
                                            : "bg-gray-200 text-gray-500 cursor-pointer hover:bg-gray-300 border border-gray-300"
                                        }`}
                                    >
                                        <FaExternalLinkAlt size={10} className={project.demoUrl ? "" : "text-gray-400"} />
                                        {project.demoUrl ? "Live Demo" : "Deployment in Process"}
                                    </button>

                                    {/* Code Button */}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-800 text-white rounded-lg text-xs font-bold hover:bg-black transition duration-300 hover:shadow-lg"
                                    >
                                        <FaGithub size={12} /> View Code
                                    </a>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}