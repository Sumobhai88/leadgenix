import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Dashboard components
import DashboardHome from './dashboard/DashboardHome';
import DashboardLeads from './dashboard/DashboardLeads';
import DashboardEnrichment from './dashboard/DashboardEnrichment';
import DashboardAPIKeys from './dashboard/DashboardAPIKeys';
import DashboardSettings from './dashboard/DashboardSettings';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const navLinkClasses = ({ isActive }) => 
    `flex items-center p-3 rounded-lg transition-colors ${
      isActive 
        ? 'bg-primary-blue/10 text-primary-blue font-medium' 
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <div className="bg-gray-50 min-h-screen" onClick={closeSidebar}>
      {/* Mobile nav header */}
      <div className="md:hidden bg-white p-4 flex justify-between items-center shadow-sm">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSidebar();
          }}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="text-lg font-semibold">Leadgenix Dashboard</div>
        <div className="w-10 h-10 bg-primary-violet rounded-full flex items-center justify-center text-white">
          JS
        </div>
      </div>

      <div className="flex h-[calc(100vh-64px)] md:h-screen">
        {/* Sidebar */}
        <aside 
          className={`fixed md:static inset-y-0 left-0 transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 z-30 w-64 bg-white shadow-md overflow-y-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-violet rounded-lg flex items-center justify-center text-white font-bold text-sm">
                LG
              </div>
              <span className="text-lg font-poppins font-bold bg-gradient-to-r from-primary-blue to-primary-violet bg-clip-text text-transparent">
                Leadgenix
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="p-4 space-y-2">
            <NavLink to="/dashboard" end className={navLinkClasses}>
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </NavLink>
            <NavLink to="/dashboard/leads" className={navLinkClasses}>
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Leads
            </NavLink>
            <NavLink to="/dashboard/enrichment" className={navLinkClasses}>
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Data Enrichment
            </NavLink>
            <NavLink to="/dashboard/api-keys" className={navLinkClasses}>
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              API Keys
            </NavLink>
            <NavLink to="/dashboard/settings" className={navLinkClasses}>
              <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </NavLink>
          </nav>
          
          {/* User profile */}
          <div className="border-t mt-6 pt-4 px-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-violet text-white flex items-center justify-center mr-3">
                JS
              </div>
              <div>
                <p className="font-medium text-gray-900">John Smith</p>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/leads" element={<DashboardLeads />} />
            <Route path="/enrichment" element={<DashboardEnrichment />} />
            <Route path="/api-keys" element={<DashboardAPIKeys />} />
            <Route path="/settings" element={<DashboardSettings />} />
          </Routes>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </div>
  );
};

export default Dashboard;