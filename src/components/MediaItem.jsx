import React, { useState, useEffect } from 'react';
import heic2any from 'heic2any';

const MediaItem = ({ src, alt = "Gallery visual", style = {}, className = "", lazy = true }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm');
    const isHeic = src.toLowerCase().endsWith('.heic');

    useEffect(() => {
        // Only convert if it's a HEIC file and we haven't converted it yet
        if (isHeic) {
            setLoading(true);
            fetch(src)
                .then((res) => res.blob())
                .then((blob) => heic2any({ blob, toType: "image/jpeg", quality: 0.8 }))
                .then((conversionResult) => {
                    // heic2any returns a blob or array of blobs. We expect single for 1 file.
                    const blob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
                    const url = URL.createObjectURL(blob);
                    setImageSrc(url);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("HEIC conversion failed:", err);
                    setError(true);
                    setLoading(false);
                });
        }
    }, [src, isHeic]);

    if (isVideo) {
        return (
            <video
                src={src}
                className={className}
                style={style}
                muted
                loop
                autoPlay
                playsInline
                controls={false} // Default no controls, can be overridden if needed but usually passed in prop? 
            // Actually for grid we want controls, for feed we don't. 
            // Let's pass extra props down.
            />
        );
    }

    if (loading) {
        return (
            <div style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
                color: '#888'
            }}>
                <span>Loading HEIC...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffeeee',
                color: '#cc0000',
                fontSize: '0.8rem',
                padding: '1rem',
                textAlign: 'center'
            }}>
                <span>Format Error</span>
            </div>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            style={style}
            loading={lazy ? "lazy" : undefined}
        />
    );
};

export default MediaItem;
