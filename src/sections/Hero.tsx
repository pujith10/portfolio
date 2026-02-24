import { ThreeBackground } from "../components/ThreeBackground";
import { NetworkSphere } from "../components/NetworkSphere";
import { ArrowRight, FileText, Mail } from "lucide-react";

export const Hero = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
        >
            <ThreeBackground />
            <div className="absolute inset-0 z-0">
                <NetworkSphere />
            </div>

            <div className="text-center z-10 max-w-4xl px-4 pointer-events-none">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient leading-tight p-2 pointer-events-auto">
                    Building Intelligent Systems <br /> That See, Think, and Predict.
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto pointer-events-auto">
                    AI/ML Engineer blending Deep Learning, Neuro-Symbolic AI, and Full-Stack
                    Engineering to build real-world intelligent systems.
                </p>
                <div className="flex justify-center gap-4 flex-wrap pointer-events-auto">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center gap-2"
                    >
                        <ArrowRight size={20} /> View Projects
                    </a>
                    <a
                        href="/resumes/Karri_Pujith_Sri_Sai.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm flex items-center gap-2"
                    >
                        <FileText size={20} /> View Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full font-medium transition-all backdrop-blur-sm flex items-center gap-2"
                    >
                        <Mail size={20} /> Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};
