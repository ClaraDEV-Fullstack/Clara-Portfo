'use client';

import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});

import {
    FaJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab,
    FaAndroid, FaApple, FaCode, FaServer, FaDocker,
    FaMobileAlt, FaPalette, FaPencilRuler, FaLaptopCode
} from 'react-icons/fa';

import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiBootstrap,
    SiMui, SiRedux, SiLaravel, SiPhp, SiPython, SiDjango,
    SiFirebase, SiPostgresql, SiMysql, SiDart, SiFlutter, SiVercel,
    SiNetlify, SiAdobephotoshop, SiAdobeillustrator, SiCanva,
    SiGraphql, SiRender, SiPostman, SiFigma
} from 'react-icons/si';

const frontendSkills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
];

const backendSkills = [
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "REST APIs", icon: <FaServer className="text-gray-300" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
];

const mobileSkills = [
    { name: "Dart", icon: <SiDart className="text-blue-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-cyan-400" /> },
    { name: "Android", icon: <FaAndroid className="text-green-500" /> },
    { name: "iOS", icon: <FaApple className="text-gray-200" /> },
];

const devOpsSkills = [
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Render", icon: <SiRender className="text-emerald-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Git/GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
];

const designTools = [
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-600" /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
    { name: "Canva", icon: <SiCanva className="text-teal-400" /> },
];

const SkillCard = ({ skill, index }: { skill: { name: string, icon: JSX.Element }, index: number }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const animations = [
        "animate__bounceIn", "animate__fadeIn", "animate__rotateIn",
        "animate__fadeInLeft", "animate__fadeInRight", "animate__zoomIn",
        "animate__lightSpeedInRight", "animate__jackInTheBox"
    ];

    const animation = animations[index % animations.length];

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col items-center justify-center p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-300 ${inView ? `animate__animated ${animation}` : 'opacity-0'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
        >
            <div className="text-3xl md:text-5xl mb-2">{skill.icon}</div>
            <span className="text-white text-center text-xs md:text-sm font-semibold uppercase tracking-tighter md:tracking-normal">{skill.name}</span>
        </motion.div>
    );
};

const SkillCategory = ({ title, skills }: { title: string, skills: any[] }) => (
    <div className="mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-6 border-l-4 border-yellow-500 pl-4">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
            ))}
        </div>
    </div>
);

export default function SkillsPage() {
    return (
        <div className={`${poppins.className} bg-[#0a192f] min-h-screen overflow-x-hidden pb-20`}>
            <section className="py-20 px-4 md:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mb-20 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 uppercase"
                        >
                            Tech Stack
                        </motion.h1>
                        <p className="text-gray-400 mt-4 text-sm md:text-sm tracking-[0.3em] uppercase font-light">
                            Tools • Languages • Frameworks
                        </p>
                    </div>

                    <SkillCategory title="Frontend Engineering" skills={frontendSkills} />
                    <SkillCategory title="Backend & API Testing" skills={backendSkills} />
                    <SkillCategory title="Mobile Development" skills={mobileSkills} />
                    <SkillCategory title="DevOps & Cloud" skills={devOpsSkills} />
                    <SkillCategory title="Design Suite" skills={designTools} />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-20 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 text-center backdrop-blur-sm"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">Built for Efficiency</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
                            My workflow integrates <span className="text-blue-400 font-bold">Docker</span> for environment consistency,
                            <span className="text-orange-400 font-bold"> Postman</span> for API integrity, and
                            <span className="text-emerald-400 font-bold"> Render</span> for seamless cloud delivery.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}