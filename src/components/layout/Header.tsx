"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const { language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(path);
    };

    const navLinkClass = (path: string) => {
        return isActive(path)
            ? "text-accent text-sm tracking-wide transition-smooth"
            : "text-gray-medium text-sm tracking-wide transition-smooth hover:text-ink";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-light">
            <div className="container-custom py-6 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex flex-col gap-1 group">
                    <div className="flex items-center gap-2">
                        {/* NINUVA Logo Text with red accents */}
                        <div className="text-2xl font-medium tracking-tight text-ink">
                            N<span className="text-accent">i</span>NU<span className="text-accent">V</span>A
                        </div>
                    </div>
                    <div className="text-[0.7rem] tracking-[0.2em] text-gray-medium uppercase">
                        Aerial Studio
                    </div>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-12 list-none">
                    <li>
                        <a href="/" className={navLinkClass("/")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className={navLinkClass("/about")}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services" className={navLinkClass("/services")}>
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/gear" className={navLinkClass("/gear")}>
                            Gear
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className={navLinkClass("/contact")}>
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Language Toggle - Enhanced visibility */}
                <button
                    onClick={() => setLanguage(language === "ja" ? "en" : "ja")}
                    className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-light text-gray-medium text-sm tracking-wide transition-smooth hover:text-ink hover:border-ink"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {language === "ja" ? "EN" : "日本語"}
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-ink"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-paper border-t border-gray-light">
                    <ul className="flex flex-col gap-4 p-6">
                        <li>
                            <a
                                href="/"
                                className={`block text-sm tracking-wide transition-smooth ${isActive("/") ? "text-accent" : "text-gray-medium hover:text-ink"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={`block text-sm tracking-wide transition-smooth ${isActive("/about") ? "text-accent" : "text-gray-medium hover:text-ink"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className={`block text-sm tracking-wide transition-smooth ${isActive("/services") ? "text-accent" : "text-gray-medium hover:text-ink"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/gear"
                                className={`block text-sm tracking-wide transition-smooth ${isActive("/gear") ? "text-accent" : "text-gray-medium hover:text-ink"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Gear
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className={`block text-sm tracking-wide transition-smooth ${isActive("/contact") ? "text-accent" : "text-gray-medium hover:text-ink"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="pt-4 border-t border-gray-light">
                            <button
                                onClick={() => {
                                    setLanguage(language === "ja" ? "en" : "ja");
                                    setIsMenuOpen(false);
                                }}
                                className="flex items-center gap-2 text-gray-medium text-sm tracking-wide hover:text-ink transition-smooth"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                {language === "ja" ? "EN" : "日本語"}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
