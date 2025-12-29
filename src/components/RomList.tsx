'use client';
import RomCard from './RomCard';
import FadeIn from './FadeIn';

const ROM_DATA = [
    {
        name: 'Evolution X',
        version: '11.2',
        androidVersion: '16',
        maintainer: 'therealmharc',
        status: 'Official' as const,
        updatedAt: '2025-09-21',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: 'https://cdn.evolution-x.org/sweet/16/EvolutionX-16.0-20250921-sweet-11.2-Official.zip/download',
        variant: 'GApps' as const,
        changelogUrl: '#',
    },
    {
        name: 'LineageOS',
        version: '23.0',
        androidVersion: '16',
        maintainer: 'Aryan',
        status: 'Official' as const,
        updatedAt: '2025-12-25',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: 'https://download.lineageos.org/devices/sweet/builds',
        variant: 'Vanilla' as const,
        changelogUrl: '#',
    },
    {
        name: 'crDroid',
        version: '12.4',
        androidVersion: '16',
        maintainer: 'Pranav-Vashi',
        status: 'Official' as const,
        updatedAt: '2025-12-15',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: 'https://sourceforge.net/projects/crdroid/files/sweet/12.x/crDroidAndroid-16.0-20251215-sweet-v12.4.zip/download',
        variant: 'Vanilla' as const,
        changelogUrl: '#',
    },
    {
        name: 'Orion OS',
        version: '16.0',
        androidVersion: '16',
        maintainer: 'Miez12208',
        status: 'Unofficial' as const,
        updatedAt: '2025-12-15',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: 'https://gofile.io/d/KAvzvx',
        variant: 'GApps' as const,
        changelogUrl: '#',
    }
];

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
