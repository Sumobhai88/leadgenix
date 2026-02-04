import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingCard = ({ 
  title, 
  price, 
  period = 'monthly', 
  features, 
  isPopular = false,
  buttonText = 'Get Started',
  buttonLink = '/signup',
  delay = 0 
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden ${
        isPopular ? 'shadow-xl border-2 border-primary-violet' : 'shadow-md'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {isPopular && (
        <div className="bg-primary-violet text-white py-1 px-4 text-center text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">/{period}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-6 w-6 text-primary-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link 
            to={buttonLink} 
            className={`w-full py-3 text-center font-medium rounded-md block ${
              isPopular 
                ? 'bg-gradient-to-r from-primary-blue to-primary-violet text-white hover:shadow-lg' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingCard;