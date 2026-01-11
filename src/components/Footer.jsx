import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-forest)',
            color: 'var(--color-cream)',
            padding: '6rem 0 2rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--color-sage)',
                        color: 'var(--color-forest)',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        fontWeight: '900',
                        fontSize: '1.5rem',
                        marginBottom: '2rem',
                        border: '2px solid var(--color-light-green)'
                    }}>
                        ROAM AROUND WILD
                    </div>
                </div>

                <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-light-green)' }}>
                    Ready to Roam Around Wild?
                </h2>
                <p style={{ maxWidth: '500px', margin: '0 auto 3rem', opacity: 0.9, fontSize: '1.2rem' }}>
                    Let us plan your next adventure in Gokarna.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }} className="fade-in-up">
                    <a href="#experiences" className="btn" style={{
                        backgroundColor: 'var(--color-cream)',
                        color: 'var(--color-forest)',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        textDecoration: 'none'
                    }}>
                        View Packages
                    </a>
                    <a href="#contact" className="btn" style={{
                        backgroundColor: 'var(--color-white)',
                        color: 'var(--color-forest)',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        textDecoration: 'none'
                    }}>
                        Contact RAW
                    </a>
                    <a href="https://wa.me/919880564526" target="_blank" rel="noopener noreferrer" className="btn" style={{
                        backgroundColor: '#25D366', // WhatsApp Green
                        color: 'white',
                        padding: '1rem 2.5rem',
                        fontSize: '1.1rem',
                        textDecoration: 'none'
                    }}>
                        Book an Experience
                    </a>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontSize: '0.9rem',
                    opacity: 0.9
                }}>
                    <p style={{ opacity: 0.7 }}>&copy; 2026 Roam Around Wild. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        {/* WhatsApp Icon */}
                        <a href="https://wa.me/919880564526" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <img src={whatsappLogo} alt="WhatsApp" style={{ width: '40px', height: '40px', transition: 'transform 0.3s ease' }} />
                        </a>
                        {/* Instagram Icon */}
                        <a href="https://instagram.com/roamaroundwild" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <img src={instagramLogo} alt="Instagram" style={{ width: '40px', height: '40px', transition: 'transform 0.3s ease' }} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
