"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCTA from "@/components/sections/FinalCTA";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
    const { language } = useLanguage();

    return (
        <>
            <Header />
            <main>
                {/* Page Title Hero */}
                <section className="pt-40 pb-24">
                    <div className="container-custom text-center">
                        <h1 className="text-5xl md:text-7xl font-light mb-6 text-ink">
                            About
                        </h1>
                        <p className="text-base text-ink/60 max-w-2xl mx-auto">
                            {language === "ja"
                                ? "NiNUVAの理念、安全への取り組み、そして私たちのストーリー。"
                                : "Our philosophy, commitment to safety, and our story."}
                        </p>
                    </div>
                </section>


                {/* Our Story Content Section */}
                <section className="relative py-32 overflow-hidden">
                    {/* Blurred Background Image with Dark Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="/fpv-flight.png"
                            alt="Background"
                            className="w-full h-full object-cover blur-sm opacity-70"
                        />
                        <div className="absolute inset-0 bg-ink/60"></div>
                    </div>

                    {/* Content */}
                    <div className="container-custom relative z-10">
                        <div className="grid md:grid-cols-[2fr_3fr] gap-16 items-center">
                            {/* Left: Image (smaller) */}
                            <div>
                                <div className="aspect-[4/3] bg-gray-light/10 rounded-sm overflow-hidden">
                                    <img
                                        src="/wide-aerial-1.png"
                                        alt="Drone Cinematography"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right: Text (larger) */}
                            <div>
                                {/* Our Story Title */}
                                <div className="mb-8">
                                    <p className="text-sm uppercase tracking-wider text-paper/60 mb-2">
                                        {language === "ja" ? "私たちのストーリー" : "Our Story"}
                                    </p>
                                    <p className="text-base text-paper/50">
                                        {language === "ja" ? "Our Story" : "Our Story"}
                                    </p>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-paper">
                                    {language === "ja"
                                        ? "進むべき道を、空から照らす。"
                                        : "Illuminating the path forward from the sky."}
                                </h2>
                                <p className="text-base leading-relaxed text-paper/80 mb-6">
                                    {language === "ja" ? (
                                        <>
                                            「NiNUVA（ニヌファ）」の由来は、沖縄の古語で北斗七星を指す「ニーヌファブシ」。
                                            <br />
                                            古来より航海士たちが夜空を見上げ、自らの位置を確かめた道しるべです。
                                        </>
                                    ) : (
                                        'The name "NiNUVA" originates from the Okinawan word "Ninufa Bushi," meaning the Big Dipper. Since ancient times, navigators have looked up at the night sky to confirm their position using this guidepost.'
                                    )}
                                </p>
                                <p className="text-lg leading-relaxed text-paper/80">
                                    {language === "ja" ? (
                                        <>
                                            私たちは、ドローンという最新のテクノロジーを使い、クライアントのビジョンが向かうべき先を照らし出す「現代の道しるべ」でありたいと考えています。
                                            <br />
                                            ただ空から撮るのではなく、その映像がビジネスや表現の目的地へ導く力となるよう、一カットに魂を込めます。
                                        </>
                                    ) : (
                                        "We aim to be a 'modern guidepost' using the latest drone technology to illuminate the direction our clients' visions should take. Rather than simply filming from the sky, we pour our soul into every shot so that the footage becomes a force that guides businesses and expressions to their destinations."
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety & Compliance Section */}
                <section className="py-32 border-t border-gray-light">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-medium mb-3">
                                    {language === "ja" ? "安全と法規遵守" : "Safety & Compliance"}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-light mb-6 leading-tight">
                                    {language === "ja"
                                        ? "プロフェッショナルとしての責任"
                                        : "Professional Responsibility"}
                                </h2>
                            </div>
                            <p className="text-base leading-relaxed text-ink/70 mb-16 text-center max-w-4xl mx-auto">
                                {language === "ja"
                                    ? "ドローン空撮において、美しさ以上に重要なのは「安全」であることです。NiNUVAは、シンガポールおよび日本において、厳格な法規制をクリアした運用を徹底しています。"
                                    : "In drone aerial photography, what is more important than beauty is 'safety'. NiNUVA thoroughly implements operations that comply with strict regulations in both Singapore and Japan."}
                            </p>

                            {/* Credentials Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Licensing */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <svg className="w-16 h-16 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-light mb-3">
                                        {language === "ja" ? "ライセンス" : "Licensing"}
                                    </h4>
                                    <p className="text-base text-ink/60 leading-relaxed">
                                        {language === "ja"
                                            ? "シンガポール航空局（CAAS）発行のUAPL（無人航空機操縦ライセンス）保持。"
                                            : "Holds UAPL (Unmanned Aircraft Pilot License) issued by Singapore's Civil Aviation Authority (CAAS)."}
                                    </p>
                                </div>

                                {/* Operation */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <svg className="w-16 h-16 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-light mb-3">
                                        {language === "ja" ? "運用許可" : "Operation"}
                                    </h4>
                                    <p className="text-base text-ink/60 leading-relaxed">
                                        {language === "ja"
                                            ? "組織としての運用許可UAOP（Unmanned Aircraft Operator Permit）に基づく正規の業務遂行。"
                                            : "Legitimate business operations based on UAOP (Unmanned Aircraft Operator Permit) as an organization."}
                                    </p>
                                </div>

                                {/* Insurance */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <svg className="w-16 h-16 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-light mb-3">
                                        {language === "ja" ? "保険" : "Insurance"}
                                    </h4>
                                    <p className="text-base text-ink/60 leading-relaxed">
                                        {language === "ja"
                                            ? "万が一の事態に備え、最高水準の対人・対物賠償責任保険に加入済み。"
                                            : "Covered by the highest standard of personal and property liability insurance for any unforeseen circumstances."}
                                    </p>
                                </div>

                                {/* Global Standard */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <svg className="w-16 h-16 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-light mb-3">
                                        {language === "ja" ? "国際基準" : "Global Standard"}
                                    </h4>
                                    <p className="text-base text-ink/60 leading-relaxed">
                                        {language === "ja"
                                            ? "日本国内の国土交通省による包括申請・個別申請、およびシンガポールの各エリアでの飛行許可申請をすべて自社で完備。"
                                            : "Complete in-house capability for comprehensive and individual applications with Japan's MLIT, as well as flight permit applications for all areas in Singapore."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Profile Section */}
                <section className="py-32 border-t border-gray-light bg-paper">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-medium mb-3">
                                    {language === "ja" ? "チーム" : "Team"}
                                </p>
                                <h2 className="text-2xl font-light text-ink">私たちについて</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                {/* Photo */}
                                <div>
                                    <div className="aspect-square bg-gray-light/10 rounded-sm overflow-hidden">
                                        <img
                                            src="/team/masahito-irabu.jpg"
                                            alt="Masahito Irabu - Founder / Pilot"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Profile Info */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-light mb-2 text-ink">
                                        {language === "ja" ? "伊良部 優仁" : "Masahito Irabu"}
                                    </h3>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-8">
                                        Founder / Pilot
                                    </p>
                                    <p className="text-base leading-relaxed text-ink/70">
                                        {language === "ja"
                                            ? "日本およびシンガポールを拠点に活動。FPVドローンのハイスピードな撮影から、8Kシネマ機による緻密なカメラワークまで幅広く対応。多国籍なチームとのバイリンガルなコミュニケーションを得意とし、世界中のプロジェクトに参画。"
                                            : "Based in Japan and Singapore. Handles a wide range from high-speed FPV drone filming to precise camerawork with 8K cinema drones. Excels in bilingual communication with multinational teams and participates in projects worldwide."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Company Overview Section */}
                <section className="py-32 border-t border-gray-light">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-medium mb-3">
                                    {language === "ja" ? "会社概要" : "Company Overview"}
                                </p>
                                <h2 className="text-2xl font-light text-ink">基本情報</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex border-b border-gray-light pb-4">
                                    <dt className="w-1/3 text-sm uppercase tracking-wider text-gray-medium">
                                        {language === "ja" ? "社名" : "Company Name"}
                                    </dt>
                                    <dd className="w-2/3 text-base">Ninuva Pte. Ltd.</dd>
                                </div>
                                <div className="flex border-b border-gray-light pb-4">
                                    <dt className="w-1/3 text-sm uppercase tracking-wider text-gray-medium">
                                        {language === "ja" ? "所在地" : "Location"}
                                    </dt>
                                    <dd className="w-2/3 text-base">Singapore</dd>
                                </div>
                                <div className="flex border-b border-gray-light pb-4">
                                    <dt className="w-1/3 text-sm uppercase tracking-wider text-gray-medium">
                                        {language === "ja" ? "事業内容" : "Services"}
                                    </dt>
                                    <dd className="w-2/3 text-base">
                                        {language === "ja"
                                            ? "ドローンによる動画撮影・静止画撮影、映像編集、航空法に基づく飛行申請代行、プロモーション支援"
                                            : "Drone video and still photography, video editing, flight permit application services, promotional support"}
                                    </dd>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Areas Section */}
                <section className="py-32 border-t border-gray-light bg-paper">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <p className="text-xs uppercase tracking-[0.3em] text-gray-medium mb-3">
                                    {language === "ja" ? "対応エリア" : "Service Areas"}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-light mb-6 leading-tight text-ink">
                                    {language === "ja"
                                        ? "日本・シンガポールを中心に、グローバルな撮影に対応"
                                        : "Global Coverage Centered on Japan and Singapore"}
                                </h2>
                            </div>
                            <p className="text-base leading-relaxed text-ink/70 mb-16 text-center max-w-4xl mx-auto">
                                {language === "ja"
                                    ? "私たちは日本とシンガポールの2拠点を中心に活動しています。それぞれの国の航空法（国土交通省 / CAAS）を熟知し、現地の言語や文化に合わせた柔軟な調整が可能です。"
                                    : "We operate primarily from two bases in Japan and Singapore. We are well-versed in the aviation laws of each country (MLIT / CAAS) and can flexibly adapt to local languages and cultures."}
                            </p>

                            {/* Areas Grid */}
                            <div className="grid md:grid-cols-3 gap-8">
                                {/* Singapore */}
                                <div className="border border-gray-light p-8 rounded-sm">
                                    <h4 className="text-2xl font-light mb-4 text-ink">Singapore</h4>
                                    <p className="text-sm text-gray-medium mb-4">
                                        {language === "ja" ? "シンガポール全域" : "All of Singapore"}
                                    </p>
                                    <p className="text-base leading-relaxed text-ink/70">
                                        {language === "ja"
                                            ? "マリーナ・エリアから各工業地帯まで。UAOPおよび各機関（CAAS, SPF, SLA等）への飛行申請代行を含めフルサポート。"
                                            : "From Marina area to industrial zones. Full support including flight permit applications to UAOP and various agencies (CAAS, SPF, SLA, etc.)."}
                                    </p>
                                </div>

                                {/* Japan */}
                                <div className="border border-gray-light p-8 rounded-sm">
                                    <h4 className="text-2xl font-light mb-4 text-ink">Japan</h4>
                                    <p className="text-sm text-gray-medium mb-4">
                                        {language === "ja" ? "日本全国" : "All of Japan"}
                                    </p>
                                    <p className="text-base leading-relaxed text-ink/70">
                                        {language === "ja"
                                            ? "沖縄から北海道まで。国土交通省の包括申請済み。特定の重要施設やイベント等での個別申請にも対応。"
                                            : "From Okinawa to Hokkaido. Comprehensive permits from MLIT obtained. Also handles individual applications for specific important facilities and events."}
                                    </p>
                                </div>

                                {/* Global */}
                                <div className="border border-gray-light p-8 rounded-sm">
                                    <h4 className="text-2xl font-light mb-4 text-ink">Global</h4>
                                    <p className="text-sm text-gray-medium mb-4">
                                        {language === "ja" ? "世界各地" : "Worldwide"}
                                    </p>
                                    <p className="text-base leading-relaxed text-ink/70">
                                        {language === "ja"
                                            ? "その他、東南アジア諸国など世界各地への出張撮影も承ります。"
                                            : "We also accept on-location filming assignments in Southeast Asian countries and other locations worldwide."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <FinalCTA />
            <Footer />
        </>
    );
}
