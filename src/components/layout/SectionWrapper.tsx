"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
}

export default function SectionWrapper({
    children,
    className = "",
}: SectionWrapperProps) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section
            ref={ref}
            className={`transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${className}`}
        >
            {children}
        </section>
    );
}
