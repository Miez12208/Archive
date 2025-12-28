'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Background Layer - High Blur & Low Opacity for Premium Glass effect */}
            <div
                className={`absolute inset-0 bg-black/20 backdrop-blur-3xl border-b border-white/5 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'
                    }`}
            />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 font-bold text-2xl tracking-tighter cursor-pointer group">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300 group-hover:border-primary">
                            {/* Ganti 'avatar.jpg' atau 'avatar.png' sesuai nama file Anda di folder public */}
                            <Image
                                src="/avatar.png"
                                alt="Miez"
                                fill
                                className="object-cover"
                                onError={(e) => {
                                    // Fallback if image not found (optional logic, but for now purely relying on file existence)
                                    // e.currentTarget.src = "https://ui-avatars.com/api/?name=Miez&background=random";
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            {/* Fallback Initial if image fails to load or not present (hidden if image loads) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-black font-bold text-xl -z-10">
                                M
                            </div>
                        </div>
                        <div>
                            <span className="text-white">Miez's</span><span className="text-primary">Archive</span>
                        </div>
                    </div>

                    {/* <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        (Removed links as requested)
                    </div> */}
                </div>
            </div>
        </nav>
    );
}
