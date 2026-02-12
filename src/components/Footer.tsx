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
                            <h4>Platform</h4>
                            <Link to="/">Home</Link>
                            <Link to="/portfolio">Portfolio</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Services</h4>
                            <span>Web Development</span>
                            <span>Mobile Apps</span>
                            <span>AI Integration</span>
                            <span>Strategy & UI/UX</span>
                        </div>
                        <div className="footer-column">
                            <h4>Legal</h4>
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Cookie Policy</span>
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
