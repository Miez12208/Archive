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
    },
    {
        name: 'crDroid',
        version: '10.2',
        androidVersion: '14',
        maintainer: 'raysurya',
        status: 'Official' as const,
        updatedAt: '1 week ago',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: '#',
    },
    {
        name: 'Pixel Experience',
        version: 'Plus',
        androidVersion: '13',
        maintainer: 'jhenrique',
        status: 'Unofficial' as const,
        updatedAt: '2 weeks ago',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: '#',
    },
    {
        name: 'Nusantara Project',
        version: 'LTS',
        androidVersion: '13',
        maintainer: 'rputra',
        status: 'Official' as const,
        updatedAt: '3 days ago',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: '#',
    },
    {
        name: 'RisingOS',
        version: '2.0.1',
        androidVersion: '14',
        maintainer: 'source',
        status: 'Unofficial' as const,
        updatedAt: 'Yesterday',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
        downloadUrl: '#',
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
