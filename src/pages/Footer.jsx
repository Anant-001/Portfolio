import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white/10 dark:bg-white/5 backdrop-blur-md text-white py-6 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-white/70">
                    © {new Date().getFullYear()} Anant Devliyal — All Rights Reserved
                </p>

                <div className="flex gap-5 text-xl">
                    <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:your@email.com" className="hover:text-cyan-300">
                        <FaEnvelope />
                    </a>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
