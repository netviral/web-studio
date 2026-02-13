import { useState, useMemo } from 'react';
import { Activity, BarChart2, Briefcase, GraduationCap, Dumbbell, ShoppingBag, ArrowRight } from 'lucide-react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'HealthAI Platform',
        category: 'healthtech',
        description: 'AI-powered health diagnostics platform that helped raise $500K in seed funding.',
        tech: ['React', 'Python', 'TensorFlow', 'AWS'],
        image: <Activity size={48} className="text-secondary" />,
        metrics: { users: '10K+', funding: '$500K', time: '3 weeks' },
    },
    {
        id: 2,
        title: 'DataSync Dashboard',
        category: 'saas',
        description: 'Real-time data analytics dashboard for enterprise clients.',
        tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
        image: <BarChart2 size={48} className="text-secondary" />,
        metrics: { users: '5K+', revenue: '$50K MRR', time: '4 weeks' },
    },
    {
        id: 3,
        title: 'TechFlow CRM',
        category: 'saas',
        description: 'Modern CRM solution built for fast-growing startups.',
        tech: ['React', 'Express', 'MongoDB', 'Stripe'],
        image: <Briefcase size={48} className="text-secondary" />,
        metrics: { users: '15K+', funding: '$1M', time: '3 weeks' },
    },
    {
        id: 4,
        title: 'EduLearn Mobile',
        category: 'edtech',
        description: 'Interactive learning platform with gamification features.',
        tech: ['React Native', 'Firebase', 'Node.js'],
        image: <GraduationCap size={48} className="text-secondary" />,
        metrics: { users: '25K+', rating: '4.8★', time: '5 weeks' },
    },
    {
        id: 5,
        title: 'FitTrack Pro',
        category: 'healthtech',
        description: 'Fitness tracking app with AI-powered workout recommendations.',
        tech: ['React', 'Python', 'ML', 'AWS'],
        image: <Dumbbell size={48} className="text-secondary" />,
        metrics: { users: '30K+', rating: '4.9★', time: '4 weeks' },
    },
    {
        id: 6,
        title: 'ShopEase Marketplace',
        category: 'ecommerce',
        description: 'Multi-vendor marketplace with advanced search and recommendations.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Algolia'],
        image: <ShoppingBag size={48} className="text-secondary" />,
        metrics: { users: '50K+', gmv: '$2M', time: '6 weeks' },
    },
];

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'SaaS' },
    { id: 'healthtech', label: 'HealthTech' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'ecommerce', label: 'E-Commerce' },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = useMemo(() => {
        return filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);
    }, [filter]);

    return (
        <div className="portfolio">
            <section className="portfolio-hero section entry-anim">
                <div className="container-wide">
                    <div className="portfolio-hero-content">
                        <h1>Our <span className="text-primary">Portfolio</span></h1>
                        <p className="hero-description">
                            Explore the high-performance MVPs we've built for ambitious founders.
                            From fintech to healthtech, we deliver scalable solutions ready for market.
                        </p>
                    </div>
                </div>
            </section>

            <section className="portfolio-filter section entry-anim">
                <div className="container-wide">
                    <div className="filter-buttons">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="projects-section entry-anim">
                <div className="container-wide">
                    <div className="projects-grid grid grid-3">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="card project-card">
                                <div className="project-image">{project.image}</div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-metrics">
                                        {Object.entries(project.metrics).map(([key, value]) => (
                                            <div key={key} className="metric">
                                                <div className="metric-value">{value}</div>
                                                <div className="metric-label">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="portfolio-cta section entry-anim">
                <div className="container-wide">
                    <div className="cta-card card">
                        <h2>Want to See Your Project Featured Here?</h2>
                        <p>
                            We are constantly looking for visionary founders to partner with.
                            Our team is ready to bring your technical vision to life with speed and precision.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-large">
                            Start Your Project
                            <ArrowRight size={20} className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
