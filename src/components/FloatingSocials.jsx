import React from 'react';
import whatsappLogo from '../assets/whatsapp-logo.png';
import instagramLogo from '../assets/instagram-logo.png';

const FloatingSocials = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 9999
        }}>
            {/* Instagram */}
            <a 
                href="https://instagram.com/roamaroundwild" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    width: '60px',
                    height: '60px',
                    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
            >
                <img 
                    src={instagramLogo} 
                    alt="Instagram" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </a>

            {/* WhatsApp */}
            <a 
                href="https://wa.me/919880564526" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    width: '60px',
                    height: '60px',
                    transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
            >
                <img 
                    src={whatsappLogo} 
                    alt="WhatsApp" 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
            </a>
        </div>
    );
};

export default FloatingSocials;
