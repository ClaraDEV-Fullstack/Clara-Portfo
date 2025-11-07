'use client';

import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
});

export default function AboutPage() {
    const [hoverSide, setHoverSide] = useState<'none' | 'left' | 'right'>('none');
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const lastSideRef = useRef<'none' | 'left' | 'right'>('none');

    const designerControls = useAnimation();
    const developerControls = useAnimation();

    // Slide-in animation on load
    useEffect(() => {
        designerControls.start({ x: 0, opacity: 1, transition: { duration: 1.2 } });
        developerControls.start({ x: 0, opacity: 1, transition: { duration: 1.2 } });
    }, [designerControls, developerControls]);

    function handleMouseMove(e: React.MouseEvent) {
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

    const milestones = [
        {
            title: "Discovering My Passion",
            text: "During my Master's in Logistics & Supply Chain Management, I realized my deep interest in creativity and digital design. I enrolled in a <span class='text-blue-500 font-semibold'>graphic design training</span> while attending classes in the evenings, mastering discipline and focus.",
            icon: "🎨",
        },
        {
            title: "Stepping into the Professional World",
            text: "My first opportunity was with a startup as a secretary, quickly growing into a multi-role contributor: <span class='text-blue-500 font-semibold'>graphic designer, printing manager</span>, and production coordinator. I handled T-shirt printing, banners, mock-ups, and more, earning recognition and trust.",
            icon: "🏢",
        },
        {
            title: "Growing Beyond Limits",
            text: "Excelling in my first job motivated me to expand my skill set. I explored <span class='text-blue-500 font-semibold'>full-stack and mobile development</span> to combine creativity with technology, aiming to deliver higher-value solutions.",
            icon: "🚀",
        },
        {
            title: "The Full-Stack Journey",
            text: "I enrolled in an intensive <span class='text-blue-500 font-semibold'>full-stack and mobile development</span> course for a year. Challenges included long coding hours, debugging, and building real-world apps. Consistent practice helped me master <span class='text-blue-500 font-semibold'>React, Next.js, Python, Django, PHP</span>, and deliver production-ready solutions.",
            icon: "💻",
        },
        {
            title: "Today & AI Enthusiast",
            text: "Today, I integrate AI into my workflow as an <span class='text-blue-500 font-semibold'>AI developer</span>. I combine creativity, full-stack development, and AI solutions—building applications, chatbots, and API integrations—showing that I am future-ready and continuously evolving.",
            icon: "🤖",
        },
    ];

    return (
        <div className={`${poppins.className} bg-gray-900 min-w-full overflow-x-hidden`}>
            {/* Hero Section */}
            <section className="bg-gray-900 overflow-hidden relative mt-12 h-[60vh] md:h-[85vh] font-poppins">
                <div className="w-full h-full px-0 flex flex-col">
                    {/* Split Hero Section */}
                    <div
                        ref={containerRef}
                        className="relative flex-1 w-full flex items-center justify-center select-none overflow-hidden"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Developer Image - Now on the Left */}
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
                            <img
                                src="/images/developer-side.jpg"
                                alt="Developer"
                                className="h-full w-full object-contain object-center"
                                draggable={false}
                            />
                            <div className="absolute left-4 md:left-8 lg:left-16 top-4 md:top-1/2 md:transform md:-translate-y-1/2 text-left text-white drop-shadow-2xl transition-all duration-700 ease-out pointer-events-none max-w-[80%] md:max-w-[32rem]">
                                {/* Mobile Version - Title Only */}
                                <div className="md:hidden">
                                    <div className="flex flex-col items-start">
                                        <div className="mb-2">
                                <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold mb-2">
                                    1+ year experience
                                </span>
                                        </div>
                                        <h2 className="text-2xl font-black mb-1 tracking-tight leading-tight">
                                            Web & Mobile
                                        </h2>
                                        <h2 className="text-2xl font-black tracking-tight leading-tight">
                                            Developer
                                        </h2>
                                    </div>
                                </div>

                                {/* Desktop Version - Full Description */}
                                <div className="hidden md:block">
                                    <div className="mb-4">
        <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            1+ year experience
        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tight leading-snug">
                                        Web & Mobile <br />
                                        <span className="text-blue-400">App Developer</span>
                                    </h2>
                                    <div className="space-y-3">
                                        <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                                            I am a <span className="text-blue-400 font-semibold">full-stack developer</span> with expertise in
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            <span className="text-base md:text-lg lg:text-xl font-medium text-blue-400">React</span>
                                            <span className="text-base md:text-lg lg:text-xl font-medium">Next.js</span>
                                            <span className="text-base md:text-lg lg:text-xl font-medium">JavaScript</span>
                                            <span className="text-base md:text-lg lg:text-xl font-medium">Python</span>
                                            <span className="text-base md:text-lg lg:text-xl font-medium">Django</span>
                                            <span className="text-base md:text-lg lg:text-xl font-medium">PHP</span>
                                        </div>
                                        <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                                            Passionate about <span className="text-blue-400 font-semibold">coding</span>,
                                            <span className="text-blue-400 font-semibold"> AI integration</span>, and
                                            <span className="text-blue-400 font-semibold"> technology</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Designer Image - Now on the Right */}
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
                            <img
                                src="/images/designer-side.jpg"
                                alt="Designer"
                                className="h-full w-full object-contain object-center"
                                draggable={false}
                            />
                            <div className="absolute right-4 md:right-8 lg:right-16 top-4 md:top-1/2 md:transform md:-translate-y-1/2 text-right text-white drop-shadow-2xl transition-all duration-700 ease-out pointer-events-none max-w-[80%] md:max-w-[32rem]">
                                {/* Mobile Version - Title Only */}
                                <div className="md:hidden">
                                    <div className="flex flex-col items-end">
                                        <div className="mb-2">
                                <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold mb-2">
                                    3+ years experience
                                </span>
                                        </div>
                                        <h2 className="text-2xl font-black mb-1 tracking-tight leading-tight">
                                            Graphic & UX/UI
                                        </h2>
                                        <h2 className="text-2xl font-black tracking-tight leading-tight">
                                            Designer
                                        </h2>
                                    </div>
                                </div>

                                {/* Desktop Version - Full Description */}
                                <div className="hidden md:block">
                                    <div className="mb-4">
        <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            3+ years experience
        </span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 tracking-tight leading-snug">
                                        Graphic & UX/UI <br />
                                        <span className="text-blue-400">Designer</span>
                                    </h2>
                                    <div className="space-y-3">
                                        <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                                            I am a <span className="text-blue-400 font-semibold">graphic designer</span> with 3 years of experience
                                        </p>
                                        <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                                            I create clean, modern visuals and interfaces using
                                        </p>
                                        <div className="flex flex-wrap justify-end gap-2 mt-1">
                                            <span className="text-base md:text-lg lg:text-xl font-medium text-blue-400">Adobe Illustrator</span>
                                            <span className="text-base md:text-lg lg:text-xl font-medium">Photoshop</span>
                                        </div>
                                        <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                                            Skilled in <span className="text-blue-400 font-semibold">typography</span>,
                                            <span className="text-blue-400 font-semibold"> color theory</span>, and
                                            <span className="text-blue-400 font-semibold"> brand identity</span>.
                                        </p>
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
            <section className="bg-white text-gray-900 py-20 px-6 md:px-20 w-full">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        title={<span className="font-bold text-blue-600">My Personal Journey</span>}
                        subtitle={<span className="font-medium text-gray-800">From Supply Chain Logistics to Creativity, Full-Stack & AI Development</span>}
                    />

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-10 gap-12 w-full">
                        {/* Left Column – Journey Timeline (70% width) */}
                        <div className="lg:col-span-7 relative w-full">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>
                            {milestones.map((milestone, index) => (
                                <TimelineCard key={index} milestone={milestone} isLeft={index % 2 === 0} />
                            ))}
                        </div>

                        {/* Right Column – Hobbies & Interests (30% width) */}
                        <div className="lg:col-span-3 w-full">
                            <div className="bg-[#0f172a] p-8 rounded-2xl shadow-xl w-full">
                                <h3 className="text-3xl font-semibold mb-6 text-blue-400">Hobbies & Interests</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                                    Beyond my work, I find inspiration in creative and interactive activities that refresh my thinking and sharpen my problem-solving mindset.
                                </p>

                                <div className="grid grid-cols-2 gap-4 w-full">
                                    {[
                                        { icon: "📚", title: "Reading & Research" },
                                        { icon: "🎧", title: "Music & Podcasts" },
                                        { icon: "💡", title: "Exploring AI" },
                                        { icon: "🎮", title: "Gaming" },
                                        { icon: "🌍", title: "Tech Innovations" },
                                        { icon: "🏞️", title: "Nature & Travel" },
                                        { icon: "✍️", title: "Writing" },
                                        { icon: "🤝", title: "Collaboration" },
                                    ].map((hobby, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -4,
                                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 8px 24px rgba(0,0,0,0.25)',
                                            }}
                                            className="flex flex-col items-center justify-center bg-[#1e293b] rounded-xl py-5 transition-all duration-300 w-full"
                                        >
                                            <span className="text-3xl mb-2">{hobby.icon}</span>
                                            <p className="text-sm font-medium text-gray-200 text-center px-2">
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

function TimelineCard({ milestone, isLeft }: { milestone: any, isLeft: boolean }) {
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
            className={`relative w-full md:w-[85%] px-4 mb-10 transition-all duration-300`}
        >
            <div className={`absolute ${isLeft ? 'left-full ml-[-30px]' : 'right-full mr-[-30px]'} top-5 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md`}>
                <span dangerouslySetInnerHTML={{ __html: milestone.icon }} />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-black">{milestone.title}</h3>
                <p className="text-gray-900 text-base leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: milestone.text }}></p>
            </div>
        </motion.div>
    );
}