import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';
import MegaMenu from './MegaMenu/MegaMenu';
import { menuData } from './MegaMenu/menuData';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null); // For mobile accordion
    const location = useLocation();

    // Reset menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setMegaMenuOpen(false);
        setMobileExpanded(null);
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

    // Handle body classes for blur and scroll lock
    useEffect(() => {
        if (megaMenuOpen) {
            document.body.classList.add('mega-menu-active');
            document.body.style.overflow = 'hidden'; // Lock scroll for mega menu
        } else {
            document.body.classList.remove('mega-menu-active');
            document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
            if (!mobileOpen) {
                document.body.style.position = '';
                document.body.style.width = '';
            }
        }
    }, [megaMenuOpen, mobileOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    }, [mobileOpen]);

    // Close menus on window resize to prevent state bugs
    useEffect(() => {
        const handleResize = () => {
            setMobileOpen(false);
            setMegaMenuOpen(false);
            setMobileExpanded(null);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mega menu on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (megaMenuOpen && !target.closest('.mega-menu-container') && !target.closest('.nav-item-wrapper')) {
                setMegaMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [megaMenuOpen]);

    const toggleMobileSection = (title: string) => {
        setMobileExpanded(mobileExpanded === title ? null : title);
    };

    return (
        <>
            <nav
                className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileOpen ? 'mobile-nav-open' : ''}`}
            >
                <div className="container-wide">
                    <div className="navbar-content">
                        <Link to="/" className="logo" onMouseEnter={() => setMegaMenuOpen(false)}>
                            <Rocket size={24} className="logo-accent" />
                            <span className="logo-text">Meta<span className="logo-accent">Launch</span></span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="nav-links">
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onMouseEnter={() => setMegaMenuOpen(false)}>Home</Link>
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onMouseEnter={() => setMegaMenuOpen(false)}>About</Link>

                            {/* Single Services Dropdown Trigger */}
                            <div
                                className="nav-item-wrapper"
                                onMouseEnter={() => setMegaMenuOpen(true)}
                            >
                                <span className={`nav-link ${megaMenuOpen || location.pathname.startsWith('/services') || location.pathname.startsWith('/industries') || location.pathname.startsWith('/personas') ? 'active' : ''}`} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    Services
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" style={{ transition: 'transform 0.2s ease', transform: megaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                        <path d="M6 8L2 4h8z" />
                                    </svg>
                                </span>
                            </div>

                            <Link to="/why-us" className={`nav-link ${location.pathname === '/why-us' ? 'active' : ''}`} onMouseEnter={() => setMegaMenuOpen(false)}>Why Us</Link>
                            <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} onMouseEnter={() => setMegaMenuOpen(false)}>Portfolio</Link>
                            <Link to="/pricing" className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`} onMouseEnter={() => setMegaMenuOpen(false)}>Plans</Link>
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onMouseEnter={() => setMegaMenuOpen(false)}>Contact</Link>
                        </div>

                        <div className="nav-cta" onMouseEnter={() => setMegaMenuOpen(false)}>
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

                <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
            </nav>

            {/* Fixed Mobile Overlay */}
            {mobileOpen && (
                <div className="mobile-menu-overlay entry-anim">
                    <div className="container-wide">
                        <div className="mobile-menu-header">
                            <button
                                className="mobile-menu-close"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close Menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="mobile-menu-content">
                            {/* All Links in Accordion Style */}
                            <div className="mobile-accordion">
                                {/* Home */}
                                <Link to="/" className="mobile-accordion-link" onClick={() => setMobileOpen(false)}>
                                    Home
                                </Link>

                                {/* About */}
                                <Link to="/about" className="mobile-accordion-link" onClick={() => setMobileOpen(false)}>
                                    About
                                </Link>

                                {/* Services Accordion with Categories */}
                                <div className="mobile-accordion-item">
                                    <button
                                        className="mobile-accordion-trigger"
                                        onClick={() => toggleMobileSection('Services')}
                                    >
                                        Services
                                        <span className={`accordion-icon ${mobileExpanded === 'Services' ? 'rotate' : ''}`}>+</span>
                                    </button>

                                    <div className={`mobile-accordion-content ${mobileExpanded === 'Services' ? 'open' : ''}`}>
                                        <div className="mobile-category-list">
                                            {menuData.map((category, idx) => (
                                                <div key={idx} className="mobile-category-group">
                                                    <div className="mobile-category-label">{category.title}</div>
                                                    <div className="mobile-category-links">
                                                        {category.items.map((item, i) => (
                                                            <Link
                                                                key={i}
                                                                to={item.path}
                                                                className="mobile-sub-link"
                                                                onClick={() => setMobileOpen(false)}
                                                            >
                                                                <item.icon size={16} />
                                                                {item.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Other Links */}
                                <Link to="/why-us" className="mobile-accordion-link" onClick={() => setMobileOpen(false)}>
                                    Why Us
                                </Link>
                                <Link to="/portfolio" className="mobile-accordion-link" onClick={() => setMobileOpen(false)}>
                                    Portfolio
                                </Link>
                                <Link to="/pricing" className="mobile-accordion-link" onClick={() => setMobileOpen(false)}>
                                    Plans
                                </Link>
                                <Link to="/contact" className="mobile-accordion-link" onClick={() => setMobileOpen(false)}>
                                    Contact
                                </Link>
                            </div>

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
                </div>
            )}
        </>
    );
};

export default Navbar;
