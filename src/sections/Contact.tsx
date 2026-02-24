import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxh1BLZ59LzDGkEBtCIXsZmy0KA_g1tB0HwR6JxMzTYDUMv_bGqos5opcdm7CWuNn2z2w/exec";

    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: formData,
        });

        alert("Message sent successfully! I'll get back to you soon.");
        setFormState({ name: '', email: '', message: '' });

    } catch (error) {
        console.error("Error submitting form", error);
        alert("Something went wrong. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
};
    return (
        <section id="contact" className="py-20 relative flex items-center justify-center">
            <div className="max-w-4xl w-full mx-auto px-6">
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    {/* Background Gradient Element */}
                    <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

                    <h2 className="text-4xl font-bold mb-8 text-center text-white">Let's Connect</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-lg mx-auto">
                        Interested in building intelligent systems or discussing AI research? I'm always open to new opportunities and collaborations.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <a href="mailto:10pujith@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors"><Mail size={20} className="text-blue-400" /></div>
                                <span>10pujith@gmail.com</span>
                            </a>
                            <a href="tel:+917989625748" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors"><Phone size={20} className="text-purple-400" /></div>
                                <span>+91 79896 25748</span>
                            </a>
                            <a href="https://github.com/pujith10" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-gray-500/20 transition-colors"><Github size={20} /></div>
                                <span>github.com/pujith10</span>
                            </a>
                            <a href="https://www.linkedin.com/in/karri-pujith-sri-sai-b5a6ba282/" target="_blank" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-blue-600/20 transition-colors"><Linkedin size={20} className="text-blue-500" /></div>
                                <span>linkedin.com/in/karri-pujith-sri-sai</span>
                            </a>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
