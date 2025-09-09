import Section from "../components/Section";
import GamingRoomModel from "../3d/GamingRoomModel.jsx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';// import your 3D model component

const Contact = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "your_service_id",       // Replace with your EmailJS service ID
                "your_template_id",      // Replace with your EmailJS template ID
                form.current,
                "your_public_key"        // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Success:", result.text);
                    setSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.log("Error:", error.text);
                }
            );
    };

    return (
        <Section id="contact" title="Let's Connect">
            <div className="flex flex-col lg:flex-row items-center gap-10 mt-6 ">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="p-3 rounded bg-white/10 text-white placeholder-white/50"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="p-3 rounded bg-white/10 text-white placeholder-white/50"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        className="p-3 rounded bg-white/10 text-white placeholder-white/50"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Send Message
                    </button>

                    {sent && (
                        <p className="text-green-400 font-medium mt-2">✔ Message sent successfully!</p>
                    )}
                </form>
                {/* Left: Contect Info */}
                <div
                    className="flex-1 text-center lg:text-left bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-xl border border-cyan-400/20 shadow-xl space-y-6 max-w-xl w-full">
                    <a
                        href="anantdevliyal01@gmail.com"
                        className="block text-white text-lg font-medium hover:text-cyan-400 transition"
                    >
                        📧 <span className="underline underline-offset-4">anantdevliyal01@gmail.com</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/anant-devliyal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white text-lg font-medium hover:text-cyan-400 transition"
                    >
                        🔗 <span className="underline underline-offset-4">linkedin.com/in/anant-devliyal</span>
                    </a>

                    <p className="pt-4 text-sm text-gray-400">
                        Feel free to reach out for collaboration or just a friendly hello 👋
                    </p>
                </div>

                {/* Right: 3D Model */}
                <div className="flex-1 w-full max-w-md max-h-full">
                    <div style={{width: '30vw', height: '30vh'}}>
                        <Canvas camera={{position: [0, 2, 6], fov: 50}}>
                            <ambientLight intensity={0.4}/>
                            <directionalLight position={[10, 10, 10]}/>
                            <Suspense fallback={null}>
                                <GamingRoomModel/>
                            </Suspense>
                            <OrbitControls/>
                        </Canvas>
                    </div>
                </div>
            </div>
        </Section>
    );
};
export default Contact;
