import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ChromeExtension = () => {
  const features = [
    {
      title: "One-Click Contact Reveal",
      description: "Get instant access to verified email addresses and phone numbers directly on LinkedIn profiles",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Save to Dashboard",
      description: "Automatically save contacts to your LeadGenix dashboard and organize them into lists",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      )
    },
    {
      title: "Bulk Export",
      description: "Export multiple contacts at once from LinkedIn search results or company pages",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "CRM Integration",
      description: "Push contacts directly to your CRM with one click - works with Salesforce, HubSpot & more",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-blue via-primary-violet to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                LinkedIn Chrome Extension
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get Contact Data<br/>
                <span className="text-primary-green">Directly on LinkedIn</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8">
                Install our Chrome Extension and instantly access verified phone numbers and email addresses while browsing LinkedIn profiles. No more switching between tabs!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://chrome.google.com/webstore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818z"/>
                  </svg>
                  Add to Chrome - It's Free
                </a>
                <Link 
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-green text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Get Started Now
                </Link>
              </div>
              
              <div className="mt-6 flex items-center gap-3 text-white/90 text-sm">
                <span className="text-yellow-400">★★★★★</span>
                <span>4.8/5 rating on Chrome Web Store</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-white/20">
                <img 
                  src="https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Chrome+Extension+Demo" 
                  alt="LeadGenix Chrome Extension" 
                  className="rounded-lg w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features Built-In</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to prospect faster and smarter
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-violet rounded-lg flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start finding contacts in 3 simple steps
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-2xl font-bold mb-4">Install the Extension</h3>
                <p className="text-gray-600 text-lg">
                  Add LeadGenix to your Chrome browser in one click. No credit card required to get started.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <span className="text-gray-400">Extension Installation Demo</span>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-primary-violet text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-2xl font-bold mb-4">Browse LinkedIn</h3>
                <p className="text-gray-600 text-lg">
                  Navigate to any LinkedIn profile or company page. Our extension automatically detects and enriches the data.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <span className="text-gray-400">LinkedIn Browse Demo</span>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 bg-primary-green text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-2xl font-bold mb-4">Get Contact Data</h3>
                <p className="text-gray-600 text-lg">
                  Click to reveal verified email addresses and phone numbers. Save to dashboard or export to your CRM instantly.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                  <span className="text-gray-400">Data Reveal Demo</span>
                </div>
              </div>
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
              Start Finding Contacts Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 10,000+ sales professionals using LeadGenix Chrome Extension to accelerate their prospecting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://chrome.google.com/webstore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818z"/>
                </svg>
                Install Now - It's Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ChromeExtension;