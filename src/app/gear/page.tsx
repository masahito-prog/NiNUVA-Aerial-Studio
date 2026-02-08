"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GearPage() {
    const { language } = useLanguage();

    const aerialCinematography = [
        {
            name: "DJI Inspire 3",
            description: language === "ja"
                ? "フルサイズセンサーを搭載した究極の空撮プラットフォーム。映画、TVCM、最高級プロモーションに。"
                : "The ultimate aerial platform with full-frame sensor. For cinema, TV commercials, and premium promotions.",
            highlights: language === "ja"
                ? "8K/75fps ProRes RAW, RTK高精度測位, 18mm-50mm交換レンズ対応"
                : "8K/75fps ProRes RAW, RTK high-precision positioning, 18mm-50mm interchangeable lens support",
            image: "/inspire-3.png"
        },
        {
            name: "DJI Mavic 4 Pro",
            badge: "NEW",
            description: language === "ja"
                ? "次世代のフラッグシップ機。圧倒的な機動力と進化したセンサーにより、ロケ現場での迅速かつ高品質な撮影を可能にします。"
                : "Next-generation flagship. Overwhelming mobility and evolved sensors enable rapid, high-quality shooting on location.",
            highlights: language === "ja"
                ? "進化した多機能カメラシステム, 高ビットレート動画記録, 強化された全方向障害物検知"
                : "Advanced multi-function camera system, high bitrate video recording, enhanced omnidirectional obstacle detection",
            image: "/mavic-3-pro.png"
        }
    ];

    const fpvDrones = [
        {
            name: "5-inch Performance FPV",
            description: language === "ja"
                ? "最高時速140kmで駆け抜ける、屋外追走・アクロバット撮影の主力機。"
                : "Main aircraft for outdoor chase and acrobatic filming, reaching speeds up to 140km/h.",
            image: "/fpv-drone.png"
        },
        {
            name: "Cinelifter / Micro Drone",
            description: language === "ja"
                ? "シネマカメラ搭載FPVから、狭い屋内を安全に飛ぶマイクロドローンまで完備。"
                : "From cinema camera-equipped FPV to micro drones that safely fly through tight indoor spaces.",
            image: "/gear-cinelifter.png"
        }
    ];

    const payloadCameras = [
        {
            name: "Nikon ZR",
            description: language === "ja"
                ? "8K/ProRes RAW対応。地上でのハイエンド撮影からドローンへの搭載まで。"
                : "8K/ProRes RAW compatible. From high-end ground shooting to drone mounting.",
            image: "/gear-nikon-zr.png"
        },
        {
            name: "Sony ZV-E10 II",
            description: language === "ja"
                ? "高速AFと機動性を活かしたシネマティックな記録。"
                : "Cinematic recording leveraging high-speed AF and mobility.",
            image: "/gear-sony-zve10.png"
        },
        {
            name: "GoPro HERO 13 / Naked GoPro",
            description: language === "ja"
                ? "FPVドローンに最適化された究極のアクションカム。衝撃的な視点を4K/5.3Kの高画質で。"
                : "Ultimate action cam optimized for FPV drones. Stunning perspectives in 4K/5.3K high quality.",
            image: "/gear-gopro-hero13.png"
        }
    ];

    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-20 border-b border-gray-light">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-7xl font-light mb-6">
                                Gear
                            </h1>
                            <p className="text-base text-ink/70 leading-relaxed">
                                {language === "ja"
                                    ? "プロジェクトの目的に応じて、最適な機材を選択します。"
                                    : "We select the optimal equipment according to the project's purpose."}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Aerial Cinematography Section */}
                <section className="py-32 border-b border-gray-light">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-16">
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-2">
                                    {language === "ja" ? "シネマ空撮" : "Aerial Cinematography"}
                                </p>
                                <h2 className="text-4xl md:text-5xl font-light text-ink">
                                    {language === "ja" ? "Aerial Cinematography" : "Aerial Cinematography"}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {aerialCinematography.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-paper border border-gray-light rounded-sm hover:shadow-lg transition-smooth overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-gray-light/20 to-gray-light/5 flex items-center justify-center p-8">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain drop-shadow-lg"
                                            />
                                        </div>

                                        <div className="p-8">
                                            <div className="flex items-start justify-between mb-4">
                                                <h3 className="text-2xl md:text-3xl font-light text-ink">
                                                    {item.name}
                                                </h3>
                                                {item.badge && (
                                                    <span className="text-xs uppercase tracking-wider bg-accent text-paper px-3 py-1 rounded-full">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-base leading-relaxed text-ink/70 mb-6">
                                                {item.description}
                                            </p>

                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                                                        {language === "ja" ? "ハイライト" : "Highlights"}
                                                    </p>
                                                    <p className="text-sm text-ink/80 leading-relaxed">
                                                        {item.highlights}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FPV Drones Section */}
                <section className="py-32 border-b border-gray-light">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-16">
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-2">
                                    {language === "ja" ? "没入型・高速空撮" : "Immersive High-Speed"}
                                </p>
                                <h2 className="text-4xl md:text-5xl font-light text-ink">
                                    FPV Drones
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {fpvDrones.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-paper border border-gray-light rounded-sm hover:shadow-lg transition-smooth overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-gray-light/20 to-gray-light/5 flex items-center justify-center p-8">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain drop-shadow-lg"
                                            />
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-2xl md:text-3xl font-light text-ink mb-4">
                                                {item.name}
                                            </h3>

                                            <p className="text-base leading-relaxed text-ink/70">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payload / Cameras Section */}
                <section className="py-32">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="mb-16">
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-2">
                                    PAYLOAD
                                </p>
                                <h2 className="text-4xl md:text-5xl font-light text-ink mb-6">
                                    {language === "ja" ? "カメラ・ペイロード" : "Cameras & Payload"}
                                </h2>
                                <p className="text-base text-ink/70 leading-relaxed max-w-4xl">
                                    {language === "ja"
                                        ? "空と地上、すべての視点を最高画質で。NiNUVAではドローン単体だけでなく、プロジェクトの目的に応じて最適な「カメラ」を選択します。"
                                        : "Every perspective from sky to ground in the highest quality. At NiNUVA, we select the optimal camera for your project's purpose, not just the drone itself."}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {payloadCameras.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-paper border border-gray-light rounded-sm hover:shadow-lg transition-smooth overflow-hidden"
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-gray-light/20 to-gray-light/5 flex items-center justify-center p-8">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain drop-shadow-lg"
                                            />
                                        </div>

                                        <div className="p-8">
                                            <h3 className="text-xl md:text-2xl font-light text-ink mb-4">
                                                {item.name}
                                            </h3>

                                            <p className="text-sm leading-relaxed text-ink/70">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FinalCTA />
            <Footer />
        </>
    );
}
