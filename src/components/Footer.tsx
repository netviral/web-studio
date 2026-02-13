import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-wide">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <Rocket size={24} className="logo-accent" />
                            <span className="logo-text">MVP<span className="logo-accent">Studio</span></span>
                        </Link>
                        <p className="footer-tagline">
                            Architecting the next generation of digital excellence.
                            We turn complex visions into scalable, high-performance MVPs.
                        </p>
                        <div className="footer-socials">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                <Github size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-column">
                            <h4>Solutions</h4>
                            <Link to="/services/web-apps">Web Applications</Link>
                            <Link to="/services/mobile-apps">Mobile Apps</Link>
                            <Link to="/services/marketing-sites">Marketing Sites</Link>
                            <Link to="/services/ecommerce">E-Commerce</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Industries</h4>
                            <Link to="/industries/healthcare">Healthcare</Link>
                            <Link to="/industries/fintech">FinTech</Link>
                            <Link to="/industries/edtech">Education</Link>
                            <Link to="/industries/real-estate">Real Estate</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <Link to="/contact">About Us</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/personas/agencies">For Partners</Link>
                            <Link to="/contact">Careers</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <Link to="/">Privacy Policy</Link>
                            <Link to="/">Terms of Service</Link>
                            <Link to="/">Cookie Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} MVP Studio. All rights reserved.</p>
                    <div className="footer-contact-link">
                        <Mail size={16} />
                        <a href="mailto:hello@mvpstudio.com">hello@mvpstudio.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
