import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-sage)',
                        color: 'var(--color-forest)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Get in Touch
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-forest)', marginBottom: '1.5rem' }}>
                        Contact <span style={{ color: 'var(--color-orange)' }}>RAW</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#4a6b51', marginBottom: '3rem' }}>
                        Have questions? Want to customize your trip? Reach out to us directly.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '2rem',
                        border: '2px solid var(--color-forest)',
                        boxShadow: '4px 4px 0 var(--color-forest)'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>Call / WhatsApp</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-orange)' }}>+91 98805 64526</p>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '2rem',
                        border: '2px solid var(--color-forest)',
                        boxShadow: '4px 4px 0 var(--color-forest)'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>Email Us</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-orange)' }}>roamaroundwild2@gmail.com</p>
                    </div>
                </div>

                <div>
                    <a href="https://wa.me/919880564526" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{
                        padding: '1rem 3rem',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(255, 92, 0, 0.3)'
                    }}>
                        Start Your Adventure Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
