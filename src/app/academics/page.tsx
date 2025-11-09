'use client';

import { motion } from 'framer-motion';
import { Poppins, Montserrat } from 'next/font/google';
import { FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaLightbulb, FaUsers, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'] });

// Define types for our data structures
type CareerItem = {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: string;
};

type CareerData = {
    academic: CareerItem[];
    experience: CareerItem[];
    training: CareerItem[];
};

type Section = {
    id: keyof CareerData;
    title: string;
    icon: JSX.Element;
    color: string;
};

export default function CareerPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    // Grouped and sorted career data
    const careerData: CareerData = {
        academic: [
            {
                year: '2022-2023',
                title: 'MBA in Logistics and Supply Chain',
                subtitle: 'IUGET, Bonamoussadi',
                description: 'Focused on strategic management, logistics optimization, and efficient supply chain systems.',
                type: 'academic'
            },
            {
                year: '2021',
                title: 'Bachelor\'s Degree',
                subtitle: 'Management Sciences',
                description: 'Built strong analytical and leadership foundations with emphasis on organizational management.',
                type: 'academic'
            },
            {
                year: '2019-2020',
                title: 'HND in Human Resource Management',
                subtitle: 'IUC – Institute Universitaire de la Côte',
                description: 'Developed expertise in employee relations, recruitment, and workplace management strategies.',
                type: 'academic'
            },
            {
                year: '2018',
                title: 'GCE Advanced Level',
                subtitle: 'Business Studies',
                description: 'Completed advanced secondary education with a strong foundation in management and business principles.',
                type: 'academic'
            }
        ],
        experience: [
            {
                year: '2021-2023',
                title: 'Graphic Designer & Assistant Manager',
                subtitle: 'Awambong Private Company',
                description: 'Oversaw design, production, procurement, and delivery while managing supply chain operations.',
                type: 'experience'
            }
        ],
        training: [
            {
                year: '2023-Present',
                title: 'Full-Stack Web & Mobile Development',
                subtitle: 'HiTech Training Center',
                description: 'Building scalable web and mobile applications with modern technologies and frameworks.',
                type: 'training'
            },
            {
                year: '2023',
                title: 'Graphic Design Training',
                subtitle: 'Multicolor – Printing & Design',
                description: '1-year professional training in digital and industrial printing, layout design, and branding.',
                type: 'training'
            }
        ]
    };

    // Section configuration
    const sections: Section[] = [
        {
            id: 'academic',
            title: 'Academic Background',
            icon: <FaGraduationCap className="text-white text-xl" />,
            color: 'from-blue-600 to-blue-800'
        },
        {
            id: 'experience',
            title: 'Professional Experience',
            icon: <FaBriefcase className="text-white text-xl" />,
            color: 'from-green-600 to-green-800'
        },
        {
            id: 'training',
            title: 'Professional Training',
            icon: <FaCertificate className="text-white text-xl" />,
            color: 'from-purple-600 to-purple-800'
        }
    ];

    return (
        <section className={`${poppins.className} bg-gradient-to-br from-gray-900 to-black min-h-screen text-white py-10 px-4 md:px-6 relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-600/10 to-transparent rounded-full blur-3xl"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center mb-12 relative z-10"
            >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-800 mb-6 shadow-lg">
                    <FaGraduationCap className="text-white text-3xl" />
                </div>

                <h1
                    className={`${montserrat.className} text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent`}
                >
                    Career Journey
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium">
                    My path through education, professional experience, and continuous skill development
                </p>
            </motion.div>

            <div className="w-[95%] mx-auto">
                {/* Main Content - Full Width Layout */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start">
                    {/* Left Column - Image and Quote (30% width) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInLeft}
                        className="lg:w-[30%] flex flex-col items-center"
                    >
                        {/* Curved Image Container */}
                        <div className="relative w-full mb-8">
                            <div className="relative overflow-hidden rounded-[50%_50%_0%_0%] w-full aspect-[3/4]">
                                <Image
                                    src="/images/aboutpic.jpg"
                                    alt="Professional portrait"
                                    fill
                                    className="object-cover w-full h-full scale-110 transition-transform duration-700 ease-in-out"
                                    style={{
                                        objectPosition: "center top", // Keeps your head fully visible
                                    }}
                                    priority
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-full blur-xl"></div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30 rounded-full blur-xl"></div>

                            {/* Floating badges */}
                            <motion.div
                                className="absolute top-6 right-6 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                3+ Years Experience
                            </motion.div>

                            <motion.div
                                className="absolute bottom-6 left-6 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                Multidisciplinary
                            </motion.div>
                        </div>


                        {/* Quote Section - Moved under image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full"
                        >
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                                <p className="text-lg md:text-xl text-gray-300 font-medium italic text-center">
                                    "Education built my foundation; experience shaped my creativity and resilience.
                                    Together, they form the cornerstone of my professional journey."
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Career Timeline (70% width) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="lg:w-[70%]"
                    >
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700">

                            {/* Render each section */}
                            {sections.map((section: Section) => (
                                <div key={section.id} className="mb-12">
                                    {/* Section Title */}
                                    <div className="flex items-center mb-8">
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center mr-6`}>
                                            {section.icon}
                                        </div>
                                        <h2 className={`${montserrat.className} text-3xl font-bold text-white`}>
                                            {section.title}
                                        </h2>
                                    </div>

                                    {/* Timeline */}
                                    <div className="relative">
                                        {/* Vertical line */}
                                        <div className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color}`}></div>

                                        <div className="space-y-12">
                                            {careerData[section.id].map((item: CareerItem, index: number) => (
                                                <motion.div
                                                    key={index}
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true }}
                                                    variants={fadeUp}
                                                    className="relative pl-24" // Increased padding to create more space
                                                >
                                                    {/* Timeline dot */}
                                                    <div className={`absolute left-8 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${section.color} shadow-lg z-10 flex items-center justify-center`}>
                                                        {item.type === 'academic' && <FaAward className="text-white text-xs" />}
                                                        {item.type === 'experience' && <FaBriefcase className="text-white text-xs" />}
                                                        {item.type === 'training' && <FaCertificate className="text-white text-xs" />}
                                                    </div>

                                                    {/* Year badge - Added z-index and padding to prevent overshadowing */}
                                                    <div className="absolute left-0 top-4 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-20">
                                                        {item.year}
                                                    </div>

                                                    {/* Content - Cream white background with adjusted text colors */}
                                                    <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mt-4">
                                                        <h3 className={`${montserrat.className} text-2xl font-bold text-gray-900 mb-2`}>
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-amber-700 font-semibold text-lg mb-3">
                                                            {item.subtitle}
                                                        </p>
                                                        <p className="text-gray-700 text-lg leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}