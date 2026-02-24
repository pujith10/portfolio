import { useState } from "react";
import { MoveUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
    {
        id: "web-dev",
        title: "Web Development",
        issuer: "Internshala",
        image: "/certificates/Web-Development.png",
        description: "Certified in Web Development training."
    },
    {
        id: "sih",
        title: "Smart India Hackathon",
        issuer: "SIH Participant",
        image: "/certificates/SIH.jpeg",
        description: "Participant in Smart India Hackathon final round."
    }
];

export const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section id="certificates" className="py-20 bg-black text-white relative overflow-hidden">

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Recognition of my technical skills and achievements.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
                        >
                            {/* Image Placeholder / Preview */}
                            <div className="h-64 overflow-hidden bg-black/40 relative">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                <button
                                    onClick={() => setSelectedCert(cert)}
                                    className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 px-4"
                                >
                                    <span className="text-sm font-medium">View</span>
                                    <MoveUpRight size={16} />
                                </button>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                                <p className="text-gray-500 text-sm line-clamp-2">
                                    {cert.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={selectedCert.id}
                            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.95, rotateX: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative z-10 max-w-4xl w-full max-h-[90vh] bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl group"
                        >
                            {/* Rotating Light Border Effect */}
                            <div className="absolute inset-[-10px] bg-[conic-gradient(from_var(--angle),transparent_50%,#3b82f6_100%)] animate-[spin_4s_linear_infinite] opacity-60 rounded-xl z-0" style={{ "--angle": "0deg" } as any} />

                            {/* Inner Container to hide the rotating border overflow but keep the effect visible at edges if we add padding, 
                                but here we want a border effect. Let's try a different approach for the "rotating light" around boundary.
                            */}

                            <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-spin-slow-invisible z-0">
                                {/* This is a static gradient border fallback, replacing with the requested effect below manually if needed */}
                            </div>

                            {/* Actual Rotating Border */}
                            <div className="absolute inset-[-50%] bg-[conic-gradient(transparent,transparent,#3b82f6)] animate-[spin_4s_linear_infinite] w-[200%] h-[200%] top-[-50%] left-[-50%] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Use a cleaner implementation for the specific "rotating light" request */}
                            <div className="absolute -inset-[2px] rounded-xl overflow-hidden">
                                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,white_360deg)] animate-[rotate_4s_linear_infinite] opacity-40 translate-x-[-15%] translate-y-[-15%]" />
                                <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_180deg,transparent_0deg,transparent_340deg,#3b82f6_360deg)] animate-[rotate_4s_linear_infinite] opacity-100 translate-x-[-15%] translate-y-[-15%]" />
                            </div>

                            <div className="relative z-10 bg-gray-900 rounded-[10px] h-full overflow-hidden flex flex-col">
                                <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/40">
                                    <h3 className="text-xl font-semibold">{selectedCert.title}</h3>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="p-1 bg-black/50 flex-1 overflow-auto flex items-center justify-center">
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
                                    />
                                </div>

                                <div className="p-4 border-t border-white/10 bg-black/40 flex justify-between items-center text-sm text-gray-400">
                                    <span>{selectedCert.issuer}</span>
                                    {/* Optional: Add download or external link here if available */}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};
