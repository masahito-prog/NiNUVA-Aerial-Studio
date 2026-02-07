import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
    weight: ["200", "400", "500"],
    subsets: ["latin"],
    variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
    weight: ["300", "400"],
    subsets: ["latin"],
    variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
    title: "NiNUVA Aerial Studio | Professional Drone Cinematography",
    description:
        "Professional drone aerial cinematography services. UAPL certified pilot offering cinematic FPV, high-end aerial, and real estate photography.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${notoSansJP.variable} antialiased`}
            >
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
