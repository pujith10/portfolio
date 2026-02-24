import { Github, ExternalLink, Code2, Brain } from "lucide-react";

const aiProjects = [
    {
        title: "Telugu–English Bi-Directional Translator",
        description: "Fine-tuned facebook-nllb-200-600M for low-resource language translation. Integrated OCR + NLP pipeline with controlled BOS token for improved accuracy.",
        tech: ["NLP", "Transformers", "Facebook NLLB"],
        type: "AI Research",
        github: "https://github.com/pujith10",
    },
    {
        title: "Neuro-Symbolic Scene Reasoner",
        description: "Hybrid AI system using YOLOv8 + GNN for scene understanding. achieved 1.6× reasoning speed with 52% confidence variation via masking.",
        tech: ["YOLOv8", "GNN", "Neuro-Symbolic"],
        type: "Computer Vision",
        github: "https://github.com/pujith10",
    },
];

const fullStackProjects = [
    {
        title: "Indian Intelligence of Space Organization",
        description: "SIH project focused on real-time space mission telemetry monitoring, with a React frontend, Node.js backend, REST APIs, MongoDB data layer, and ML-assisted prediction pipeline.",
        tech: ["React", "Node.js", "MongoDB", "REST API", "ML"],
        type: "Full Stack",
        link: "https://nexus-stellar-command-main.vercel.app/dashboard",
        github: "https://github.com/pujith10",
    },
    {
        title: "Rubik’s Cube Interactive Web App",
        description: "3D interactive Rubik's cube solver visualization. Optimized rendering and dynamic state management using React and Three.js.",
        tech: ["React", "Three.js", "Vercel"],
        type: "Web App",
        link: "https://rubik-nu-ten.vercel.app/",
        github: "https://github.com/pujith10",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 relative bg-black/50">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Featured Projects
                    </span>
                </h2>

                {/* Featured Project */}
                <div className="mb-20 glass p-8 rounded-3xl border border-blue-500/30 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] transition-all transform hover:scale-[1.01]">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-white/10 group">
                            <iframe
                                src="https://pujith10.github.io/QuantumAI-Blog/"
                                title="Quantum AI Blog Preview"
                                className="w-full h-full border-0 transform group-hover:scale-[1.02] transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">Detailed Blog</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-white">Quantum AI Blog Website</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                A professional, responsive blog-style website presenting comprehensive information about Quantum AI technology. Features modern layout, smooth hover effects, and structured articles.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["React", "Modern UI", "SEO"].map(tag => (
                                    <span key={tag} className="text-sm text-gray-400">#{tag}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href="https://pujith10.github.io/QuantumAI-Blog/" target="_blank" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                                <a href="https://github.com/pujith10/QuantumAI-Blog" target="_blank" className="px-6 py-2 border border-white/20 hover:bg-white/10 text-white rounded-lg font-medium transition-colors flex items-center gap-2">
                                    <Github size={18} /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI Projects */}
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Brain className="text-purple-500" /> AI & Research Projects
                </h3>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {aiProjects.map((project, index) => (
                        <div key={index} className="glass p-6 rounded-2xl hover:bg-white/5 transition-all group border-l-4 border-l-purple-500">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h4>
                                <a href={project.github} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
                            </div>
                            <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded border border-purple-500/20">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Full Stack Projects */}
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Code2 className="text-blue-500" /> Full Stack Engineering
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {fullStackProjects.map((project, index) => (
                        <div key={index} className="glass p-6 rounded-2xl hover:bg-white/5 transition-all group border-l-4 border-l-blue-500">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                                <div className="flex gap-2">
                                    {project.link && (
                                        <a href={project.link} target="_blank" className="text-gray-500 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                    )}
                                    <a href={project.github} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded border border-blue-500/20">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
