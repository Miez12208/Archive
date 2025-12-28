'use client';

const REVIEWS = [
    {
        name: "miez",
        rating: 5,
        text: "lorem ipsum",
        rom: "Evolution X"
    },
    {
        name: "Kidzz",
        rating: 1,
        text: "ROM nya kek kontol awoawkaowk",
        rom: "LineageOS"
    },
    {
        name: "Citra Dewi",
        rating: 4,
        text: "crDroid customization is insane! So many options to tweak.",
        rom: "crDroid"
    },
    {
        name: "Dimas Anggara",
        rating: 5,
        text: "Pixel Experience feels exactly like a Pixel. Clean and stable.",
        rom: "Pixel Experience"
    },
    {
        name: "Eko Prasetyo",
        rating: 5,
        text: "RisingOS UI is beautiful. Love the new control center style.",
        rom: "RisingOS"
    },
    {
        name: "Fajar Nugraha",
        rating: 4,
        text: "Gaming performance on Nusantara Project is top notch. MLBB 120fps stable.",
        rom: "Nusantara Project"
    }
];

export default function Reviews() {
    return (
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Community Reviews
                </h2>
            </div>

            {/* Gradient Masks for fading effect */}
            <div className="absolute top-0 bottom-0 left-0 w-20 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-20 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

            <div className="flex animate-marquee">
                {/* Original Set */}
                <div className="flex gap-6 pr-32">
                    {REVIEWS.map((review, i) => (
                        <ReviewCard key={`original-${i}`} review={review} />
                    ))}
                </div>
                {/* Duplicate Set for infinite loop */}
                <div className="flex gap-6 pr-32">
                    {REVIEWS.map((review, i) => (
                        <ReviewCard key={`duplicate-${i}`} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
    return (
        <div className="w-[300px] md:w-[400px] bg-zinc-900/30 border border-white/5 p-6 rounded-xl flex-shrink-0 backdrop-blur-sm hover:border-primary/20 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <span className="text-xs text-primary font-medium">{review.rom}</span>
                </div>
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < review.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    ))}
                </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                "{review.text}"
            </p>
        </div>
    );
}
