import React from 'react';
import { motion } from 'framer-motion';

const DashboardHome = () => {
  // Sample data for charts and stats
  const stats = [
    { name: 'Total Leads', value: '1,247', change: '+12%', icon: 'users' },
    { name: 'Enriched Data', value: '836', change: '+24%', icon: 'database' },
    { name: 'API Calls', value: '3.4K', change: '+9%', icon: 'code' },
    { name: 'Usage', value: '67%', change: '-3%', icon: 'chart-bar' },
  ];

  const recentSearches = [
    { query: 'Marketing Directors in Tech', date: '2 hours ago', results: 143 },
    { query: 'Sales VP in Healthcare', date: '1 day ago', results: 67 },
    { query: 'CTOs in Fortune 500', date: '2 days ago', results: 52 },
    { query: 'Product Managers in SaaS', date: '3 days ago', results: 215 },
  ];

  const recentLeads = [
    {
      name: 'Alex Johnson',
      title: 'VP of Marketing',
      company: 'TechSolutions Inc',
      email: 'alex@techsolutions.com',
      added: '2 hours ago'
    },
    {
      name: 'Sarah Williams',
      title: 'CTO',
      company: 'DataSphere',
      email: 'sarah@datasphere.io',
      added: '4 hours ago'
    },
    {
      name: 'Michael Chen',
      title: 'Sales Director',
      company: 'Growth Ventures',
      email: 'michael@growthventures.com',
      added: '1 day ago'
    },
    {
      name: 'Emma Rodriguez',
      title: 'Product Manager',
      company: 'InnovateNow',
      email: 'emma@innovatenow.co',
      added: '2 days ago'
    },
  ];

  // Icons mapper
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'users':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'database':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case 'code':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'chart-bar':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your account.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">{stat.name}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                {getIcon(stat.icon)}
              </div>
            </div>
            <div className={`mt-2 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from last month
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent searches */}
        <motion.div
          className="bg-white rounded-lg shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Searches</h2>
            <button className="text-sm text-primary-blue hover:text-primary-violet">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentSearches.map((search, index) => (
              <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div>
                  <p className="font-medium text-gray-800">{search.query}</p>
                  <p className="text-sm text-gray-500">{search.date}</p>
                </div>
                <div className="bg-gray-100 py-1 px-3 rounded-full text-gray-600 text-sm">
                  {search.results} results
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent leads */}
        <motion.div
          className="bg-white rounded-lg shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Leads</h2>
            <button className="text-sm text-primary-blue hover:text-primary-violet">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentLeads.map((lead, index) => (
              <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{lead.name}</p>
                    <p className="text-sm text-gray-500">{lead.title}, {lead.company}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {lead.added}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Usage tips */}
      <motion.div
        className="mt-6 bg-primary-blue/5 border border-primary-blue/20 rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h2 className="text-lg font-semibold mb-3">Quick Tips</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-primary-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">Use advanced filters to narrow down your lead search results.</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-primary-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">Upload your existing contact list for bulk enrichment.</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-primary-blue mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">Generate API keys to integrate Leadgenix with your CRM or marketing tools.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DashboardHome;