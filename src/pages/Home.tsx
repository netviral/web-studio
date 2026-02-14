import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Rocket, Target, Zap, ArrowRight,
    Shield, Users, BarChart3, Cpu
} from 'lucide-react';
import './Home.css';
import LogoLoop from '../components/LogoLoop';
import { TextSection } from '../components/TextSection';
import { ScrollStage } from '../components/ScrollStage';
import { SectionDivider } from '../components/SectionDivider';





const stats = [
    { number: '50+', label: 'MVPs Launched' },
    { number: '3 Weeks', label: 'Average Time' },
    { number: '100%', label: 'Founder Satisfaction' },
];

const headlines = [
    { text: "Digital Excellence For Visionaries", highlight: "Visionaries" },
    { text: "Enterprise-Grade Engineering", highlight: "Engineering" },
    { text: "Scale Your Product Team", highlight: "Scale" },
    { text: "From MVP To IPO", highlight: "IPO" },
];
const features = [
    {
        icon: <Cpu size={40} />,
        title: 'Custom Web Applications',
        description: 'Complex SaaS platforms, internal tools, and dashboards built with React and Next.js.',
    },
    {
        icon: <Zap size={40} />,
        title: 'High-Performance Marketing Sites',
        description: 'Blazing fast static sites using Astro and Next.js for superior SEO and user experience.',
    },
    {
        icon: <Target size={40} />,
        title: 'Mobile App Development',
        description: 'Native-quality iOS and Android experiences built with React Native and Expo.',
    },
    {
        icon: <BarChart3 size={40} />,
        title: 'Growth & Analytics',
        description: 'Data-driven growth engineering, technical SEO, and conversion optimization.',
    }
];





