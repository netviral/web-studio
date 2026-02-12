import { memo } from 'react';

const testimonials = [
    { name: "John Doe", role: "CEO @ TechFlow", text: "Amazing experience working with MVP Studio. They delivered our MVP in record time.", avatar: "JD" },
    { name: "Sarah Smith", role: "Founder @ NextGen", text: "Professional, fast, and extremely talented. Highly recommended for any startup.", avatar: "SS" },
    { name: "Mike Johnson", role: "CTO @ DataScale", text: "The quality of code and design is top-notch. They truly are technical co-founders.", avatar: "MJ" },
    { name: "Alex Lee", role: "Product Manager @ GlobalSync", text: "The best investment we made for our early-stage development.", avatar: "AL" },
    { name: "Emily Brown", role: "Founder @ Appify", text: "Their process is so streamlined. We launched 2 weeks ahead of schedule.", avatar: "EB" },
    { name: "Chris Wilson", role: "CEO @ SecureNet", text: "Security-first approach and beautiful UI. Exactly what we needed.", avatar: "CW" },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials, ...testimonials];

const TestimonialCarousel = memo(() => {
    return (
        <div className="testimonial-conveyor-container" style={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '2rem 0'
        }}>
            <style>{`
                @keyframes scrollLeft {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                @keyframes scrollRight {
                    0% { transform: translate3d(-50%, 0, 0); }
                    100% { transform: translate3d(0, 0, 0); }
                }
                .testimonial-track {
                    display: flex;
                    gap: 1.5rem;
                    width: max-content;
                    will-change: transform;
                }
                .testimonial-track:hover {
                    animation-play-state: paused;
                }
                .track-left { animation: scrollLeft 100s linear infinite; }
                .track-right { animation: scrollRight 100s linear infinite; }
                .testimonial-mini-card {
                    background: var(--bg-secondary);
                    border: 1px solid rgba(99, 102, 241, 0.15);
                    border-radius: 12px;
                    padding: 1.5rem;
                    width: 380px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    transition: border-color 0.2s;
                }

                .avatar-mini {
                    width: 40px;
                    height: 40px;
                    background: var(--accent-primary);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.9rem;
                    font-weight: 800;
                }
                .mini-text {
                    font-size: 1rem;
                    line-height: 1.5;
                    color: var(--text-secondary);
                    margin: 0;
                    font-style: italic;
                }
                .mini-info {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-top: 0.5rem;
                }
                .mini-name {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--text-primary);
                }
                .mini-role {
                    font-size: 0.8rem;
                    color: var(--text-muted);
                }
            `}</style>

            {/* Row 1: Left Moving */}
            <div className="testimonial-track track-left">
                {row1.map((item, idx) => (
                    <div key={idx} className="testimonial-mini-card">
                        <p className="mini-text">"{item.text}"</p>
                        <div className="mini-info">
                            <div className="avatar-mini">{item.avatar}</div>
                            <div>
                                <div className="mini-name">{item.name}</div>
                                <div className="mini-role">{item.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Row 2: Right Moving */}
            <div className="testimonial-track track-right">
                {row2.map((item, idx) => (
                    <div key={idx} className="testimonial-mini-card">
                        <p className="mini-text">"{item.text}"</p>
                        <div className="mini-info">
                            <div className="avatar-mini">{item.avatar}</div>
                            <div>
                                <div className="mini-name">{item.name}</div>
                                <div className="mini-role">{item.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default TestimonialCarousel;
