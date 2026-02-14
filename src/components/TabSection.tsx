import React, { useState } from 'react';
import './TabSection.css';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabSectionProps {
    tabs: Tab[];
}

export const TabSection: React.FC<TabSectionProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="tab-section">
            <div className="tab-triggers">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-trigger ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};
