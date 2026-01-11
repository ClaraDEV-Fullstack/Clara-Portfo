'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
    // Coding languages for the design element
    const codeSnippets = [
        'function hello() {',
        '  return "World";',
        '}',
        '',
        'const developer = {',
        '  name: "Clara Beri",',
        '  skills: ["React", "Node.js"]',
        '};',
        '',
        'import React from "react";',
        '',
        'class App extends Component {',
        '  render() {',
        '    return <div>Hello</div>;',
        '  }',
        '}'
    ];

    return (
        <section className="bg-gradient-to-br from-gray-900 to-black overflow-hidden relative w-screen min-h-[60vh]">
            {/* Magical background elements */}
            <div className="absolute inset-0 z-0">
                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-5"></div>

                {/* Light rays */}
                <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400/10 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-0 left-1/3 w-1 h-full bg-gradient-to-b from-blue-400/5 to-transparent transform -translate-x-1/2"></div>
                <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-purple-400/5 to-transparent transform translate-x-1/2"></div>
            </div>

            {/* Coding languages design element - moved away from the edge */}
            <div className="absolute right-4 md:right-8 top-0 bottom-0 w-16 md:w-20 z-10 overflow-hidden">
                <div className="h-full w-full flex flex-col items-center justify-center space-y-1 md:space-y-2 py-8">
                    {codeSnippets.map((snippet, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 0.4, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-[8px] md:text-[10px] font-mono text-white whitespace-nowrap"
                        >
                            {snippet}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 w-full h-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 py-8 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full md:w-2/5"
                    >
                        <div className="relative">
                            {/* Magical glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transform scale-110"></div>
                            {/* Image container with better aspect ratio */}
                            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                                <Image
                                    src="/images/profile2.jpg"
                                    alt="Clara Beri"
                                    fill
                                    className="object-cover"
                                    style={{
                                        transform: 'scaleX(-1) translateX(-5%)', // flip & slightly shift left to fill empty space
                                        objectPosition: 'top center' // anchor to top so head is visible, crop from bottom
                                    }}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                                {/* Magical floating elements */}
                                <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 rounded-full blur-xl animate-bounce"></div>
                                <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>

                                {/* Corner accents */}
                                <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-yellow-400/50 rounded-tl-lg"></div>
                                <div className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-yellow-400/50 rounded-br-lg"></div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full md:w-3/5 space-y-3 md:space-y-4"
                    >
                        {/* Magical badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="inline-block relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full blur-md"></div>
                            <span className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-bold shadow-lg">
            AI Full-Stack Developer
        </span>
                        </motion.div>

                        {/* Magical title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
                        >
                            Hi, I'm <span className="text-yellow-400 relative inline-block">
            Clara Beri
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
            />
        </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-sm md:text-base text-gray-300 leading-relaxed"
                        >
                            I am a <span className="text-yellow-400 font-bold">Full-Stack Web & Mobile Developer</span>.
                            I specialize in building <span className="text-yellow-400 font-semibold">production-ready applications </span>
                            with robust backends and responsive interfaces—focusing on scalable architecture,
                            secure API design, and seamless user experiences.
                        </motion.p>

                        {/* Magical skills */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="flex flex-wrap gap-1.5 md:gap-2"
                        >
                            {['AI/ML', 'Python', 'Django', 'PHP', 'Laravel', 'React', 'Next.js', 'Tailwind CSS'].map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                                    className="px-2 py-0.5 md:px-2 md:py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-400/30"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>

                    {/* Magical buttons - Now in a single row for all screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.8 }}
                            className="flex gap-2 md:gap-3 pt-1 md:pt-2"
                        >
                            <motion.a
                                href="contact"
                                className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-md hover:shadow-lg transition-all relative overflow-hidden group text-xs md:text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Magical button effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10 flex items-center gap-1 md:gap-2">
                                    Hire Me
                                    <motion.span
                                        initial={{ x: 0 }}
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >→</motion.span>
                                </span>
                            </motion.a>
                            <motion.a
                                href="projects"
                                className="px-3 py-1.5 md:px-4 md:py-2 bg-transparent border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all relative overflow-hidden group text-xs md:text-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* Magical button effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="relative z-10 flex items-center gap-1 md:gap-2">
                                    My Work
                                    <motion.span
                                        initial={{ x: 0 }}
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                    >→</motion.span>
                                </span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Custom CSS for grid pattern */}
            <style jsx global>{`
                .bg-grid-pattern {
                    background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
                }
            `}</style>
        </section>
    );
}