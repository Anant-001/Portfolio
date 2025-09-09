import Section from "../components/Section";
import Modal from "../3d/Modal.jsx";
const About = () => (
    <Section id="about" title="About Me">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-6">
            {/* Left: Image (Now on the left for lg and above) */}
            <div className="flex-1 flex justify-center">
                <Modal />
            </div>

            {/* Right: Text (Now on the right) */}
            <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Who Am I?</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                    I'm a passionate front-end developer who crafts fast, clean, and responsive web dev using modern tools like
                    <span className="text-cyan-400 font-semibold"> React</span>,
                    <span className="text-cyan-400 font-semibold"> Vite</span>, and
                    <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>.
                    <br /><br />
                    I love building beautiful interfaces that feel intuitive and perform smoothly. I also enjoy working with animations, especially with <span className="text-cyan-400 font-semibold">GSAP</span> and 3D tools like <span className="text-cyan-400 font-semibold">Three.js</span>.
                </p>
            </div>
        </div>
    </Section>
);

export default About;

