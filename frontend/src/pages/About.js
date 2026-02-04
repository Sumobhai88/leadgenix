import React from 'react';
import { motion } from 'framer-motion';
import CtaSection from '../components/CtaSection';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "CEO & Co-founder",
      bio: "Former VP of Sales at TechGiant. 15+ years experience in B2B sales and marketing.",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Sophia Chen",
      role: "CTO & Co-founder",
      bio: "Ex-Google engineer with expertise in data science and machine learning.",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Marcus Johnson",
      role: "VP of Product",
      bio: "Product leader with experience at multiple successful SaaS startups.",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Marketing",
      bio: "Digital marketing specialist with a track record of scaling B2B SaaS companies.",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ];

  // Company values data
  const companyValues = [
    {
      title: "Data Quality",
      description: "We're obsessed with providing the most accurate and up-to-date information possible.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your business goals.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Privacy First",
      description: "We respect data privacy and maintain the highest standards of ethical data collection.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Continuous Innovation",
      description: "We're always improving and expanding our platform to meet evolving customer needs.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Leadgenix
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're transforming how B2B companies find and connect with their ideal customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, Leadgenix was born out of frustration with the existing B2B prospecting tools on the market. Our founders, Alex and Sophia, experienced firsthand the challenges of finding accurate contact data while working in sales and engineering roles at their previous companies.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                They set out to build a solution that would provide sales teams with highly accurate contact data, powerful search capabilities, and seamless integration with existing workflows.
              </p>
              <p className="text-lg text-gray-600">
                Today, Leadgenix serves over 5,000 companies worldwide, from fast-growing startups to Fortune 500 enterprises, helping them connect with their ideal customers more effectively.
              </p>
            </motion.div>
            
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Leadgenix office" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Leadgenix
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-violet mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to transforming B2B prospecting
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-violet font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 text-primary-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Series B Funding</h3>
                    <p className="text-gray-600">Raised $25M in Series B funding to accelerate product development and international expansion.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-primary-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Customer Growth</h3>
                    <p className="text-gray-600">Reached the milestone of 5,000+ customers worldwide, with a 95% retention rate.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-primary-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Industry Recognition</h3>
                    <p className="text-gray-600">Named "Best B2B Sales Tool" by TechAwards and featured in Forbes' "Top 50 SaaS Companies to Watch."</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 text-primary-violet">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Global Expansion</h3>
                    <p className="text-gray-600">Opened offices in London, Singapore, and Sydney to better serve our international customers.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">5,000+</div>
                <p className="text-gray-600">Global Customers</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary-violet mb-2">150+</div>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary-green mb-2">10M+</div>
                <p className="text-gray-600">B2B Contacts</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">20+</div>
                <p className="text-gray-600">Countries</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection 
        title="Want to be part of our journey?"
        subtitle="We're always looking for talented individuals to join our team."
        primaryBtnText="View Open Positions"
        primaryBtnLink="/careers"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="/contact"
      />
    </>
  );
};

export default About;