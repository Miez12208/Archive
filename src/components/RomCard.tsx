interface RomProps {
    name: string;
    version: string;
    androidVersion: string;
    maintainer: string;
    status: 'Official' | 'Unofficial';
    updatedAt: string;
    device: string;
    image?: string;
    color?: string;
    downloadUrl?: string;
    variant?: 'GApps' | 'Vanilla';
    changelogUrl?: string;
}

export default function RomCard({ rom }: { rom: RomProps }) {


    return (
        <div className="group relative bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(152,251,152,0.1)] overflow-hidden">

            {/* Background Gradient Spot (Hidden by default, visible on hover) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        {/* Phone Avatar */}
                        <div className="w-16 h-16 p-2 rounded-sm bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-all">
                            {rom.image ? (
                                <img
                                    src={rom.image}
                                    alt={rom.device}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors"
                                >
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <line x1="12" y1="18" x2="12.01" y2="18" />
                                </svg>
                            )}
                        </div>

                        <a
                            href={rom.downloadUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary text-black rounded-lg font-semibold text-sm hover:bg-primary/80 transition-all flex items-center gap-2 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Download
                        </a>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{rom.name}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400 font-medium">
                            Android {rom.androidVersion}
                        </span>
                        <span className={`px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium ${rom.status === 'Official' ? 'text-primary' : 'text-gray-400'
                            }`}>
                            {rom.status}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-gray-400 font-medium">
                            v{rom.version}
                        </span>
                        {rom.variant && (
                            <span className={`px-2.5 py-1 rounded-md border text-xs font-medium ${rom.variant === 'GApps'
                                ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                                : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                                }`}>
                                {rom.variant}
                            </span>
                        )}
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Device</span>
                        <span className="text-gray-300 font-medium">{rom.device}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Maintainer</span>
                        <span className="text-gray-300 hover:text-primary cursor-pointer transition-colors">@{rom.maintainer}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm mt-1">
                        <span className="text-gray-500">Updated</span>
                        <span className="text-xs text-gray-600">{rom.updatedAt}</span>
                    </div>

                    {/* Changelogs Button */}
                    {rom.changelogUrl && (
                        <a
                            href={rom.changelogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 w-full py-2.5 bg-white text-black text-center rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
                        >
                            Changelogs
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
