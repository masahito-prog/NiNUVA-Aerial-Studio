"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionWrapper from "../layout/SectionWrapper";

export default function GearList() {
    const { t } = useLanguage();
    const gearItems = t("gear.items") as unknown as any[];

    return (
        <SectionWrapper className="py-20 bg-base">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">
                        {t("gear.title")}
                    </h2>
                    <p className="text-secondary text-lg">{t("gear.subtitle")}</p>
                </div>

                {/* Gear Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {gearItems.map((item, index) => (
                        <div
                            key={index}
                            className="glass p-8 hover:bg-primary/5 transition-smooth"
                        >
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-6 flex items-center justify-center">
                                <span className="text-6xl">📷</span>
                            </div>

                            {/* Name */}
                            <h3 className="font-serif text-2xl font-bold mb-2">
                                {item.name}
                            </h3>

                            {/* Category */}
                            <p className="text-xs uppercase tracking-wider text-secondary/60 mb-3">
                                {item.category}
                            </p>

                            {/* Tagline */}
                            {item.tagline && (
                                <p className="text-sm text-secondary/70 italic mb-4 leading-relaxed">
                                    {item.tagline}
                                </p>
                            )}

                            {/* Specs */}
                            <div className="space-y-2">
                                {Object.entries(item.specs).map(([key, value]) => (
                                    <div key={key} className="flex flex-col">
                                        <span className="text-xs uppercase tracking-wider text-secondary/60">
                                            {key === "resolution" && "Resolution"}
                                            {key === "sensor" && "Sensor"}
                                            {key === "feature" && "Feature"}
                                            {key === "usage" && "Usage"}
                                            {key === "camera" && "Camera"}
                                            {key === "quality" && "Quality"}
                                            {key === "flightTime" && "Flight Time"}
                                            {key === "speed" && "Speed"}
                                            {key === "safety" && "Safety"}
                                        </span>
                                        <span className="text-sm text-secondary mt-1">
                                            {value as string}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
