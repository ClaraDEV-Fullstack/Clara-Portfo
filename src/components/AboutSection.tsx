'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaPalette,
    FaLaptopCode,
    FaUserTie,
    FaBook,
    FaRocket,
    FaBrain,
    FaAward,
    FaCertificate,
    FaCrown
} from 'react-icons/fa';

export default function AboutSection() {
    const education = [
        {
            year: '2022-2023',
            title: 'MBA in Logistics and Supply Chain',
            institution: 'IUGET, Bonamoussadi',
            description:
                'Focused on strategic management, logistics optimization, and efficient supply chain systems.'
        },
        {
            year: '2021',
            title: "Bachelor's Degree",
            institution: 'Management Sciences',
            description:
                'Built strong analytical and leadership foundations with emphasis on organizational management.'
        },
        {
            year: '2019-2020',
            title: 'HND in Human Resource Management',
            institution: 'IUC – Institute Universitaire de la Côte',
            description:
                'Developed expertise in employee relations, recruitment, and workplace management strategies.'
        },
        {
            year: '2018',
            title: 'GCE Advanced Level',
            institution: 'Business Studies',
            description:
                'Completed advanced secondary education with a strong foundation in management and business principles.'
        }
    ];

    const experience = [
        {
            year: '2023-Present',
            title: 'Full-Stack Web & Mobile Development',
            institution: 'HiTech Training Center',
            description:
                'Building scalable web and mobile applications with modern technologies and frameworks.',
            type: 'training'
        },
        {
            year: '2021-2023',
            title: 'Graphic Designer & Assistant Manager',
            company: 'Awabong Private Company',
            description:
                'Oversaw design, production, procurement, and delivery while managing supply chain operations.',
            type: 'experience'
        }
    ];

    const milestones = [
        {
            title: 'Discovering My Passion',
            text: "During my Master's in Logistics & Supply Chain Management, I realized my deep interest in creativity and digital design. I enrolled in a graphic design training while attending classes in the evenings, mastering discipline and focus.",
            icon: <FaBook className="text-yellow-400" />
        },
        {
            title: 'Stepping into the Professional World',
            text: 'My first opportunity was with a startup as a secretary, quickly growing into a multi-role contributor: graphic designer, printing manager, and production coordinator. I handled T-shirt printing, banners, mock-ups, and more, earning recognition and trust.',
            icon: <FaBriefcase className="text-yellow-400" />
        },
        {
            title: 'Growing Beyond Limits',
            text: 'Excelling in my first job motivated me to expand my skill set. I explored full-stack and mobile development to combine creativity with technology, aiming to deliver higher-value solutions.',
            icon: <FaRocket className="text-yellow-400" />
        },
        {
            title: 'The Full-Stack Journey',
            text: 'I enrolled in an intensive full-stack and mobile development course for a year. Challenges included long coding hours, debugging, and building real-world apps. Consistent practice helped me master React, Next.js, Python, Django, PHP, and deliver production-ready solutions.',
            icon: <FaLaptopCode className="text-yellow-400" />
        },
        {
            title: 'Today & AI Enthusiast',
            text: 'Today, I integrate AI into my workflow as an AI developer. I combine creativity, full-stack development, and AI solutions—building applications, chatbots, and API integrations—showing that I am future-ready and continuously evolving.',
            icon: <FaBrain className="text-yellow-400" />
        }
    ];

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Outer Card - Oval Shape with Green Glow */}
                        <div
                            className="relative w-full max-w-2xl mx-auto overflow-hidden shadow-2xl border-2 border-gray-700
        h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[85vh] xl:h-[90vh]
        flex items-center justify-center
        rounded-[50%] bg-gradient-to-br from-blue-900/10 to-purple-900/10"
                            style={{
                                aspectRatio: "1/1", // Keeps the oval proportion
                                maxHeight: "700px",
                                boxShadow: "0 0 60px 10px rgba(144, 238, 144, 0.3)", // Soft light-green glow
                            }}
                        >
                            {/* Image Area */}
                            <div className="relative w-full h-full overflow-hidden rounded-[50%] flex items-center justify-center">
                                <Image
                                    src="/images/aboutpic.jpg"
                                    alt="Professional Profile Photo"
                                    fill
                                    className="object-cover scale-110 opacity-95 transition-all duration-700 ease-in-out"
                                    style={{
                                        objectPosition: "center top",
                                        clipPath: "ellipse(50% 50% at 50% 50%)", // Ensures oval shape
                                    }}
                                    priority
                                />

                                {/* Overlay gradient for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 rounded-[50%]"></div>
                            </div>

                            {/* Decorative soft glows */}
                            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-16 md:w-32 h-16 md:h-32 bg-gradient-to-br from-yellow-500/20 to-yellow-800/20 rounded-full blur-xl"></div>
                            <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-800/20 rounded-full blur-xl"></div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-4 md:space-y-6"
                    >
                        {/* My Journey */}
                        <div className="mt-2 md:mt-4">
                            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center shadow-lg">
                                    <FaCrown className="text-white text-sm md:text-base" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                                    My Journey
                                </h3>
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                {milestones.slice(0, 3).map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="flex gap-3 md:gap-4 p-2 md:p-3 rounded-xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="mt-1 flex-shrink-0 text-sm md:text-base">{milestone.icon}</div>
                                        <div>
                                            <h4 className="font-medium text-white text-base md:text-lg">
                                                {milestone.title}
                                            </h4>
                                            <p className="text-xs md:text-sm text-gray-400">
                                                {milestone.text.substring(0, 60)}...
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="mt-2 md:mt-4">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                                    <FaGraduationCap className="text-white text-xs md:text-sm" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-white">Education</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {education.slice(0, 2).map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="bg-gray-800/50 backdrop-blur-sm px-3 py-2 rounded-xl border border-gray-700 flex items-center gap-2"
                                    >
                                        <div>
                                            <h4 className="font-medium text-white text-sm">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs text-gray-400">
                                                {item.institution}
                                            </p>
                                        </div>
                                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full whitespace-nowrap">
                                            {item.year}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="mt-2 md:mt-4">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                                    <FaBriefcase className="text-white text-xs md:text-sm" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-white">Experience</h3>
                            </div>
                            <div className="space-y-2 md:space-y-3">
                                {experience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                        className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-3 md:p-4 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg"
                                    >
                                        <div className="flex justify-between items-start mb-1 md:mb-2">
                                            <h4 className="font-medium text-white text-base md:text-lg">
                                                {item.title}
                                            </h4>
                                            <span className="text-xs bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-2 py-1 rounded-full shadow-sm">
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className="text-xs md:text-sm text-gray-400 mb-1">
                                            {item.type === 'training'
                                                ? item.institution
                                                : item.company}
                                        </p>
                                        <p className="text-gray-300 text-xs md:text-sm">
                                            {item.description.substring(0, 80)}...
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="pt-2 md:pt-4"
                        >
                            <a
                                href="/about"
                                className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-blue-500/20 text-sm md:text-base"
                            >
                                Learn More About Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}