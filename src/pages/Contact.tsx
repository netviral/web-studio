import { useState } from 'react';
import { Mail, MessageSquare, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import './Contact.css';

const contactMethods = [
    {
        icon: <Mail size={32} className="text-secondary" />,
        title: 'Email Us',
        value: 'hello@mvpstudio.com',
        link: 'mailto:hello@mvpstudio.com',
    },
    {
        icon: <MessageSquare size={32} className="text-secondary" />,
        title: 'Live Chat',
        value: 'Available 9AM-6PM EST',
        link: '#',
    },
    {
        icon: <Phone size={32} className="text-secondary" />,
        title: 'Call Us',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
    },
];

const stats = [
    { number: '< 24h', label: 'Response Time' },
    { number: '100%', label: 'Free Consultation' },
    { number: '50+', label: 'Happy Founders' },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        timeline: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '', email: '', company: '', budget: '', timeline: '', message: '',
            });
        }, 3000);
    };

    return (
        <div className="contact">
            <section className="contact-hero section entry-anim">
                <div className="container-wide">
                    <div className="contact-hero-content">
                        <h1>Let's Build Something Amazing</h1>
                        <p className="hero-description">
                            Tell us about your vision. We'll turn it into reality.
                            Our team of experts is ready to provide a free consultation and a technical roadmap.
                        </p>
                        <br />
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

            <section className="contact-methods section entry-anim">
                <div className="container-wide">
                    <div className="section-header text-center">
                        <p className="hero-description" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
                            We favor high-bandwidth communication. Whether you're ready to start development or just want to
                            discuss the technical feasibility of a new concept, our lead engineers are available to chat.
                            Expect a response within 4 business hours.
                        </p>
                    </div>
                    <div className="methods-grid grid grid-3">
                        {contactMethods.map((method, index) => (
                            <a key={index} href={method.link} className="card method-card">
                                <div className="method-icon">{method.icon}</div>
                                <h3 style={{ color: 'var(--accent-primary)' }}>{method.title}</h3>
                                <p>{method.value}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="contact-form-section section entry-anim">
                <div className="container-wide">
                    <div className="form-wrapper">
                        <div className="form-content card">
                            <div className="form-header text-center">
                                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Submit Your Vision</h2>
                                <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
                                    Provide the technical scope or high-level goals of your MVP.
                                    Our architects will analyze your requirements and prepare a custom technical roadmap.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="success-message">
                                    <div className="success-icon">
                                        <CheckCircle size={64} style={{ color: 'var(--accent-primary)' }} />
                                    </div>
                                    <h3>Thank You!</h3>
                                    <p>We've received your message and will get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                        <div className="form-group">
                                            <label htmlFor="name" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold' }}>Full Name *</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" style={{ padding: '1.25rem' }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold' }}>Email Address *</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" style={{ padding: '1.25rem' }} />
                                        </div>
                                    </div>

                                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
                                        <div className="form-group">
                                            <label htmlFor="company" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold' }}>Company Name</label>
                                            <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Startup" style={{ padding: '1.25rem' }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="budget" style={{ marginBottom: '0.5rem', display: 'block', fontWeight: 'bold' }}>Budget Range *</label>
                                            <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required style={{ padding: '1.25rem' }}>
                                                <option value="">Select budget</option>
                                                <option value="5k-10k">$5,000 - $10,000</option>
                                                <option value="10k-20k">$10,000 - $20,000</option>
                                                <option value="20k-50k">$20,000 - $50,000</option>
                                                <option value="50k+">$50,000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="timeline">Desired Timeline *</label>
                                        <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required>
                                            <option value="asap">ASAP (2-3 weeks)</option>
                                            <option value="1-month">1 Month</option>
                                            <option value="2-3-months">2-3 Months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Tell Us About Your Project *</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your vision..." rows={6} />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-large submit-btn">
                                        Send Message <ArrowRight size={20} className="ml-2" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
