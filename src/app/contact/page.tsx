'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaGithub, FaLinkedin, FaWhatsapp, FaBehance, FaTrash, FaSignOutAlt, FaCheckCircle } from 'react-icons/fa';

interface Message {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: string;
    read: boolean;
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [showAdmin, setShowAdmin] = useState(false);
    const [adminPassword, setAdminPassword] = useState('');
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const ADMIN_PASS = 'portfolioAdmin123';

    useEffect(() => {
        const stored = localStorage.getItem('portfolioMessages');
        if (stored) {
            const parsedMessages = JSON.parse(stored).map((msg: any) => ({
                ...msg,
                id: msg.id || Math.random().toString(36).substr(2, 9),
                read: msg.read || false
            }));
            setMessages(parsedMessages);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newMessage: Message = {
            id: Math.random().toString(36).substr(2, 9),
            ...formData,
            timestamp: new Date().toISOString(),
            read: false,
        };

        const updatedMessages = [...messages, newMessage];
        localStorage.setItem('portfolioMessages', JSON.stringify(updatedMessages));
        setMessages(updatedMessages);

        setLoading(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleAdminLogin = () => {
        if (adminPassword === ADMIN_PASS) {
            setShowAdmin(true);
            setAdminPassword('');
        } else {
            alert('Incorrect password!');
        }
    };

    const handleAdminLogout = () => {
        setShowAdmin(false);
    };

    const handleDeleteMessage = (id: string) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            const updatedMessages = messages.filter(msg => msg.id !== id);
            localStorage.setItem('portfolioMessages', JSON.stringify(updatedMessages));
            setMessages(updatedMessages);
            setDeleteId(null);
        }
    };

    const markAsRead = (id: string) => {
        const updatedMessages = messages.map(msg =>
            msg.id === id ? { ...msg, read: true } : msg
        );
        localStorage.setItem('portfolioMessages', JSON.stringify(updatedMessages));
        setMessages(updatedMessages);
    };

    return (
        <section className="relative min-h-screen py-20 px-6 md:px-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/contactBg.jpg"
                    alt="Contact Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
                {/* Left Column - Info & Map */}
                <div className="space-y-8">
                    {/* Enhanced Section Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center md:text-left space-y-4"
                    >
                        <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                            Let's Connect 🤝
                        </h3>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="w-24 h-[3px] bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto md:mx-0 rounded-full origin-left"
                        ></motion.div>

                        <p className="text-gray-200 text-lg leading-relaxed max-w-lg">
                            I'm available for <span className="text-yellow-400 font-semibold">freelance work</span>, full-time roles, or even a friendly chat.
                            Drop a message below or connect via my socials — let's bring your next idea to life!
                        </p>
                    </motion.div>

                    {/* Enhanced Contact Info */}
                    <div className="space-y-6 bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-yellow-500/20 rounded-full">
                                <FaEnvelope className="text-yellow-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <a href="mailto:claraberi63@gmail.com" className="text-lg hover:text-yellow-400 transition-colors">
                                    claraberi63@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-yellow-500/20 rounded-full">
                                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Location</p>
                                <p className="text-lg">Douala, Cameroon</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="p-3 bg-yellow-500/20 rounded-full">
                                <FaClock className="text-yellow-400 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Availability</p>
                                <p className="text-lg">Monday - Friday: 24/7</p>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Social Links */}
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/ClaraDEV-Fullstack', color: 'hover:text-gray-300' },
                                { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/clarisse-berinyuy-794097217/', color: 'hover:text-blue-400' },
                                { icon: <FaWhatsapp />, name: 'WhatsApp', url: 'https://wa.me/237683669723', color: 'hover:text-green-400' },
                                { icon: <FaBehance />, name: 'Behance', url: 'https://behance.net/claraberi', color: 'hover:text-blue-500' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-gray-700 transition-all ${social.color} hover:scale-105 hover:bg-gray-800`}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                    <span>{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Enhanced Map */}
                    <motion.div
                        className="mt-8 w-full h-72 rounded-xl overflow-hidden shadow-xl border-2 border-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.123456789!2d9.7000!3d4.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053c123456789ab%3A0xabcdef1234567890!2sDouala%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </div>

                {/* Right Column - Form & Admin Panel */}
                <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-xl border border-gray-700 relative">
                    {/* Success Animation */}
                    {submitted && (
                        <motion.div
                            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full text-xl font-bold shadow-lg z-10"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1.2, rotate: 15 }}
                            transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
                        >
                            <FaCheckCircle className="inline-block mr-2" />
                            Message Sent!
                        </motion.div>
                    )}

                    {submitted && (
                        <motion.div
                            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-white p-4 rounded-lg mb-6 text-center font-semibold backdrop-blur-sm"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Thank you for reaching out. I'll get back to you soon!
                        </motion.div>
                    )}

                    {/* Enhanced Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                            ></textarea>
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </motion.button>
                    </form>

                    {/* Admin Login */}
                    {!showAdmin && (
                        <motion.div
                            className="mt-8 pt-6 border-t border-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h4 className="text-lg font-semibold mb-3 text-gray-300">Admin Access</h4>
                            <div className="flex space-x-2">
                                <input
                                    type="password"
                                    placeholder="Admin Password"
                                    value={adminPassword}
                                    onChange={(e) => setAdminPassword(e.target.value)}
                                    className="flex-1 px-4 py-2 rounded-lg bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                                />
                                <button
                                    onClick={handleAdminLogin}
                                    className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all"
                                >
                                    Login
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Enhanced Admin Panel */}
                    {showAdmin && (
                        <motion.div
                            className="mt-8 pt-6 border-t border-gray-700"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-xl font-semibold text-yellow-400">Message Admin Panel</h4>
                                <button
                                    onClick={handleAdminLogout}
                                    className="flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>

                            {messages.length === 0 ? (
                                <div className="text-center py-8 text-gray-400">
                                    <p>No messages yet.</p>
                                </div>
                            ) : (
                                <div className="max-h-96 overflow-y-auto pr-2 space-y-4">
                                    {messages
                                        .slice()
                                        .reverse()
                                        .map((msg) => (
                                            <motion.div
                                                key={msg.id}
                                                className={`p-4 rounded-lg border ${msg.read ? 'border-gray-700 bg-gray-900/50' : 'border-yellow-500/30 bg-yellow-500/10'} backdrop-blur-sm`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <h5 className="font-bold text-lg">{msg.name}</h5>
                                                            {!msg.read && (
                                                                <span className="px-2 py-1 text-xs bg-yellow-500 text-black rounded-full">New</span>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-400 text-sm">{msg.email}</p>
                                                    </div>
                                                    <div className="flex space-x-2">
                                                        {!msg.read && (
                                                            <button
                                                                onClick={() => markAsRead(msg.id)}
                                                                className="p-2 text-gray-400 hover:text-green-400 transition-colors"
                                                                title="Mark as read"
                                                            >
                                                                <FaCheckCircle />
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleDeleteMessage(msg.id)}
                                                            className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                                            title="Delete message"
                                                        >
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="font-medium mt-2">{msg.subject}</p>
                                                <p className="mt-2 text-gray-300">{msg.message}</p>
                                                <p className="text-xs text-gray-500 mt-3">
                                                    {new Date(msg.timestamp).toLocaleString()}
                                                </p>
                                            </motion.div>
                                        ))}
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}