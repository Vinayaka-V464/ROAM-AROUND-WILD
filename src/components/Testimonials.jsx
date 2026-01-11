import React from 'react';

const reviews = [
    {
        name: 'Sasha',
        text: "We booked our honeymoon with RΛW and it was simply incredible. They took care of everything, even our packing list!"
    },
    {
        name: 'Manju',
        text: "Planned a trek to Gokarna beach, we got the best guide arranged for the trip. We would like to plan again. Thanks for the hospitality."
    },
    {
        name: 'Tani',
        text: "It was my first beach trip; the team helped me from transport to stay to local food. Had the best time."
    },
    {
        name: 'Mandar',
        text: "Plan your perfect gateway from reality call the boys for all your trips in South. Beach to rocks to mountains."
    }
];

const Testimonials = () => {
    return (
        <section id="reviews" style={{ padding: '8rem 0', backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
                        Testimonials
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(3rem, 5vw, 4rem)',
                        color: 'var(--color-forest)',
                        lineHeight: '1.1'
                    }}>
                        What People <span style={{ color: 'var(--color-light-green)' }}>Say</span>
                    </h2>
                </div>

                <div style={{
                    columnCount: 2,
                    columnGap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    // Note: column-count is simple for masonry but requires media query for mobile.
                    // Ideally we'd use CSS grid or just stack for simplicity in inline styles, 
                    // but let's do a flex wrap for reliability or simple grid.
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem'
                }}>
                   {/* Fallback to flex/grid for better response without media queries in inline styles */}
                   <style>
                       {`
                         @media (min-width: 768px) {
                           .masonry-grid { display: grid; grid-template-columns: 1fr 1fr; }
                         }
                       `}
                   </style>
                   <div className="masonry-grid" style={{ display: 'grid', gap: '2rem', width: '100%' }}>
                        {reviews.map((review, index) => (
                            <div key={index} style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '3rem',
                                borderRadius: '2.5rem',
                                borderTopRightRadius: index % 2 === 0 ? '0' : '2.5rem',
                                borderBottomLeftRadius: index % 2 !== 0 ? '0' : '2.5rem',
                                border: '2px solid var(--color-forest)',
                                boxShadow: '8px 8px 0 var(--color-forest)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{ fontSize: '2rem', color: 'var(--color-orange)', marginBottom: '1rem', fontFamily: 'serif' }}>
                                    “
                                </div>
                                <p style={{
                                    fontStyle: 'italic',
                                    marginBottom: '1.5rem',
                                    fontSize: '1.2rem',
                                    color: '#444',
                                    lineHeight: '1.6'
                                }}>
                                    {review.text}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', backgroundColor: '#ddd', borderRadius: '50%' }}></div>
                                    <h4 style={{
                                        fontFamily: 'var(--font-heading)',
                                        color: 'var(--color-forest)',
                                        fontSize: '1.2rem'
                                    }}>
                                        {review.name}
                                    </h4>
                                </div>
                            </div>
                        ))}
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
