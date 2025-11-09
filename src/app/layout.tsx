import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata: Metadata = {
    title: "Clara Beri | AI Full-Stack Web & Mobile Developer",
    description:
        "Hi, I'm Clara Beri — an AI-driven Full-Stack Web & Mobile Developer and Graphic Designer. I create intelligent, high-performance digital experiences that combine creativity, design, and modern technology.",
    keywords: [
        "Clara Beri",
        "AI Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Mobile Developer",
        "UI Designer",
        "Graphic Designer",
        "Next.js",
        "React",
        "TypeScript",
        "Portfolio",
        "Chatbot Developer",
        "AI Integration",
        "Machine Learning",
        "LLM Applications"
    ],
    authors: [{ name: "Clara Beri" }],
    openGraph: {
        title: "Clara Beri | AI Full-Stack Web & Mobile Developer | Graphic Designer",
        description:
            "Explore Clara Beri’s portfolio — showcasing creative design, AI-powered applications, and full-stack web and mobile development with modern technologies.",
        url: "https://clara-portfolio-jet.vercel.app",
        siteName: "Clara Beri Portfolio",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://clara-portfolio-jet.vercel.app/images/profile.jpg",
                width: 1200,
                height: 630,
                alt: "Clara Beri Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Clara Beri | AI Full-Stack Developer & Graphic Designer",
        description:
            "A showcase of creative AI-powered web and mobile experiences designed and developed by Clara Beri.",
        images: ["https://clara-portfolio-jet.vercel.app/images/profile.jpg"],
    },
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
    
        <main
            className="
        flex-1
        w-full
        transition-all
    "
        >
            {/* Full-width container for portfolio content */}
            <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 w-full">
                {children}
            </div>
        </main>



        {/* Footer */}
        <Footer />

        {/* Scroll To Top Button */}
        <ScrollToTop />
        </body>
        </html>
    );
}
