import React from 'react';

export const SectionDivider: React.FC<{ vertical?: boolean, className?: string }> = ({ vertical, className }) => {
    return (
        <div className={`container-wide ${className || ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={vertical ? 'separator-v' : 'separator-h'} style={vertical ? { height: '100px' } : {}}></div>
        </div>
    );
};
