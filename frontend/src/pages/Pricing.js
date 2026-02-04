import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import CtaSection from '../components/CtaSection';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Pricing data
  const pricingPlans = [
    {
      title: "Starter",
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        "50 lead searches per month",
        "10 contact exports per month",
        "Basic lead filtering",
        "Email support",
        "Single user"
      ],
      isPopular: false
    },
    {
      title: "Professional",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "500 lead searches per month",
        "100 contact exports per month",
        "Advanced lead filtering",
        "Data enrichment",
        "Email & chat support",
        "Up to 3 users"
      ],
      isPopular: true
    },
    {
      title: "Business",
      monthlyPrice: 249,
      yearlyPrice: 199,
      features: [
        "Unlimited lead searches",
        "Unlimited contact exports",
        "Advanced lead filtering",
        "Bulk data enrichment",
        "API access",
        "Priority support",
        "Up to 10 users"
      ],
      isPopular: false
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to get started."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be effective immediately and we'll prorate your charges."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For annual Business plans, we can also accept bank transfers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees or hidden charges. The price you see is the price you pay."
    },
    {
      question: "How accurate is your data?",
      answer: "We pride ourselves on maintaining a 98% data accuracy rate. Our database is continuously updated and verified through multiple sources."
    },
    {
      question: "Do you offer custom plans for larger teams?",
      answer: "Yes, we offer custom Enterprise plans for larger teams with specific needs. Contact our sales team for more information."
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the plan that's right for your business. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="mb-12">
            {/* Billing toggle */}
            <div className="flex justify-center items-center mb-8">
              <button 
                className={`px-4 py-2 rounded-l-md ${
                  billingPeriod === 'monthly' 
                    ? 'bg-primary-blue text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-4 py-2 rounded-r-md ${
                  billingPeriod === 'yearly' 
                    ? 'bg-primary-blue text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly <span className="text-xs font-medium ml-1 bg-primary-green text-white py-0.5 px-1 rounded">Save 20%</span>
              </button>
            </div>
            
            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  period={billingPeriod === 'monthly' ? 'month' : 'month, billed yearly'}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
          
          {/* Enterprise plan */}
          <motion.div
            className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">For large teams and organizations with specific requirements</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited everything</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-primary-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <button className="btn-primary py-3 px-8">Contact Sales</button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our pricing and policies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Money-back guarantee */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <svg className="h-12 w-12 text-primary-green mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600">
              If you're not satisfied with Leadgenix for any reason, simply let us know within 30 days and we'll refund your payment. No questions asked.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection 
        title="Ready to start generating quality leads?"
        subtitle="Join thousands of businesses that use Leadgenix to grow their sales pipeline."
        primaryBtnText="Start Your Free Trial"
      />
    </>
  );
};

export default Pricing;