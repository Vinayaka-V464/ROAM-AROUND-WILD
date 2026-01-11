import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '1rem 0',
                transition: 'all 0.3s ease',
                backgroundColor: scrolled || isMenuOpen ? 'rgba(241, 248, 231, 0.95)' : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderBottom: scrolled || isMenuOpen ? '1px solid rgba(28, 68, 37, 0.1)' : '1px solid rgba(255, 255, 255, 0.1)'
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a href="#" style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    color: 'var(--color-forest)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    position: 'relative',
                    zIndex: 1001 // Ensure logo is above mobile menu
                }}>
                    <img
                        src={logo}
                        alt="RAW Logo"
                        style={{
                            height: '50px',
                            width: 'auto',
                            borderRadius: '50%',
                            border: '2px solid var(--color-forest)'
                        }}
                    />
                    ROAM AROUND WILD
                </a>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <a href="#about" style={{ fontWeight: 500, color: 'var(--color-forest)' }}>About</a>
                    <a href="#experiences" style={{ fontWeight: 500, color: 'var(--color-forest)' }}>Trips</a>
                    <a href="#reviews" style={{ fontWeight: 500, color: 'var(--color-forest)' }}>Reviews</a>

                    <a href="https://wa.me/919880564526" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                        Plan Your Trip
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-only"
                    onClick={toggleMenu}
                    style={{ position: 'relative', zIndex: 1001, padding: '0.5rem' }}
                >
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'var(--color-forest)',
                        marginBottom: '5px',
                        borderRadius: '2px',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'var(--color-forest)',
                        marginBottom: '5px',
                        borderRadius: '2px',
                        transition: '0.3s',
                        opacity: isMenuOpen ? 0 : 1
                    }}></div>
                    <div style={{
                        width: '25px',
                        height: '3px',
                        backgroundColor: 'var(--color-forest)',
                        borderRadius: '2px',
                        transition: '0.3s',
                        transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                    }}></div>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="mobile-only" style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'var(--color-cream)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        zIndex: 1000,
                        height: '100vh',
                        paddingTop: '80px' // Offset for sticky header
                    }}>
                        <a href="#about" onClick={closeMenu} style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-forest)' }}>About</a>
                        <a href="#experiences" onClick={closeMenu} style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-forest)' }}>Trips</a>
                        <a href="#reviews" onClick={closeMenu} style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-forest)' }}>Reviews</a>
                        <a href="#contact" onClick={closeMenu} style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--color-forest)' }}>Contact</a>

                        <a href="https://wa.me/919880564526" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none', fontSize: '1.2rem', padding: '1rem 2rem' }}>
                            Plan Your Trip
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
