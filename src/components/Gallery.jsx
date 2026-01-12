import React, { useState, useEffect } from 'react';
import MediaItem from './MediaItem';

// Auto-import all images/videos from the gallery folder
const mediaModules = import.meta.glob('../assets/visual-stories/*.{png,jpg,jpeg,svg,mp4,webm,heic,PNG,JPG,JPEG,SVG,MP4,WEBM,HEIC}', { eager: true });

// Convert module object to array of URLs
const mediaItems = Object.values(mediaModules).map((module) => module.default);

const Gallery = () => {
    // If no images are found, don't render the section or show a placeholder
    if (mediaItems.length === 0) {
        return null;
    }

    return (
        <section id="gallery" style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                        Visual Stories
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 5vw, 4rem)',
                        color: 'var(--color-forest)',
                        lineHeight: '1.1'
                    }}>
                        Captured <span style={{ color: 'var(--color-light-green)' }}>Moments</span>
                    </h2>
                </div>

                {/* Main Masonry Grid */}
                <div style={{
                    columns: '3 300px', // Quick Masonry effect
                    columnGap: '1rem'
                }}>
                    {mediaItems.map((item, index) => (
                        <div key={index} style={{ marginBottom: '1rem', breakInside: 'avoid' }} className="fade-in-up">
                            {item.toLowerCase().endsWith('.mp4') || item.toLowerCase().endsWith('.webm') ? (
                                <video
                                    src={item}
                                    controls
                                    style={{ width: '100%', borderRadius: '1rem', display: 'block' }}
                                    loading="lazy"
                                />
                            ) : (
                                <MediaItem
                                    src={item}
                                    alt={`Gallery ${index}`}
                                    style={{ width: '100%', borderRadius: '1rem', display: 'block' }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