const Home = () => {
    const [headlineIndex, setHeadlineIndex] = useState(0);

    useEffect(() => {
        let interval: any;

        const startInterval = () => {
            interval = setInterval(() => {
                if (!document.hidden) {
                    setHeadlineIndex((prev) => (prev + 1) % headlines.length);
                }
            }, 5000);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                clearInterval(interval);
            } else {
                // Immediately switch to ensure fresh start on return, 
                // then restart interval
                setHeadlineIndex((prev) => (prev + 1) % headlines.length);
                startInterval();
            }
        };

        startInterval();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            clearInterval(interval);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    const currentHeadline = headlines[headlineIndex];
    const parts = currentHeadline.text.split(currentHeadline.highlight);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero section entry-anim">
                <div className="container-wide">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Full-Service Digital Product Studio</span>
                        </div>

                        <h1 key={headlineIndex} className="hero-title dynamic-headline">
                            {parts[0]}
                            <span className="vision-highlight">{currentHeadline.highlight}</span>
                            {parts[1]}
                        </h1>

                        <p className="hero-description">
                            We are the engineering partner for visionary founders and forward-thinking enterprises.
                            From rapid MVPs to scalable enterprise architectures, we build world-class digital products.
                        </p>
                        <br />

                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Start Your Project
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/portfolio" className="btn btn-secondary btn-large">
                                View Our Work
                            </Link>
                        </div>

                        <div className="hero-stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="card-minimal">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Logo Loop Section */}
            <div className="logo-loop-wrapper">
                <LogoLoop />
            </div>

            {/* Who We Serve Section */}
            <section className="section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2 className="section-title">Who We Serve</h2>
                        <p className="section-description">
                            Tailored engineering solutions for every stage of growth.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            {
                                icon: <Rocket size={32} />,
                                title: "Founders & Startups",
                                desc: "Launch your MVP in weeks. We handle the tech so you can focus on the market.",
                                linkText: "For Founders",
                                link: "/personas/founders"
                            },
                            {
                                icon: <Shield size={32} />,
                                title: "Mid-Sized & Scale-Ups",
                                desc: "Growth engineering from MVP to mid-market success.",
                                linkText: "For Scale-Ups",
                                link: "/personas/scale-ups"
                            },
                            {
                                icon: <Users size={32} />,
                                title: "Agencies & Partners",
                                desc: "White-label development power to expand your agency's capacity and capabilities.",
                                linkText: "For Agencies",
                                link: "/personas/agencies"
                            },
                            {
                                icon: <Shield size={32} />,
                                title: "High-Profile Individuals",
                                desc: "Discreet, premium digital solutions for personal brands and ventures.",
                                linkText: "For Individuals",
                                link: "/personas/high-profile-individuals"
                            }
                        ].map((item, i) => (
                            <div key={i} className="feature-card text-center">
                                <div className="feature-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p className="mb-8">{item.desc}</p>
                                <div className="mt-auto pt-6">
                                    <Link to={item.link} className="btn btn-secondary btn-large">
                                        {item.linkText}
                                        <ArrowRight size={20} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Spectrum Section */}
            <section className="section expertise-section entry-anim">
                <div className="container-wide">
                    <div className="section-header">
                        <h2 className="section-title">Our Expertise</h2>
                        <p className="section-description">
                            End-to-end digital product development across modern platforms.
                        </p>
                    </div>

                    <div className="expertise-content">
                        {features.map((feature, index) => (
                            <div key={index} className="expertise-row">
                                <div className="expertise-icon-box">
                                    {feature.icon}
                                </div>
                                <div className="expertise-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Custom? (Text Section) */}
            <section className="section bg-secondary">
                <div className="container-wide">
                    <TextSection
                        title="Built for Limitless Scale"
                        description="We don't do templates. We build high-performance architectures using the same stack used by the world's most successful startups."
                        reversed={true}
                        visualContent={
                            <div className="visual-placeholder flex-center" style={{ background: 'var(--bg-deep)', height: '100%', width: '100%' }}>
                                <Cpu size={80} className="text-primary opacity-20" />
                            </div>
                        }
                    >
                        <ul className="accent-list mt-6">
                            <li><strong>Custom Architectures:</strong> Tailored to your specific logic, not a generic theme.</li>
                            <li><strong>Zero Technical Debt:</strong> Clean, documented code that your team can take over.</li>
                            <li><strong>Future Proof:</strong> Built with Astro, Next.js, and React for maximum longevity.</li>
                        </ul>
                    </TextSection>
                </div>
            </section>

            {/* The MVP Studio Standard - Scrollytelling Section */}
            <section className="section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center mb-0">
                        <span className="hero-badge-minimal mb-4">Our Methodology</span>
                        <h2 className="section-title text-display">The MVP Studio <span className="text-serif">Standard</span></h2>
                        <p className="section-description mx-auto">
                            Beyond conventional code. We architect systems for resilience and scale.
                        </p>
                    </div>

                    <ScrollStage
                        steps={[
                            {
                                id: 1,
                                title: "Security by Architecture",
                                description: "Enterprise-grade safety isn't a feature; it's the foundation. We implement end-to-end encryption and zero-trust protocols from the first line of code.",
                                visual: (
                                    <div className="visual-stage-box security-visual">
                                        <Shield size={120} strokeWidth={0.5} className="opacity-40" />
                                        <div className="radar-ping"></div>
                                    </div>
                                )
                            },
                            {
                                id: 2,
                                title: "Intelligence via Data",
                                description: "Every product we build is a learning machine. We integrate deep analytics and feedback loops that turn user behavior into actionable engineering insights.",
                                visual: (
                                    <div className="visual-stage-box data-visual">
                                        <BarChart3 size={120} strokeWidth={0.5} className="opacity-40" />
                                        <div className="data-pips">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                )
                            },
                            {
                                id: 3,
                                title: "Senior-Led Excellence",
                                description: "No junior-level handoffs. You work directly with architects who have decades of experience building at scale. Communication is high-fidelity and transparent.",
                                visual: (
                                    <div className="visual-stage-box team-visual">
                                        <Users size={120} strokeWidth={0.5} className="opacity-40" />
                                        <div className="orbit-nodes"></div>
                                    </div>
                                )
                            }
                        ]}
                    />
                </div>
            </section>

            <SectionDivider />

            {/* Industries Section */}
            <section className="industries section entry-anim">
                <div className="container-wide text-center">
                    <h2 className="industries-title">Industries We Empower</h2>
                    <div className="grid grid-4">
                        {['HealthTech', 'FinTech', 'EdTech', 'Real Estate', 'E-Commerce', 'Logistics', 'LegalTech', 'SaaS'].map((industry, i) => (
                            <div key={i} className="card-minimal">
                                <span className="industry-name">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section section entry-anim">
                <div className="container-wide">
                    <div className="cta-card card">
                        <h2>Ready to Build Something Amazing?</h2>
                        <p>
                            Whether you need a high-speed MVP or a scalable enterprise platform,
                            our team is ready to deliver. Let's discuss your roadmap.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Schedule Consultation
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/portfolio" className="btn btn-secondary btn-large">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
