import React, { useEffect, useRef, useState } from 'react';
import './ScrollStage.css';

interface ScrollStep {
    id: number;
    title: string;
    description: string;
    visual: React.ReactNode;
}

interface ScrollStageProps {
    steps: ScrollStep[];
}

export const ScrollStage: React.FC<ScrollStageProps> = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const children = containerRef.current.querySelectorAll('.scroll-step-content');
            let currentInView = 0;

            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                    currentInView = index;
                }
            });

            setActiveStep(currentInView);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-stage-container" ref={containerRef}>
            <div className="scroll-stage-visual-track sticky-top">
                <div className="scroll-stage-visual-frame">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`scroll-stage-visual-item ${index === activeStep ? 'active' : ''}`}
                        >
                            {step.visual}
                        </div>
                    ))}
                </div>
            </div>

            <div className="scroll-stage-content-track">
                {steps.map((step, index) => (
                    <div key={step.id} className="scroll-step-content">
                        <div className={`scroll-step-text ${index === activeStep ? 'active' : ''}`}>
                            <span className="step-number-editorial">0{index + 1}</span>
                            <h3 className="text-display">{step.title}</h3>
                            <p className="text-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
