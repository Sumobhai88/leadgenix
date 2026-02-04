import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import CtaSection from '../components/CtaSection';

const Home = () => {
  // Feature cards data - Kaspr style
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "500M+ Verified Contacts",
      description: "Access accurate, GDPR-compliant phone numbers and email addresses from over 150 data sources."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "LinkedIn Chrome Extension",
      description: "Get instant contact data directly on LinkedIn profiles with one click. No more manual searching."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "GDPR & CCPA Compliant",
      description: "100% compliant with data protection regulations. All data is verified and sourced ethically."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "CRM Integration",
      description: "Seamlessly sync with Salesforce, HubSpot, Pipedrive, and 20+ other tools in your workflow."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Real-Time Data Updates",
      description: "Get live data updates as contacts change roles, companies, or contact information."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "All-in-One Prospecting",
      description: "Manage leads, set up automations, and export to CSV. Everything you need in one dashboard."
    }
  ];

  // Testimonials data - Kaspr style
  const testimonials = [
    {
      name: "Thomas Muller",
      position: "CEO",
      company: "26 Academy",
      quote: "An incredible tool for sales! It allowed me to find in a few seconds the numbers and emails of my identified prospects! I've managed to increase considerably the number of appointments!",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Sophie Laurent",
      position: "Team Leader",
      company: "GetQuanty",
      quote: "Much better than the competitors! Compared to competitors, LeadGenix's data quality and quantity is much higher, especially for telephone numbers.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Alessandro Rossi",
      position: "Head of Growth",
      company: "Agicap",
      quote: "Amazing! What I like most about LeadGenix is the ability to use the API and perform quick, automated searches. Real game-changer for our team!",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Hero Section - Kaspr Style */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                GDPR & CCPA Compliant
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Instant access to<br/>
                <span className="text-green-300">accurate European</span><br/>
                contact data
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Spend more time building relationships and growing pipeline with accurate contact data for 500M+ profiles. Get verified phone numbers and emails instantly.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to="/signup" className="bg-white text-blue-600 hover:bg-gray-50 text-center block py-4 px-8 text-lg font-bold rounded-lg shadow-xl transition-colors">
                    Get Started For Free
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to="/features" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white text-center block py-4 px-8 text-lg font-bold rounded-lg shadow-xl transition-colors">
                    See How It Works
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-white text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-1">
                  <span className="text-yellow-300 text-base">★★★★★</span>
                </div>
                <span>4.4/5 based on 750+ G2 reviews</span>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Main Image */}
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
                  <img 
                    src={`${process.env.PUBLIC_URL}/Gemini_Generated_Image_5sid5e5sid5e5sid.png`}
                    alt="LinkedIn Contact Extraction - Leadgenix" 
                    className="rounded-xl w-full shadow-2xl"
                  />
                </div>
                
                {/* Floating Integration Badges */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {/* Salesforce Logo */}
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10.006 5.413a4.904 4.904 0 013.043-1.017c1.984 0 3.69 1.175 4.479 2.87a5.806 5.806 0 011.545-.21c3.27 0 5.927 2.657 5.927 5.927 0 3.27-2.657 5.927-5.927 5.927H8.927C5.657 18.91 3 16.253 3 12.983c0-3.103 2.388-5.645 5.42-5.897a4.87 4.87 0 011.586-1.673z"/>
                        </svg>
                      </div>
                      
                      {/* HubSpot Logo */}
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center border-2 border-white shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.164 7.93V5.084a2.198 2.198 0 00.665-1.576A2.198 2.198 0 0016.632 1.31c-1.214 0-2.197.983-2.197 2.197 0 .603.244 1.151.638 1.548v2.876a4.583 4.583 0 00-2.725 1.023L8.79 6.39a1.833 1.833 0 10-1.203 1.201l3.558 3.563a4.615 4.615 0 00-.124 1.045 4.616 4.616 0 009.232 0 4.616 4.616 0 00-2.09-3.868z"/>
                        </svg>
                      </div>
                      
                      {/* Pipedrive Logo */}
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center border-2 border-white shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.5 2.158a6.32 6.32 0 00-1.757.267 6.417 6.417 0 00-4.992 6.263 6.417 6.417 0 006.417 6.417c3.15 0 5.733-2.267 6.288-5.267h-3.48a3.397 3.397 0 01-2.808 1.483 3.417 3.417 0 110-6.833c.933 0 1.758.383 2.358.983h3.908A6.393 6.393 0 0017.5 2.158zm-10 7.217a6.417 6.417 0 006.417 6.417c.817 0 1.6-.15 2.325-.433v5.433c0 .625-.508 1.125-1.125 1.125H4.125c-.617 0-1.125-.5-1.125-1.125V8.688c0-.617.508-1.125 1.125-1.125h3.375z"/>
                        </svg>
                      </div>
                      
                      {/* LinkedIn Logo */}
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-white shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      
                      {/* Zapier Logo */}
                      <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center border-2 border-white shadow-lg">
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.905 7.982L13.65 11.24h3.938v1.52H13.65l3.255 3.258-1.072 1.072-3.258-3.255v3.938h-1.52v-3.938l-3.258 3.255-1.072-1.072 3.255-3.258H6.412v-1.52H10.35L7.095 7.982l1.072-1.072 3.258 3.255V6.227h1.52v3.938l3.258-3.255 1.072 1.072z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-gray-900">20+ Integrations</p>
                      <p className="text-gray-600 text-xs">Sync with your CRM</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-blue rounded-full filter blur-[150px] opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-violet rounded-full filter blur-[150px] opacity-20"></div>
        </div>
      </section>

      {/* Stats Section - Kaspr Style */}
      <section className="py-16 bg-white border-b">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">500M+</h3>
              <p className="text-gray-700 text-sm font-medium">Verified Contacts</p>
            </motion.div>
            <motion.div variants={itemVariants} className="border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">150+</h3>
              <p className="text-gray-700 text-sm font-medium">Data Sources</p>
            </motion.div>
            <motion.div variants={itemVariants} className="border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">10,000+</h3>
              <p className="text-gray-700 text-sm font-medium">Active Users</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">98%</h3>
              <p className="text-gray-700 text-sm font-medium">Data Accuracy</p>
            </motion.div>
          </motion.div>
          
          {/* Integration Logos */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-600 text-sm font-semibold mb-6">INTEGRATES WITH YOUR FAVORITE TOOLS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="text-gray-600 font-bold text-xl">Salesforce</div>
              <div className="text-gray-600 font-bold text-xl">HubSpot</div>
              <div className="text-gray-600 font-bold text-xl">Pipedrive</div>
              <div className="text-gray-600 font-bold text-xl">LinkedIn</div>
              <div className="text-gray-600 font-bold text-xl">Zapier</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Lead Generation Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to find, engage, and convert your ideal B2B customers in one platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Leadgenix Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple 3-step process to transform your B2B prospecting
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/3 left-0 w-full h-0.5 bg-gray-200"></div>
            
            {/* Step 1 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg relative z-10 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-bold flex items-center justify-center mb-6 mx-auto shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Define Your Ideal Customer</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Use our advanced filters to create detailed targeting criteria based on industry, company size, role, and more.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg relative z-10 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xl font-bold flex items-center justify-center mb-6 mx-auto shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Get Verified Contact Data</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Access accurate contact information including emails, direct phone numbers, and LinkedIn profiles.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg relative z-10 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white text-xl font-bold flex items-center justify-center mb-6 mx-auto shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Connect and Convert</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Export leads to your CRM or use our built-in tools to launch personalized outreach campaigns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is LeadGenix for - Kaspr Style */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who is LeadGenix for</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by sales teams, recruiters, and founders worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales Teams */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sales</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sales teams use LeadGenix to hit quota. Use our accurate contact data and all-in-one prospecting solution to book more meetings with the right decision makers and close more deals.
              </p>
              <Link to="/signup" className="text-blue-600 font-semibold hover:text-purple-600 transition-colors inline-flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Recruiters */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Recruitment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Recruiters use LeadGenix to find top talent and start conversations with more hiring managers. Build your book of business and integrate with the rest of your tech stack.
              </p>
              <Link to="/signup" className="text-blue-600 font-semibold hover:text-purple-600 transition-colors inline-flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Founders */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-green to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Founders</h3>
              <p className="text-gray-600 mb-6">
                Founders use LeadGenix to win new logos and grow their business. Manage all your leads in one place and connect with the right prospects easily with data you can trust.
              </p>
              <Link to="/signup" className="text-primary-blue font-semibold hover:text-primary-violet transition-colors inline-flex items-center">
                Learn more 
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied sales and marketing teams worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default Home;