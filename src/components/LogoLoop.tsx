import { memo } from 'react';
import { Code, Cpu, Database, Globe, Server, Smartphone, Zap, ShieldCheck } from 'lucide-react';

const logos = [
    { icon: <Code size={32} />, name: "TechFlow" },
    { icon: <Cpu size={32} />, name: "NextGen" },
    { icon: <Database size={32} />, name: "DataScale" },
    { icon: <Globe size={32} />, name: "GlobalSync" },
    { icon: <Server size={32} />, name: "CloudMatrix" },
    { icon: <Smartphone size={32} />, name: "Appify" },
    { icon: <Zap size={32} />, name: "FastTrack" },
    { icon: <ShieldCheck size={32} />, name: "SecureNet" },
];

const loopLogos = [...logos, ...logos, ...logos, ...logos];

const LogoLoop = memo(() => {
    return (
        <div className="logo-loop-container" style={{
            width: '100%',
            overflow: 'hidden',
            background: 'transparent',
            padding: '3rem 0',
            position: 'relative',
        }}>
            <style>{`
                @keyframes logoScroll {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                .logo-track {
                    display: flex;
                    gap: 6rem;
                    width: max-content;
                    animation: logoScroll 60s linear infinite;
                    will-change: transform;
                }
                .logo-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
            <div className="logo-track">
                {loopLogos.map((logo, index) => (
                    <div key={index} className="logo-item" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: 0.4,
                        filter: 'grayscale(100%)',
                    }}>
                        <span style={{ color: '#fff' }}>{logo.icon}</span>
                        <span style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: '#fff',
                            whiteSpace: 'nowrap',
                            fontFamily: 'Space Grotesk, sans-serif',
                            letterSpacing: '-0.5px'
                        }}>{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default LogoLoop;
