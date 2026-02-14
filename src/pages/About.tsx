import { Link } from 'react-router-dom';
import { Rocket, Users, Target, ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page entry-anim">
            <section className="hero-section section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">About MVP Studio</h1>
                        <p className="hero-description">
                            We are a full-service digital product studio specializing in rapid development
                            for founders, scale-ups, and agencies.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-wide">
                    <div className="grid grid-2 gap-12">
                        <div className="feature-card-detailed">
                            <h2 className="mb-4">Who We Are</h2>
                            <p className="mb-4">
                                Founded by senior engineers who saw a gap in the market: traditional agencies were too slow,
                                too expensive, and too rigid for the modern digital landscape.
                            </p>
                            <p>
                                We built MVP Studio to be different. We combine the speed of AI-assisted development
                                with the precision of senior engineering to deliver world-class digital products in weeks, not months.
                            </p>
                        </div>
                        <div className="feature-card-detailed">
                            <h2 className="mb-4">What We Do</h2>
                            <p className="mb-4">
                                We build custom web applications, mobile apps, e-commerce platforms, and marketing websites
                                for clients across healthcare, fintech, education, and beyond.
                            </p>
                            <p>
                                Every project is custom-coded, fully owned by you, and built with modern technologies
                                that scale with your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-description">How we think, work, and deliver.</p>
                    </div>
                    <div className="grid grid-3 gap-8">
                        {[
                            {
                                icon: <Rocket size={32} />,
                                title: "Speed",
                                desc: "We move fast without compromising quality. Your time to market matters."
                            },
                            {
                                icon: <Users size={32} />,
                                title: "Transparency",
                                desc: "Direct communication with senior engineers. No project managers playing telephone."
                            },
                            {
                                icon: <Target size={32} />,
                                title: "Ownership",
                                desc: "You own 100% of the code, IP, and digital assets. No vendor lock-in."
                            }
                        ].map((value, i) => (
                            <div key={i} className="feature-card text-center">
                                <div className="feature-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container-wide">
                    <div className="cta-card card">
                        <h2>Ready to Work Together?</h2>
                        <p>Let's discuss your project and see if we're a good fit.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Get in Touch
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
