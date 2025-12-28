'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const words = ["Downloads.", "Experience.", "Performance.", "Stability."];
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

            <div className="max-w-7xl mx-auto relative z-10">
                <h1 className="text-5xl md:text-[8rem] font-bold leading-tight md:leading-none tracking-tighter text-white select-none">
                    Essential
                    <span className="block text-primary min-h-[1.1em]">
                        {text}<span className="animate-pulse">_</span>
                    </span>
                </h1>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-400 max-w-xl font-light">
                    A curated collection of the finest Android Open Source Projects. Pure. Simple.
                </p>
            </div>
        </section>
    );
}
