import { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './ServiceTemplate.css';

interface TemplateProps {
    data: Record<string, any>;
    type: string;
}

const GenericTemplate = ({ data }: TemplateProps) => {
    const { id } = useParams<{ id: string }>();
    const content = id ? data[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!content) {
        return <Navigate to="/" replace />;
    }

    const Icon = content.icon;

    return (
        <div className="template-page entry-anim">
            {/* Hero Section */}
            <section className="hero-section section">
                <div className="container">
                    <div className="hero-content">
                        <div className="flex justify-center mb-8">
                            <div className="template-icon-wrapper">
                                <Icon size={48} className="text-secondary" />
                            </div>
                        </div>

                        <h1 className="hero-title">{content.title}</h1>
                        <p className="hero-description">{content.subtitle}</p>

                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Start Project
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="section">
                <div className="container">
                    <p className="template-description">{content.description}</p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section">
                <div className="container-wide">
                    <h2 className="text-center mb-12">{content.featuresTitle || "Key Capabilities"}</h2>
                    <div className="grid grid-3 gap-8">
                        {content.features.map((feature: any, index: number) => (
                            <div key={index} className="card p-8">
                                <CheckCircle2 className="text-secondary mb-4" size={32} />
                                <h3 className="mb-3">{feature.title}</h3>
                                <p className="text-secondary">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            {content.techStack && (
                <section className="section">
                    <div className="container">
                        <h2 className="text-center mb-8">Technologies We Use</h2>
                        <div className="tech-tags">
                            {content.techStack.map((tech: string, index: number) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="cta-section section">
                <div className="container-wide">
                    <div className="cta-card card">
                        <h2>Ready to Build?</h2>
                        <p>Let's discuss how we can help with {content.title}.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Book Consultation
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GenericTemplate;
