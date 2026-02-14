import { memo } from 'react';
import './TestimonialCarousel.css';

const testimonials = [
    { name: "John Doe", role: "CEO @ TechFlow", text: "Amazing experience working with MetaLaunch Labs. They delivered our MVP in record time.", avatar: "JD" },
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
        <div className="testimonial-conveyor-container">
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
