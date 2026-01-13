import React from 'react';
import gautamImg from '../assets/team/img1.jpg';
import sachinImg from '../assets/team/img2.jpeg';
import linkedinIcon from '../assets/team/img0.png';
import instagramIcon from '../assets/instagram-logo.png';

const teamMembers = [
    {
        name: 'Gautam K',
        role: 'Founder · Community Lead',
        image: gautamImg,
        bio: 'Gautam leads RAW as a community driven travel and adventure collective in Gokarna. An entrepreneur, host, outdoor guide, and swim coach, he organizes treks, water adventures, and nature led experiences with a strong focus on safety and authenticity.',
        socials: [
            { icon: linkedinIcon, link: 'https://www.linkedin.com/in/gautamk-1811/', alt: 'LinkedIn' },
            { icon: instagramIcon, link: 'https://www.instagram.com/gautamrawbrew/', alt: 'Instagram' }
        ]
    },
    {
        name: 'Sachin Narayan',
        role: 'Community Partner · Co-Founder – The Naviika Adventure',
        image: sachinImg,
        bio: 'Sachin is a water adventure professional and entrepreneur, and the co-founder of The Naviika Adventure. A swim coach and experienced host, he brings deep expertise in open water activities and ocean safety to the RAW community.',
        socials: [
            { icon: instagramIcon, link: 'https://www.instagram.com/loth.brok1998/', alt: 'Instagram' }
        ]
    }
];

const LeafEmoji = ({ style }) => (
    <div
        style={{
            position: 'absolute',
            zIndex: 0,
            opacity: 0.15,
            pointerEvents: 'none',
            fontSize: '2rem', // Much smaller size
            lineHeight: 1,
            userSelect: 'none',
            filter: 'grayscale(0.2)',
            ...style
        }}
    >
        🌿
    </div>
);

const TeamSection = () => {
    // Generate positions for the leaves
    const leaves = Array.from({ length: 20 }).map((_, i) => ({
        top: `${(i * 5) + (i % 3) * 10}%`,
        left: `${(i * 7) % 90 + 5}%`,
        transform: `rotate(${i * 45}deg)`,
        fontSize: `${2 + (i % 3)}rem`
    }));

    return (
        <section id="team" style={{
            padding: '8rem 0',
            backgroundColor: 'var(--color-white)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations - Many small leaves */}
            {leaves.map((pos, i) => (
                <LeafEmoji key={i} style={pos} />
            ))}

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-orange)',
                        color: 'var(--color-white)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontWeight: '700',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        The Team
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 5vw, 4rem)',
                        color: 'var(--color-forest)',
                        lineHeight: '1.1'
                    }}>
                        People Behind <span style={{ color: 'var(--color-orange)' }}>RAW</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    maxWidth: '1000px',
                    margin: '0 auto 6rem auto'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            {/* Decorative leaf behind specific cards */}
                            {index % 2 === 0 && (
                                <LeafEmoji style={{
                                    top: '-60px',
                                    left: '-50px',
                                    fontSize: '10rem',
                                    transform: 'rotate(-30deg)',
                                    opacity: 0.4
                                }} />
                            )}
                            {index % 2 !== 0 && (
                                <LeafEmoji style={{
                                    bottom: '-60px',
                                    right: '-50px',
                                    fontSize: '10rem',
                                    transform: 'rotate(30deg)',
                                    opacity: 0.4
                                }} />
                            )}

                            <div style={{
                                backgroundColor: 'var(--color-cream)',
                                borderRadius: '2.5rem',
                                overflow: 'hidden',
                                border: '2px solid var(--color-forest)',
                                boxShadow: '12px 12px 0 var(--color-forest)',
                                transition: 'transform 0.3s ease',
                                position: 'relative',
                                zIndex: 1
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ height: '400px', overflow: 'hidden', backgroundColor: 'var(--color-sage)' }}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center top'
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-forest)',
                                        fontSize: '1.8rem',
                                        marginBottom: '0.5rem'
                                    }}>{member.name}</h3>
                                    <p style={{
                                        color: 'var(--color-orange)',
                                        fontWeight: '700',
                                        marginBottom: '1rem',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>{member.role}</p>
                                    <p style={{
                                        color: '#444',
                                        lineHeight: '1.6',
                                        marginBottom: '1.5rem'
                                    }}>{member.bio}</p>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        {member.socials.map((social, i) => (
                                            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" style={{
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'transform 0.2s'
                                            }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            >
                                                <img src={social.icon} alt={social.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Community Ethos Section */}
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-sage)',
                    padding: '3rem',
                    borderRadius: '2rem',
                    border: '2px solid var(--color-forest)',
                    position: 'relative'
                }}>
                    <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-forest)',
                        fontSize: '2rem',
                        marginBottom: '1rem'
                    }}>RAW Community Ethos</h3>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: 'var(--color-forest)'
                    }}>
                        RAW is not just a brand, it’s a growing community of guides, hosts, swimmers, creatives, and travelers who believe in responsible adventure, shared learning, and authentic experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
