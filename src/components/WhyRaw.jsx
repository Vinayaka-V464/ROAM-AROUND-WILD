import React from 'react';

const WhyRaw = () => {
    return (
        <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-forest)', color: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>

                    {/* USPs */}
                    <div className="fade-in-up">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', color: 'var(--color-light-green)' }}>
                            Why Choose RAW?
                        </h2>
                        <ul style={{ listStyle: 'none' }}>
                            {[
                                "Locally rooted & experience-led",
                                "Small groups, no crowd tourism",
                                "Safety-first water adventures",
                                "Nature education + fun",
                                "Authentic, community-driven travel"
                            ].map((usp, idx) => (
                                <li key={idx} style={{
                                    fontSize: '1.25rem',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <span style={{
                                        color: 'var(--color-orange)',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold'
                                    }}>✔</span>
                                    {usp}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Who is it for */}
                    <div style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        padding: '3rem',
                        borderRadius: '2rem',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-white)' }}>
                            Who Is RAW For?
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {[
                                "Solo travelers",
                                "Backpackers",
                                "Couples",
                                "Families with kids",
                                "Adventure seekers",
                                "Nature lovers & slow travelers"
                            ].map((tag, idx) => (
                                <span key={idx} style={{
                                    backgroundColor: 'var(--color-sage)',
                                    color: 'var(--color-forest)',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    fontSize: '0.9rem'
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyRaw;
