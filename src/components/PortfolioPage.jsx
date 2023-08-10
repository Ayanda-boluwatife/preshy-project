"use client"

import React, { useState } from 'react';
import PortfolioTabs from './PortfolioTabs';
import AboutTab from './AboutTab';
import ResumeTab from './ResumeTab';
import PortfolioTab from './PortfolioTab';
import BlogTab from './BlogTab';
import ContactTab from './ContactTab';
import Sidebar from './Sidebar';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
      case 'resume':
        return <ResumeTab />;
      case 'portfolio':
        return <PortfolioTab />;
      case 'blog':
        return <BlogTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return null;
    }
  };

  return (
    <div className="flex lg:flex-row flex-col gap-6 p-10 lg:h-screen">
      <Sidebar />
      <div className="p-4 bg-gray-800 h-[90vh] overflow-y-scroll rounded-3xl shadow-lg flex-1">
        <PortfolioTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className='mt-20'>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default PortfolioPage;
