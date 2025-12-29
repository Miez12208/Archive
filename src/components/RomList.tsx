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
        updatedAt: '2 days ago',
        device: 'Redmi Note 10 PRO/MAX (sweet)',
        image: '/images/roms/Sweet.png',
    },
    {
        name: 'LineageOS',
        version: '21.0',
        androidVersion: '14',
        maintainer: 'bgcng',
        status: 'Official' as const,
        updatedAt: '5 days ago',
        device: 'Poco F5 (marble)',
        image: '/images/roms/Sweet.png',
    },
    {
        name: 'crDroid',
        version: '10.2',
        androidVersion: '14',
        maintainer: 'raysurya',
        status: 'Official' as const,
        updatedAt: '1 week ago',
        device: 'Xiaomi 13 (fuxi)',
        image: '/images/roms/Sweet.png',
    },
    {
        name: 'Pixel Experience',
        version: 'Plus',
        androidVersion: '13',
        maintainer: 'jhenrique',
        status: 'Unofficial' as const,
        updatedAt: '2 weeks ago',
        device: 'Redmi Note 10 (mojito)',
        image: '/images/roms/Sweet.png',
    },
    {
        name: 'Nusantara Project',
        version: 'LTS',
        androidVersion: '13',
        maintainer: 'rputra',
        status: 'Official' as const,
        updatedAt: '3 days ago',
        device: 'Poco X3 Pro (vayu)',
        image: '/images/roms/Sweet.png',
    },
    {
        name: 'RisingOS',
        version: '2.0.1',
        androidVersion: '14',
        maintainer: 'source',
        status: 'Unofficial' as const,
        updatedAt: 'Yesterday',
        device: 'Poco F5 (marble)',
        image: '/images/roms/Sweet.png',
    }
];

export default function RomList() {
    return (
        <section className="pb-20 md:pb-32 px-4 md:px-6 bg-black">
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
