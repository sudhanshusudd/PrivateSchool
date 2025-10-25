import React from "react";

interface HeroImageProps {
    title: string;
    backgroundImage: string;
    minHeight?: string; // optional, default same as Hero
}

const HeroImage: React.FC<HeroImageProps> = ({
    title,
    backgroundImage,
    minHeight = "400px", // same height as Hero
}) => {
    return (
        <section
            className="relative bg-cover bg-center text-white flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                minHeight: minHeight,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Title */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl font-bold mb-2 tracking-wide">{title}</h1>
            </div>
        </section>
    );
};

export default HeroImage;
