import Section from "../components/Section";

// Map skills to local PNG icon paths
const skillIcons = {
    HTML: "/Icons/html.png",
    CSS: "/Icons/css.png",
    JavaScript: "/Icons/js.png",
    React: "/Icons/react.png",
    Vite: "/Icons/vite.png",
    "Tailwind CSS": "/Icons/tailwindcss.png",
    "Node.js": "/Icons/nodejs.png",
    Git: "/Icons/git.png",
    GitHub: "/Icons/github.png",
    "VS Code": "/Icons/vscode.png",
    Figma: "/Icons/figma.png",
    "Web Storm":"/Icons/webstorm.png",
    Framer: "/Icons/framer.png",
    Canva: "/Icons/canva.png",
    Firebase: "/Icons/Firebase.png",
    MongoDB: "/Icons/Mongo.png",
    "Adobe XD": "/Icons/Adobe XD.png",
    Illustrator: "/Icons/Illustrator.png",
};

const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"],
    Backend: ["Node.js", "Firebase", "MongoDB"],
    Design: ["Figma", "Adobe XD", "Illustrator", "Framer", "Canva"],
    Tools: ["Git", "GitHub", "VS Code", "Figma" ,"Web Storm", "Framer", "Canva"],
};

const Skills = () => (
    <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {Object.entries(skills).map(([category, items]) => (
                <div
                    key={category}
                    className="relative group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 shadow-xl transition-all hover:scale-[1.03] hover:border-cyan-400 dark:bg-white/5"
                >
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-cyan-400 mb-4 relative z-10">{category}</h3>
                    <ul className="flex flex-wrap gap-3 relative z-10">
                        {items.map((skill) => (
                            <li
                                key={skill}
                                className="flex items-center gap-2 text-sm font-medium text-white bg-cyan-500/10 border border-cyan-400/30 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-cyan-500/20 transition-all"
                            >
                                <img
                                    src={skillIcons[skill]}
                                    alt={skill}
                                    className="w-5 h-5 object-contain"
                                />
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </Section>
);

export default Skills;
