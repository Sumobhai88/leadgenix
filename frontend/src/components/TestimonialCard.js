import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, position, company, quote, image, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image || "https://via.placeholder.com/48x48"} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
      <div className="relative">
        <svg 
          className="absolute -top-2 -left-2 h-8 w-8 text-gray-200" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
        </svg>
        <p className="text-gray-700 italic ml-4">{quote}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;