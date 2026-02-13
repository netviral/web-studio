import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Rocket, Target, Zap, ArrowRight,
    Shield, Users, BarChart3, Cpu
} from 'lucide-react';
import './Home.css';
import LogoLoop from '../components/LogoLoop';

const stats = [
    { number: '50+', label: 'MVPs Launched' },
    { number: '3 Weeks', label: 'Average Time' },
    { number: '100%', label: 'Founder Satisfaction' },
];



const features = [
    {
        icon: <Cpu size={40} className="text-secondary" />,
        title: 'Custom Web Applications',
        description: 'Complex SaaS platforms, internal tools, and dashboards built with React and Next.js.',
    },
    {
        icon: <Zap size={40} className="text-secondary" />,
        title: 'High-Performance Marketing Sites',
        description: 'Blazing fast static sites using Astro and Next.js for superior SEO and user experience.',
    },
    {
        icon: <Target size={40} className="text-secondary" />,
        title: 'Mobile App Development',
        description: 'Native-quality iOS and Android experiences built with React Native and Expo.',
    },
    {
        icon: <BarChart3 size={40} className="text-secondary" />,
        title: 'Growth & Analytics',
        description: 'Data-driven growth engineering, technical SEO, and conversion optimization.',
    }
];



const headlines = [
    { text: "Digital Excellence For Visionaries", highlight: "Visionaries" },
    { text: "Enterprise-Grade Engineering", highlight: "Engineering" },
    { text: "Scale Your Product Team", highlight: "Scale" },
    { text: "From MVP To IPO", highlight: "IPO" },
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
                                <div key={index} className="stat-item card">
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Loop Section */}
            <div className="logo-loop-wrapper">
                <LogoLoop />
            </div>

            {/* Who We Serve Section */}
            <section className="section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2>Who We Serve</h2>
                        <p className="section-description">
                            Tailored engineering solutions for every stage of growth.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            {
                                icon: <Rocket size={32} className="text-secondary" />,
                                title: "Founders & Startups",
                                desc: "Launch your MVP in weeks. We handle the tech so you can focus on the market.",
                                linkText: "For Founders",
                                link: "/personas/founders"
                            },
                            {
                                icon: <Shield size={32} className="text-secondary" />,
                                title: "Mid-Sized & Scale-Ups",
                                desc: "Growth engineering from MVP to mid-market success.",
                                linkText: "For Scale-Ups",
                                link: "/personas/scale-ups"
                            },
                            {
                                icon: <Users size={32} className="text-secondary" />,
                                title: "Agencies & Partners",
                                desc: "White-label development power to expand your agency's capacity and capabilities.",
                                linkText: "For Agencies",
                                link: "/personas/agencies"
                            },
                            {
                                icon: <Shield size={32} className="text-secondary" />,
                                title: "High-Profile Individuals",
                                desc: "Discreet, premium digital solutions for personal brands and ventures.",
                                linkText: "For Individuals",
                                link: "/personas/high-profile-individuals"
                            }
                        ].map((item, i) => (
                            <div key={i} className="card pillar-card flex flex-col items-center">
                                <div className="pillar-icon-container">{item.icon}</div>
                                <h3 className="pillar-title">{item.title}</h3>
                                <p className="pillar-description mb-8 flex-grow">{item.desc}</p>
                                <Link to={item.link} className="btn btn-secondary text-sm mt-4">
                                    {item.linkText}
                                    <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Spectrum Section */}
            <section className="section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2>Our Expertise</h2>
                        <p className="section-description">
                            End-to-end digital product development across modern platforms.
                        </p>
                    </div>
                    <div className="grid grid-2 features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="card feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Pillars / Why Us */}
            <section className="pillars section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2>The MVP Studio Standard</h2>
                        <p className="section-description">
                            We don't just write code. We engineer business outcomes.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            {
                                icon: <Shield size={24} className="text-secondary" />,
                                t: "Security First",
                                d: "Enterprise-grade security practices from day one. Data encryption, secure auth, and compliance ready."
                            },
                            {
                                icon: <BarChart3 size={24} className="text-secondary" />,
                                t: "Data Driven",
                                d: "Integrated analytics and tracking. We build feedback loops directly into the product."
                            },
                            {
                                icon: <Users size={24} className="text-secondary" />,
                                t: "Senior Team Only",
                                d: "Direct access to senior engineers. No project managers playing telephone. You work with the builders."
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="card pillar-card">
                                <div className="pillar-icon-container">{pillar.icon}</div>
                                <h3 className="pillar-title">{pillar.t}</h3>
                                <p className="pillar-description">{pillar.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries section entry-anim">
                <div className="container-wide text-center">
                    <h2 className="industries-title">Industries We Empower</h2>
                    <div className="grid grid-4">
                        {['HealthTech', 'FinTech', 'EdTech', 'Real Estate', 'E-Commerce', 'Logistics', 'LegalTech', 'SaaS'].map((industry, i) => (
                            <div key={i} className="card industry-card">
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
