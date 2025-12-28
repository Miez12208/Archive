interface RomProps {
    name: string;
    version: string;
    androidVersion: string;
    maintainer: string;
    status: 'Official' | 'Unofficial';
    updatedAt: string;
    device: string;
    color?: string;
}

export default function RomCard({ rom }: { rom: RomProps }) {


    return (
        <div className="group relative bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8 transition-all duration-300 hover:bg-zinc-900/50 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(152,251,152,0.1)] overflow-hidden">

            {/* Background Gradient Spot (Hidden by default, visible on hover) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                    <div className="flex justify-end items-start mb-6">


                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all hover:rotate-45">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
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
                </div>
            </div>
        </div>
    );
}
