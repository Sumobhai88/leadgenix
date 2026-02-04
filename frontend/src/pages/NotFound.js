import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-violet"
            >
              404
            </motion.div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="btn-primary py-3 px-8 inline-block">
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;