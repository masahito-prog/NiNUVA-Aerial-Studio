import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Modern Minimalist Palette
                ink: "#111111",
                paper: "#fafafa",
                accent: "#ff4d00",
                gray: {
                    medium: "#666666",
                    light: "#eeeeee",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "var(--font-noto-sans-jp)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out",
                "fade-in-up": "fadeInUp 0.8s ease-out",
                "slide-in": "slideIn 0.6s ease-out",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                fadeInUp: {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                slideIn: {
                    from: { opacity: "0", transform: "translateX(-30px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
