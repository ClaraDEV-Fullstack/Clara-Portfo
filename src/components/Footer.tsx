'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaBehance,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart,
    FaLaptopCode,
} from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
        { name: 'Academics', href: '/academics' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Contact', href: '/contact' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/ClaraDEV-Fullstack' },
        { icon: <FaLinkedin />, url: 'https://linkedin.com/in/clara-beri-794097217/' },
        { icon: <FaWhatsapp />, url: 'https://wa.me/237683669723' },
        { icon: <FaBehance />, url: 'https://behance.net/claraberi' },
    ];

    return (
        <footer className="relative overflow-hidden font-serif text-white">
            {/* ✨ Deep dark blue–gold background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0b0a09] via-[#101820] to-[#1a1a1a]"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
                style={{ backgroundSize: '200% 200%' }}
            />

            {/* 🌌 Subtle glowing gold shadows */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-5rem] left-[-5rem] w-64 h-64 md:w-96 md:h-96 bg-yellow-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-6rem] right-[-4rem] w-24rem h-24rem md:w-[28rem] md:h-[28rem] bg-yellow-800/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-10 left-1/3 w-64 h-64 md:w-80 md:h-80 bg-yellow-700/5 rounded-full blur-[160px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-6">
                    {/* Brand / intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/" className="inline-flex items-center gap-2 sm:gap-3" aria-label="Clara Beri home">
                            <div className="w-6 h-6 sm:w-8 sm:h-10 rounded-full bg-gradient-to-r from-[#2b2b2b] to-[#1d1d1d] flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.15)]">
                                <FaLaptopCode className="text-yellow-400 text-sm sm:text-base sm:text-lg" />
                            </div>
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
                                Clara Beri
                            </span>
                        </Link>

                        <p className="mt-1 sm:mt-2 text-gray-300 leading-relaxed text-xs">
                            Full-stack developer and UI/UX designer creating beautiful, functional digital experiences.
                        </p>

                        <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3">
                            {socialLinks.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="social link"
                                    whileHover={{ scale: 1.15 }}
                                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base sm:text-lg"
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation links - Combined on mobile */}
                    <div className="md:col-span-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-5">
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex-1"
                            >
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-400 mb-1 sm:mb-2 md:mb-3 drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]">
                                    Navigation
                                </h3>
                                <ul className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4 sm:gap-y-2">
                                    {navLinks.slice(0, 4).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-yellow-300 transition-colors text-xs"
                                            >
                                                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-500/60 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.4)]" />
                                                <span>{link.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex-1"
                            >
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-yellow-400 mb-1 sm:mb-2 md:mb-3 drop-shadow-[0_0_6px_rgba(255,215,0,0.3)]">
                                    More Pages
                                </h3>
                                <ul className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4 sm:gap-y-2">
                                    {navLinks.slice(4).map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-yellow-300 transition-colors text-xs"
                                            >
                                                <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-yellow-500/60 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.4)]" />
                                                <span>{link.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <motion.address
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="not-italic bg-[#111]/70 backdrop-blur-md rounded-xl p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 md:mb-6 border border-yellow-900/20 shadow-[0_0_25px_rgba(255,215,0,0.05)]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                        {[
                            {
                                icon: <FaEnvelope className="text-yellow-400 text-xs" />,
                                title: 'Email',
                                text: 'claraberi63@gmail.com',
                                href: 'mailto:claraberi63@gmail.com',
                            },
                            {
                                icon: <FaPhone className="text-yellow-400 text-xs" />,
                                title: 'Phone',
                                text: '+237 683 669 723',
                                href: 'tel:+237683669723',
                            },
                            {
                                icon: <FaMapMarkerAlt className="text-yellow-400 text-xs" />,
                                title: 'Location',
                                text: 'Douala, Cameroon',
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-[#1c1c1c] flex items-center justify-center shadow-[0_0_10px_rgba(255,215,0,0.1)]">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-yellow-400 font-medium text-xs">{item.title}</h4>
                                    {item.href ? (
                                        <a href={item.href} className="text-gray-300 text-xs hover:text-yellow-300">
                                            {item.text}
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 text-xs">{item.text}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.address>

                {/* Bottom section */}
                <div className="pt-2 sm:pt-3 md:pt-4 border-t border-yellow-900/30 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs text-gray-400"
                    >
                        © {currentYear} Clara Beri. All rights reserved.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex justify-center items-center gap-1 text-xs text-gray-400 mt-1 sm:mt-2"
                    >
                        <span>Made with</span>
                        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <FaHeart className="text-yellow-400 text-xs" />
                        </motion.span>
                        <span>by Clara Beri</span>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}