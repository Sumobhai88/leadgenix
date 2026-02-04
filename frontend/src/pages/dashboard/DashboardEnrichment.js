import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiDownload, FiPlus, FiRefreshCw } from 'react-icons/fi';

const DashboardEnrichment = () => {
  const [enrichmentStatus, setEnrichmentStatus] = useState('ready');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [progress, setProgress] = useState(0);

  // Mock enrichment history data
  const enrichmentHistory = [
    {
      id: 1,
      fileName: 'tech_companies_leads.csv',
      date: '2023-09-14',
      enrichedCount: 245,
      totalCount: 250,
      status: 'completed'
    },
    {
      id: 2,
      fileName: 'marketing_directors.xlsx',
      date: '2023-09-10',
      enrichedCount: 178,
      totalCount: 200,
      status: 'completed'
    },
    {
      id: 3,
      fileName: 'finance_executives.csv',
      date: '2023-09-05',
      enrichedCount: 120,
      totalCount: 120,
      status: 'completed'
    }
  ];

  // Mock enrichment options
  const enrichmentOptions = [
    { id: 'email', label: 'Email Addresses', description: 'Find valid business email addresses', default: true },
    { id: 'phone', label: 'Phone Numbers', description: 'Find direct dial and mobile numbers', default: true },
    { id: 'social', label: 'Social Profiles', description: 'LinkedIn, Twitter, and other social handles', default: true },
    { id: 'company', label: 'Company Data', description: 'Industry, size, revenue, funding', default: false },
    { id: 'technology', label: 'Technology Stack', description: 'Tools and platforms used', default: false }
  ];

  // State for selected enrichment options
  const [selectedOptions, setSelectedOptions] = useState(
    enrichmentOptions.filter(option => option.default).map(option => option.id)
  );

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setEnrichmentStatus('ready');
    }
  };

  // Toggle selection for enrichment options
  const toggleOption = (optionId) => {
    setSelectedOptions(prevSelected => 
      prevSelected.includes(optionId)
        ? prevSelected.filter(id => id !== optionId)
        : [...prevSelected, optionId]
    );
  };

  // Simulate enrichment process
  const startEnrichment = () => {
    if (!uploadedFile) return;
    
    setEnrichmentStatus('processing');
    setProgress(0);
    
    // Simulate progress updates
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setEnrichmentStatus('completed');
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  // Reset the enrichment form
  const resetEnrichment = () => {
    setUploadedFile(null);
    setEnrichmentStatus('ready');
    setProgress(0);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Data Enrichment</h1>
        <p className="text-gray-600">Enhance your lead data with additional contact information and company insights.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Enrichment form */}
        <div className="lg:col-span-2">
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Enrich Your Data</h2>
            
            {enrichmentStatus === 'completed' ? (
              <div className="text-center py-10">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Enrichment Completed!</h3>
                <p className="text-gray-600 mb-6">Your file has been successfully enriched with the selected data points.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button className="flex items-center px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-violet transition-colors">
                    <FiDownload className="mr-2" /> Download Results
                  </button>
                  <button 
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                    onClick={resetEnrichment}
                  >
                    <FiRefreshCw className="mr-2" /> Start New Enrichment
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* File Upload */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload File (CSV, XLSX)
                  </label>
                  <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md ${
                    uploadedFile ? 'border-primary-blue bg-primary-blue/5' : 'border-gray-300'
                  }`}>
                    <div className="space-y-1 text-center">
                      <svg className={`mx-auto h-12 w-12 ${uploadedFile ? 'text-primary-blue' : 'text-gray-400'}`} stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      
                      {uploadedFile ? (
                        <div className="text-sm text-center">
                          <p className="text-primary-blue font-medium">{uploadedFile.name}</p>
                          <p className="text-gray-500">{Math.round(uploadedFile.size / 1024)} KB</p>
                        </div>
                      ) : (
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-blue hover:text-primary-violet focus-within:outline-none">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileUpload} accept=".csv,.xlsx" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                      )}
                      
                      {!uploadedFile && (
                        <p className="text-xs text-gray-500">
                          CSV or XLSX files up to 10MB
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Enrichment options */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Data to Enrich
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {enrichmentOptions.map((option) => (
                      <div 
                        key={option.id} 
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          selectedOptions.includes(option.id)
                            ? 'border-primary-blue bg-primary-blue/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => toggleOption(option.id)}
                      >
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              checked={selectedOptions.includes(option.id)}
                              onChange={() => {}} // handled by the div click
                              className="focus:ring-primary-blue h-4 w-4 text-primary-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="font-medium text-gray-700">{option.label}</label>
                            <p className="text-gray-500">{option.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Progress indicator */}
                {enrichmentStatus === 'processing' && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enrichment Progress
                    </label>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary-blue h-2.5 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 text-right">{Math.round(progress)}% complete</p>
                  </div>
                )}
                
                {/* Action buttons */}
                <div className="flex flex-wrap items-center justify-between mt-6">
                  <p className="text-sm text-gray-500 mb-3 sm:mb-0">
                    <span className="font-medium">Note:</span> Enrichment uses 1 credit per field per contact
                  </p>
                  <div className="space-x-3">
                    {uploadedFile && enrichmentStatus === 'ready' && (
                      <button 
                        className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-violet transition-colors"
                        onClick={startEnrichment}
                      >
                        Start Enrichment
                      </button>
                    )}
                    {uploadedFile && (
                      <button 
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                        onClick={resetEnrichment}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
        
        {/* Enrichment stats */}
        <div>
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Enrichment Stats</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Credits Used</p>
                <p className="text-2xl font-bold text-gray-900">543</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Credits Left</p>
                <p className="text-2xl font-bold text-gray-900">1,457</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="text-2xl font-bold text-primary-green">94%</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Files Processed</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                <FiPlus className="mr-2" /> Purchase More Credits
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Recent enrichment history */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Enrichment History</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Records
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrichmentHistory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.fileName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-primary-green">
                      {Math.round((item.enrichedCount / item.totalCount) * 100)}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {item.enrichedCount} / {item.totalCount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-blue hover:text-primary-violet">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardEnrichment;