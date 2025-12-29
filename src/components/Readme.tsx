export default function Readme() {
    return (
        <section id="readme" className="py-20 md:py-32 px-4 md:px-6 bg-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
                    <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                        README
                    </span>
                </h2>

                <div className="space-y-8">
                    {/* Introduction */}
                    <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            Before Flashing ROM
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Make sure you have read this guide carefully before flashing the ROM. This process will delete all data on your device.
                        </p>
                    </div>

                    {/* Requirements */}
                    <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Requirements
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Bootloader must be unlocked</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Custom Recovery (TWRP/OrangeFox) must be installed</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Backup all important data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Battery must be at least 60%</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">•</span>
                                <span>Download ROM that matches your device</span>
                            </li>
                        </ul>
                    </div>

                    {/* Installation Steps */}
                    <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                            </svg>
                            Installation Steps
                        </h3>
                        <ol className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">1.</span>
                                <span>Reboot to Recovery Mode (TWRP/OrangeFox)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">2.</span>
                                <span>Wipe Data, Cache, and Dalvik Cache</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">3.</span>
                                <span>Format Data (type "yes" to confirm)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">4.</span>
                                <span>Install ROM file (.zip) that you have downloaded</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">5.</span>
                                <span>Install GApps (optional, if needed)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">6.</span>
                                <span>Reboot System</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold min-w-[24px]">7.</span>
                                <span>First boot may take 5-10 minutes, please be patient</span>
                            </li>
                        </ol>
                    </div>

                    {/* Warning */}
                    <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            Warning
                        </h3>
                        <ul className="space-y-2 text-red-300/80">
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">⚠</span>
                                <span>Flashing ROM will delete ALL data on your device</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">⚠</span>
                                <span>We are not responsible for any damage to your device</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">⚠</span>
                                <span>Do at your own risk</span>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
                        <p className="text-gray-400 mb-6">
                            If you experience any issues or have questions, feel free to contact us.
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="px-6 py-3 bg-primary/10 border border-primary/20 text-primary rounded-full font-semibold hover:bg-primary/20 transition-all">
                                Telegram Group
                            </a>
                            <a href="#" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                                Discord
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
