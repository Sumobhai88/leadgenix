import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';

const DashboardAPIKeys = () => {
  // Mock API keys state
  const [apiKeys, setApiKeys] = useState([
    {
      id: 'api_key_1',
      name: 'Production API Key',
      key: 'lgnx_prod_f28c39a7d31e4b5f89c6',
      createdAt: '2023-08-15',
      lastUsed: '2023-09-15',
      status: 'active',
      permissions: ['read', 'write', 'enrichment']
    },
    {
      id: 'api_key_2',
      name: 'Development API Key',
      key: 'lgnx_dev_4a7b35c9e21f8d03c47d',
      createdAt: '2023-08-20',
      lastUsed: '2023-09-10',
      status: 'active',
      permissions: ['read', 'write']
    }
  ]);

  // New API key form state
  const [showNewKeyForm, setShowNewKeyForm] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyPermissions, setNewKeyPermissions] = useState({
    read: true,
    write: true,
    enrichment: false,
    bulk: false
  });
  const [copiedKey, setCopiedKey] = useState(null);
  const [newlyCreatedKey, setNewlyCreatedKey] = useState(null);

  // API usage data for the chart
  const apiUsageData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'API Calls',
        data: [120, 190, 170, 250, 300, 80, 40],
        backgroundColor: '#3B82F6'
      }
    ]
  };

  const handlePermissionToggle = (permission) => {
    setNewKeyPermissions(prev => ({
      ...prev,
      [permission]: !prev[permission]
    }));
  };

  // Copy API key to clipboard
  const copyToClipboard = (key, id) => {
    navigator.clipboard.writeText(key).then(() => {
      setCopiedKey(id);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  // Generate new API key
  const generateApiKey = () => {
    if (!newKeyName.trim()) return;

    const randomString = Array(28)
      .fill(0)
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
      
    const keyPrefix = 'lgnx_' + (newKeyPermissions.enrichment ? 'prod_' : 'dev_');
    const newKey = {
      id: `api_key_${apiKeys.length + 1}`,
      name: newKeyName,
      key: keyPrefix + randomString,
      createdAt: new Date().toISOString().split('T')[0],
      lastUsed: '-',
      status: 'active',
      permissions: Object.entries(newKeyPermissions)
        .filter(([_, isEnabled]) => isEnabled)
        .map(([permission]) => permission)
    };
    
    setApiKeys([...apiKeys, newKey]);
    setNewlyCreatedKey(newKey);
    setNewKeyName('');
    setNewKeyPermissions({
      read: true,
      write: true,
      enrichment: false,
      bulk: false
    });
    setShowNewKeyForm(false);
  };

  // Regenerate an API key
  const regenerateApiKey = (id) => {
    const randomString = Array(28)
      .fill(0)
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
      
    const updatedKeys = apiKeys.map(key => {
      if (key.id === id) {
        const keyPrefix = 'lgnx_' + (key.permissions.includes('enrichment') ? 'prod_' : 'dev_');
        return {
          ...key,
          key: keyPrefix + randomString,
          createdAt: new Date().toISOString().split('T')[0]
        };
      }
      return key;
    });
    
    setApiKeys(updatedKeys);
    const regeneratedKey = updatedKeys.find(key => key.id === id);
    setNewlyCreatedKey(regeneratedKey);
  };

  // Revoke an API key
  const revokeApiKey = (id) => {
    const updatedKeys = apiKeys.map(key => {
      if (key.id === id) {
        return { ...key, status: 'revoked' };
      }
      return key;
    });
    
    setApiKeys(updatedKeys);
  };

  // Get badge color based on permission
  const getPermissionBadgeColor = (permission) => {
    switch(permission) {
      case 'read':
        return 'bg-blue-100 text-blue-800';
      case 'write':
        return 'bg-purple-100 text-purple-800';
      case 'enrichment':
        return 'bg-green-100 text-green-800';
      case 'bulk':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">API Keys</h1>
        <p className="text-gray-600">Manage API keys for accessing the Leadgenix API.</p>
      </div>

      {/* Newly created key alert */}
      {newlyCreatedKey && (
        <motion.div 
          className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FiCheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                API Key "{newlyCreatedKey.name}" has been created successfully
              </p>
              <div className="mt-2 text-sm text-green-700 bg-green-100 p-2 rounded flex items-center justify-between">
                <code className="font-mono">{newlyCreatedKey.key}</code>
                <button 
                  onClick={() => copyToClipboard(newlyCreatedKey.key, newlyCreatedKey.id)}
                  className="text-primary-blue hover:text-primary-violet ml-3"
                  title="Copy to clipboard"
                >
                  {copiedKey === newlyCreatedKey.id ? (
                    <span className="text-green-600">Copied!</span>
                  ) : (
                    <FiCopy />
                  )}
                </button>
              </div>
              <p className="mt-2 text-xs text-green-700">
                Make sure to copy your API key now. You won't be able to see it again!
              </p>
            </div>
          </div>
        </motion.div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* API key list */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Your API Keys</h2>
              <button 
                onClick={() => setShowNewKeyForm(true)}
                className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-violet transition-colors"
              >
                Create New Key
              </button>
            </div>
            
            <div className="divide-y divide-gray-200">
              {apiKeys.map((apiKey) => (
                <div key={apiKey.id} className="p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{apiKey.name}</h3>
                      <div className="mt-1 flex items-center">
                        <div className="bg-gray-100 rounded px-3 py-1 font-mono text-sm truncate max-w-xs">
                          {apiKey.status === 'revoked' ? (
                            <span className="text-gray-500">••••••••••••••••••••••••</span>
                          ) : (
                            apiKey.key
                          )}
                        </div>
                        {apiKey.status !== 'revoked' && (
                          <button 
                            onClick={() => copyToClipboard(apiKey.key, apiKey.id)} 
                            className="ml-2 text-gray-500 hover:text-primary-blue"
                            title="Copy to clipboard"
                          >
                            {copiedKey === apiKey.id ? (
                              <span className="text-xs text-green-600">Copied!</span>
                            ) : (
                              <FiCopy />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      {apiKey.status === 'active' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Revoked
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
                    <div>
                      <span className="font-medium">Created:</span> {apiKey.createdAt}
                    </div>
                    <div>
                      <span className="font-medium">Last used:</span> {apiKey.lastUsed}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500 mr-2">Permissions:</span>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {apiKey.permissions.map(permission => (
                        <span 
                          key={permission} 
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPermissionBadgeColor(permission)}`}
                        >
                          {permission.charAt(0).toUpperCase() + permission.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {apiKey.status === 'active' && (
                    <div className="flex space-x-3 mt-4">
                      <button 
                        onClick={() => regenerateApiKey(apiKey.id)}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <FiRefreshCw className="mr-2" />
                        Regenerate
                      </button>
                      <button 
                        onClick={() => revokeApiKey(apiKey.id)}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded text-red-700 bg-white hover:bg-red-50"
                      >
                        Revoke
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* API usage stats */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">API Usage</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">This Month</h3>
                <div className="mt-1 flex items-baseline justify-between">
                  <div className="text-2xl font-semibold text-gray-900">1,250</div>
                  <div className="text-sm text-gray-500">of 5,000 calls</div>
                </div>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-primary-blue h-2.5 rounded-full" 
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-500">Usage by Endpoint</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-blue mr-2"></span>
                      <span className="text-sm text-gray-600">/api/v1/leads/search</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">46%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-violet mr-2"></span>
                      <span className="text-sm text-gray-600">/api/v1/enrich</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">28%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary-green mr-2"></span>
                      <span className="text-sm text-gray-600">/api/v1/verify</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">15%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-400 mr-2"></span>
                      <span className="text-sm text-gray-600">Other</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">11%</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-500">Rate Limits</h3>
                <div className="mt-2 bg-gray-50 rounded-md p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Requests per minute</p>
                      <p className="text-lg font-semibold text-gray-900">60</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Bulk requests per hour</p>
                      <p className="text-lg font-semibold text-gray-900">10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* API Documentation Preview */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick API Reference</h2>
        
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-900 mb-2">Authentication</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-sm font-mono whitespace-pre-wrap">
              {`# Include your API key in the Authorization header
curl -X GET "https://api.leadgenix.com/v1/leads/search?query=tech+companies" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
            </pre>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-900 mb-2">Example: Search for Leads</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-sm font-mono whitespace-pre-wrap">
              {`# Search for leads with filters
curl -X POST "https://api.leadgenix.com/v1/leads/search" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "marketing director",
    "filters": {
      "industry": "software",
      "company_size": "50-200",
      "location": "United States"
    },
    "limit": 25
  }'`}
            </pre>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <a 
            href="#" 
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            View Full API Documentation
          </a>
        </div>
      </div>

      {/* New API Key form modal */}
      {showNewKeyForm && (
        <div className="fixed inset-0 overflow-y-auto z-50">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <motion.div 
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Create New API Key
                    </h3>
                    
                    <div className="mb-4">
                      <label htmlFor="keyName" className="block text-sm font-medium text-gray-700 mb-1">
                        Key Name
                      </label>
                      <input
                        type="text"
                        id="keyName"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                        placeholder="e.g., Production API Key"
                        value={newKeyName}
                        onChange={(e) => setNewKeyName(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Permissions
                      </label>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input
                            id="permission-read"
                            type="checkbox"
                            className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                            checked={newKeyPermissions.read}
                            onChange={() => handlePermissionToggle('read')}
                          />
                          <label htmlFor="permission-read" className="ml-3 text-sm text-gray-700">
                            Read (Search and view lead data)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="permission-write"
                            type="checkbox"
                            className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                            checked={newKeyPermissions.write}
                            onChange={() => handlePermissionToggle('write')}
                          />
                          <label htmlFor="permission-write" className="ml-3 text-sm text-gray-700">
                            Write (Create and update leads)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="permission-enrichment"
                            type="checkbox"
                            className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                            checked={newKeyPermissions.enrichment}
                            onChange={() => handlePermissionToggle('enrichment')}
                          />
                          <label htmlFor="permission-enrichment" className="ml-3 text-sm text-gray-700">
                            Enrichment (Access data enrichment features)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="permission-bulk"
                            type="checkbox"
                            className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                            checked={newKeyPermissions.bulk}
                            onChange={() => handlePermissionToggle('bulk')}
                          />
                          <label htmlFor="permission-bulk" className="ml-3 text-sm text-gray-700">
                            Bulk Operations (Run batch jobs)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-blue text-base font-medium text-white hover:bg-primary-violet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={generateApiKey}
                  disabled={!newKeyName.trim()}
                >
                  Generate API Key
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowNewKeyForm(false)}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAPIKeys;