'use client';

import { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaPlus, FaTimes, FaImage, FaCheck, FaLinkedin, FaTwitter, FaWhatsapp, FaBehance, FaStar, FaExpand } from 'react-icons/fa';

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

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [showExpandModal, setShowExpandModal] = useState(false);
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
    const [formData, setFormData] = useState({
        description: '',
        clientName: '',
        socialHandle: '',
        socialSite: 'LinkedIn' as Testimonial['socialSite'],
        image: '' as string,
    });
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [messageText, setMessageText] = useState('');
    const [imagePreview, setImagePreview] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Load testimonials
    useEffect(() => {
        const stored = localStorage.getItem('portfolioTestimonials');
        if (stored) setTestimonials(JSON.parse(stored));
    }, []);

    const saveTestimonials = (updated: Testimonial[]) => {
        try {
            localStorage.setItem('portfolioTestimonials', JSON.stringify(updated));
            setTestimonials(updated);
        } catch (err) {
            setMessageText('Storage limit reached! Remove some testimonials.');
            setShowMessageModal(true);
        }
    };

    // Handle image upload & resize
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setLoading(true);

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxWidth = 800;
                const scale = maxWidth / img.width;
                canvas.width = maxWidth;
                canvas.height = img.height * scale;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
                const compressed = canvas.toDataURL('image/jpeg', 0.7);
                setFormData({ ...formData, image: compressed });
                setImagePreview(compressed);
                setLoading(false);
            };
        };
        reader.readAsDataURL(file);
    };

    const resetForm = () => {
        setFormData({ description: '', clientName: '', socialHandle: '', socialSite: 'LinkedIn', image: '' });
        setImagePreview('');
    };

    const handleAddTestimonial = () => {
        if (!formData.description || !formData.image || !formData.clientName || !formData.socialHandle) {
            setMessageText('Please provide all testimonial details and screenshot.');
            setShowMessageModal(true);
            return;
        }

        // Check if testimonial already exists to prevent duplication
        const isDuplicate = testimonials.some(t =>
            t.clientName === formData.clientName &&
            t.description === formData.description
        );

        if (isDuplicate) {
            setMessageText('This testimonial already exists.');
            setShowMessageModal(true);
            return;
        }

        const newTestimonial: Testimonial = {
            clientName: formData.clientName,
            socialHandle: formData.socialHandle,
            socialSite: formData.socialSite,
            description: formData.description,
            image: formData.image,
            timestamp: new Date().toISOString(),
        };

        const updated = [...testimonials, newTestimonial];
        saveTestimonials(updated);
        resetForm();
        setShowModal(false);
        setMessageText('Testimonial added successfully!');
        setShowMessageModal(true);
    };

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
                animation: scroll 30s linear infinite;
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
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-2 md:p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="text-center mb-4 md:mb-8 relative z-10">
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

            {/* Add Testimonial Button */}
            <div className="text-center mb-4 md:mb-8 relative z-10">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        resetForm();
                        setShowModal(true);
                    }}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-yellow-700 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center mx-auto gap-1 md:gap-2 text-xs md:text-sm"
                >
                    <FaPlus className="text-xs md:text-sm" /> Add Testimonial
                </motion.button>
            </div>

            {/* Infinite Carousel */}
            <div className="relative overflow-hidden py-2 md:py-4 relative z-10">
                <div
                    className="carousel-track gap-2 md:gap-4"
                    ref={carouselRef}
                >
                    {displayedTestimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg border border-gray-700 flex-shrink-0 w-[85%] md:w-[20%] p-2 md:p-3 flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-yellow-600/30 h-60 md:h-80"
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

            {/* Add/Edit Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="p-3 md:p-4 border-b border-gray-700 flex justify-between items-center">
                                <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">Add Testimonial</h2>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        resetForm();
                                    }}
                                    className="p-1.5 rounded-full hover:bg-gray-700 transition-colors"
                                >
                                    <FaTimes className="text-white text-sm" />
                                </button>
                            </div>

                            <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-300 mb-1">
                                            Client Name *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={formData.clientName}
                                            onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                                            className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-xs"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-300 mb-1">
                                            Social Handle *
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="@johndoe"
                                            value={formData.socialHandle}
                                            onChange={(e) => setFormData({ ...formData, socialHandle: e.target.value })}
                                            className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-xs"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1">
                                        Social Platform *
                                    </label>
                                    <select
                                        value={formData.socialSite}
                                        onChange={(e) => setFormData({ ...formData, socialSite: e.target.value as Testimonial['socialSite'] })}
                                        className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-xs"
                                    >
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Twitter">Twitter</option>
                                        <option value="WhatsApp">WhatsApp</option>
                                        <option value="Behance">Behance</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1">
                                        Testimonial Description *
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="What did the client say about your work?"
                                        className="w-full px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 min-h-[60px] md:min-h-[80px] focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent resize-none text-xs"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-gray-300 mb-1">
                                        Testimonial Screenshot *
                                    </label>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                        <label className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer bg-gray-700/30 hover:bg-gray-600/50 transition-colors">
                                            {imagePreview ? (
                                                <NextImage
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    width={96}
                                                    height={96}
                                                    className="rounded-lg object-cover w-full h-full"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center text-white">
                                                    <FaImage className="text-lg md:text-xl mb-1" />
                                                    <span className="text-xs text-white text-center px-1">Upload</span>
                                                </div>
                                            )}
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                                disabled={loading}
                                            />
                                        </label>
                                        <div className="mt-1 md:mt-0">
                                            {loading ? (
                                                <div className="flex items-center text-yellow-600 text-xs">
                                                    <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </div>
                                            ) : (
                                                <p className="text-xs text-gray-300">
                                                    Upload testimonial screenshot. Recommended: 800x600px.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 md:p-4 border-t border-gray-700 flex justify-end gap-2">
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        resetForm();
                                    }}
                                    className="px-2 py-1.5 md:px-3 md:py-1.5 border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors text-xs"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddTestimonial}
                                    className="px-2 py-1.5 md:px-3 md:py-1.5 bg-gradient-to-r from-yellow-700 to-yellow-800 text-white rounded-lg hover:from-yellow-800 hover:to-yellow-900 transition-all flex items-center gap-1 text-xs"
                                >
                                    <FaCheck className="text-xs" /> Add
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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