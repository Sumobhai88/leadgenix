import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CtaSection = ({ 
  title = "Ready to grow your business with qualified leads?", 
  subtitle = "Start finding your ideal prospects today with Leadgenix.", 
  primaryBtnText = "Start Free Trial", 
  primaryBtnLink = "/signup",
  secondaryBtnText = "Learn More",
  secondaryBtnLink = "/features"
}) => {
  return (
    <section className="bg-gradient-to-r from-primary-blue to-primary-violet py-16 md:py-24">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to={primaryBtnLink} 
                className="btn bg-white text-primary-blue hover:bg-gray-100 hover:shadow-lg px-8 py-3 font-semibold"
              >
                {primaryBtnText}
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to={secondaryBtnLink} 
                className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 font-semibold"
              >
                {secondaryBtnText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;