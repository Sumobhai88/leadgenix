import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import CtaSection from '../components/CtaSection';

const Features = () => {
  // Main features data
  const mainFeatures = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Advanced Lead Search",
      description: "Find your ideal prospects with powerful filtering by industry, role, company size, and more."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Data Enrichment",
      description: "Enhance your existing contact data with verified email addresses, phone numbers, and social profiles."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Real-Time Updates",
      description: "Stay informed with the latest contact changes and job moves within your target accounts."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Performance Analytics",
      description: "Track engagement and conversion rates to optimize your outreach campaigns."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: "Bulk Export",
      description: "Export leads to CSV, Excel, or directly to your CRM with just one click."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "API Access",
      description: "Integrate Leadgenix data directly into your workflow with our developer-friendly API."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Data Privacy Compliance",
      description: "All data collection and usage is fully compliant with GDPR, CCPA, and other privacy regulations."
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Custom Filters",
      description: "Create and save custom search filters to quickly find the leads that match your specific criteria."
    }
  ];

  // Feature detail sections
  const featureDetails = [
    {
      title: "Advanced Lead Search",
      description: "Find the perfect prospects for your business with our powerful search capabilities.",
      image: "https://via.placeholder.com/600x400",
      points: [
        "Filter by industry, company size, job title, location, and more",
        "Boolean search for complex queries",
        "Save and share search results with your team",
        "Get real-time recommendations based on your search history"
      ],
      imageLeft: false
    },
    {
      title: "Data Enrichment",
      description: "Transform basic contact lists into comprehensive prospect profiles with our data enrichment tools.",
      image: "https://via.placeholder.com/600x400",
      points: [
        "Upload your existing lead lists for instant enrichment",
        "Fill in missing contact details and update outdated information",
        "Add social media profiles, company details, and more",
        "Verify email deliverability in real-time"
      ],
      imageLeft: true
    },
    {
      title: "API Integration",
      description: "Seamlessly connect Leadgenix with your existing tools and workflows.",
      image: "https://via.placeholder.com/600x400",
      points: [
        "RESTful API with comprehensive documentation",
        "Webhooks for real-time data updates",
        "Pre-built integrations with popular CRMs",
        "Custom integration support from our development team"
      ],
      imageLeft: false
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features to Supercharge Your Sales
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how Leadgenix helps you find, enrich, and connect with your ideal B2B prospects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">All-In-One Prospecting Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to find, engage, and convert your ideal B2B customers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail Sections */}
      {featureDetails.map((feature, index) => (
        <section key={index} className={index % 2 === 0 ? "py-20 bg-gray-50" : "py-20 bg-white"}>
          <div className="container-custom">
            <div className={`flex flex-col ${feature.imageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: feature.imageLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="rounded-lg shadow-lg w-full"
                />
              </motion.div>
              
              <motion.div 
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: feature.imageLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-6 w-6 text-primary-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Works With Your Favorite Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly integrate Leadgenix with your existing tech stack
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-sm w-full h-24 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  Integration Logo {item}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection 
        title="Ready to explore all these features?"
        subtitle="Start your free 14-day trial today. No credit card required."
      />
    </>
  );
};

export default Features;