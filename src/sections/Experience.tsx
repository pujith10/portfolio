import { Calendar } from "lucide-react";

const experiences = [
    {
        title: "Smart India Hackathon – Space Mission Failure Prediction System",
        role: "Full Stack & ML Lead",
        period: "2023",
        description: "Built a full-stack monitoring dashboard using React, Node, and MongoDB. Developed an ML model with 98% validation accuracy for real-time failure prediction.",
        tech: ["React", "Node.js", "MongoDB", "ML"],
    },
    {
        title: "Drone-Based Student Identification System",
        role: "AI Researcher",
        period: "2024",
        description: "Developed a real-time drone-based recognition system using PyTorch and OpenCV. Reduced latency by 35% through model optimization and hardware integration.",
        tech: ["PyTorch", "OpenCV", "Hardware Integration"],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-all group"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-lg text-gray-400 mt-1">{exp.role}</p>
                                </div>
                                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 max-w-3xl relative z-10">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {exp.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
