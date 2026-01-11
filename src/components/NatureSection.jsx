import React from 'react';

const NatureSection = () => {
    return (
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', color: 'var(--color-forest)', marginBottom: '1rem' }}>
                        Nature & <span style={{ color: 'var(--color-orange)' }}>Learning</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#4a6b51' }}>Discover the science and soul of Gokarna</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    {/* Marine Life */}
                    <div className="fade-in-up delay-100">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🐬</div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-forest)' }}>
                            Marine Life of Gokarna
                        </h3>
                        <p style={{ marginBottom: '1rem', color: '#666' }}>
                            Discover the living ocean beyond the shoreline. We introduce travelers to the marine ecosystem
                            of the Arabian Sea — from playful dolphins and vibrant species to coastal biodiversity.
                        </p>
                        <h4 style={{ fontSize: '1.1rem', marginTop: '1.5rem', color: 'var(--color-forest)' }}>Experiences include:</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#666', marginTop: '0.5rem' }}>
                            <li>Dolphin spotting (seasonal)</li>
                            <li>Tidal pool exploration</li>
                            <li>Marine awareness sessions</li>
                        </ul>
                    </div>

                    {/* Geological Wonders */}
                    <div className="fade-in-up delay-200">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⛰️</div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-forest)' }}>
                            Geological Wonders
                        </h3>
                        <p style={{ marginBottom: '1rem', color: '#666' }}>
                            Gokarna’s coastline is a natural museum of time. Walk across ancient rock formations shaped by
                            waves, wind, and centuries of change.
                        </p>
                        <h4 style={{ fontSize: '1.1rem', marginTop: '1.5rem', color: 'var(--color-forest)' }}>Learn about:</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#666', marginTop: '0.5rem' }}>
                            <li>Coastal erosion patterns</li>
                            <li>Volcanic & sedimentary rocks</li>
                            <li>Natural arches & sea cliffs</li>
                        </ul>
                    </div>

                    {/* Landscapes */}
                    <div className="fade-in-up delay-300">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌅</div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-forest)' }}>
                            Landscapes & Wild Beauty
                        </h3>
                        <p style={{ marginBottom: '1rem', color: '#666' }}>
                            From golden beaches and turquoise waters to green hills and raw cliffs — RAW experiences are
                            designed to showcase Gokarna’s untouched beauty.
                        </p>
                        <h4 style={{ fontSize: '1.1rem', marginTop: '1.5rem', color: 'var(--color-forest)' }}>Moments you’ll witness:</h4>
                        <ul style={{ paddingLeft: '1.2rem', color: '#666', marginTop: '0.5rem' }}>
                            <li>Sunrise over calm seas</li>
                            <li>Fiery coastal sunsets</li>
                            <li>Moonlit beaches</li>
                            <li>Star-filled skies away from city lights</li>
                            <li>BIOLUMINESCENCE in low light beaches</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NatureSection;
