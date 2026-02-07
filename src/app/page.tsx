"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FinalCTA from "@/components/sections/FinalCTA";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main>
                <Hero />


                {/* Professionalism & Mission - Accent Quote */}
                <section className="py-32 border-t border-gray-light bg-ink text-paper">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
                                {language === "ja"
                                    ? "進むべき道を、空から照らす。"
                                    : "Illuminating the path forward from the sky."}
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-paper/70">
                                {language === "ja"
                                    ? "社名の由来である「北斗七星(ニーヌファブシ)」のように、私たちは映像を通じてクライアントのビジョンをナビゲートします。単なる撮影に留まらず、UAPL/UAOP保持者としての誇り、そして最新の機材がもたらす圧倒的な映像美をもって、信頼という名の道しるべを築きます。"
                                    : 'Like the "Big Dipper (Ninufa Bushi)" from which our name derives, we navigate our clients\' vision through imagery. Beyond mere filming, we build a guidepost of trust with the pride of UAPL/UAOP holders and the overwhelming visual beauty brought by the latest equipment.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* The NiNUVA Edge */}
                <section className="py-24">
                    <div className="container-custom">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-16">
                            The NiNUVA Edge
                        </h2>

                        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                            {/* 1. Safety & Compliance */}
                            <div className="border-l-2 border-ink pl-6">
                                <div className="text-5xl font-light mb-4 text-gray-light">01</div>
                                <h3 className="text-xl font-medium mb-4">
                                    {language === "ja" ? "Safety & Compliance" : "Safety & Compliance"}
                                </h3>
                                <p className="text-base font-medium mb-3">
                                    {language === "ja" ? "UAPL & UAOP 完全取得。" : "Full UAPL & UAOP Certification."}
                                </p>
                                <p className="text-sm text-gray-medium leading-relaxed">
                                    {language === "ja"
                                        ? "シンガポール航空局（CAAS）公認のパイロットライセンス(UAPL)および運用許可(UAOP)を保持。日・星の両拠点で、法的にクリアで安全なフライトを徹底します。"
                                        : "Holding pilot license (UAPL) and operational permit (UAOP) certified by Singapore Civil Aviation Authority (CAAS). Ensuring legally compliant and safe flights at both Japan and Singapore bases."}
                                </p>
                            </div>

                            {/* 2. Cinematic Quality */}
                            <div className="border-l-2 border-ink pl-6">
                                <div className="text-5xl font-light mb-4 text-gray-light">02</div>
                                <h3 className="text-xl font-medium mb-4">
                                    {language === "ja" ? "Cinematic Quality" : "Cinematic Quality"}
                                </h3>
                                <p className="text-base font-medium mb-3">
                                    {language === "ja"
                                        ? "映画・広告業界基準のクオリティ。"
                                        : "Film & advertising industry standard quality."}
                                </p>
                                <p className="text-sm text-gray-medium leading-relaxed">
                                    {language === "ja"
                                        ? "8K RAW対応のフラッグシップ機「Inspire 3」を主力に、プロの制作現場が求める豊かな階調と高解像度を実現。ブランドの価値を最高純度の映像で記録します。"
                                        : 'Centered on the flagship "Inspire 3" with 8K RAW support, achieving rich gradation and high resolution demanded by professional production sites. Recording brand value in the highest purity imagery.'}
                                </p>
                            </div>

                            {/* 3. Bilingual Professionalism */}
                            <div className="border-l-2 border-ink pl-6">
                                <div className="text-5xl font-light mb-4 text-gray-light">03</div>
                                <h3 className="text-xl font-medium mb-4">
                                    {language === "ja" ? "Bilingual Professionalism" : "Bilingual Professionalism"}
                                </h3>
                                <p className="text-base font-medium mb-3">
                                    {language === "ja"
                                        ? "言語の壁を超えたスムーズな連携。"
                                        : "Smooth collaboration beyond language barriers."}
                                </p>
                                <p className="text-sm text-gray-medium leading-relaxed">
                                    {language === "ja"
                                        ? "日本語・英語に完全対応。国内外の多国籍な制作チームとも、円滑なコミュニケーションとプロジェクト管理を約束します。"
                                        : "Fully supporting Japanese and English. Promising smooth communication and project management with multinational production teams both domestically and internationally."}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Categories */}
                <section className="py-24 bg-paper border-t border-gray-light">
                    <div className="container-custom">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-16">
                            Service Categories
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* IMMERSIVE */}
                            <a
                                href="/services#fpv"
                                className="group block p-8 border border-gray-light transition-smooth hover:border-ink"
                            >
                                <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                                    IMMERSIVE
                                </div>
                                <h3 className="text-2xl font-medium mb-4 group-hover:text-accent transition-smooth">
                                    FPV
                                </h3>
                                <p className="text-sm text-gray-medium leading-relaxed">
                                    {language === "ja"
                                        ? "空間を駆け抜ける、かつてない没入体験。"
                                        : "An unprecedented immersive experience racing through space."}
                                </p>
                            </a>

                            {/* CINEMATIC */}
                            <a
                                href="/services#8k"
                                className="group block p-8 border border-gray-light transition-smooth hover:border-ink"
                            >
                                <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                                    CINEMATIC
                                </div>
                                <h3 className="text-2xl font-medium mb-4 group-hover:text-accent transition-smooth">
                                    8K
                                </h3>
                                <p className="text-sm text-gray-medium leading-relaxed">
                                    {language === "ja"
                                        ? "放送・CM基準の圧倒的映像クオリティ。"
                                        : "Overwhelming video quality meeting broadcast and commercial standards."}
                                </p>
                            </a>

                            {/* STRATEGIC */}
                            <a
                                href="/services#real-estate"
                                className="group block p-8 border border-gray-light transition-smooth hover:border-ink"
                            >
                                <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                                    STRATEGIC
                                </div>
                                <h3 className="text-2xl font-medium mb-4 group-hover:text-accent transition-smooth">
                                    Real Estate
                                </h3>
                                <p className="text-sm text-gray-medium leading-relaxed">
                                    {language === "ja"
                                        ? "資産の価値を証明する、確かな視点。"
                                        : "A reliable perspective proving asset value."}
                                </p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Selected Works */}
                <section className="py-24">
                    <div className="container-custom">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-16">
                            Selected Works
                        </h2>

                        {/* Video Grid */}
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {[
                                { id: 1, category: "FPV", image: "/fpv-sample.png" },
                                { id: 2, category: "8K", image: "/8k-sample.png" },
                                { id: 3, category: "Real Estate", image: "/hero-aerial.png" },
                                { id: 4, category: "FPV", image: "/fpv-sample.png" },
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    className="group aspect-video bg-gradient-to-br from-gray-light to-gray-light/70 border border-gray-light relative overflow-hidden cursor-pointer transition-smooth hover:border-ink"
                                >
                                    <img
                                        src={item.image}
                                        alt={`${item.category} Sample`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-smooth flex items-center justify-center">
                                        <div className="text-6xl text-paper/80 opacity-0 group-hover:opacity-100 transition-smooth">
                                            ▶
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-accent bg-paper px-3 py-1">
                                        {item.category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gear & Safety Status */}
                <section className="py-24 bg-paper border-t border-gray-light">
                    <div className="container-custom">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-16">
                            Gear & Safety Status
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                { name: "Inspire 3", image: "/inspire-3.png" },
                                { name: "Mavic 3 Pro", image: "/mavic-3-pro.png" },
                                { name: "Custom FPV", image: "/fpv-drone.png" },
                            ].map((gear, index) => (
                                <div
                                    key={index}
                                    className="aspect-square bg-gradient-to-br from-gray-light to-gray-light/70 border border-gray-light flex items-center justify-center overflow-hidden"
                                >
                                    <img
                                        src={gear.image}
                                        alt={gear.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="text-center max-w-2xl mx-auto">
                            <p className="text-lg font-medium text-ink">
                                {language === "ja"
                                    ? "最高水準の対人・対物賠償責任保険に加入済み"
                                    : "Covered by highest-standard personal and property liability insurance"}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <FinalCTA />
            </main >
            <Footer />
        </>
    );
}
