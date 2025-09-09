import React, { useState, useEffect } from "react";
import {
    FaHome,
    FaUser,
    FaProjectDiagram,
    FaTools,
    FaEnvelope,
    FaBars,
    FaTimes,
} from "react-icons/fa";

const links = [
    { href: "#home", id: "home", label: "Home", icon: <FaHome /> },
    { href: "#about", id: "about", label: "About", icon: <FaUser /> },
    { href: "#projects", id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "#skills", id: "skills", label: "Skills", icon: <FaTools /> },
    { href: "#contact", id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeId, setActiveId] = useState("home");

    // ScrollSpy observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);
                if (visible) setActiveId(visible.target.id);
            },
            {
                rootMargin: "-50% 0px -49% 0px", // triggers when ~middle of screen
                threshold: 0.1,
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const renderLinks = (isMobile = false) => (
        <nav className="flex flex-col gap-6 text-white font-medium text-sm">
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => isMobile && setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                        activeId === link.id
                            ? "bg-white/10 text-cyan-400"
                            : "hover:text-cyan-400 hover:bg-white/5"
                    }`}
                >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                </a>
            ))}
        </nav>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="fixed top-0 left-0 h-full w-56 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-xl p-6 hidden md:flex flex-col z-50">
                <h1 className="text-2xl font-bold text-cyan-400 mb-10 border-b border-cyan-500 pb-2">
                    My Portfolio
                </h1>
                {renderLinks()}
                <div className="mt-auto pt-8 text-xs text-white/40">
                    © {new Date().getFullYear()} Anant Devliyal
                </div>
            </div>

            {/* Mobile Toggle Button */}
            <button
                className="fixed top-4 left-4 z-50 text-white text-2xl md:hidden bg-cyan-500 hover:bg-cyan-600 p-2 rounded"
                onClick={toggleSidebar}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-xl p-6 flex flex-col z-40 transform transition-transform duration-300 md:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <h1 className="text-2xl font-bold text-cyan-400 mb-10 border-b border-cyan-500 pb-2">
                    My Portfolio
                </h1>
                {renderLinks(true)}
                <div className="mt-auto pt-8 text-xs text-white/40">
                    © {new Date().getFullYear()} Anant Devliyal
                </div>
            </div>
        </>
    );
};

export default Sidebar;
