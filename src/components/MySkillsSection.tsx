'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaCode, FaDatabase, FaMobile, FaPalette, FaServer, FaTools } from 'react-icons/fa';

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

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-2xl md:text-4xl font-bold  mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-600 to-yellow-800">My Skills</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Technologies and tools I specialize in
                    </p>
                </motion.div>

                {/* Infinite Scrolling Skills */}
                <div
                    className="relative w-full overflow-hidden py-4"
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
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${index}`}
                                className="flex flex-col items-center justify-center p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 min-w-[80px]"
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <div className="w-8 h-8 flex items-center justify-center text-2xl mb-1">
                                    {skill.icon}
                                </div>
                                <span className="text-white text-center text-xs font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Categories */}
                <div className="mt-6 md:mt-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {/* Frontend */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-3 md:p-6 rounded-xl border border-blue-700/30"
                    >
                        <div className="flex items-center gap-2 mb-2 md:mb-4">
                            <div className="p-1 md:p-3 bg-blue-500/20 rounded-lg">
                                <FaCode className="text-blue-400 text-lg md:text-xl" />
                            </div>
                            <h3 className="text-base md:text-xl font-semibold text-white">Frontend</h3>
                        </div>
                        <p className="text-gray-300 text-xs md:text-base">
                            Creating responsive, interactive user interfaces with modern frameworks
                        </p>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-3 md:p-6 rounded-xl border border-green-700/30"
                    >
                        <div className="flex items-center gap-2 mb-2 md:mb-4">
                            <div className="p-1 md:p-3 bg-green-500/20 rounded-lg">
                                <FaServer className="text-green-400 text-lg md:text-xl" />
                            </div>
                            <h3 className="text-base md:text-xl font-semibold text-white">Backend</h3>
                        </div>
                        <p className="text-gray-300 text-xs md:text-base">
                            Building robust server-side applications and APIs
                        </p>
                    </motion.div>

                    {/* Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-3 md:p-6 rounded-xl border border-purple-700/30"
                    >
                        <div className="flex items-center gap-2 mb-2 md:mb-4">
                            <div className="p-1 md:p-3 bg-purple-500/20 rounded-lg">
                                <FaPalette className="text-purple-400 text-lg md:text-xl" />
                            </div>
                            <h3 className="text-base md:text-xl font-semibold text-white">Design</h3>
                        </div>
                        <p className="text-gray-300 text-xs md:text-base">
                            Crafting beautiful and intuitive user experiences
                        </p>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 p-3 md:p-6 rounded-xl border border-yellow-700/30"
                    >
                        <div className="flex items-center gap-2 mb-2 md:mb-4">
                            <div className="p-1 md:p-3 bg-yellow-500/20 rounded-lg">
                                <FaTools className="text-yellow-400 text-lg md:text-xl" />
                            </div>
                            <h3 className="text-base md:text-xl font-semibold text-white">Tools</h3>
                        </div>
                        <p className="text-gray-300 text-xs md:text-base">
                            Utilizing modern development and design tools
                        </p>
                    </motion.div>
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