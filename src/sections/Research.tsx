import { BookOpen } from "lucide-react";

const publications = [
    {
        title: "Neural Machine Translation for Low-Resource Indian Languages",
        conference: "Under Review – IEEE INDIACom",
        description: "Adapted NLLB-200 to improve BLEU and ChrF++ scores by incorporating morphology-aware token alignment for Telugu and Hindi.",
        tags: ["NLP", "NLLB-200", "Deep Learning"],
    },
    {
        title: "NC2X: Neuro-Symbolic Framework for Scene Understanding",
        conference: "Research Paper",
        description: "Proposed a hybrid perception + reasoning framework using Causal Masking. Achieved 52% contextual variation robustness compared to baseline models.",
        tags: ["Neuro-Symbolic AI", "Computer Vision", "GNN"],
    },
];

export const Research = () => {
    return (
        <section id="research" className="py-20 relative">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Research & Publications
                    </span>
                </h2>

                <div className="space-y-8">
                    {publications.map((pub, index) => (
                        <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                                    <p className="text-blue-400 text-sm font-medium mb-4">{pub.conference}</p>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {pub.description}
                                    </p>
                                    <div className="flex gap-2">
                                        {pub.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 text-xs border border-white/10 rounded bg-white/5 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
