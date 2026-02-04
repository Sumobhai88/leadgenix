import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Integrations = () => {
  const integrations = [
    {
      name: "Salesforce",
      category: "CRM",
      description: "Sync leads directly to Salesforce and keep your pipeline up-to-date automatically.",
      logo: "🔷",
      popular: true
    },
    {
      name: "HubSpot",
      category: "CRM",
      description: "Add contacts to HubSpot CRM and trigger workflows instantly.",
      logo: "🟠",
      popular: true
    },
    {
      name: "Pipedrive",
      category: "CRM",
      description: "Push leads to Pipedrive and manage your sales pipeline efficiently.",
      logo: "🟢",
      popular: true
    },
    {
      name: "Zoho CRM",
      category: "CRM",
      description: "Integrate seamlessly with Zoho CRM for complete lead management.",
      logo: "🔴",
      popular: false
    },
    {
      name: "LinkedIn",
      category: "Social",
      description: "Extract contact data directly from LinkedIn profiles with our Chrome Extension.",
      logo: "🔵",
      popular: true
    },
    {
      name: "Zapier",
      category: "Automation",
      description: "Connect LeadGenix with 5,000+ apps through Zapier automation.",
      logo: "⚡",
      popular: true
    },
    {
      name: "Microsoft Dynamics",
      category: "CRM",
      description: "Seamlessly integrate with Microsoft Dynamics 365 for enterprise sales.",
      logo: "🟦",
      popular: false
    },
    {
      name: "Slack",
      category: "Communication",
      description: "Get real-time notifications about new leads in your Slack channels.",
      logo: "💬",
      popular: false
    },
    {
      name: "Google Sheets",
      category: "Productivity",
      description: "Export and sync your leads automatically to Google Sheets.",
      logo: "📊",
      popular: false
    },
    {
      name: "Intercom",
      category: "Customer Support",
      description: "Send lead data to Intercom for personalized customer engagement.",
      logo: "💭",
      popular: false
    },
    {
      name: "Outreach",
      category: "Sales Engagement",
      description: "Automate your outreach campaigns with verified contact data.",
      logo: "📧",
      popular: false
    },
    {
      name: "SalesLoft",
      category: "Sales Engagement",
      description: "Power your sales cadences with accurate prospect information.",
      logo: "📮",
      popular: false
    }
  ];

  const categories = ["All", "CRM", "Social", "Automation", "Communication", "Productivity", "Sales Engagement"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredIntegrations = selectedCategory === "All" 
    ? integrations 
    : integrations.filter(int => int.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-blue via-primary-violet to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              20+ Integrations Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connect LeadGenix with<br/>
              <span className="text-primary-green">Your Favorite Tools</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              Seamlessly integrate with your existing workflow. Export leads to your CRM, automate tasks, and sync data across all your tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/signup"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Integrating Now
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Request Custom Integration
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b sticky top-0 z-20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {integration.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-primary-green text-white text-xs font-semibold rounded-full">
                    Popular
                  </div>
                )}
                
                <div className="text-6xl mb-4">{integration.logo}</div>
                
                <h3 className="text-2xl font-bold mb-2">{integration.name}</h3>
                
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-4">
                  {integration.category}
                </div>
                
                <p className="text-gray-600 mb-6">{integration.description}</p>
                
                <button className="w-full py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-violet transition-colors">
                  Connect Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Custom Integrations</h2>
              <p className="text-xl text-gray-600">
                Use our powerful API to create custom integrations with any tool in your stack
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-900 rounded-xl p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-primary-green font-mono">API Example</span>
                <button className="px-4 py-2 bg-primary-blue rounded-md hover:bg-primary-violet transition-colors">
                  Copy Code
                </button>
              </div>
              <pre className="overflow-x-auto">
                <code className="text-sm">
{`// Search for leads
const response = await fetch('https://api.leadgenix.com/v1/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: 'marketing director',
    filters: {
      industry: 'software',
      company_size: '50-200'
    }
  })
});

const leads = await response.json();`}
                </code>
              </pre>
            </motion.div>
            
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/dashboard/api-keys"
                className="inline-flex items-center px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-primary-violet transition-colors"
              >
                Get API Access
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-primary-violet">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Workflow?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Connect LeadGenix with your favorite tools and automate your prospecting process today
            </p>
            <Link 
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Integrations;