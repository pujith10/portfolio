import { Download } from "lucide-react";

export const Resume = () => {
    return (
        <section id="resume" className="py-20 relative bg-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Resume
                        </span>
                    </h2>

                    <div className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-sm border border-white/20 rounded-xl p-2 h-[800px] shadow-2xl relative group">
                        {/* Resume Image Preview */}
                        <div className="w-full h-full overflow-hidden rounded-lg bg-white/5 flex items-center justify-center">
                            <img
                                src="/resumes/Karri Pujith Sri Sai.png"
                                alt="Resume Preview"
                                className="w-full h-auto object-contain max-h-full"
                            />
                        </div>

                        {/* Overlay Download Button */}
                        <div className="absolute top-4 right-4 z-10">
                            <a
                                href="/resumes/Karri_Pujith_Sri_Sai.pdf"
                                download="Karri_Pujith_Sri_Sai_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <Download size={18} /> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
