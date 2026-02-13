import { Rocket, Shield, Users } from 'lucide-react';

export const personasData: Record<string, any> = {
    'founders': {
        title: "For Founders & Startups",
        subtitle: "From napkin sketch to market-ready MVP in weeks, not months.",
        description: "Traditional agencies are too slow, too rigid, and too expensive for the modern founder. We saw they were unable to meet the needs of those building the next big thing—so we came in. Custom-coded, AI-powered, and built for speed. 100% yours, zero compromises.",
        icon: Rocket,
        featuresTitle: "The Founder's Advantage",
        features: [
            { title: "Elite Custom Prototyping", desc: "We skip the templates. No WordPress, no limits. We build high-speed, custom-coded MVPs with senior engineering depth, giving you 100% ownership and a sharp edge in the market." },
            { title: "AI-Powered Execution", desc: "Match your pace in the AI Era. We proudly build with AI to deliver modern, ultra-secure solutions faster than any traditional agency. Our workflow is designed for the high-bandwidth founder." },
            { title: "Market Validation", desc: "Helping founders in their first step is crucial. We integrate PostHog and Google Analytics so you can pivot and scale based on real user data—essential for your next VC pitch." }
        ],
        techStack: ["Next.js", "React", "Supabase", "Vercel", "Stripe", "PostHog"]
    },
    'scale-ups': {
        title: "For Mid-Sized & Scale-Ups",
        subtitle: "Engineering support from MVP to mid-market success.",
        description: "We support you through the critical growth phase—from validating your MVP to scaling to mid-market. We don't serve large enterprises; we're built for companies that need to move fast while building solid foundations.",
        icon: Shield,
        featuresTitle: "Scale-Up Capabilities",
        features: [
            { title: "Growth Architecture", desc: "Systems that scale with you from 10 to 10,000 users without rewrites." },
            { title: "Team Integration", desc: "We work alongside your in-house team, filling gaps and accelerating delivery." },
            { title: "Modern Stack", desc: "Cloud-native infrastructure that grows with your business needs." }
        ],
        techStack: ["Next.js", "AWS", "Docker", "PostgreSQL"]
    },
    'agencies': {
        title: "For Agencies & Partners",
        subtitle: "White-label development power to expand your capacity.",
        description: "You handle the design and client relationship; we handle the complex engineering. We integrate seamlessly as your technical delivery arm, completely white-labeled.",
        icon: Users,
        featuresTitle: "Partnership Benefits",
        features: [
            { title: "Invisible Partner", desc: "We work under your brand and email." },
            { title: "Fixed Costs", desc: "Predictable pricing for your proposals." },
            { title: "Technical Presales", desc: "We help you pitch and scope complex projects." }
        ],
        techStack: ["React", "Shopify", "WordPress Headless", "React Native"]
    },
    'high-profile-individuals': {
        title: "For High-Profile Individuals",
        subtitle: "Discreet, premium digital solutions for personal brands and ventures.",
        description: "Whether you're launching a personal brand, managing a portfolio of investments, or building a passion project, we provide white-glove service with absolute confidentiality.",
        icon: Shield,
        featuresTitle: "Premium Service",
        features: [
            { title: "Complete Confidentiality", desc: "NDAs, secure communication, and discreet project management." },
            { title: "Personal Concierge", desc: "Dedicated senior engineer as your single point of contact." },
            { title: "Bespoke Solutions", desc: "Fully custom platforms tailored to your exact vision and requirements." }
        ],
        techStack: ["Next.js", "React", "Custom Backend", "Premium Hosting"]
    }
};
