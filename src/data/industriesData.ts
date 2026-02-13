import { Stethoscope, Landmark, GraduationCap, Building2, ShoppingCart } from 'lucide-react';

export const industriesData: Record<string, any> = {
    'healthcare': {
        title: "Healthcare & MedTech",
        subtitle: "HIPAA-compliant digital solutions for modern healthcare providers.",
        description: "We build secure patient portals, telemedicine platforms, and internal management tools that prioritize patient data privacy and operational efficiency.",
        icon: Stethoscope,
        featuresTitle: "Why We Are The Right Choice",
        features: [
            { title: "HIPAA Compliance", desc: "Security first architecture ensuring patient data protection." },
            { title: "Telemedicine Ready", desc: "Integrated video and chat processing for remote care." },
            { title: "EHR Integration", desc: "Seamless connection with Epic, Cerner, and other EHRs." }
        ],
        techStack: ["React", "Node.js", "AWS", "WebRTC"]
    },
    'fintech': {
        title: "FinTech & Banking",
        subtitle: "Secure, high-frequency trading platforms and financial dashboards.",
        description: "We engineering financial software that handles millions in transactions with zero downtime. From crypto-exchanges to personal finance apps.",
        icon: Landmark,
        features: [
            { title: "Bank-Grade Security", desc: "End-to-end encryption and multi-factor authentication." },
            { title: "Real-Time Processing", desc: "Sub-millisecond latency for trading applications." },
            { title: "Regulatory Compliance", desc: "Built for KYC/AML and GDPR compliance." }
        ],
        techStack: ["Go", "React", "PostgreSQL", "Redis"]
    },
    'edtech': {
        title: "Education Technology",
        subtitle: "Interactive learning management systems (LMS) and educational tools.",
        description: "Empowering educators and students with intuitive platforms for remote learning, course management, and interactive content delivery.",
        icon: GraduationCap,
        features: [
            { title: "Interactive Classrooms", desc: "Real-time collaboration tools and whiteboards." },
            { title: "Progress Tracking", desc: "Detailed analytics on student performance." },
            { title: "Scalable Video", desc: "High-quality video streaming for thousands of concurrent users." }
        ],
        techStack: ["Next.js", "Mux", "Node.js", "MongoDB"]
    },
    'real-estate': {
        title: "Real Estate & PropTech",
        subtitle: "Modern property listing platforms and management systems.",
        description: "Transforming the property market with virtual tours, automated booking systems, and comprehensive property management software.",
        icon: Building2,
        features: [
            { title: "Virtual Tours", desc: "3D walkthrough integration (Matterport, etc)." },
            { title: "Map Integration", desc: "Advanced geospatial search and filtering." },
            { title: "CRM Integration", desc: "Sync leads directly to Salesforce or HubSpot." }
        ],
        techStack: ["React", "Mapbox", "Firebase", "Algolia"]
    },
    'retail': {
        title: "Retail & E-Commerce",
        subtitle: "Omnichannel retail solutions and custom e-commerce stores.",
        description: "Bridging physical and digital retail with custom POS systems, inventory management, and high-conversion online stores.",
        icon: ShoppingCart,
        features: [
            { title: "Omnichannel Sync", desc: "Inventory unified across online and offline." },
            { title: "Loyalty Programs", desc: "Custom rewards and customer retention systems." },
            { title: "High Conversions", desc: "Optimized checkout flows and payment gateways." }
        ],
        techStack: ["Shopify", "React", "Stripe", "PostgreSQL"]
    }
};
