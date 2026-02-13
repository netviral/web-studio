import { Code, Smartphone, Layout, ShoppingBag, Database, Search } from 'lucide-react';

export const serviceContent: Record<string, any> = {
    'web-apps': {
        title: "Enterprise Web Applications",
        subtitle: "Scalable, secure, and high-performance web platforms built for mission-critical operations.",
        description: "We build complex web applications that drive business growth. From internal tools to customer-facing portals, our React & Next.js solutions are designed for scale.",
        icon: Code,
        features: [
            { title: "Cloud Native Architecture", desc: "Built on AWS/Vercel for infinite scalability." },
            { title: "Real-time Data", desc: "WebSocket integration for live updates." },
            { title: "Enterprise Security", desc: "SSO, RBAC, and SOC2 compliant practices." }
        ],
        techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis"]
    },
    'mobile-apps': {
        title: "Native Mobile Experiences",
        subtitle: "iOS and Android apps that feel local, fast, and fluid.",
        description: "Leveraging React Native to deliver dual-platform excellence without the double cost. We build apps that users love to touch.",
        icon: Smartphone,
        features: [
            { title: "Cross-Platform", desc: "One codebase, two native apps." },
            { title: "Offline First", desc: "Works perfectly without internet connection." },
            { title: "Hardware Access", desc: "Camera, GPS, and Bluetooth integration." }
        ],
        techStack: ["React Native", "Expo", "Swift", "Kotlin"]
    },
    'business-landing-pages': {
        title: "Business Landing Pages & Marketing Websites",
        subtitle: "Convert visitors into customers with blazing fast digital experiences.",
        description: "We use Astro and Next.js to build static sites and marketing websites that load instantly and rank higher on Google. No bloat, just performance.",
        icon: Layout,
        features: [
            { title: "Perfect Lighthouse Scores", desc: "100/100 performance, SEO, and accessibility." },
            { title: "Headless CMS", desc: "Empower your marketing team with Sanity or Contentful." },
            { title: "Global CDN", desc: "Served from the edge for instant loading worldwide." }
        ],
        techStack: ["Astro", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    'ecommerce': {
        title: "Headless E-Commerce",
        subtitle: "Custom shopping experiences that break free from template constraints.",
        description: "We build custom storefronts on top of Shopify Plus or completely custom backend solutions for unique business models.",
        icon: ShoppingBag,
        features: [
            { title: "Custom Checkout", desc: "Optimized flows to reduce cart abandonment." },
            { title: "Instant Search", desc: "Algolia integration for lightning-fast capability." },
            { title: "Inventory Sync", desc: "Real-time synchronization across channels." }
        ],
        techStack: ["Shopify Hydrogen", "Next.js", "Stripe", "Algolia"]
    },
    'api-integrations': {
        title: "APIs & System Integration",
        subtitle: "Connect your disparate systems into a unified, efficient workflow.",
        description: "We build robust APIs and middleware to connect your CRM, ERP, and custom software, ensuring seamless data flow.",
        icon: Database,
        features: [
            { title: "REST & GraphQL", desc: "Modern API standards for flexibility." },
            { title: "Webhook Systems", desc: "Event-driven architecture." },
            { title: "Legacy Migration", desc: "Safely move data from old systems." }
        ],
        techStack: ["Node.js", "Python", "GraphQL", "AWS Lambda"]
    },
    'seo': {
        title: "Technical SEO & Growth",
        subtitle: "Engineering-led SEO strategies that dominate search results.",
        description: "We don't just write blogs. We optimize site architecture, load times, and structured data to signal authority to search engines.",
        icon: Search,
        features: [
            { title: "Core Web Vitals", desc: "Optimization for Google's latest ranking factors." },
            { title: "Structured Data", desc: "Rich snippets and schema markup." },
            { title: "Programmatic SEO", desc: "Generate thousands of landing pages dynamically." }
        ],
        techStack: ["Ahrefs", "Semrush", "Google Search Console", "Next.js"]
    }
};
