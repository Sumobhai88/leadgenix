import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DashboardLeads = () => {
  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    companySize: '',
    jobTitle: '',
    country: ''
  });

  // Mock leads data
  const initialLeads = [
    {
      id: 1,
      name: 'Thomas Wright',
      title: 'CTO',
      company: 'TechFlow Solutions',
      industry: 'Software',
      companySize: '50-200',
      email: 'thomas@techflow.io',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      added: '2023-09-15'
    },
    {
      id: 2,
      name: 'Alexandra Kim',
      title: 'VP of Marketing',
      company: 'GrowthGenius',
      industry: 'Marketing',
      companySize: '10-50',
      email: 'alex@growthgenius.com',
      phone: '+1 (555) 234-5678',
      location: 'New York, NY',
      added: '2023-09-14'
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      title: 'Sales Director',
      company: 'Accelerate Inc.',
      industry: 'Consulting',
      companySize: '200-500',
      email: 'mjohnson@accelerate.co',
      phone: '+1 (555) 345-6789',
      location: 'Chicago, IL',
      added: '2023-09-12'
    },
    {
      id: 4,
      name: 'Sarah Patel',
      title: 'CFO',
      company: 'FinEdge Capital',
      industry: 'Finance',
      companySize: '500+',
      email: 'spatel@finedge.com',
      phone: '+1 (555) 456-7890',
      location: 'Boston, MA',
      added: '2023-09-10'
    },
    {
      id: 5,
      name: 'David Chang',
      title: 'CEO',
      company: 'Innovate AI',
      industry: 'Artificial Intelligence',
      companySize: '10-50',
      email: 'david@innovateai.tech',
      phone: '+1 (555) 567-8901',
      location: 'Austin, TX',
      added: '2023-09-08'
    }
  ];

  const [leads, setLeads] = useState(initialLeads);
  const [selectedLeads, setSelectedLeads] = useState([]);
  
  // Filter options
  const filterOptions = {
    industry: ['Software', 'Marketing', 'Finance', 'Healthcare', 'Education', 'Artificial Intelligence', 'Consulting', 'E-commerce', 'Real Estate'],
    companySize: ['1-10', '10-50', '50-200', '200-500', '500+'],
    jobTitle: ['CEO', 'CTO', 'CFO', 'COO', 'VP', 'Director', 'Manager'],
    country: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Japan', 'India']
  };

  // Handle search and filter changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterLeads(e.target.value, filters);
  };

  const handleFilterChange = (name, value) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    filterLeads(searchTerm, newFilters);
  };

  // Filter leads based on search term and filters
  const filterLeads = (search, currentFilters) => {
    let filteredLeads = initialLeads;
    
    // Apply search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredLeads = filteredLeads.filter(lead => 
        lead.name.toLowerCase().includes(searchLower) ||
        lead.company.toLowerCase().includes(searchLower) ||
        lead.title.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply filters
    if (currentFilters.industry) {
      filteredLeads = filteredLeads.filter(lead => 
        lead.industry === currentFilters.industry
      );
    }
    if (currentFilters.companySize) {
      filteredLeads = filteredLeads.filter(lead => 
        lead.companySize === currentFilters.companySize
      );
    }
    
    setLeads(filteredLeads);
  };

  // Handle lead selection
  const toggleSelectLead = (id) => {
    if (selectedLeads.includes(id)) {
      setSelectedLeads(selectedLeads.filter(leadId => leadId !== id));
    } else {
      setSelectedLeads([...selectedLeads, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedLeads.length === leads.length) {
      setSelectedLeads([]);
    } else {
      setSelectedLeads(leads.map(lead => lead.id));
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Leads</h1>
        <p className="text-gray-600">Search, filter, and manage your leads.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        {/* Search and filters */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="md:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
                placeholder="Search by name, company, title..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
              Industry
            </label>
            <select
              id="industry"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
              value={filters.industry}
              onChange={(e) => handleFilterChange('industry', e.target.value)}
            >
              <option value="">All Industries</option>
              {filterOptions.industry.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
              Company Size
            </label>
            <select
              id="companySize"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
              value={filters.companySize}
              onChange={(e) => handleFilterChange('companySize', e.target.value)}
            >
              <option value="">All Sizes</option>
              {filterOptions.companySize.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country"
              className="block w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
              value={filters.country}
              onChange={(e) => handleFilterChange('country', e.target.value)}
            >
              <option value="">All Countries</option>
              {filterOptions.country.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Bulk actions */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                selectedLeads.length > 0
                  ? 'bg-primary-blue text-white'
                  : 'bg-gray-100 text-gray-500 cursor-not-allowed'
              }`}
              disabled={selectedLeads.length === 0}
            >
              Export Selected
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                selectedLeads.length > 0
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-500 cursor-not-allowed'
              }`}
              disabled={selectedLeads.length === 0}
            >
              Delete Selected
            </button>
          </div>
          
          <div className="text-sm text-gray-600">
            {selectedLeads.length} of {leads.length} selected
          </div>
        </div>

        {/* Leads table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedLeads.length === leads.length && leads.length > 0}
                      onChange={toggleSelectAll}
                      className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Added
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.length > 0 ? (
                leads.map(lead => (
                  <motion.tr 
                    key={lead.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedLeads.includes(lead.id)}
                          onChange={() => toggleSelectLead(lead.id)}
                          className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{lead.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{lead.company}</div>
                      <div className="text-xs text-gray-500">{lead.industry} • {lead.companySize}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{lead.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{lead.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900">{lead.added}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary-blue hover:text-primary-violet mr-3">View</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-10 text-center text-gray-500">
                    No leads found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{leads.length}</span> of <span className="font-medium">{leads.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm bg-white text-gray-500 cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-1 border rounded-md text-sm bg-white text-gray-500 cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLeads;