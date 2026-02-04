import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="h-14 w-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center mb-4 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;