"use client";

import SectionWrapper from "@/components/layout/SectionWrapper";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ComplianceSection() {
    const { t, language } = useLanguage();
    const items = t("compliance.items") as unknown as any[];

    return (
        <SectionWrapper className="py-20 bg-gradient-to-b from-base to-base/95">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
                        {language === "ja" ? t("compliance.title") : t("compliance.subtitle")}
                    </h2>
                    <p className="text-sm uppercase tracking-widest text-secondary mb-4 text-center">
                        {language === "ja" ? t("compliance.subtitle") : t("compliance.title")}
                    </p>
                    <p className="text-lg text-secondary leading-relaxed mb-12 text-center">
                        {t("compliance.description")}
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="glass p-6 hover:bg-primary/5 transition-smooth"
                            >
                                <h3 className="font-serif text-lg font-bold mb-2">
                                    {language === "ja" ? item.title : item.titleEn}
                                </h3>
                                <p className="text-sm text-secondary leading-relaxed">
                                    {language === "ja" ? item.description : item.descriptionEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
