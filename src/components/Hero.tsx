'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const words = ["Stability Follows.", "Performance Matters.", "Smooth Experience.", "Built for Sweet."];
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseTime = 2000; // Pause before deleting

    useEffect(() => {
        const currentWord = words[wordIndex];

        const type = () => {
            if (isDeleting) {
                // Deleting
                setText(currentWord.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                // Typing
                setText(currentWord.substring(0, text.length + 1));
                if (text.length === currentWord.length) {
                    // Wait before deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                    return;
                }
            }
        };

        const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    return (
        <section className="pt-40 pb-20 px-6 relative overflow-hidden min-h-[60vh] flex flex-col justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-white select-none">
                    Sweet Archive,
                    <span className="block min-h-[1.1em] bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {text}
                    </span>
                </h1>
                <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light">
                    Experience a refined Pixel-like ROM with essential features for smooth performance, stability, and a great user experience.
                </p>

                <div className="mt-8 md:mt-10 flex justify-center">
                    <button
                        onClick={() => {
                            const romSection = document.getElementById('rom-list');
                            romSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="px-8 py-3.5 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 group"
                    >
                        View Builds
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="5 12 12 19 19 12"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
