'use client';
import RomCard from './RomCard';
import FadeIn from './FadeIn';
import romsData from '@/data/roms.json';

const ROM_DATA = romsData as Array<{
    name: string;
    version: string;
    androidVersion: string;
    maintainer: string;
    status: 'Official' | 'Unofficial';
    updatedAt: string;
    device: string;
    image?: string;
    downloadUrl?: string;
    variant?: 'GApps' | 'Vanilla';
    changelogUrl?: string;
}>;

export default function RomList() {
    return (
        <section id="rom-list" className="pt-20 md:pt-32 pb-20 md:pb-32 px-4 md:px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {ROM_DATA.map((rom, idx) => (
                        <FadeIn key={idx} delay={idx * 100}>
                            <RomCard rom={rom} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
