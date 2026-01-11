import React from 'react';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import about3 from '../assets/about-3.jpg';

const AboutSection = () => {
    return (
        <section id="about" style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                    marginBottom: '6rem'
                }}>

                    {/* Text Content */}
                    <div className="fade-in-up">
                        <h2 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            marginBottom: '2rem',
                            color: 'var(--color-forest)',
                            lineHeight: '1'
                        }}>
                            About <br />
                            <span style={{ color: 'var(--color-orange)' }}>RAW</span>
                        </h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#4a6b51', lineHeight: '1.6' }}>
                            Roam Around Wild (RAW) is a locally rooted adventure and travel collective based in
                            Gokarna. With years of hands-on experience in hosting travellers, managing stays, and
                            organizing outdoor adventures, RAW brings you closer to nature, responsibly, safely, and
                            authentically.
                        </p>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#4a6b51', lineHeight: '1.6' }}>
                            Every experience is guided by locals, shaped by seasons, and rooted in respect for land, sea,
                            and community.
                        </p>


                    </div>

                    {/* Image Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(12, 1fr)', height: '400px', position: 'relative' }}>
                        {/* Img 1 - Top Left */}
                        <div style={{ gridColumn: '1 / 8', gridRow: '1 / 9', zIndex: 2 }}>
                            <img
                                src={about1}
                                alt="Group"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2rem', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        {/* Img 2 - Bottom Right */}
                        <div style={{ gridColumn: '6 / 13', gridRow: '5 / 13', zIndex: 1 }}>
                            <img
                                src={about2}
                                alt="Forest"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2rem', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        {/* Img 3 - Floating Detail */}
                        <div style={{ gridColumn: '9 / 13', gridRow: '1 / 6', zIndex: 3, transform: 'translate(10px, -20px)' }}>
                            <img
                                src={about3}
                                alt="Tent"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', border: '4px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Features / Care Section */}
                <div style={{
                    backgroundColor: 'var(--color-sage)',
                    borderRadius: '2rem',
                    padding: '4rem',
                    textAlign: 'center'
                }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-forest)' }}>
                        Care You Can Count On
                    </h3>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem'
                    }}>
                        {[
                            { icon: '🌿', title: 'Eco Friendly', desc: '100% Nature friendly practices' },
                            { icon: '🛡️', title: 'Safe Travel', desc: 'Certified guides & equipment' },
                            { icon: '⛺', title: 'Cozy Stays', desc: 'Handpicked local homestays' },
                            { icon: '🥘', title: 'Local Food', desc: 'Authentic regional cuisine' }
                        ].map((feature, idx) => (
                            <div key={idx}>
                                <div style={{
                                    fontSize: '3rem',
                                    marginBottom: '1rem',
                                    backgroundColor: 'var(--color-white)',
                                    width: '80px',
                                    height: '80px',
                                    lineHeight: '80px',
                                    borderRadius: '50%',
                                    margin: '0 auto 1rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>
                                    {feature.title}
                                </h4>
                                <p style={{ color: '#4a6b51' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
