export default function Footer() {
    return (
        <footer className="py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
                <div>
                    <h3 className="text-2xl font-bold tracking-tighter text-white mb-6">Miez's <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">Archive</span></h3>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="https://t.me/miez12208" className="hover:text-white transition-colors">Telegram</a>
                        <a href="https://github.com/miez12208" className="hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="hover:text-white transition-colors">Discord</a>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 text-right">
                    <p className="text-xs text-gray-600">© 2025</p>
                </div>
            </div>
        </footer>
    );
}
