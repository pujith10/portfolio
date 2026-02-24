import { TechOrbit } from "../components/TechOrbit";

export const TechStack = () => {
    return (
        <section id="tech-stack" className="py-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center z-10 relative">
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Technology Stack
                </span>
            </h2>

            <div className="w-full h-[60vh] md:h-[80vh] relative z-0">
                <TechOrbit />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </section>
    );
};
