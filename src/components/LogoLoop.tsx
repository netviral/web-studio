import { memo } from 'react';
import { Code, Cpu, Database, Globe, Server, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import './LogoLoop.css';

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
        <div className="logo-loop-container">
            <div className="logo-track">
                {loopLogos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <span className="logo-icon">{logo.icon}</span>
                        <span className="logo-name">{logo.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default LogoLoop;
