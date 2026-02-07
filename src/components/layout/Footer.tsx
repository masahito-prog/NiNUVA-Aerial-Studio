"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { language } = useLanguage();

    return (
        <footer className="bg-paper text-ink py-12 border-t border-gray-light">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex flex-col gap-1">
                        <div className="text-xl font-medium tracking-tight">
                            N<span className="text-accent">i</span>NU<span className="text-accent">V</span>A
                        </div>
                        <div className="text-[0.65rem] tracking-[0.2em] text-gray-medium uppercase">
                            Aerial Studio
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-medium text-center md:text-right">
                        <p>© 2026 NiNUVA Aerial Studio • UAPL Certified</p>
                        <p className="mt-1">{language === "ja" ? "日本・シンガポール" : "Japan • Singapore"}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
