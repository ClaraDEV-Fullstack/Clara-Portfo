
'use client';

import { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaPlus, FaTimes, FaImage, FaCheck, FaLinkedin, FaTwitter, FaWhatsapp, FaBehance, FaStar, FaExpand, FaTrash } from 'react-icons/fa';

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

// Static testimonials that all visitors can see (Cannot be deleted by user)
const staticTestimonials: Testimonial[] = [
    {
        clientName: "Berenice",
        socialHandle: "@berenice",
        socialSite: "LinkedIn",
        description: "Claris delivered a top-notch portfolio website that perfectly showcases my work. The design is clean, professional, and visually stunning. Highly recommended!",
        image: "/images/expense-tracker.jpg",
        timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        clientName: "Mr. Wabo",
        socialHandle: "@mrwabo",
        socialSite: "WhatsApp",
        description: "The web development project was completed ahead of schedule with exceptional quality. Claris’s attention to detail and creativity made a huge difference in our online presence.",
        image: "/images/weather-dashboard.jpg",
        timestamp: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        clientName: "Julius",
        socialHandle: "@julius_Ai",
        socialSite: "Behance",
        description: "Working with Claris was a pleasure! The UI/UX design enhancements she implemented made my portfolio interactive, modern, and visually engaging.",
        image: "/images/react-django-app.jpg",
        timestamp: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
        clientName: "Doris",
        socialHandle: "@dorisgold",
        socialSite: "WhatsApp",
        description: "Claris brought my ideas to life with creative solutions and responsive design. My portfolio now looks professional across all devices. Fantastic work!",
        image: "/images/portfolio-website.jpg",
        timestamp: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    },
];

