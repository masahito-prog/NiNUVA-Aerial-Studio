"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
    const { language } = useLanguage();

    return (
        <section className="min-h-screen flex items-center pt-32 pb-16">
            <div className="container-custom w-full">
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-32 items-center">
                    {/* Left: Content */}
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-ink">
                            Professional<br />
                            <span className="font-medium">Aerial Cinematography</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-medium mb-12 max-w-xl leading-relaxed">
                            {language === "ja"
                                ? "UAPL認定パイロットによる、高品質な空撮サービス。日本とシンガポールを拠点に、世界基準の映像制作を提供します。"
                                : "UAPL certified pilot delivering high-quality aerial cinematography services. Based in Japan and Singapore, providing world-class video production."}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl">
                            <div className="border-l-2 border-ink pl-4">
                                <div className="text-3xl md:text-4xl font-medium mb-2">8K</div>
                                <div className="text-xs md:text-sm text-gray-medium uppercase tracking-wider">
                                    Resolution
                                </div>
                            </div>
                            <div className="border-l-2 border-ink pl-4">
                                <div className="text-3xl md:text-4xl font-medium mb-2">UAPL</div>
                                <div className="text-xs md:text-sm text-gray-medium uppercase tracking-wider">
                                    Certified
                                </div>
                            </div>
                            <div className="border-l-2 border-ink pl-4">
                                <div className="text-3xl md:text-4xl font-medium mb-2">2+</div>
                                <div className="text-xs md:text-sm text-gray-medium uppercase tracking-wider">
                                    Countries
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-paper text-sm font-medium uppercase tracking-wide transition-smooth hover:bg-gray-medium group"
                        >
                            <span>View Services</span>
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative animate-fade-in-up">
                        <div className="aspect-[4/5] bg-gradient-to-br from-gray-light to-gray-light/70 border border-gray-light/50 relative overflow-hidden">
                            {/* Hero aerial image */}
                            <img
                                src="/hero-aerial.png"
                                alt="Professional Aerial Cinematography"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Bottom label */}
                        <div className="absolute -bottom-8 left-0 text-xs text-gray-medium tracking-wider">
                            NiNUVA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
