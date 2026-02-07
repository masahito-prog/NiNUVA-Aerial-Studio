"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
    const { language } = useLanguage();

    // Content Definitions
    const content = {
        ja: {
            hero: {
                title: "Services",
                headline: "Elevating Visions from Every Angle.",
                subhead: "あらゆる境界を越え、未体験の視点を。",
                description: "NiNUVA Aerial Studioは、最新のドローンテクノロジーと確かなクリエイティビティを融合させ、視聴者の心に深く刻まれる映像を提供します。日・星の両国で培ったグローバルな感性と技術で、あなたのビジョンを空から具現化します。",

            },
            services: [
                {
                    id: "fpv",
                    title: "Cinematic FPV",
                    subtitle: "没入型・疾走空撮",
                    image: "/fpv-flight.png",
                    target: "対象: イベント、プロモーションビデオ、施設紹介、スポーツ撮影。",
                    content: "パイロットの視点と一体化し、空間を自由自在に駆け抜けるFPV（First Person View）撮影。従来の空撮では不可能だった狭い隙間の通り抜けや、被写体への超接近により、圧倒的な没入感とスピード感を演出します。",
                    features: ["屋内ワンカット撮影対応", "マイクロドローンから高速機まで完備"]
                },
                {
                    id: "high-end",
                    title: "High-End Aerial",
                    subtitle: "シネマティック空撮",
                    image: "/inspire-3.png",
                    target: "対象: 映画、テレビCM、ハイエンドな観光プロモーション。",
                    content: "最高峰の機材「DJI Inspire 3」を主力とした、映画品質の空撮サービス。8K RAWによる豊かな階調と、緻密に計算されたカメラワークにより、壮大なスケール感と美しさを両立させます。",
                    features: ["8K/ProRes RAW対応", "フルサイズセンサーによる圧倒的解像度"]
                },
                {
                    id: "industrial",
                    title: "Industrial & Real Estate",
                    subtitle: "産業・不動産空撮",
                    image: "/wide-aerial-2.png",
                    target: "対象: 不動産オーナー、ゼネコン、点検業務、竣工記録。",
                    content: "正確なGPS制御と高画質静止画による、実務に即した空撮ソリューション。マンションの眺望撮影から建設現場の進捗管理、建物点検まで、安全かつ確実に「価値を可視化」します。",
                    features: ["RTKによる高精度測位", "高解像度パノラマ・静止画対応"]
                }
            ],
            compliance: {
                title: "Global Operations & Compliance",
                subtitle: "グローバル対応と法規",
                items: [
                    {
                        title: "対応エリア",
                        description: "日本全国およびシンガポール全域。"
                    },
                    {
                        title: "許認可",
                        description: "シンガポール航空局（CAAS）公認：UAPL / UAOP 取得済み。日本国内：国土交通省による包括申請・個別申請対応。"
                    },
                    {
                        title: "ワンストップサポート",
                        description: "飛行許可申請の代行から、現地の撮影コーディネートまで一貫してサポートします。"
                    }
                ]
            }
        },
        en: {
            hero: {
                title: "Services",
                headline: "Elevating Visions from Every Angle.",
                subhead: "Transcend boundaries. Experience the unseen.",
                description: "NiNUVA Aerial Studio fuses the latest drone technology with proven creativity to deliver visuals that leave a lasting impression. With a global sensibility and technique honed in both Japan and Singapore, we bring your vision to life from the sky.",
            },
            services: [
                {
                    id: "fpv",
                    title: "Cinematic FPV",
                    subtitle: "Immersive High-Speed Aerials",
                    image: "/fpv-flight.png",
                    target: "Target: Events, PVs, Facility Tours, Sports.",
                    content: "FPV (First Person View) filming integrates with the pilot's perspective to freely traverse space. From passing through narrow gaps impossible with traditional aerials to ultra-close proximity to subjects, we create overwhelming immersion and speed.",
                    features: ["Indoor one-cut filming capable", "Equipped with micro drones to high-speed units"]
                },
                {
                    id: "high-end",
                    title: "High-End Aerial",
                    subtitle: "Cinematic Aerials",
                    image: "/inspire-3.png",
                    target: "Target: Movies, TV Commercials, High-end Tourism Promotions.",
                    content: "Cinema-quality aerial service centered on the flagship 'DJI Inspire 3'. With 8K RAW's rich tonal range and meticulously calculated camera work, we achieve both grand scale and beauty.",
                    features: ["8K/ProRes RAW support", "Overwhelming resolution with full-frame sensors"]
                },
                {
                    id: "industrial",
                    title: "Industrial & Real Estate",
                    subtitle: "Industrial & Real Estate Aerials",
                    image: "/wide-aerial-2.png",
                    target: "Target: Real Estate Owners, General Contractors, Inspections, Completion Records.",
                    content: "Practical aerial solutions using precise GPS control and high-quality stills. From condominium view shooting to construction progress management and building inspections, we visualize value safely and reliably.",
                    features: ["High-precision positioning with RTK", "High-resolution panoramas & stills supported"]
                }
            ],
            compliance: {
                title: "Global Operations & Compliance",
                subtitle: "Global Operations & Compliance",
                items: [
                    {
                        title: "Service Area",
                        description: "Entirety of Japan and Singapore."
                    },
                    {
                        title: "Licenses",
                        description: "CAAS (Singapore) UAPL/UAOP certified. Japan: MLIT comprehensive/individual applications supported."
                    },
                    {
                        title: "One-stop Support",
                        description: "We provide consistent support from flight permission applications to on-site shooting coordination."
                    }
                ]
            }
        }
    };

    const t = language === "ja" ? content.ja : content.en;

    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero Section - Matching About Page Style */}
                <section className="pt-20 pb-20 border-b border-gray-light">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-7xl font-light mb-6 text-ink">
                                {t.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-ink/70 mb-8 font-light">
                                {t.hero.headline}
                            </p>
                            <p className="text-base text-ink/60 leading-relaxed max-w-2xl mx-auto">
                                {t.hero.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className="py-24 md:py-32">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-24">
                                <p className="text-sm uppercase tracking-[0.2em] text-gray-medium mb-2">Core Services</p>
                                <h2 className="text-3xl md:text-4xl font-light text-ink">Our Expertise</h2>
                            </div>

                            <div className="space-y-32">
                                {t.services.map((service, index) => (
                                    <div
                                        key={service.id}
                                        className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                            }`}
                                    >
                                        {/* Image Area */}
                                        <div className="w-full md:w-1/2">
                                            <div className="aspect-video relative overflow-hidden bg-gray-light/10">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content Area */}
                                        <div className="w-full md:w-1/2">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="text-4xl font-light text-gray-light">0{index + 1}</span>
                                                <h3 className="text-3xl md:text-4xl font-light text-ink">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            <p className="text-lg text-accent mb-6 font-medium">
                                                {service.subtitle}
                                            </p>

                                            <div className="mb-8">
                                                <div className="border-l-2 border-ink pl-6 mb-6">
                                                    <p className="text-sm font-bold text-ink uppercase tracking-wider mb-2">
                                                        Target
                                                    </p>
                                                    <p className="text-ink/70 text-sm">
                                                        {service.target.replace('対象: ', '').replace('Target: ', '')}
                                                    </p>
                                                </div>
                                                <p className="text-ink/80 leading-relaxed text-base">
                                                    {service.content}
                                                </p>
                                            </div>

                                            {/* Features - Minimalist List */}
                                            <div className="pt-6 border-t border-gray-light">
                                                <p className="text-xs text-gray-medium uppercase tracking-widest mb-4 font-medium">Key Features</p>
                                                <ul className="grid grid-cols-1 gap-3">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center text-sm text-ink/70">
                                                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Operations & Compliance - Matches Home Professionalism Section */}
                <section className="py-32 bg-ink text-paper">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-sm uppercase tracking-[0.2em] text-paper/50 mb-4">
                                {t.compliance.title}
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-light leading-tight">
                                {t.compliance.subtitle}
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {t.compliance.items.map((item, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-1 bg-accent mx-auto mb-8 group-hover:w-24 transition-all duration-500"></div>
                                    <h4 className="text-xl font-medium mb-4 text-paper">
                                        {item.title}
                                    </h4>
                                    <p className="text-paper/70 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <FinalCTA />
            <Footer />
        </>
    );
}
