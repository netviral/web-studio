import React from 'react';
import './TextSection.css';

interface TextSectionProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    reversed?: boolean;
    visualContent?: React.ReactNode;
}

export const TextSection: React.FC<TextSectionProps> = ({
    title,
    description,
    children,
    reversed,
    visualContent
}) => {
    return (
        <div className="text-section">
            <div className={`text-section-split ${reversed ? 'reversed' : ''}`}>
                {!reversed && visualContent && (
                    <div className="text-section-visual">
                        {visualContent}
                    </div>
                )}
                <div className="text-section-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {children && <div className="text-section-extra">{children}</div>}
                </div>
                {reversed && visualContent && (
                    <div className="text-section-visual">
                        {visualContent}
                    </div>
                )}
            </div>
        </div>
    );
};

export const FeatureStrip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="feature-strip">
            <div className="container-wide">
                <div className="strip-grid">
                    {children}
                </div>
            </div>
        </div>
    );
};

interface StripItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const StripItem: React.FC<StripItemProps> = ({ icon, title, description }) => {
    return (
        <div className="strip-item">
            <div className="strip-icon">{icon}</div>
            <div className="strip-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
