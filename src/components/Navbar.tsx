'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaCode, FaBriefcase, FaUser, FaGraduationCap, FaComments, FaEnvelope as FaContact } from 'react-icons/fa';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const currentSection = (pathname || '/').split('/')[1] || 'home';
        setActiveSection(currentSection);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Add scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/', label: 'Home', icon: <FaCode className="text-sm md:text-lg" />, section: 'home' },
        { href: '/about', label: 'About', icon: <FaUser className="text-sm md:text-lg" />, section: 'about' },
        { href: '/skills', label: 'Skills', icon: <FaCode className="text-sm md:text-lg" />, section: 'skills' },
        { href: '/projects', label: 'Projects', icon: <FaBriefcase className="text-sm md:text-lg" />, section: 'projects' },
        { href: '/services', label: 'Services', icon: <FaCode className="text-sm md:text-lg" />, section: 'services' },
        { href: '/academics', label: 'Academics', icon: <FaGraduationCap className="text-sm md:text-lg" />, section: 'academics' },
        { href: '/testimonials', label: 'Testimonials', icon: <FaComments className="text-sm md:text-lg" />, section: 'testimonials' },
        { href: '/contact', label: 'Contact', icon: <FaContact className="text-sm md:text-lg" />, section: 'contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/ClaraDEV-Fullstack', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/clara-beri-794097217/', icon: <FaLinkedin /> },
        { name: 'WhatsApp', url: 'https://wa.me/237683669723', icon: <FaWhatsapp /> },
        { name: 'Email', url: 'mailto:claraberi63@gmail.com', icon: <FaEnvelope /> },
    ];

    return (
        <>
            <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
                {/* Top Utility Bar */}
                <div className="w-full bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/40">
                    <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-12 flex items-center justify-between h-7 sm:h-8 text-xs text-gray-300">
                        <div className="flex items-center gap-2">
                            <a href="mailto:claraberi63@gmail.com" className="flex items-center gap-1 hover:text-white transition">
                                <FaEnvelope className="text-xs" /> <span className="hidden sm:inline">claraberi63@gmail.com</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-2">
                            {socialLinks.map((s) => (
                                <motion.a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={s.name}
                                    className="text-gray-300 hover:text-white transition-transform"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className={`w-full bg-gray-900/90 backdrop-blur-lg border-b border-gray-800/50 transition-all duration-300 ${isScrolled ? 'py-1' : ''}`}>
                    <div className="max-w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-12 flex items-center justify-between h-12 sm:h-14 md:h-16">
                        {/* Brand - Left Edge */}
                        <motion.div
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="/" className="flex items-center gap-2">
                                <motion.div
                                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs sm:text-sm md:text-lg font-bold shadow-md"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    CB
                                </motion.div>
                                <div className="hidden sm:block">
                                    <div className="text-xs text-gray-400 -mt-0.5">Full-Stack Developer</div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-1 px-2 sm:px-3 md:px-4 py-1.5 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-200 ${
                                            activeSection === item.section
                                                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                                                : 'text-gray-200 hover:text-yellow-400 hover:bg-gray-800'
                                        }`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="hidden md:flex items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="/contact"
                                        className="px-2 sm:px-3 md:px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-md shadow-md hover:shadow-lg transition-all block text-xs sm:text-sm"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Hire Me
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </motion.button>
                    </div>
                </div>

                {/* Decorative Glass Shadow Spacer */}
                <div className="pointer-events-none h-1 sm:h-2 md:h-4 bg-gradient-to-b from-blue-900/40 via-transparent to-transparent backdrop-blur-sm blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]" />
            </header>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden fixed top-[3rem] sm:top-[3.5rem] md:top-[4.5rem] left-0 right-0 z-40 bg-gray-900/95 border-t border-gray-800/40 shadow-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <nav className="flex flex-col gap-1 px-3 sm:px-4 py-2 sm:py-3">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-md text-xs sm:text-sm md:text-base font-medium transition ${
                                        activeSection === item.section
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                        >
                            <Link
                                href="/contact"
                                className="px-2 sm:px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-xs rounded-md shadow-md text-center block transition-transform hover:scale-105"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Hire Me
                            </Link>
                        </motion.div>
                    </nav>
                </motion.div>
            )}

            {/* Small padding so content doesn't hide behind header */}
            <div className="h-6 sm:h-8 md:h-10" aria-hidden />
        </>
    );
}