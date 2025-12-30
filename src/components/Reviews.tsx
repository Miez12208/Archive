'use client';

const REVIEWS = [
    {
        name: "Xhn Cibaduyut",
        rating: 5,
        text: "Best roms simple minimalist smooth asf",
        rom: "Axion OS",
        avatar: "/avatars/xhn.jpg"
    },
    {
        name: "Kidzz",
        rating: 3,
        text: "Jelek banget rom nya terlalu polos mana ga ada kustomisasi lagi awoakwaok rom kontol gini di pake di jaman 2025 mikir kids.",
        rom: "LineageOS",
        avatar: "/avatars/kidzz.jpg"
    },
    {
        name: "Rusdi Ngawi",
        rating: 5,
        text: "CrDroid rom stabil dan smooth wajib banget di pakai, kalo ga di pakai atmin murka loh ya.",
        rom: "crDroid",
        avatar: "/avatars/rusdi.jpg"
    },
    {
        name: "Mas Gatot",
        rating: 5,
        text: "Kesan indah pertama kau datang seolah cinta dengan senang hati aku menerima emuach",
        rom: "Pixel Experience",
        avatar: "/avatars/gatot.png"
    },
    {
        name: "Mas Amba",
        rating: 5,
        text: "RisingOS UI is beautiful. Jangan lupa di pakai yh ganteng",
        rom: "RisingOS",
        avatar: "/avatars/amba.png"
    },
    {
        name: "Si Imut",
        rating: 5,
        text: "ROM gacor",
        rom: "Pixel Experience",
        avatar: "/avatars/imut.png"
    }
];

export default function Reviews() {
    return (
        <section className="py-24 bg-black overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
                        Community Reviews
                    </span>
                </h2>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none"></div>

            <div className="flex animate-marquee">
                {/* Original Set */}
                <div className="flex gap-6 pr-6">
                    {REVIEWS.map((review, i) => (
                        <ReviewCard key={`original-${i}`} review={review} />
                    ))}
                </div>
                {/* Duplicate Set */}
                <div className="flex gap-6 pr-6">
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
        <div className="group w-[380px] bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/10 p-8 rounded-2xl flex-shrink-0 backdrop-blur-xl hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Name & ROM */}
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-lg mb-1">{review.name}</h4>
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-xs text-primary font-semibold">{review.rom}</span>
                        </div>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill={i < review.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className={i < review.rating ? "text-yellow-400" : "text-zinc-700"}
                        >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm leading-relaxed">
                    "{review.text}"
                </p>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
