'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MySkillsSection from '@/components/MySkillsSection';
import MyServicesSection from '@/components/MyServicesSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ClientTestimonialsSection from '@/components/TestimonialsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <Navbar />

            <main>
                {/* Hero Section */}
                <HeroSection />

                {/* My Skills Section */}
                <MySkillsSection />

                {/* About Section */}
                <AboutSection />

                {/* My Services Section */}
                <MyServicesSection />

                {/* Featured Projects Section */}
                <FeaturedProjectsSection />

                {/* Client Testimonials Section */}
                <ClientTestimonialsSection />
            </main>

        </div>
    );
}