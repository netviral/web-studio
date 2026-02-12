import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Rocket, Target, Zap, ArrowRight,
    Shield, Users, BarChart3, Cpu, AlertTriangle
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
        icon: <Rocket size={40} className="text-secondary" />,
        title: 'Elite Custom Prototyping',
        description: 'We skip the templates. No WordPress, no limits. We build high-speed, custom-coded MVPs with senior engineering depth, giving you 100% ownership and a sharp edge in the market.',
    },
    {
        icon: <Cpu size={40} className="text-secondary" />,
        title: 'AI-Powered Execution',
        description: 'Match your pace in the AI Era. We proudly build with AI to deliver modern, ultra-secure solutions faster than any traditional agency. Our workflow is designed for the high-bandwidth founder.',
    },
    {
        icon: <Target size={40} className="text-secondary" />,
        title: 'Market Validation',
        description: 'Helping founders in their first step is crucial. We integrate PostHog and Google Analytics so you can pivot and scale based on real user data—essential for your next VC pitch.',
    },
    {
        icon: <Zap size={40} className="text-secondary" />,
        title: 'Vertical Sector Depth',
        description: 'From Healthcare and EdTech to B2C Consumer Apps and Fintech, we build cross-industry solutions that scale alongside your vision.',
    }
];



const headlines = [
    { text: "Build Your Vision With Us", highlight: "Vision" },
    { text: "We Build For Serious Founders Only", highlight: "Serious" },
    { text: "Your Competitor Is Already Building.", highlight: "Building." },
    { text: "The Crucial First Step For Founders", highlight: "Founders" },
];

const Home = () => {
    const [headlineIndex, setHeadlineIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHeadlineIndex((prev) => (prev + 1) % headlines.length);
        }, 5000);
        return () => clearInterval(interval);
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
                            <span>Scale Your Vision with a Senior Team</span>
                        </div>

                        <h1 key={headlineIndex} className="hero-title dynamic-headline">
                            {parts[0]}
                            <span className="vision-highlight">{currentHeadline.highlight}</span>
                            {parts[1]}
                        </h1>

                        <p className="hero-description">
                            Traditional agencies are too slow, too rigid, and too expensive for the modern founder.
                            We saw they were unable to meet the needs of those building the next big thing—so we came in.
                            Custom-coded, AI-powered, and built for speed. 100% yours, zero compromises.
                        </p>
                        <br />

                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Get Started
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/portfolio" className="btn btn-secondary btn-large">
                                Explore Our Work
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
            {/* The Gap Section */}
            <section className="gap-section section entry-anim">
                <div className="container-wide">
                    <div className="card shadow-xl" style={{ border: '1px solid rgba(99, 102, 241, 0.2)', background: '#020206' }}>
                        <div className="grid grid-2 gap-8 items-center" style={{ padding: '3rem' }}>
                            <div>
                                <div className="hero-badge" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)', color: '#f87171' }}>
                                    <AlertTriangle size={14} className="mr-2" />
                                    <span>The Agency Gap</span>
                                </div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                    Web Development Agencies Are <span style={{ color: '#f87171' }}>Failing</span> You.
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    We saw a pattern: ivory-tower agencies billing for months while delivering
                                    generic, template-dependency "solutions" that founders never actually owned.
                                    They aren't built for your speed or your scale.
                                </p>
                                <br />
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                    We founded this studio to close that gap. We build with the speed of AI
                                    and the precision of senior architects, ensuring you own every line of code.
                                </p>
                            </div>
                            <div className="grid grid-1 gap-4">
                                {[
                                    { t: "They Use Templates", d: "I mean, look at their own websites. Would you want something like that? We build 100% custom from day zero." },
                                    {
                                        t: "They Move Slowly",
                                        d: "Lengthy timelines and endless revisions are common in the industry. We focus on fast, focused delivery so you see results in weeks, not quarters."
                                    },
                                    {
                                        t: "Hidden Ownership",
                                        d: "Some agencies lock you into their systems. With us, you fully own the code, intellectual property, and digital assets—no strings attached."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="card" style={{ padding: '1.5rem', background: 'var(--bg-secondary)' }}>
                                        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{item.t}</h4>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Loop Section */}
            <div style={{ background: 'transparent', paddingBottom: '3rem' }}>
                <LogoLoop />
            </div>

            {/* Mission Statement */}
            <section className="mission section entry-anim text-center">
                <div className="container">
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Our Mission</h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-primary)' }}>
                        Helping founders take their first step is crucial. We provide the speed and edge required
                        to validate the next big thing before you take it to your customers.
                    </p>
                </div>
            </section>

            {/* Strategic Pillars Section */}
            <section className="pillars section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2 className="">Strategically Built MVPs</h2>
                        <p className="section-description">
                            We discard the generic. We build custom for B2B dashboards, D2C e-commerce,
                            and industrial tech platforms.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            {
                                icon: <Shield size={24} className="text-secondary" />,
                                t: "Secure Platforms & Services",
                                d: "Your user data and intellectual property are protected using industry-standard encryption and isolated architecture. We sign NDAs and MSAs before we even touch your code."
                            },
                            {
                                icon: <BarChart3 size={24} className="text-secondary" />,
                                t: "Deep Product Analytics",
                                d: "Every site comes with PostHog and Google Analytics. Track product usage, retention, and conversion funnels to give you the data needed for series-A pitches."
                            },
                            {
                                icon: <Users size={24} className="text-secondary" />,
                                t: "Senior Developer Squad",
                                d: "No hobbyists or interns. Your vision is handled by an elite team of senior developers with experience across Tech, Healthcare, and Education sectors."
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="card" style={{ padding: '2.5rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>{pillar.icon}</div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{pillar.t}</h3>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{pillar.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Expertise */}
            <section className="industries section entry-anim">
                <div className="container-wide text-center">
                    <h2 style={{ marginBottom: '3rem' }}>Industries We Empower</h2>
                    <div className="grid grid-4">
                        {['Consumer Apps', 'FMCG', 'Electronics', 'Healthcare', 'Education', 'Construction', 'Fintech', 'Legal Tech'].map((industry, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem' }}>
                                <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2 className="">Built for Serious Momentum</h2>
                        <p className="section-description ">
                            From e-commerce to custom internal tools, we deliver the custom infrastructure
                            that templates like WordPress simply cannot match.
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

            {/* CTA Section */}
            <section className="cta-section section entry-anim">
                <div className="container-wide">
                    <div className="cta-card card">
                        <h2>Maybe This Is The Next Big Thing?</h2>
                        <p>
                            Join serious founders who trusted our elite team to translate their vision into reality.
                            Whether you're a student, a social-impact founder, or an early-stage visionary, we're here to help you take that crucial first step.
                            Building for the greater good? Tell us your story in a personal statement for specialized discounts.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Book Your Call
                                <ArrowRight size={20} className="ml-2" />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Ask About Student Discounts
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
