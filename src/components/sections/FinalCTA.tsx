"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCTA() {
    const { language } = useLanguage();

    return (
        <section className="relative py-32 overflow-hidden">
            {/* FPV Flight Background */}
            <div className="absolute inset-0">
                <img
                    src="/fpv-flight.png"
                    alt="FPV Flight Perspective"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="container-custom text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-light mb-12 text-white drop-shadow-lg">
                    {language === "ja" ? "空を、もっと物語的に。" : "Make the sky more narrative."}
                </h2>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-12 py-5 bg-white text-ink text-sm font-medium uppercase tracking-wide transition-smooth hover:bg-gray-light group shadow-lg"
                >
                    <span>Contact Us</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>
        </section>
    );
}
