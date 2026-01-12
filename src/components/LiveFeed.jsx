import React from 'react';
import MediaItem from './MediaItem';

// Auto-import all images/videos from the visual-stories folder
const mediaModules = import.meta.glob('../assets/visual-stories/*.{png,jpg,jpeg,svg,mp4,webm,heic}', { eager: true });

// Convert module object to array of URLs
const mediaItems = Object.values(mediaModules).map((module) => module.default);

const LiveFeed = () => {
    // If no images are found, don't render 
    if (mediaItems.length === 0) {
        return null;
    }

    // Duplicate items for seamless marquee scroll
    const marqueeItems = [...mediaItems, ...mediaItems, ...mediaItems, ...mediaItems];

    return (
        <section style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%' }}>
                <h3 style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: 'var(--color-forest)',
                    opacity: 0.8,
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    Live Feed
                </h3>

                <div className="pause-on-hover" style={{
                    display: 'flex',
                    width: 'max-content',
                    gap: '1.5rem',
                    animation: 'scroll 160s linear infinite',
                }}>
                    {marqueeItems.map((item, index) => (
                        <div key={`marquee-${index}`} style={{
                            width: '250px',
                            height: '450px',
                            flexShrink: 0,
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            background: 'rgba(255, 255, 255, 0.1)', // Glass base
                            backdropFilter: 'blur(5px)'
                        }}>
                            {item.toLowerCase().endsWith('.mp4') || item.toLowerCase().endsWith('.webm') ? (
                                <video
                                    src={item}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                />
                            ) : (
                                <MediaItem
                                    src={item}
                                    alt={`Marquee ${index}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            )}

                            {/* Glass Overlay on Card */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                                color: 'white',
                                fontWeight: 'bold'
                            }}>
                                RAW Memory
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveFeed;
