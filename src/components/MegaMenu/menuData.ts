import {
    Code, Smartphone, Layout,
    Activity, Landmark, GraduationCap,
    Rocket, ShieldCheck, Users,
    Search, BarChart2, LineChart
} from 'lucide-react';

export interface MenuItem {
    title: string;
    description: string;
    icon: any;
    path: string;
}

export interface MenuCategory {
    title: string;
    items: MenuItem[];
}

export const menuData: MenuCategory[] = [
    {
        title: "Solutions",
        items: [
            {
                title: "Web Apps",
                description: "Full-stack React & Next.js platforms.",
                icon: Code,
                path: "/services/web-apps"
            },
            {
                title: "Mobile Apps",
                description: "Native iOS & Android experiences.",
                icon: Smartphone,
                path: "/services/mobile-apps"
            },
            {
                title: "Landing Pages",
                description: "High-conversion marketing sites.",
                icon: Layout,
                path: "/services/business-landing-pages"
            }
        ]
    },
    {
        title: "Industries",
        items: [
            {
                title: "Healthcare",
                description: "HIPAA-compliant MedTech software.",
                icon: Activity,
                path: "/industries/healthcare"
            },
            {
                title: "FinTech",
                description: "Secure digital banking systems.",
                icon: Landmark,
                path: "/industries/fintech"
            },
            {
                title: "EdTech",
                description: "Global learning management systems.",
                icon: GraduationCap,
                path: "/industries/edtech"
            }
        ]
    },
    {
        title: "Who We Serve",
        items: [
            {
                title: "Founders",
                description: "Concept to market-ready MVP.",
                icon: Rocket,
                path: "/personas/founders"
            },
            {
                title: "Scale-Ups",
                description: "Growth-focused product engineering.",
                icon: ShieldCheck,
                path: "/personas/scale-ups"
            },
            {
                title: "Agencies",
                description: "Reliable white-label partners.",
                icon: Users,
                path: "/personas/agencies"
            }
        ]
    },
    {
        title: "Growth",
        items: [
            {
                title: "SEO Strategy",
                description: "Technical SEO to dominate search.",
                icon: Search,
                path: "/services/seo"
            },
            {
                title: "Performance",
                description: "Perfect core web vitals and speed.",
                icon: BarChart2,
                path: "/services/performance"
            },
            {
                title: "Analytics",
                description: "Deep visibility into user behavior.",
                icon: LineChart,
                path: "/services/analytics"
            }
        ]
    }
];
