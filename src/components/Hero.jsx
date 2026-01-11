import React from 'react';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            minHeight: '850px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: 'var(--header-height)'
        }}>
            {/* Background Image / Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: 'var(--color-cream)',
                backgroundImage: 'url("https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(241, 248, 231, 0.2)'
                }}></div>
            </div>

            <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '900px' }}>
                {/* Badge / Pill */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: 'var(--color-forest)',
                    color: 'var(--color-light-green)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    marginBottom: '2rem',
                    letterSpacing: '1px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                    ROAM AROUND WILD (RAW)
                </div>

                {/* Main Title */}
                <h1 style={{
                    fontSize: 'clamp(3rem, 7vw, 6rem)',
                    color: 'var(--color-forest)',
                    textShadow: '3px 3px 0px var(--color-white)',
                    marginBottom: '1.5rem',
                    lineHeight: '0.95',
                    letterSpacing: '-0.02em'
                }}>
                    Explore Gokarna <br />
                    <span style={{ color: 'var(--color-orange)' }}>The Wild Way</span>
                </h1>

                {/* Subtitle */}
                <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                    color: 'var(--color-forest)',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    marginInline: 'auto',
                    fontWeight: '500',
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    padding: '1.5rem',
                    borderRadius: '1.5rem',
                    backdropFilter: 'blur(8px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                    lineHeight: '1.6'
                }}>
                    Roam Around Wild (RAW) curates immersive travel experiences in Gokarna — combining
                    treks, water adventures, coastal exploration, and soulful stays. We don’t sell trips. We craft
                    memories.
                </p>

                {/* CTA Buttons */}
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} className="fade-in-up delay-300">
                    <a href="https://instagram.com/roamaroundwild" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', textDecoration: 'none' }}>
                        Explore Experiences
                    </a>
                    <a href="https://wa.me/919880564526" target="_blank" rel="noopener noreferrer" className="btn" style={{
                        backgroundColor: 'var(--color-white)',
                        color: 'var(--color-forest)',
                        border: '2px solid var(--color-forest)',
                        padding: '1rem 3rem',
                        fontSize: '1.2rem',
                        boxShadow: '4px 4px 0 var(--color-forest)',
                        textDecoration: 'none'
                    }}>
                        Book Your Adventure
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
