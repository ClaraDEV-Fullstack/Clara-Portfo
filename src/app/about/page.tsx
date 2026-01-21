'use client';

import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Poppins } from 'next/font/google';
import 'animate.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
});

interface Milestone {
    title: string;
    text: string;
    icon: string;
}

export default function AboutPage() {
    const [hoverSide, setHoverSide] = useState<'none' | 'left' | 'right'>('none');
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const lastSideRef = useRef<'none' | 'left' | 'right'>('none');

    const designerControls = useAnimation();
    const developerControls = useAnimation();

    useEffect(() => {
        designerControls.start({ x: 0, opacity: 1, transition: { duration: 1.2 } });
        developerControls.start({ x: 0, opacity: 1, transition: { duration: 1.2 } });

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [designerControls, developerControls]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const mid = rect.left + rect.width / 2;
            const x = e.clientX;
            const newSide = x >= mid ? 'right' : 'left';
            if (newSide !== lastSideRef.current) {
                lastSideRef.current = newSide;
                setHoverSide(newSide);
            }
        });
    }

    function handleMouseLeave() {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        lastSideRef.current = 'none';
        setHoverSide('none');
    }

    const milestones: Milestone[] = [
        {
            title: "Discovering My Passion",
            text: "During my Master's in Logistics & Supply Chain Management, I realized my deep interest in creativity and digital design. I explored <span class='text-blue-500 font-semibold'>creative tools and early digital workflows</span> while attending classes in the evenings, mastering discipline and focus.",
            icon: "🎨",
        },
        {
            title: "Stepping into the Professional World",
            text: "My first professional opportunity was with a startup as a secretary, quickly evolving into multiple roles: <span class='text-blue-500 font-semibold'>graphic designer, printing manager</span>, and production coordinator. I managed T-shirt printing, banners, and mock-ups while experimenting with <span class='text-blue-500 font-semibold'>automation and digital tools</span>, earning recognition and trust.",
            icon: "🏢",
        },
        {
            title: "Growing Beyond Limits",
            text: "Excelling in my first role motivated me to expand my skills. I explored <span class='text-blue-500 font-semibold'>full-stack and mobile development</span> alongside <span class='text-blue-500 font-semibold'>AI integration</span> to merge creativity with intelligent technology.",
            icon: "🚀",
        },
        {
            title: "The Full-Stack & AI Journey",
            text: "I enrolled in an intensive <span class='text-blue-500 font-semibold'>full-stack and mobile development</span> program for a year. Through long coding hours, debugging, and building real-world applications, I mastered <span class='text-blue-500 font-semibold'>React, Next.js, Python, Django, PHP</span> while leveraging <span class='text-blue-500 font-semibold'>AI tools</span> to optimize development and enhance user experience.",
            icon: "💻",
        },
        {
            title: "Today & AI-Driven Development",
            text: "Today, I work as an <span class='text-blue-500 font-semibold'>AI Full-Stack Developer & Designer</span>. I build <span class='text-blue-500 font-semibold'>smart web and mobile applications, AI chatbots, and API integrations</span>, blending creativity, technology, and intelligence. I am future-ready and continuously evolving.",
            icon: "🤖",
        },
    ];

    return (
        <div className={`${poppins.className} bg-gray-900 min-w-full overflow-x-hidden`}>
            {/* Hero Section */}
            <section className="bg-gray-900 overflow-hidden relative h-[45vh] md:h-[90vh] pt-16 md:pt-20 font-poppins mb-0">
                <div className="w-full h-full">
                    <div
                        ref={containerRef}
                        className="relative w-full h-full select-none overflow-hidden"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Developer Image */}
                        <motion.div
                            initial={{ x: -500, opacity: 0 }}
                            animate={developerControls}
                            className="absolute top-0 left-0 h-full w-full transition-all duration-1000 ease-out overflow-hidden"
                            style={{
                                clipPath: hoverSide === 'left'
                                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                                    : hoverSide === 'right'
                                        ? 'polygon(0 0, 0 0, 0 100%, 0 100%)'
                                        : 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                                zIndex: hoverSide === 'left' ? 2 : 1,
                            }}
                        >
                            <div className="relative h-full w-full flex items-center justify-center">
                                <img
                                    src="/images/developer-side.jpg"
                                    alt="Developer"
                                    className="h-full w-full object-contain object-center"
                                    draggable={false}
                                />
                                <div className="absolute left-4 md:left-8 lg:left-16 bottom-2 md:bottom-32 text-left text-white drop-shadow-2xl transition-all duration-700 ease-out pointer-events-none max-w-[60%] md:max-w-[42rem]">
                                    {/* Desktop Version */}
                                    <div className="hidden md:block">
                                        <div className="mb-3">
                                            <span className="inline-block bg-blue-500 text-white text-base px-3 py-1.5 rounded-full font-semibold">
                                                2 year experience
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-snug">
                                            Web & Mobile <br />
                                            <span className="text-blue-400">AI-Driven Developer</span>
                                        </h2>
                                        <div className="space-y-3">
                                            <p className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed">
                                                I am a <span className="text-blue-400 font-semibold"> Full-Stack Web & Mobile Developer</span> building
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-base md:text-xl lg:text-2xl font-medium text-blue-400">React</span>
                                                <span className="text-base md:text-xl lg:text-2xl font-medium">Next.js</span>
                                                <span className="text-base md:text-xl lg:text-2xl font-medium">JavaScript</span>
                                                <span className="text-base md:text-xl lg:text-2xl font-medium">Python</span>
                                                <span className="text-base md:text-xl lg:text-2xl font-medium">Django</span>
                                                <span className="text-base md:text-xl lg:text-2xl font-medium">PHP</span>
                                            </div>
                                            <p className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed">
                                                Passionate about <span className="text-blue-400 font-semibold">AI integration</span>, <span className="text-blue-400 font-semibold">coding</span>, and <span className="text-blue-400 font-semibold">innovative tech solutions</span>.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Mobile Version */}
                                    <div className="md:hidden">
                                        <div className="mb-1">
                                            <span className="inline-block bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-semibold">
                                                2 year experience
                                            </span>
                                        </div>
                                        <h2 className="text-xs font-black mb-1 tracking-tight leading-snug">
                                            Web & Mobile <br />
                                            <span className="text-blue-400">AI-Driven Developer</span>
                                        </h2>
                                        <div className="space-y-0.5">
                                            <p className="text-[8px] font-medium leading-tight">
                                                <span className="text-blue-400 font-semibold">AI Full-Stack Developer</span> building
                                            </p>
                                            <div className="flex flex-wrap gap-0.5">
                                                <span className="text-[8px] font-medium text-blue-400">React</span>
                                                <span className="text-[8px] font-medium">Next.js</span>
                                                <span className="text-[8px] font-medium">JavaScript</span>
                                                <span className="text-[8px] font-medium">Python</span>
                                                <span className="text-[8px] font-medium">Django</span>
                                                <span className="text-[8px] font-medium">PHP</span>
                                            </div>
                                            <p className="text-[8px] font-medium leading-tight">
                                                Passionate about <span className="text-blue-400 font-semibold">AI</span>, <span className="text-blue-400 font-semibold">coding</span>, and <span className="text-blue-400 font-semibold">tech</span>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Designer Image */}
                        <motion.div
                            initial={{ x: 500, opacity: 0 }}
                            animate={designerControls}
                            className="absolute top-0 left-0 h-full w-full transition-all duration-1000 ease-out overflow-hidden"
                            style={{
                                clipPath: hoverSide === 'right'
                                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                                    : hoverSide === 'left'
                                        ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                                        : 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                                zIndex: hoverSide === 'right' ? 2 : 1,
                            }}
                        >
                            <div className="relative h-full w-full flex items-center justify-center">
                                <img
                                    src="/images/designer-side.jpg"
                                    alt="Designer"
                                    className="h-full w-full object-contain object-center"
                                    draggable={false}
                                />
                                <div className="absolute right-4 md:right-8 lg:right-16 bottom-2 md:bottom-32 text-right text-white drop-shadow-2xl transition-all duration-700 ease-out pointer-events-none max-w-[60%] md:max-w-[42rem]">
                                    {/* Desktop Version */}
                                    <div className="hidden md:block">
                                        <div className="mb-3">
                                            <span className="inline-block bg-blue-500 text-white text-base px-3 py-1.5 rounded-full font-semibold">
                                                3+ years experience
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-snug">
                                            Graphic & UX/UI <br />
                                            <span className="text-blue-400">Enhanced Designer</span>
                                        </h2>
                                        <div className="space-y-3">
                                            <p className="text-base md:text-xl lg:text-2xl font-medium leading-relaxed">
                                                I am a <span className="text-blue-400 font-semibold">graphic designer</span> <br/>creating modern visuals and interfaces
                                            </p>

                                            <div className="flex flex-wrap justify-end gap-2 mt-1">
                                                <span className="text-base md:text-xl lg:text-2xl font-medium text-blue-400">Adobe Illustrator</span>
                                                <span className="text-base md:text-xl lg:text-2xl font-medium">Photoshop</span>
                                            </div>

                                        </div>
                                    </div>
                                    {/* Mobile Version */}
                                    <div className="md:hidden">
                                        <div className="mb-1">
                                            <span className="inline-block bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded-full font-semibold">
                                                3+ years experience
                                            </span>
                                        </div>
                                        <h2 className="text-xs font-black mb-1 tracking-tight leading-snug">
                                            Graphic & UX/UI <br />
                                            <span className="text-blue-400">AI-Enhanced Designer</span>
                                        </h2>
                                        <div className="space-y-0.5">
                                            <p className="text-[8px] font-medium leading-tight">
                                                <span className="text-blue-400 font-semibold">Graphic designer</span><br/> creating modern visuals
                                            </p>

                                            <div className="flex flex-wrap justify-end gap-0.5 mt-0.5">
                                                <span className="text-[8px] font-medium text-blue-400">Adobe Illustrator</span>
                                                <span className="text-[8px] font-medium">Photoshop</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {hoverSide === 'none' && (
                            <div className="absolute top-0 left-1/2 w-[1px] md:w-[2px] h-full bg-white/70 z-20 transition-opacity duration-500"></div>
                        )}
                    </div>
                </div>
            </section>
            {/* ---------------- JOURNEY & HOBBIES ---------------- */}
            <section className="bg-white text-gray-900 pt-16 pb-16 md:pb-20 px-6 md:px-20 w-full">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        title={<span className="font-bold text-blue-600">My Personal Journey</span>}
                        subtitle={<span className="font-medium text-gray-800">From Supply Chain Logistics to Creative, Full-Stack & AI-Driven Development</span>}
                    />

                    <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-10 gap-8 md:gap-12 w-full">
                        {/* Left Column – Timeline */}
                        <div className="lg:col-span-7 relative w-full">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>
                            {milestones.map((milestone, index) => (
                                <TimelineCard key={index} milestone={milestone} isLeft={index % 2 === 0} />
                            ))}
                        </div>

                        {/* Right Column – Hobbies */}
                        <div className="lg:col-span-3 w-full">
                            <div className="bg-[#0f172a] p-6 md:p-8 rounded-2xl shadow-xl w-full">
                                <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-blue-400">Hobbies & Interests</h3>
                                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    Beyond work, I explore creative, interactive, and technological activities that refresh my mind and enhance problem-solving skills.
                                </p>

                                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                                    {[
                                        { icon: "📚", title: "Reading & Research", animation: "animate__fadeInLeft" },
                                        { icon: "🎧", title: "Music & Podcasts", animation: "animate__fadeInDown" },
                                        { icon: "💡", title: "Exploring AI & ML", animation: "animate__fadeInUp" },
                                        { icon: "🎮", title: "Gaming", animation: "animate__fadeInRight" },
                                        { icon: "🌍", title: "Tech Innovations", animation: "animate__zoomIn" },
                                        { icon: "🏞️", title: "Nature & Travel", animation: "animate__bounceIn" },
                                        { icon: "✍️", title: "Writing", animation: "animate__slideInLeft" },
                                        { icon: "🤝", title: "Collaboration", animation: "animate__slideInRight" },
                                    ].map((hobby, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -4,
                                                boxShadow: '0 16px 32px rgba(59, 130, 246, 0.6), 0 8px 24px rgba(0,0,0,0.25)',
                                            }}
                                            className={`flex flex-col items-center justify-center bg-[#1e293b] rounded-xl py-4 md:py-5 transition-all duration-300 w-full shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)] animate__animated ${hobby.animation}`}
                                            style={{ animationDelay: `${i * 0.1}s` }}
                                        >
                                            <span className="text-2xl md:text-3xl mb-1 md:mb-2">{hobby.icon}</span>
                                            <p className="text-xs md:text-sm font-medium text-gray-200 text-center px-2">
                                                {hobby.title}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TimelineCard({ milestone, isLeft }: { milestone: Milestone; isLeft: boolean }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
            animate={controls}
            whileHover={{
                y: -10,
                boxShadow: '0 16px 32px rgba(0,0,0,0.2)',
            }}
            className={`relative w-full md:w-[85%] px-4 mb-8 md:mb-10 transition-all duration-300`}
        >
            <div className={`absolute ${isLeft ? 'left-full ml-[-30px]' : 'right-full mr-[-30px]'} top-5 bg-blue-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-md`}>
                <span dangerouslySetInnerHTML={{ __html: milestone.icon }} />
            </div>
            <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-black">{milestone.title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-900 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: milestone.text }}></p>
            </div>
        </motion.div>
    );
}