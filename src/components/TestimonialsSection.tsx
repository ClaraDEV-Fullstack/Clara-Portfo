'use client';

import { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaTimes, FaImage, FaCheck, FaLinkedin, FaTwitter, FaWhatsapp, FaBehance, FaStar, FaExpand } from 'react-icons/fa';

interface Testimonial {
    clientName: string;
    socialHandle: string;
    socialSite: 'LinkedIn' | 'Twitter' | 'WhatsApp' | 'Behance';
    description: string;
    image?: string;
    timestamp: string;
}

const socialIcons: Record<string, JSX.Element> = {
    LinkedIn: <FaLinkedin className="text-blue-400" />,
    Twitter: <FaTwitter className="text-blue-300" />,
    WhatsApp: <FaWhatsapp className="text-green-400" />,
    Behance: <FaBehance className="text-blue-500" />,
};

// Static testimonials that all visitors can see
const staticTestimonials: Testimonial[] = [
    {
        clientName: "Berenice",
        socialHandle: "@berenice",
        socialSite: "LinkedIn",
        description: "Claris delivered a top-notch portfolio website that perfectly showcases my work. The design is clean, professional, and visually stunning. Highly recommended!",
        image: "/images/expense-tracker.jpg",
        timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    },
    {
        clientName: "Mr. Wabo",
        socialHandle: "@mrwabo",
        socialSite: "WhatsApp",
        description: "The web development project was completed ahead of schedule with exceptional quality. Claris's attention to detail and creativity made a huge difference in our online presence.",
        image: "/images/weather-dashboard.jpg",
        timestamp: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days ago
    },
    {
        clientName: "Julius",
        socialHandle: "@julius_Ai",
        socialSite: "Behance",
        description: "Working with Claris was a pleasure! The UI/UX design enhancements she implemented made my portfolio interactive, modern, and visually engaging.",
        image: "/images/react-django-app.jpg",
        timestamp: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days ago
    },
    {
        clientName: "Doris",
        socialHandle: "@dorisgold",
        socialSite: "WhatsApp",
        description: "Claris brought my ideas to life with creative solutions and responsive design. My portfolio now looks professional across all devices. Fantastic work!",
        image: "/images/portfolio-website.jpg",
        timestamp: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    },
];

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>(staticTestimonials);
    const [showExpandModal, setShowExpandModal] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [messageText, setMessageText] = useState('');
    const carouselRef = useRef<HTMLDivElement>(null);

    // Load testimonials from localStorage and merge with static ones
    useEffect(() => {
        const stored = localStorage.getItem('portfolioTestimonials');
        if (stored) {
            try {
                const userTestimonials = JSON.parse(stored);
                // Combine static testimonials with user-added ones
                setTestimonials([...staticTestimonials, ...userTestimonials]);
            } catch (err) {
                console.error('Error parsing stored testimonials:', err);
            }
        }
    }, []);

    const handleCardClick = (testimonial: Testimonial) => {
        setSelectedTestimonial(testimonial);
        setShowExpandModal(true);
    };

    // Infinite scrolling with CSS animation
    useEffect(() => {
        if (!carouselRef.current || testimonials.length === 0) return;

        // Create CSS animation for infinite scroll
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .carousel-track {
                animation: scroll 10s linear infinite;
                display: flex;
                width: 200%;
            }
            .carousel-track:hover {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [testimonials]);

    // Duplicate testimonials for infinite scroll
    const displayedTestimonials = [...testimonials, ...testimonials];

    return (
        // Removed min-h-screen, reduced padding and margin
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-1 md:p-2 relative overflow-hidden mt-4 md:mt-6 mb-0">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="text-center mb-2 md:mb-3 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-1 md:mb-2"
                >
                    What My Clients Say
                </motion.h1>
                <p className="text-xs md:text-base text-white max-w-2xl mx-auto leading-relaxed px-2">
                    Discover how collaboration, creativity, and dedication have helped bring my clients' visions to life.
                    Their words reflect the results and relationships built along the way.
                </p>
            </div>

            {/* Infinite Carousel - Reduced padding */}
            <div className="relative overflow-hidden py-1 md:py-2 relative z-10">
                <div
                    className="carousel-track gap-2 md:gap-4"
                    ref={carouselRef}
                >
                    {displayedTestimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg border border-gray-700 flex-shrink-0 w-[35%] md:w-[14%] p-2 md:p-3 flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-yellow-600/30 h-60 md:h-80"
                            onClick={() => handleCardClick(t)}
                        >
                            {/* Header with rating */}
                            <div className="flex justify-between items-start mb-1 md:mb-2">
                                <div className="flex items-center gap-1">
                                    <div className="text-yellow-600 flex text-xs">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-xs" />
                                        ))}
                                    </div>
                                </div>
                                <FaQuoteLeft className="text-yellow-600/30 text-sm md:text-lg" />
                            </div>

                            {/* Screenshot */}
                            {t.image && (
                                <div className="relative h-24 md:h-40 w-full mb-1 md:mb-2 rounded-lg overflow-hidden group">
                                    <NextImage
                                        src={t.image}
                                        alt="Screenshot"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <FaExpand className="text-white text-sm md:text-xl" />
                                    </div>
                                </div>
                            )}

                            {/* Description */}
                            <div className="flex-grow mb-1 md:mb-2 overflow-hidden">
                                <div className="bg-gray-700/30 rounded-lg p-1.5 md:p-2 h-12 md:h-16 overflow-hidden">
                                    <p className="text-gray-200 text-xs break-words">
                                        {t.description.length > 40
                                            ? `${t.description.substring(0, 40)}...`
                                            : t.description}
                                    </p>
                                </div>
                                {t.description.length > 40 && (
                                    <div className="text-yellow-600 text-xs mt-0.5 flex items-center">
                                        <span className="text-xs">Click to read more</span>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center text-xs pt-1 md:pt-2 border-t border-gray-600">
                                <div className="flex items-center gap-1">
                                    <div className="text-xs">
                                        {socialIcons[t.socialSite]}
                                    </div>
                                    <div>
                                        <div className="text-white font-medium truncate max-w-[50px] text-xs">{t.clientName}</div>
                                        <div className="text-gray-400 text-xs truncate max-w-[50px]">{t.socialHandle}</div>
                                    </div>
                                </div>
                                <div className="text-gray-400 text-xs">
                                    {new Date(t.timestamp).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Expand Modal */}
            <AnimatePresence>
                {showExpandModal && selectedTestimonial && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowExpandModal(false)}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-3 md:p-4 border-b border-gray-700 flex justify-between items-center">
                                <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                                    Testimonial Details
                                </h2>
                                <button
                                    onClick={() => setShowExpandModal(false)}
                                    className="p-1.5 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <FaTimes className="text-white text-sm" />
                                </button>
                            </div>

                            <div className="p-3 md:p-4">
                                {/* Header with rating and client info */}
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 md:mb-4">
                                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-0">
                                        <div className="text-yellow-600 flex text-base md:text-xl">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                        <div>
                                            <div className="text-white text-base md:text-lg font-medium">{selectedTestimonial.clientName}</div>
                                            <div className="flex items-center gap-1 md:gap-2 text-gray-400 text-xs">
                                                <div className="text-sm md:text-base">
                                                    {socialIcons[selectedTestimonial.socialSite]}
                                                </div>
                                                <span>{selectedTestimonial.socialHandle}</span>
                                                <span>•</span>
                                                <span>{selectedTestimonial.socialSite}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        {new Date(selectedTestimonial.timestamp).toLocaleDateString()}
                                    </div>
                                </div>

                                {/* Full size image */}
                                {selectedTestimonial.image && (
                                    <div className="relative h-40 md:h-80 w-full mb-3 md:mb-4 rounded-lg overflow-hidden">
                                        <NextImage
                                            src={selectedTestimonial.image}
                                            alt="Testimonial Screenshot"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}

                                {/* Full testimonial text */}
                                <div className="mb-3 md:mb-4">
                                    <h3 className="text-sm md:text-base font-semibold text-yellow-600 mb-1 md:mb-2">Testimonial</h3>
                                    <div className="bg-gray-700/50 rounded-lg p-2 md:p-4">
                                        <p className="text-gray-200 text-xs md:text-base leading-relaxed whitespace-pre-line break-words">
                                            {selectedTestimonial.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 md:p-4 border-t border-gray-700 flex justify-end">
                                <button
                                    onClick={() => setShowExpandModal(false)}
                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-700 to-yellow-800 text-white font-medium rounded-lg hover:from-yellow-800 hover:to-yellow-900 transition-all text-xs"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showMessageModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl w-full max-w-md p-4 md:p-6 border border-gray-700"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="flex justify-center mb-3 md:mb-4">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-yellow-700 to-yellow-800 flex items-center justify-center">
                                    <FaCheck className="text-gray-900 text-base md:text-xl" />
                                </div>
                            </div>
                            <p className="text-white text-center mb-3 md:mb-4 text-sm md:text-base">{messageText}</p>
                            <div className="flex justify-center">
                                <button
                                    onClick={() => setShowMessageModal(false)}
                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-700 to-yellow-800 text-white font-medium rounded-lg hover:from-yellow-800 hover:to-yellow-900 transition-all text-xs"
                                >
                                    OK
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}