export default function TestimonialsPage() {
    // Separate state for user testimonials makes management easier
    const [userTestimonials, setUserTestimonials] = useState<Testimonial[]>([]);
    
    // Derived state for display (Static + User)
    const allTestimonials = [...staticTestimonials, ...userTestimonials];

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

    // Load testimonials from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('portfolioTestimonials');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setUserTestimonials(parsed);
            } catch (err) {
                console.error('Error parsing stored testimonials:', err);
            }
        }
    }, []);

    // Helper to check if a testimonial is user-generated (can be deleted)
    const isUserTestimonial = (t: Testimonial) => {
        return userTestimonials.some(ut => 
            ut.clientName === t.clientName && 
            ut.description === t.description &&
            ut.timestamp === t.timestamp
        );
    };

    const handleDeleteTestimonial = (e: React.MouseEvent, testimonialToDelete: Testimonial) => {
        e.stopPropagation(); // Prevent opening expand modal
        
        if (!confirm("Are you sure you want to delete this testimonial?")) return;

        const updatedUserTestimonials = userTestimonials.filter(t => 
            t.clientName !== testimonialToDelete.clientName || 
            t.description !== testimonialToDelete.description
        );

        setUserTestimonials(updatedUserTestimonials);
        localStorage.setItem('portfolioTestimonials', JSON.stringify(updatedUserTestimonials));
        
        setMessageText('Testimonial deleted successfully.');
        setShowMessageModal(true);
    };

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

        const isDuplicate = allTestimonials.some(t =>
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

        const updated = [...userTestimonials, newTestimonial];
        setUserTestimonials(updated);
        localStorage.setItem('portfolioTestimonials', JSON.stringify(updated));
        
        resetForm();
        setShowModal(false);
        setMessageText('Testimonial added successfully!');
        setShowMessageModal(true);
    };

    const handleCardClick = (testimonial: Testimonial) => {
        setSelectedTestimonial(testimonial);
        setShowExpandModal(true);
    };

    useEffect(() => {
        if (!carouselRef.current || allTestimonials.length === 0) return;
        const style = document.createElement('style');
        style.innerHTML = `
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
.carousel-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: max-content;
}
.carousel-track:hover {
    animation-play-state: paused;
}
`;
        document.head.appendChild(style);
        return () => { document.head.removeChild(style); };
    }, [allTestimonials]);

    // Duplicate logic for infinite scroll
    const displayedTestimonials = [...allTestimonials, ...allTestimonials];

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-2 md:p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl"></div>

            <div className="text-center mb-4 md:mb-8 relative z-10 pt-16 md:pt-20">
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
                </p>
            </div>

            <div className="text-center mb-4 md:mb-8 relative z-10">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { resetForm(); setShowModal(true); }}
                    className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-600 to-yellow-700 text-white font-semibold rounded-lg shadow-lg flex items-center justify-center mx-auto gap-1 md:gap-2 text-xs md:text-sm"
                >
                    <FaPlus className="text-xs md:text-sm" /> Add Testimonial
                </motion.button>
            </div>

            <div className="relative overflow-hidden py-2 md:py-4 relative z-10">
                <div className="carousel-track gap-4" ref={carouselRef}>
                    {displayedTestimonials.map((t, idx) => {
                        const canDelete = isUserTestimonial(t);
                        return (
                            <div
                                key={idx}
                                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg border border-gray-700 flex-shrink-0 w-[280px] md:w-[320px] p-3 flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-yellow-600/30 relative group"
                                onClick={() => handleCardClick(t)}
                            >
                                {/* Delete Button - Only for user added testimonials */}
                                {canDelete && (
                                    <button
                                        onClick={(e) => handleDeleteTestimonial(e, t)}
                                        className="absolute top-2 right-2 z-20 p-1.5 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                                        title="Delete Testimonial"
                                    >
                                        <FaTrash size={10} />
                                    </button>
                                )}

                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-1">
                                        <div className="text-yellow-600 flex text-xs">
                                            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-xs" />)}
                                        </div>
                                    </div>
                                    <FaQuoteLeft className="text-yellow-600/30 text-sm md:text-lg" />
                                </div>

                                {t.image && (
                                    <div className="relative h-32 w-full mb-2 rounded-lg overflow-hidden group/img">
                                        <NextImage src={t.image} alt="Screenshot" fill className="object-cover transition-transform duration-300 group-hover/img:scale-105" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <FaExpand className="text-white text-xl" />
                                        </div>
                                    </div>
                                )}

                                <div className="flex-grow mb-2 overflow-hidden">
                                    <div className="bg-gray-700/30 rounded-lg p-2 h-16 overflow-hidden">
                                        <p className="text-gray-200 text-xs break-words">
                                            {t.description.length > 60 ? `${t.description.substring(0, 60)}...` : t.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-xs pt-2 border-t border-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="text-sm">{socialIcons[t.socialSite]}</div>
                                        <div>
                                            <div className="text-white font-medium truncate max-w-[80px]">{t.clientName}</div>
                                            <div className="text-gray-400 text-[10px] truncate max-w-[80px]">{t.socialHandle}</div>
                                        </div>
                                    </div>
                                    <div className="text-gray-400 text-[10px]">{new Date(t.timestamp).toLocaleDateString()}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modals (Add, Expand, Success) code remains same... */}
            {/* Just pasting the Add/Edit modal part for completeness if needed */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-700"
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-white">Add Testimonial</h2>
                                <button onClick={() => setShowModal(false)}><FaTimes className="text-white" /></button>
                            </div>
                            <div className="p-4 space-y-4">
                                <input type="text" placeholder="Name" value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
                                <input type="text" placeholder="Handle" value={formData.socialHandle} onChange={e => setFormData({...formData, socialHandle: e.target.value})} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
                                <textarea placeholder="Description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" />
                                <div className="border-2 border-dashed border-gray-500 p-4 text-center cursor-pointer text-gray-300">
                                    <label className="cursor-pointer block">
                                        {imagePreview ? <img src={imagePreview} className="h-20 mx-auto" /> : <><FaImage className="mx-auto mb-2" /> Upload Image</>}
                                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                    </label>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-700 flex justify-end gap-2">
                                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-white">Cancel</button>
                                <button onClick={handleAddTestimonial} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showExpandModal && selectedTestimonial && (
                    <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setShowExpandModal(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="bg-gray-800 rounded-xl max-w-3xl w-full p-6 relative" onClick={e => e.stopPropagation()} initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}>
                            <button onClick={() => setShowExpandModal(false)} className="absolute top-4 right-4 text-white"><FaTimes /></button>
                            <div className="flex gap-4">
                                <div className="w-1/2 relative h-64">
                                    {selectedTestimonial.image && <NextImage src={selectedTestimonial.image} fill className="object-contain rounded" alt="Full view" />}
                                </div>
                                <div className="w-1/2">
                                    <h2 className="text-2xl font-bold text-white mb-2">{selectedTestimonial.clientName}</h2>
                                    <p className="text-gray-300">{selectedTestimonial.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showMessageModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-[60] bg-black/50">
                        <div className="bg-white p-6 rounded shadow-lg text-center">
                            <p className="mb-4 text-black">{messageText}</p>
                            <button onClick={() => setShowMessageModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded">OK</button>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
