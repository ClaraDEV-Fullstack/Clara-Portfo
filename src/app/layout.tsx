import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
    title: "Clara Portfolio | Frontend Developer & UI Designer",
    description:
        "Personal portfolio showcasing frontend development projects, skills, and services. Built with Next.js, TypeScript, and Tailwind CSS.",
    keywords: [
        "frontend developer",
        "UI designer",
        "Next.js",
        "React",
        "TypeScript",
        "portfolio",
        "graphic designer",
    ],
    authors: [{ name: "Clara" }],
    openGraph: {
        title: "Clara Portfolio | Frontend Developer & UI Designer",
        description:
            "Personal portfolio showcasing frontend development projects, skills, and services.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Clara Portfolio | Frontend Developer & UI Designer",
        description:
            "Personal portfolio showcasing frontend development projects, skills, and services.",
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
        pt-[6rem] sm:pt-[6rem] md:pt-[6em]
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
