import { Link } from 'react-router-dom';
import { Palette, CreditCard, Check, ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';
import './Pricing.css';

const plans = [
    {
        name: 'Starter/MVP',
        price: '$5,000',
        period: 'negotiable',
        description: 'Perfect for rapidly validating your idea with a custom-coded MVP.',
        features: [
            'Single platform (Web or Mobile)',
            'Core MVP features only',
            'PostHog + G-Analytics',
            'Full IP Ownership',
            '2-week delivery',
            '2 weeks of support',
            'Price negotiable per scope',
        ],
        popular: false,
        gradient: 'var(--gradient-accent)',
    },
    {
        name: 'Professional/Scale',
        price: '$12,000',
        period: 'negotiable',
        description: 'For serious founders ready to dominate and scale the market.',
        features: [
            'Full B2B/B2C Dashboard',
            'Premium UI/UX System',
            'Advanced Data Compliance',
            'Advanced Analytics Suite',
            '3-4 week delivery',
            '1 month of support',
            'Deployment & CI/CD',
            'Flexible scope adjustments',
        ],
        popular: true,
        gradient: 'var(--gradient-primary)',
    },
    {
        name: 'Enterprise/Custom',
        price: 'Custom',
        period: 'consultation',
        description: 'Complex sector-specific platforms (Health, Construction, legal).',
        features: [
            'Industrial-grade security',
            'Custom internal tools',
            'Third-party integrations',
            'AI/Workflow automation',
            'Scalable architecture',
            'Dedicated senior team',
            'Bespoke maintenance',
            'Negotiable timeline',
        ],
        popular: false,
        gradient: 'var(--gradient-secondary)',
    },
];

const addons = [
    {
        icon: <Palette size={32} className="text-secondary" />,
        title: 'Brand Identity',
        price: '$2,000',
        description: 'Logo, color palette, and premium founder guidelines.',
    },
    {
        icon: <BarChart3 size={32} className="text-secondary" />,
        title: 'Product Analytics',
        price: '$1,500',
        description: 'Deep PostHog & conversion funnel implementation.',
    },
    {
        icon: <ShieldCheck size={32} className="text-secondary" />,
        title: 'Security Hardening',
        price: '$2,500',
        description: 'Advanced encryption and data isolation services.',
    },
    {
        icon: <CreditCard size={32} className="text-secondary" />,
        title: 'Payment Integration',
        price: '$1,500',
        description: 'Stripe, PayPal, or custom B2B billing systems.',
    },
];

const faqs = [
    {
        question: 'Is the pricing negotiable?',
        answer: 'Yes. We understand that early-stage requirements can shift. If you need to drop certain features or add specific complexity, we adjust our quote to reflect the actual engineering effort.',
    },
    {
        question: 'What technologies do you use?',
        answer: 'We avoid templates like WordPress. We use high-performance stacks like React, Next.js, and Node.js for rapid prototyping and enterprise scalability.',
    },
    {
        question: 'Who owns the intellectual property?',
        answer: 'You do. 100%. Everything we build—from the source code to the brand assets—belongs entirely to you. We sign formal NDAs and IP Transfer agreements.',
    },
    {
        question: 'Do you offer student or social impact discounts?',
        answer: 'Absolutely. We believe helping founders in their first step is crucial. If you are a student, a first-time founder, or building a social/ethical project, book a call. Tell us why your mission matters with a personal statement, and we will assess a specialized discount for you.',
    },
];

const Pricing = () => {

    return (
        <div className="pricing">
            {/* Hero Section */}
            <section className="pricing-hero section entry-anim">
                <div className="container-wide">
                    <div className="pricing-hero-content">
                        <h1 className="">Simple, <span className="text-primary">Transparent</span>, Flexible.</h1>
                        <p className="hero-description">
                            We don't build on templates or restrictive platforms. No WordPress, no Shopify.
                            Just high-performance, custom-coded solutions for serious founders.
                            Pricing is flexible—we build according to your vision and budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pricing-plans section entry-anim">
                <div className="container-wide">
                    <div className="plans-grid grid grid-3">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`card pricing-card ${plan.popular ? 'popular' : ''
                                    }`}
                                style={{ '--plan-gradient': plan.gradient } as React.CSSProperties}
                            >
                                {plan.popular && (
                                    <div className="popular-badge">
                                        <span>Best for Scale</span>
                                    </div>
                                )}

                                <div className="plan-header">
                                    <h3>{plan.name}</h3>
                                    <div className="plan-price">
                                        <span className="price">{plan.price}</span>
                                        <span className="period">/{plan.period}</span>
                                    </div>
                                    <p className="plan-description">{plan.description}</p>
                                </div>

                                <div className="plan-features">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="feature-item">
                                            <span className="check-icon">
                                                <Check size={12} strokeWidth={4} />
                                            </span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/contact"
                                    className={`btn btn-large plan-cta ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                                >
                                    Get Started
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-ons Section */}
            <section className="addons-section section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2 className="section-title">Custom Technical Add-ons</h2>
                        <p className="section-description">
                            Deepen your market validation with specialized services designed for modern B2B and D2C startups.
                        </p>
                    </div>

                    <div className="addons-grid grid grid-4">
                        {addons.map((addon, index) => (
                            <div key={index} className="card-minimal">
                                <div className="feature-icon mb-2">{addon.icon}</div>
                                <h3 className="text-sm">{addon.title}</h3>
                                <div className="addon-price text-lg">{addon.price}</div>
                                <p className="text-xs text-center">{addon.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <h2 className="section-title">Transparency First</h2>
                        <p className="section-description">
                            Everything you need to know about our custom build process and founder-first partnership.
                        </p>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="feature-card"
                            >
                                <h3 className="faq-question">{faq.question}</h3>
                                <p className="faq-answer">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pricing-cta section entry-anim">
                <div className="container-wide" style={{ padding: '0 1rem' }}>
                    <div className="cta-card card ">
                        <h2>Secure Your First Step</h2>
                        <p>
                            We aren't a hobby shop. We're a team of senior developers dedicated to taking your vision live.
                            Ask about our <strong>student/founder discounts</strong> or our <strong>social impact programs</strong>.
                            If you're building for the greater good, tell us why it matters in your personal statement.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            Get Started
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
