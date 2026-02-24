import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [text, setText] = useState("");
    const fullText = "Initializing Neural Interface...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {text}
                <span className="animate-blink text-white">|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 absolute top-0 left-0 animate-progress"></div>
            </div>
        </div>
    );
};
