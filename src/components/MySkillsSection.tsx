'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaCode, FaDatabase, FaMobile, FaPalette, FaServer, FaTools } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

// Import icons for the skills
import {
    FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab,
    FaFigma, FaSketch, FaAndroid, FaApple, FaLaptopCode
} from 'react-icons/fa';

import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiBootstrap,
    SiMui, SiRedux, SiLaravel, SiPhp, SiPython, SiDjango,
    SiFirebase, SiPostgresql, SiMysql, SiDart, SiFlutter, SiVercel,
    SiNetlify, SiAdobephotoshop, SiAdobeillustrator, SiCanva,
    SiAffinitydesigner, SiGraphql
} from 'react-icons/si';

export default function InfiniteSkillsSection() {
    const [isPaused, setIsPaused] = useState(false);
    const scrollerRef = useRef<HTMLDivElement>(null);

    // Skills data with icons
    const skills = [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
        { name: 'React', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
        { name: 'Material UI', icon: <SiMui className="text-blue-300" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
        { name: 'PHP', icon: <SiPhp className="text-indigo-600" /> },
        { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
        { name: 'Django', icon: <SiDjango className="text-green-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Dart', icon: <SiDart className="text-blue-400" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-cyan-400" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
        { name: 'GitHub', icon: <FaGithub className="text-gray-200" /> },
        { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-600" /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator className="text-orange-500" /> },
    ];

    // Duplicate skills for infinite scroll effect
    const duplicatedSkills = [...skills, ...skills];

    // Animation classes for falling effect
    const fallAnimations = [
        "animate__bounceInDown",
        "animate__fadeInDown",
        "animate__slideInDown",
        "animate__zoomInDown",
        "animate__lightSpeedInRight",
        "animate__jackInTheBox",
        "animate__fadeInUp",
        "animate__bounceInUp",
        "animate__slideInUp",
        "animate__zoomInUp",
        "animate__rotateIn",
        "animate__rotateInDownLeft",
        "animate__rotateInDownRight",
        "animate__rotateInUpLeft",
        "animate__rotateInUpRight",
        "animate__bounceIn",
        "animate__fadeIn",
        "animate__zoomIn",
        "animate__slideInLeft",
        "animate__slideInRight",
        "animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__shakeY",
        "animate__headShake",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello",
        "animate__heartBeat"
    ];

    return (
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-100 to-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-600 to-yellow-800">My Skills </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-2 text-lg md:text-2xl text-blue-950 max-w-3xl mx-auto">
                        Technologies and tools I specialize in
                    </p>
                </motion.div>

                {/* Infinite Scrolling Skills */}
                <div
                    className="relative w-full overflow-hidden py-3"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        ref={scrollerRef}
                        className={`flex space-x-6 ${isPaused ? 'paused-animation' : 'animate-scroll'}`}
                        style={{
                            animation: 'scroll 30s linear infinite',
                            width: 'max-content'
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => {
                            // Use modulo to cycle through animations
                            const animationClass = fallAnimations[index % fallAnimations.length];

                            return (
                                <motion.div
                                    key={`${skill.name}-${index}`}
                                    className="flex flex-col items-center justify-center p-3 bg-gray-900 rounded-xl border border-gray-800 shadow-lg min-w-[100px] hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                                    whileHover={{
                                        y: -8,
                                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                        transition: { duration: 0.3 }
                                    }}
                                    initial={{ opacity: 0, y: -100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        delay: index * 0.08
                                    }}
                                >
                                    {/* Shining effect overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    {/* Merging glow effect */}
                                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm"></div>
                                    </div>

                                    {/* Landing shadow effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/40 to-transparent rounded-b-xl"></div>

                                    <div className="w-12 h-12 flex items-center justify-center text-3xl mb-2 relative z-10">
                                        {skill.icon}
                                        {/* Icon shine effect */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </div>
                                    <span className="text-white text-center text-sm font-semibold relative z-10">{skill.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* Custom CSS for infinite scroll animation */}
            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .paused-animation {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}