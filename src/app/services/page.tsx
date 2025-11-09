'use client';

import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import { FaReact, FaPython, FaMobileAlt, FaPalette, FaCode, FaServer, FaRobot, FaCheck, FaStar, FaCogs, FaLaptopCode, FaMobile, FaPaintBrush, FaBrain } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiFlutter } from 'react-icons/si';
import dynamic from "next/dynamic";
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const HeartCTA = dynamic(() => import("../../components/HeartCTA"), {
    ssr: false,
    loading: () => <div className="h-40 bg-gray-800 rounded-xl animate-pulse" />
});

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    display: 'swap'
});

const services = [
    {
        title: 'Frontend Development',
        icon: <FaReact size={28} className="text-blue-400" />,
        decorativeIcon: <FaLaptopCode className="text-yellow-400/30 text-5xl" />,
        description: `
      I create responsive, interactive web interfaces with smooth animations, clean layouts, and intuitive user experiences.
      My work ensures websites look professional and are easy to navigate for end users.
    `,
        features: [
            "React, Next.js, Vue.js development",
            "Responsive design for all devices",
            "UI component libraries implementation",
            "Performance optimization and SEO",
            "Cross-browser compatibility"
        ]
    },
    {
        title: 'Backend Development',
        icon: <FaPython size={28} className="text-blue-400" />,
        decorativeIcon: <FaServer className="text-yellow-400/30 text-5xl" />,
        description: `
      I build secure, scalable backend systems with APIs, server logic, and database management.
      My solutions make web and mobile apps reliable and fast, ready for production.
    `,
        features: [
            "Python, Django, Node.js development",
            "RESTful and GraphQL API design",
            "Database architecture and optimization",
            "Authentication and security implementation",
            "Server deployment and maintenance"
        ]
    },
    {
        title: 'Full-Stack Development',
        icon: <SiNextdotjs size={28} className="text-blue-400" />,
        decorativeIcon: <FaCogs className="text-yellow-400/30 text-5xl" />,
        description: `
      I deliver complete solutions from frontend to backend. I can take ideas from concept to live deployment.
      Applications I build are maintainable, reliable, and user-centered.
    `,
        features: [
            "End-to-end application development",
            "System architecture design",
            "Database integration and management",
            "Third-party service integration",
            "DevOps and Deployment"
        ]
    },
    {
        title: 'Mobile App Development',
        icon: <FaMobileAlt size={28} className="text-blue-400" />,
        decorativeIcon: <FaMobile className="text-yellow-400/30 text-5xl" />,
        description: `
      I develop cross-platform mobile apps using Flutter, delivering smooth performance on Android and iOS.
      My apps are responsive, visually appealing, and user-friendly.
    `,
        features: [
            "Flutter and Dart development",
            "Cross-platform compatibility",
            "Native performance optimization",
            "Mobile UI/UX design",
            "App store deployment"
        ]
    },
    {
        title: 'UI/UX Design',
        icon: <FaPalette size={28} className="text-blue-400" />,
        decorativeIcon: <FaPaintBrush className="text-yellow-400/30 text-5xl" />,
        description: `
      I design clean and functional interfaces. 
      Applications are intuitive, visually consistent, and provide professional experiences aligned with the brand.
    `,
        features: [
            "User research and analysis",
            "Wireframing and prototyping",
            "Design system creation",
            "Usability testing",
            "Brand identity implementation"
        ]
    },
    {
        title: 'AI Integration & Automation',
        icon: <SiDjango size={28} className="text-blue-400" />,
        decorativeIcon: <FaBrain className="text-yellow-400/30 text-5xl" />,
        description: `
      I can integrate AI features like chatbots or automation into apps to enhance user experience or simplify workflows.
      Smart integration without overcomplicating the project.
    `,
        features: [
            "Chatbot implementation",
            "Workflow automation",
            "AI API integration",
            "Data processing and analysis",
            "openAPI utilization"
        ]
    },
];

// Define animation classes for each service
const animationClasses = [
    "animate__fadeInLeft",   // Slide in from left
    "animate__fadeInRight",  // Slide in from right
    "animate__bounceIn",     // Bounce in
    "animate__fadeInUp",     // Fade in from bottom
    "animate__zoomIn",       // Zoom in
    "animate__rotateIn"      // Rotate in
];

// Memoized Service Card Component
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
        rootMargin: '-50px'
    });

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } group relative py-6 md:py-8 ${inView ? 'animate__animated ' + animationClasses[index] : ''}`}
            style={{ animationDelay: inView ? `${index * 0.3}s` : '0s' }}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            {/* Icon Container */}
            <div className="flex-shrink-0 bg-gradient-to-br from-blue-800/50 to-blue-900/50 p-4 md:p-6 rounded-2xl flex items-center justify-center shadow-xl border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 z-10">
                {service.icon}
            </div>

            {/* Content Container */}
            <div className="max-w-2xl space-y-3 md:space-y-4 z-10">
                {/* Service Title */}
                <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                    {service.title}
                </h2>

                {/* Service Description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {service.description.trim()}
                </p>

                {/* Features List */}
                <div className="mt-2">
                    <h3 className="text-xs md:text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                        Key Capabilities
                    </h3>
                    <ul className="space-y-1 md:space-y-2">
                        {service.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start text-gray-300">
                                <FaCheck className="text-yellow-400 mt-1 mr-2 md:mr-3 flex-shrink-0 text-xs md:text-sm" />
                                <span className="text-sm md:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Decorative Icon in the opposite side of the zigzag */}
            <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 z-0 ${
                index % 2 === 0 ? 'right-0' : 'left-0'
            }`}>
                <div className="w-32 h-32 rounded-full bg-blue-900/20 flex items-center justify-center">
                    {service.decorativeIcon}
                </div>
            </div>
        </motion.div>
    );
};

export default function ServicesPage() {
    return (
        <div className={`${poppins.className} bg-gray-900 min-h-screen px-4 md:px-20 py-16 md:py-20 relative overflow-hidden`}>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            {/* Services Section Title */}
            <div className="relative mb-12 md:mb-16 text-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
                </div>

                <motion.h1
                    className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate__animated animate__fadeInDown"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Services
                </motion.h1>


                <div className="flex justify-center items-center space-x-4 mb-3 md:mb-4">
                    <div className="w-8 md:w-12 h-1 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-8 md:w-12 h-1 bg-blue-500 rounded-full"></div>
                </div>

                <motion.p
                    className="text-lg md:text-2xl text-white max-w-2xl md:max-w-3xl mx-auto px-4 animate__animated animate__fadeInUp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Professional Web & Mobile Development Services
                </motion.p>

                {/* Floating service icons */}
                <div className="absolute -top-4 left-1/4 opacity-20 animate-bounce">
                    <FaCode className="text-2xl md:text-3xl text-blue-400" />
                </div>
                <div className="absolute -bottom-4 right-1/4 opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
                    <FaPalette className="text-2xl md:text-3xl text-purple-400" />
                </div>
            </div>

            {/* Services Zig-Zag Layout */}
            <div className="flex flex-col gap-6 md:gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

            {/* Heart Call-To-Action */}
            <div className="mt-28 md:mt-36 flex justify-center z-10 relative">
                <div className="w-96 md:w-[28rem] lg:w-[32rem]">
                    <HeartCTA />
                </div>
            </div>
        </div>
    );
}