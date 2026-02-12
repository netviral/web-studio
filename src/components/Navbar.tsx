import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Reset mobile menu and scroll lock on route change
    useEffect(() => {
        setMobileOpen(false);
        document.body.style.overflow = 'unset';
    }, [location.pathname]);

    // Fast scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'; // Prevent layout shift
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        }
    }, [mobileOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-wide">
                <div className="navbar-content">
                    <Link to="/" className="logo">
                        <Rocket size={24} className="logo-accent" />
                        <span className="logo-text">MVP<span className="logo-accent">Studio</span></span>
                    </Link>

                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="nav-cta">
                        <Link to="/contact" className="btn btn-primary">
                            Get Started
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle Menu"
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Fixed Mobile Overlay */}
            {mobileOpen && (
                <div className="mobile-menu-overlay entry-anim">
                    <div className="mobile-menu-content">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mobile-menu-cta">
                            <Link
                                to="/contact"
                                className="btn btn-primary btn-large"
                                onClick={() => setMobileOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
