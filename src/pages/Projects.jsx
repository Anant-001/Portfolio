import { useState, useEffect } from "react";
import Section from "../components/Section";
import CardSwap, { Card } from "../../card swip/CardSwap/CardSwap.jsx";

const projects = [
    {
        title: "📱 Online Notes",
        desc: "A mobile responsive webpage for online notes with clean UI, built using React, Figma for UI and v0.",
        link: "#",
        image: "/Studying Made Easy with Online Notes.png",
    },
    {
        title: "💻 Movies Page",
        desc: "A website built with React, Vite & Tailwind CSS. Uses APIs and has unique dynamic backgrounds.",
        link: "#",
        image: "/Cover.png",
    },
    {
        title: "🎮 Gaming Center",
        desc: "Interactive Gaming Center UI using Three.js, GSAP animations, and modern UI principles.",
        link: "#",
        image: "/Gaming Fun with Friends!.png",
    },
];

const delay = 5000; // 5 seconds

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
        }, delay);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section id="projects" title="Projects">
            <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                {/* Left: Project Text */}
                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-semibold text-cyan-400 mb-4">
                        {projects[activeIndex].title}
                    </h3>
                    <p className="text-white text-lg mb-4 max-w-lg mx-auto lg:mx-0">
                        {projects[activeIndex].desc}
                    </p>
                    <a
                        href={projects[activeIndex].link}
                        className="inline-block text-cyan-300 underline hover:text-cyan-400 text-sm"
                    >
                        🔗 View Project
                    </a>
                </div>

                {/* Right: Card Slider */}
                <div className="w-full md:w-[500px] h-[360px] relative">
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={70}
                        delay={delay}
                        pauseOnHover={true}
                    >
                        {projects.map((proj, i) => (
                            <Card key={i}>
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03]"
                                />
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
