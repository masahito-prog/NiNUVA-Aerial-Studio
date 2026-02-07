"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
    const { language } = useLanguage();

    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        plan: "",
        location: "",
        timing: "",
        environment: "outdoor",
        notes: "",
        privacyAgreed: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const content = {
        ja: {
            title: "Contact",
            subtitle: "Contact",
            description: "プロジェクトのご相談、お見積もり、その他ご質問など、お気軽にお問い合わせください。",
            form: {
                company: "法人名",
                companyPlaceholder: "株式会社〇〇",
                name: "お名前",
                namePlaceholder: "山田 太郎",
                email: "メールアドレス",
                emailPlaceholder: "example@company.com",
                plan: "ご希望のサービス",
                planPlaceholder: "選択してください",
                location: "撮影場所",
                locationPlaceholder: "東京都渋谷区",
                timing: "撮影希望時期",
                timingPlaceholder: "2024年3月頃",
                environment: "撮影環境",
                indoor: "屋内",
                outdoor: "屋外",
                notes: "その他ご要望",
                notesPlaceholder: "詳細なご要望やご質問をご記入ください",
                privacyPolicy: "プライバシーポリシー",
                privacyAgreement: "に同意する",
                submit: "送信する",
                sending: "送信中..."
            },
            plans: [
                { value: "fpv", label: "Cinematic FPV（没入型・疾走空撮）" },
                { value: "high-end", label: "High-End Aerial（シネマティック空撮）" },
                { value: "industrial", label: "Industrial & Real Estate（産業・不動産空撮）" },
                { value: "other", label: "その他・相談" }
            ],
            validation: {
                nameRequired: "お名前を入力してください",
                emailRequired: "メールアドレスを入力してください",
                emailInvalid: "有効なメールアドレスを入力してください",
                planRequired: "サービスを選択してください",
                locationRequired: "撮影場所を入力してください",
                privacyRequired: "プライバシーポリシーに同意してください"
            }
        },
        en: {
            title: "Contact",
            subtitle: "Get in Touch",
            description: "For project inquiries, quotes, or any questions, please feel free to contact us.",
            form: {
                company: "Company Name",
                companyPlaceholder: "Your Company Ltd.",
                name: "Name",
                namePlaceholder: "John Doe",
                email: "Email",
                emailPlaceholder: "example@company.com",
                plan: "Service",
                planPlaceholder: "Select a service",
                location: "Location",
                locationPlaceholder: "Tokyo, Shibuya",
                timing: "Preferred Timing",
                timingPlaceholder: "Around March 2024",
                environment: "Environment",
                indoor: "Indoor",
                outdoor: "Outdoor",
                notes: "Additional Notes",
                notesPlaceholder: "Please provide any additional details or questions",
                privacyPolicy: "Privacy Policy",
                privacyAgreement: "I agree to the",
                submit: "Submit",
                sending: "Sending..."
            },
            plans: [
                { value: "fpv", label: "Cinematic FPV (Immersive High-Speed Aerials)" },
                { value: "high-end", label: "High-End Aerial (Cinematic Aerials)" },
                { value: "industrial", label: "Industrial & Real Estate" },
                { value: "other", label: "Other / Consultation" }
            ],
            validation: {
                nameRequired: "Name is required",
                emailRequired: "Email is required",
                emailInvalid: "Invalid email format",
                planRequired: "Please select a service",
                locationRequired: "Location is required",
                privacyRequired: "Please agree to the Privacy Policy"
            }
        }
    };

    const t = language === "ja" ? content.ja : content.en;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = e.target;
        const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData((prev) => ({ ...prev, [name]: newValue }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = t.validation.nameRequired;
        }

        if (!formData.email.trim()) {
            newErrors.email = t.validation.emailRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t.validation.emailInvalid;
        }

        if (!formData.plan) {
            newErrors.plan = t.validation.planRequired;
        }

        if (!formData.location.trim()) {
            newErrors.location = t.validation.locationRequired;
        }

        if (!formData.privacyAgreed) {
            newErrors.privacyAgreed = t.validation.privacyRequired;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        // TODO: Implement form submission (Formspree/Resend)
        console.log("Form data:", formData);

        // Simulate API call
        setTimeout(() => {
            alert("Form submitted successfully! (This is a demo)");
            setIsSubmitting(false);
            setFormData({
                company: "",
                name: "",
                email: "",
                plan: "",
                location: "",
                timing: "",
                environment: "outdoor",
                notes: "",
                privacyAgreed: false,
            });
        }, 1000);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="pt-20 pb-20 border-b border-gray-light">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-light mb-6 text-ink">
                            {t.title}
                        </h1>
                        <p className="text-base text-ink/60 leading-relaxed max-w-2xl mx-auto">
                            {t.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 md:py-32">
                <div className="container-custom">
                    <form
                        onSubmit={handleSubmit}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="space-y-8">
                            {/* Company Name (Optional) */}
                            <div>
                                <label htmlFor="company" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.company}
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder={t.form.companyPlaceholder}
                                    className="w-full bg-paper border border-gray-light px-6 py-4 focus:outline-none focus:border-ink transition-smooth text-ink placeholder:text-ink/30"
                                />
                            </div>

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.name} *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t.form.namePlaceholder}
                                    className={`w-full bg-paper border ${errors.name ? "border-red-500" : "border-gray-light"
                                        } px-6 py-4 focus:outline-none focus:border-ink transition-smooth text-ink placeholder:text-ink/30`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-2">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.email} *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t.form.emailPlaceholder}
                                    className={`w-full bg-paper border ${errors.email ? "border-red-500" : "border-gray-light"
                                        } px-6 py-4 focus:outline-none focus:border-ink transition-smooth text-ink placeholder:text-ink/30`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-2">{errors.email}</p>
                                )}
                            </div>

                            {/* Plan */}
                            <div>
                                <label htmlFor="plan" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.plan} *
                                </label>
                                <select
                                    id="plan"
                                    name="plan"
                                    value={formData.plan}
                                    onChange={handleChange}
                                    className={`w-full bg-paper border ${errors.plan ? "border-red-500" : "border-gray-light"
                                        } px-6 py-4 focus:outline-none focus:border-ink transition-smooth text-ink`}
                                >
                                    <option value="">{t.form.planPlaceholder}</option>
                                    {t.plans.map((plan) => (
                                        <option key={plan.value} value={plan.value}>
                                            {plan.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.plan && (
                                    <p className="text-red-500 text-xs mt-2">{errors.plan}</p>
                                )}
                            </div>

                            {/* Location */}
                            <div>
                                <label htmlFor="location" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.location} *
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder={t.form.locationPlaceholder}
                                    className={`w-full bg-paper border ${errors.location ? "border-red-500" : "border-gray-light"
                                        } px-6 py-4 focus:outline-none focus:border-ink transition-smooth text-ink placeholder:text-ink/30`}
                                />
                                {errors.location && (
                                    <p className="text-red-500 text-xs mt-2">{errors.location}</p>
                                )}
                            </div>

                            {/* Timing */}
                            <div>
                                <label htmlFor="timing" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.timing}
                                </label>
                                <input
                                    type="text"
                                    id="timing"
                                    name="timing"
                                    value={formData.timing}
                                    onChange={handleChange}
                                    placeholder={t.form.timingPlaceholder}
                                    className="w-full bg-paper border border-gray-light px-6 py-4 focus:outline-none focus:border-ink transition-smooth text-ink placeholder:text-ink/30"
                                />
                            </div>

                            {/* Environment */}
                            <div>
                                <label className="block text-sm uppercase tracking-wider text-gray-medium mb-4">
                                    {t.form.environment}
                                </label>
                                <div className="flex gap-8">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="environment"
                                            value="indoor"
                                            checked={formData.environment === "indoor"}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-accent"
                                        />
                                        <span className="text-ink group-hover:text-accent transition-smooth">{t.form.indoor}</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="environment"
                                            value="outdoor"
                                            checked={formData.environment === "outdoor"}
                                            onChange={handleChange}
                                            className="w-5 h-5 accent-accent"
                                        />
                                        <span className="text-ink group-hover:text-accent transition-smooth">{t.form.outdoor}</span>
                                    </label>
                                </div>
                            </div>

                            {/* Notes */}
                            <div>
                                <label htmlFor="notes" className="block text-sm uppercase tracking-wider text-gray-medium mb-3">
                                    {t.form.notes}
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder={t.form.notesPlaceholder}
                                    className="w-full bg-paper border border-gray-light px-6 py-4 focus:outline-none focus:border-ink transition-smooth resize-none text-ink placeholder:text-ink/30"
                                />
                            </div>

                            {/* Privacy Policy Agreement */}
                            <div className="pt-4">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        name="privacyAgreed"
                                        checked={formData.privacyAgreed}
                                        onChange={handleChange}
                                        className={`w-5 h-5 mt-0.5 accent-accent ${errors.privacyAgreed ? "border-red-500" : ""}`}
                                    />
                                    <span className="text-sm text-ink/70">
                                        {language === "ja" ? (
                                            <>
                                                <a href="/privacy" target="_blank" className="text-accent hover:underline">
                                                    {t.form.privacyPolicy}
                                                </a>
                                                {t.form.privacyAgreement}
                                            </>
                                        ) : (
                                            <>
                                                {t.form.privacyAgreement}{" "}
                                                <a href="/privacy" target="_blank" className="text-accent hover:underline">
                                                    {t.form.privacyPolicy}
                                                </a>
                                            </>
                                        )}
                                    </span>
                                </label>
                                {errors.privacyAgreed && (
                                    <p className="text-red-500 text-xs mt-2">{errors.privacyAgreed}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-ink text-paper py-5 font-medium uppercase tracking-wider hover:bg-ink/90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed border border-ink"
                                >
                                    {isSubmitting ? t.form.sending : t.form.submit}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
