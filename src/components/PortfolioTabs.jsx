import React from 'react';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

const PortfolioTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white backdrop-blur-md lg:fixed py-2 px-2 rounded-md">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 relative gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTabs;
