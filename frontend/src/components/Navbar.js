import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeAllDropdowns = () => {
    setFeaturesOpen(false);
    setSolutionsOpen(false);
    setResourcesOpen(false);
  };

  const navLinkClasses = ({ isActive }) => 
    `font-medium px-4 py-2 rounded-md transition-all ${
      isActive 
        ? 'text-primary-blue font-semibold' 
        : 'text-gray-700 hover:text-primary-blue'
    }`;

  const dropdownItemClasses = "block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-blue transition-colors rounded-md";

  return (
    <motion.header 
      className="bg-white shadow-sm sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={closeAllDropdowns}>
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-violet rounded-lg flex items-center justify-center text-white font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              LG
            </motion.div>
            <span className="text-xl font-poppins font-bold bg-gradient-to-r from-primary-blue to-primary-violet bg-clip-text text-transparent">
              Leadgenix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {/* Features Dropdown */}
            <div className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button className="font-medium px-4 py-2 rounded-md transition-all text-gray-700 hover:text-primary-blue flex items-center gap-1">
                Features
                <svg className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    <Link to="/features" className={dropdownItemClasses}>
                      <div className="font-semibold">All Features</div>
                      <div className="text-xs text-gray-500 mt-1">Complete feature overview</div>
                    </Link>
                    <Link to="/chrome-extension" className={dropdownItemClasses}>
                      <div className="font-semibold">Chrome Extension</div>
                      <div className="text-xs text-gray-500 mt-1">LinkedIn contact extraction</div>
                    </Link>
                    <Link to="/integrations" className={dropdownItemClasses}>
                      <div className="font-semibold">Integrations</div>
                      <div className="text-xs text-gray-500 mt-1">Connect with your CRM</div>
                    </Link>
                    <Link to="/dashboard" className={dropdownItemClasses}>
                      <div className="font-semibold">Data Enrichment</div>
                      <div className="text-xs text-gray-500 mt-1">Enhance your contact data</div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="font-medium px-4 py-2 rounded-md transition-all text-gray-700 hover:text-primary-blue flex items-center gap-1">
                Solutions
                <svg className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    <div className={dropdownItemClasses}>
                      <div className="font-semibold">For Sales Teams</div>
                      <div className="text-xs text-gray-500 mt-1">Build targeted prospect lists</div>
                    </div>
                    <div className={dropdownItemClasses}>
                      <div className="font-semibold">For Recruiters</div>
                      <div className="text-xs text-gray-500 mt-1">Find top talent faster</div>
                    </div>
                    <div className={dropdownItemClasses}>
                      <div className="font-semibold">For Marketing</div>
                      <div className="text-xs text-gray-500 mt-1">Generate quality leads</div>
                    </div>
                    <div className={dropdownItemClasses}>
                      <div className="font-semibold">For Founders</div>
                      <div className="text-xs text-gray-500 mt-1">Grow your business network</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/pricing" className={navLinkClasses} onClick={closeAllDropdowns}>Data</NavLink>
            <NavLink to="/pricing" className={navLinkClasses} onClick={closeAllDropdowns}>Pricing</NavLink>

            {/* Resources Dropdown */}
            <div className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="font-medium px-4 py-2 rounded-md transition-all text-gray-700 hover:text-primary-blue flex items-center gap-1">
                Resources
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    <Link to="/about" className={dropdownItemClasses}>
                      <div className="font-semibold">About Us</div>
                      <div className="text-xs text-gray-500 mt-1">Learn our story</div>
                    </Link>
                    <Link to="/contact" className={dropdownItemClasses}>
                      <div className="font-semibold">Contact</div>
                      <div className="text-xs text-gray-500 mt-1">Get in touch with us</div>
                    </Link>
                    <div className={dropdownItemClasses}>
                      <div className="font-semibold">Blog</div>
                      <div className="text-xs text-gray-500 mt-1">Latest insights & tips</div>
                    </div>
                    <div className={dropdownItemClasses}>
                      <div className="font-semibold">Help Center</div>
                      <div className="text-xs text-gray-500 mt-1">FAQs and guides</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
            {currentUser ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to="/dashboard" className="px-6 py-2 bg-primary-blue hover:bg-blue-600 text-white rounded-full font-medium transition-all" onClick={closeAllDropdowns}>Dashboard</Link>
                </motion.div>
                <motion.button 
                  className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-primary-blue hover:text-primary-blue font-medium transition-all"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    logout();
                    closeAllDropdowns();
                  }}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <button 
                  className="px-4 py-2 text-gray-700 hover:text-primary-blue font-medium transition-colors whitespace-nowrap"
                  onClick={() => navigate('/login')}
                >
                  Demo
                </button>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link 
                    to="/login" 
                    className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-primary-blue hover:text-primary-blue font-medium transition-all whitespace-nowrap"
                    onClick={closeAllDropdowns}
                  >
                    Sign in
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link 
                    to="/signup" 
                    className="px-6 py-2.5 bg-primary-blue hover:bg-blue-600 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap"
                    onClick={closeAllDropdowns}
                  >
                    Get started for free
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
                <NavLink to="/" className={navLinkClasses} onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/features" className={navLinkClasses} onClick={toggleMenu}>Features</NavLink>
                <NavLink to="/chrome-extension" className={navLinkClasses} onClick={toggleMenu}>Chrome Extension</NavLink>
                <NavLink to="/integrations" className={navLinkClasses} onClick={toggleMenu}>Integrations</NavLink>
                <NavLink to="/pricing" className={navLinkClasses} onClick={toggleMenu}>Pricing</NavLink>
                <NavLink to="/about" className={navLinkClasses} onClick={toggleMenu}>About</NavLink>
                <NavLink to="/contact" className={navLinkClasses} onClick={toggleMenu}>Contact</NavLink>
                
                {currentUser ? (
                  <>
                    <NavLink to="/dashboard" className="btn-primary text-center mt-4" onClick={toggleMenu}>
                      Dashboard
                    </NavLink>
                    <button 
                      className="btn-secondary text-center" 
                      onClick={() => {
                        logout();
                        toggleMenu();
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="btn-secondary text-center mt-4"
                      onClick={() => {
                        navigate('/login');
                        toggleMenu();
                      }}
                    >
                      Demo
                    </button>
                    <NavLink to="/login" className="btn-secondary text-center" onClick={toggleMenu}>
                      Sign in
                    </NavLink>
                    <NavLink to="/signup" className="bg-primary-blue hover:bg-blue-600 text-white py-3 px-6 rounded-full font-medium text-center transition-all" onClick={toggleMenu}>
                      Get started for free
                    </NavLink>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;