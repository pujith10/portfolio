import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    { label: "ML Validation Accuracy", value: "98%" },
    { label: "Latency Reduction", value: "35%" },
    { label: "Reasoning Speed", value: "1.6x" },
    { label: "Confidence Variation", value: "52%" },
];

const Counter = ({ value, label }: { value: string; label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
                {value}
            </motion.div>
            <div className="text-gray-400 font-medium">{label}</div>
        </div>
    );
};

export const ImpactMetrics = () => {
    return (
        <section className="py-12 border-y border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <Counter key={index} {...metric} />
                    ))}
                </div>
            </div>
        </section>
    );
};
