export const Footer = () => {
    return (
        <footer className="w-full bg-black py-8 border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p className="mb-4 md:mb-0">
                    © {new Date().getFullYear()} Karri Pujith Sri Sai. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
