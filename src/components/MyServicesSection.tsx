'use client';
import {useState} from "react";
import { motion } from 'framer-motion';
import { FaReact, FaServer, FaMobile, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

export default function CreativeServicesSection() {
    const services = [
        {
            icon: <FaReact className="text-3xl sm:text-5xl text-blue-600" />,
            title: "Frontend Development",
            description: "Creating responsive, interactive web interfaces with modern frameworks"
        },
        {
            icon: <FaServer className="text-3xl sm:text-5xl text-green-600" />,
            title: "Backend Development",
            description: "Building secure, scalable server-side solutions and robust APIs"
        },
        {
            icon: <FaMobile className="text-3xl sm:text-5xl text-purple-600" />,
            title: "Mobile Development",
            description: "Developing cross-platform mobile apps with native performance"
        }
    ];

    const [hoveredElement, setHoveredElement] = useState<string | null>(null);

    return (
        // Added more padding at the top to separate from content above
        <section className="pt-12 pb-4 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[95%] mx-auto relative z-10">

                {/* Section header with pink "My Services" heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-2" // Reduced margin bottom from mb-4 to mb-2
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-500 animate__animated animate__fadeInDown"
                    >
                        My Services
                    </motion.h2>

                    <motion.div
                        className="w-16 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full animate__animated animate__fadeInUp"
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />

                    <motion.p
                        className="mt-1 text-lg md:text-2xl text-blue-950 max-w-3xl mx-auto animate__animated animate__fadeInUp" // Reduced margin top from mt-2 to mt-1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Specialized development services tailored to your needs
                    </motion.p>
                </motion.div>

                {/* Creative Services Display */}
                <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center mt-2"> 
                    {/* Central circle with exchange functionality */}
                    <motion.div
                        className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-blue-200 flex items-center justify-center backdrop-blur-sm bg-white/80 shadow-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                        animate={{
                            scale: hoveredElement === "center" ? 1.1 : 1,
                            zIndex: hoveredElement === "center" ? 20 : 5
                            // Removed the x animation that moved the circle to the right
                        }}
                        onMouseEnter={() => setHoveredElement("center")}
                        onMouseLeave={() => setHoveredElement(null)}
                    >
                        <div className="text-center p-2 sm:p-4">
                            <motion.div
                                className="text-4xl sm:text-6xl text-blue-500 mb-1 sm:mb-2"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0, -5, 0]
                                }}
                                transition={{
                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                                }}
                            >
                                <FaReact />
                            </motion.div>
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">Development</h3>
                            <p className="text-gray-600 text-sm">Solutions</p>
                        </div>
                    </motion.div>

                    {/* Animated connection lines */}
                    <svg className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Line from center to left service */}
                        <motion.line
                            x1="50" y1="50"
                            x2="20" y2="50"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        {/* Line from center to right service */}
                        <motion.line
                            x1="50" y1="50"
                            x2="80" y2="50"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.7 }}
                        />
                        {/* Line from center to bottom service */}
                        <motion.line
                            x1="50" y1="50"
                            x2="50" y2="80"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.9 }}
                        />
                    </svg>

                    {/* Service bubbles with bounce effect */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 w-full">
                        {services.map((service, index) => {
                            // Position classes for the cards
                            const positionClasses = index === 0 ? "sm:col-start-1" :
                                index === 1 ? "sm:col-start-2" :
                                    "sm:col-start-3";

                            return (
                                <motion.div
                                    key={service.title}
                                    className={`bg-white p-3 sm:p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${positionClasses}`}
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    animate={{
                                        zIndex: hoveredElement === service.title ? 20 : 10
                                        // Removed the x animation that moved the cards
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        zIndex: 20,
                                        // Added bounce animation
                                        transition: {
                                            y: {
                                                duration: 0.5,
                                                repeat: 2,
                                                repeatType: "reverse",
                                                ease: "easeInOut"
                                            }
                                        }
                                    }}
                                    onMouseEnter={() => setHoveredElement(service.title)}
                                    onMouseLeave={() => setHoveredElement(null)}
                                >
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-yellow-500/20 blur-sm"></div>
                                    </div>

                                    <div className="flex flex-col items-center text-center relative z-10">
                                        <motion.div
                                            className="p-2 sm:p-3 bg-blue-50 rounded-full mb-2 sm:mb-3"
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 10,
                                                // Added bounce animation to the icon
                                                transition: {
                                                    scale: {
                                                        duration: 0.3,
                                                        repeat: 2,
                                                        repeatType: "reverse"
                                                    }
                                                }
                                            }}
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Enhanced See All Services Button - Moved to the left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-start mt-1" // Changed from justify-center to justify-start
                >
                    <Link
                        href="/services"
                        className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full
               bg-gradient-to-r from-blue-600 to-blue-800
               text-white font-semibold shadow-lg hover:shadow-blue-500/50
               transition-all duration-300 hover:scale-105 animate__animated animate__fadeInUp"
                    >
                        <span className="text-sm md:text-base">See All Services</span>
                        <motion.div
                            className="p-2 bg-white/20 rounded-full"
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >
                            <FaArrowRight className="text-white text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>

                        {/* Glow effect on hover */}
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></span>

                        {/* Pulse animation */}
                        <motion.span
                            className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}