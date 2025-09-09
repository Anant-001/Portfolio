import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = ({ id, title, children }) => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                sectionRef.current,
                { autoAlpha: 0, y: 60 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Animate each child of contentRef
            gsap.fromTo(
                contentRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className="min-h-screen px-6 py-24 flex flex-col justify-center scroll-mt-24 opacity-0"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8 border-b border-cyan-500 pb-2 w-fit">
                {title}
            </h2>
            <div
                ref={contentRef}
                className="text-lg text-white space-y-4 max-w-4xl leading-relaxed"
            >
                {children}
            </div>
        </section>
    );
};

export default Section;
