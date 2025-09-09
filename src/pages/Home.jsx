import Section from "../components/Section";
import { useEffect, useState } from "react";
import ProfileCard from '../../my-card/ProfileCard/ProfileCard.jsx'

const typingTexts = [
    "Frontend Developer 💻",
    "React & Vite Enthusiast ⚡",
    "Tailwind CSS Lover 🎨",
    "UI/UX Designer ✨"
];

const Home = () => {
    const [text, setText] = useState("");
    const [i, setI] = useState(0);
    const [j, setJ] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentText = typingTexts[i];
        let typingSpeed = deleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(currentText.slice(0, j + 1));
                setJ(j + 1);

                if (j + 1 === currentText.length) {
                    setDeleting(true);
                }
            } else {
                setText(currentText.slice(0, j - 1));
                setJ(j - 1);

                if (j - 1 === 0) {
                    setDeleting(false);
                    setI((i + 1) % typingTexts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [j, i, deleting]);

    return (
        <Section id="home" title="Welcome! 👋">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Hi, I'm <span className="text-cyan-400">Anant_Devliyal</span>
                    </h1>
                    <p className="text-xl mb-4 h-8 text-cyan-200">
                        {text}
                        <span className="animate-pulse">|</span>
                    </p>
                    <div className="mt-6 flex gap-4 flex-wrap">
                        <a
                            href="/your-cv.pdf"
                            download
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded shadow"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded font-semibold"
                        >
                            Connect Me
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex-1 flex justify-center">
                    <ProfileCard
                        name="Anant Devliyal"
                        title="Web Developer"
                        handle="AnantDevliyal"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="./public/Mypic.jpg"
                        showUserInfo={true}
                        enableTilt={true}
                        onContactClick={() => console.log('Contect clicked')}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Home;
