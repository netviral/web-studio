import { Link } from 'react-router-dom';
import { Shield, Zap, Users, Target, Code, ArrowRight, CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div className="why-us-page entry-anim">
            <section className="hero-section section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Why Choose Meta<span className="text-primary">Launch?</span></h1>
                        <p className="hero-description">
                            We're not your typical agency. Here's what makes us different.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container-wide">
                    <div className="grid grid-2 gap-8">
                        {[
                            {
                                icon: <Code size={40} />,
                                title: "100% Custom Code",
                                desc: "No WordPress, no templates, no shortcuts. Every line of code is written specifically for your business needs."
                            },
                            {
                                icon: <Zap size={40} />,
                                title: "AI-Powered Speed",
                                desc: "We leverage AI to accelerate development without sacrificing quality. What takes others months, we deliver in weeks."
                            },
                            {
                                icon: <Shield size={40} />,
                                title: "You Own Everything",
                                desc: "Full ownership of code, IP, and digital assets. No vendor lock-in, no hidden dependencies."
                            },
                            {
                                icon: <Users size={40} />,
                                title: "Senior Engineers Only",
                                desc: "Work directly with experienced developers. No junior devs, no outsourcing, no communication layers."
                            },
                            {
                                icon: <Target size={40} />,
                                title: "Built for Scale",
                                desc: "Modern architecture that grows with you. From MVP to mid-market, our code is production-ready."
                            },
                            {
                                icon: <CheckCircle2 size={40} />,
                                title: "Transparent Pricing",
                                desc: "Fixed-price projects or monthly retainers. No surprise bills, no scope creep charges."
                            }
                        ].map((reason, i) => (
                            <div key={i} className="feature-card-detailed">
                                <div className="feature-icon">{reason.icon}</div>
                                <h3>{reason.title}</h3>
                                <p>{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">The MetaLaunch Labs Difference</h2>
                        <p className="section-description">A better way to build digital products.</p>
                    </div>
                    <div className="comparison-table card p-8">
                        <div className="comparison-row header">
                            <div></div>
                            <div>Traditional Agencies</div>
                            <div>Meta<span className="text-primary">Launch</span></div>
                        </div>
                        {[
                            { feature: "Timeline", them: "3-6 months", us: "2-4 weeks" },
                            { feature: "Code Ownership", them: "Limited/Licensed", us: "100% Yours" },
                            { feature: "Tech Stack", them: "WordPress/Templates", us: "Modern Custom Code" },
                            { feature: "Team Access", them: "Project Managers", us: "Direct to Engineers" },
                            { feature: "Pricing", them: "Hourly/Variable", us: "Fixed/Transparent" }
                        ].map((row, i) => (
                            <div key={i} className="comparison-row">
                                <div className="feature-name">{row.feature}</div>
                                <div className="them">{row.them}</div>
                                <div className="us">{row.us}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section section">
                <div className="container-wide">
                    <div className="cta-card card">
                        <h2>Experience the Difference</h2>
                        <p>Let's build something amazing together.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Start Your Project
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyUs;
