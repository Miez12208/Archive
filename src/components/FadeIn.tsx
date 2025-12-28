'use client';
import { useRef, useEffect, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    threshold = 0.1
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
