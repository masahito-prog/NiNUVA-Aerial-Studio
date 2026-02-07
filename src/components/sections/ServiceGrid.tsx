"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "../layout/SectionWrapper";

export default function ServiceGrid() {
    const { t, language } = useLanguage();
    const services = t("services.items") as unknown as any[];

    return (
        <SectionWrapper className="py-20 bg-base">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">
                        {t("services.title")}
                    </h2>
                    <p className="text-secondary text-lg">{t("services.subtitle")}</p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group glass p-8 hover:bg-primary/5 transition-smooth cursor-pointer"
                        >
                            {/* Number */}
                            <div className="text-6xl font-serif font-bold text-primary/20 mb-4">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-primary transition-smooth">
                                {service.title}
                            </h3>

                            {/* Tagline */}
                            <p className="text-sm text-secondary/70 italic mb-4">
                                {service.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-secondary/80 mb-6 leading-relaxed text-sm">
                                {service.description}
                            </p>

                            {/* Use Cases */}
                            {service.useCases && (
                                <div className="mb-6">
                                    <p className="text-xs uppercase tracking-wider text-secondary/60 mb-2">
                                        {language === "ja" ? "活用シーン" : "Use Cases"}
                                    </p>
                                    <ul className="space-y-1">
                                        {service.useCases.map((useCase: string, idx: number) => (
                                            <li
                                                key={idx}
                                                className="text-xs text-secondary flex items-start gap-2"
                                            >
                                                <span className="text-primary mt-0.5">•</span>
                                                <span>{useCase}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Features */}
                            <div>
                                <p className="text-xs uppercase tracking-wider text-secondary/60 mb-2">
                                    {language === "ja" ? "特徴" : "Features"}
                                </p>
                                <ul className="space-y-1">
                                    {service.features.map((feature: string, idx: number) => (
                                        <li
                                            key={idx}
                                            className="text-xs text-secondary flex items-start gap-2"
                                        >
                                            <span className="text-primary mt-0.5">→</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
