"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}
