import React from 'react';
import exp1 from '../assets/experience-1.jpg';
import exp2 from '../assets/experience-2.jpg';
import exp3 from '../assets/experience-3.jpg';

const experiences = [
    {
        title: 'Ocean Experiences',
        subtitle: 'Water Adventures',
        desc: 'Experience the Arabian Sea beyond the shore. RAW’s water adventures blend thrill, nature, and safety—guided by locals who know the sea.',
        details: [
            'Open-sea rides, jumps & swims',
            'Sea kayaking & snorkeling sessions',
            'Dolphin spotting (seasonal)',
            'Sunrise & sunset ocean moments',
            'Certified life jackets & safety guidance'
        ],
        tags: 'Solo travelers • Families • Beginners • Adventure seekers',
        img: exp1,
        color: '#54a0ff'
    },
    {
        title: 'Coastal & Forest Treks',
        subtitle: 'Treks & Trails',
        desc: 'Explore the hidden paths of Gokarna where the forest meets the sea.',
        details: [
            'Beach hopping',
            'Cliffside and jungle trails hikes',
            'Night treks under the stars',
            'Local storytelling & geography insights',
            'Panoramic view spots'
        ],
        tags: 'Nature lovers • Hikers • Photographers',
        img: exp2,
        color: '#2bcbba'
    },
    {
        title: 'RAW Signature Trips',
        subtitle: 'Curated Packages',
        desc: 'All-inclusive packages designed for the ultimate Gokarna experience.',
        details: [
            '1-Day Adventure Combo (Trek + Water)',
            '2N / 3D Gokarna Explorer',
            'Backpacker & budget-friendly trips',
            'Custom itineraries on request',
        ],
        extra: 'Includes: Guided activities, Local insights, Flexible plans, Community vibes',
        tags: 'Weekend Getaways • Groups',
        img: exp3,
        color: '#FF9F43'
    }
];

const Experiences = () => {
    return (
        <section id="experiences" style={{ padding: '8rem 0', backgroundColor: 'var(--color-sage)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        color: 'var(--color-forest)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Adventure • Nature • Community
                    </div>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-forest)' }}>
                        Experiences & <span style={{ color: 'var(--color-white)', textShadow: '2px 2px 0 var(--color-forest)' }}>Packages</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {experiences.map((item, index) => (
                        <div key={index} className="fade-in-up" style={{
                            backgroundColor: 'var(--color-cream)',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            border: `3px solid ${item.color}`,
                            boxShadow: `8px 8px 0 rgba(0,0,0,0.1)`,
                            display: 'flex',
                            flexDirection: 'column',
                            animationDelay: `${index * 0.1}s`
                        }}>
                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    left: '1rem',
                                    backgroundColor: item.color,
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    fontSize: '0.8rem'
                                }}>
                                    {item.subtitle}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-forest)' }}>{item.title}</h3>
                                <p style={{ marginBottom: '1.5rem', color: '#666', fontSize: '1rem' }}>{item.desc}</p>

                                <ul style={{
                                    marginBottom: '1.5rem',
                                    paddingLeft: '1.2rem',
                                    color: '#555',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6'
                                }}>
                                    {item.details.map((detail, idx) => (
                                        <li key={idx} style={{ marginBottom: '0.25rem' }}>{detail}</li>
                                    ))}
                                </ul>

                                {item.extra && (
                                    <div style={{
                                        backgroundColor: 'rgba(255,255,255,0.6)',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        marginBottom: '1.5rem',
                                        fontSize: '0.9rem',
                                        fontStyle: 'italic'
                                    }}>
                                        {item.extra}
                                    </div>
                                )}

                                <div style={{ marginTop: 'auto' }}>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: '#888',
                                        textTransform: 'uppercase',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        borderTop: '1px solid #ddd',
                                        paddingTop: '1rem'
                                    }}>
                                        {item.tags}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
