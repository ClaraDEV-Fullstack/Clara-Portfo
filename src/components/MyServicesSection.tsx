'use client';

import { motion } from 'framer-motion';
import { FaReact, FaServer, FaMobile, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

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

    return (
        <section className="py-4 px-4 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
            <div className="max-w-[95%] mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-600 to-yellow-800">My Services </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-2 text-lg md:text-2xl text-blue-950 max-w-3xl mx-auto">
                        Specialized development services tailored to your needs
                    </p>
                </motion.div>

                {/* Creative Services Display */}
                <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center my-1">
                    {/* Central circle - hidden on mobile */}
                    <div className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-blue-200 flex items-center justify-center backdrop-blur-sm bg-white/80">
                        <div className="text-center p-2 sm:p-4">
                            <div className="text-4xl sm:text-6xl text-blue-500 mb-1 sm:mb-2">
                                <FaReact />
                            </div>
                            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">Development</h3>
                            <p className="text-gray-600 text-sm">Solutions</p>
                        </div>
                    </div>

                    {/* Service bubbles - arranged in a grid for mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 w-full">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="bg-white p-3 sm:p-6 rounded-2xl border border-blue-100 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-2 sm:p-3 bg-blue-50 rounded-full mb-2 sm:mb-3">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* See All Services Arrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center mt-1"  // Reduced from mt-3 to mt-1
                >
                    <Link
                        href="/services"
                        className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full
               bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
               text-white font-semibold shadow-lg hover:shadow-yellow-400/50
               transition-all duration-300 hover:scale-105"
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
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></span>
                    </Link>
                </motion.div>

            </div>

            {/* Add animate.css animations */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 20px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    );
}