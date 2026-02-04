import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DashboardSettings = () => {
  // User settings state
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    jobTitle: 'Marketing Director',
    company: 'Acme Corp'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    leadUpdates: true,
    newFeatures: true,
    marketingEmails: false
  });

  const [appearance, setAppearance] = useState('light');
  const [timezone, setTimezone] = useState('America/New_York');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle personal info form changes
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle notification toggles
  const handleNotificationToggle = (setting) => {
    setNotifications(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  // Handle form submissions
  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    // Here would be API call to update user info
    setSuccessMessage('Personal information updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleNotificationsSubmit = (e) => {
    e.preventDefault();
    // Here would be API call to update notification settings
    setSuccessMessage('Notification preferences updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Here would be API call to change password
    setSuccessMessage('Password changed successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
    
    // Reset form
    e.target.reset();
  };

  const handleAppearanceChange = (e) => {
    setAppearance(e.target.value);
    // Here would be logic to change app theme
    setSuccessMessage('Display settings updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };
  
  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
    // Here would be API call to update timezone
    setSuccessMessage('Timezone updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </div>

      {successMessage && (
        <motion.div 
          className="bg-green-50 border-l-4 border-green-400 p-4 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <p className="text-green-800">{successMessage}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="lg:col-span-2">
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
            <form onSubmit={handlePersonalInfoSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    value={personalInfo.jobTitle}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    value={personalInfo.company}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-violet transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>

          {/* Password Change */}
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange}>
              <div className="space-y-4 mb-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-violet transition-colors"
                >
                  Update Password
                </button>
              </div>
            </form>
          </motion.div>

          {/* Notification Settings */}
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
            <form onSubmit={handleNotificationsSubmit}>
              <div className="space-y-4 mb-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="emailAlerts"
                      type="checkbox"
                      className="focus:ring-primary-blue h-4 w-4 text-primary-blue border-gray-300 rounded"
                      checked={notifications.emailAlerts}
                      onChange={() => handleNotificationToggle('emailAlerts')}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="emailAlerts" className="font-medium text-gray-700">Email Alerts</label>
                    <p className="text-gray-500">Receive email notifications when leads match your criteria.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="leadUpdates"
                      type="checkbox"
                      className="focus:ring-primary-blue h-4 w-4 text-primary-blue border-gray-300 rounded"
                      checked={notifications.leadUpdates}
                      onChange={() => handleNotificationToggle('leadUpdates')}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="leadUpdates" className="font-medium text-gray-700">Lead Updates</label>
                    <p className="text-gray-500">Get notified when lead information is updated or enriched.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newFeatures"
                      type="checkbox"
                      className="focus:ring-primary-blue h-4 w-4 text-primary-blue border-gray-300 rounded"
                      checked={notifications.newFeatures}
                      onChange={() => handleNotificationToggle('newFeatures')}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newFeatures" className="font-medium text-gray-700">New Features</label>
                    <p className="text-gray-500">Receive updates about new features and improvements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="marketingEmails"
                      type="checkbox"
                      className="focus:ring-primary-blue h-4 w-4 text-primary-blue border-gray-300 rounded"
                      checked={notifications.marketingEmails}
                      onChange={() => handleNotificationToggle('marketingEmails')}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="marketingEmails" className="font-medium text-gray-700">Marketing Emails</label>
                    <p className="text-gray-500">Receive occasional promotional content and offers.</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-blue text-white rounded-md hover:bg-primary-violet transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Display Settings and Danger Zone */}
        <div>
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Display Settings</h2>
            <div className="space-y-4 mb-4">
              <div>
                <label htmlFor="appearance" className="block text-sm font-medium text-gray-700 mb-1">
                  Theme
                </label>
                <select
                  id="appearance"
                  name="appearance"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                  value={appearance}
                  onChange={handleAppearanceChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System Default</option>
                </select>
              </div>
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select
                  id="timezone"
                  name="timezone"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue sm:text-sm"
                  value={timezone}
                  onChange={handleTimezoneChange}
                >
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Europe/Paris">Paris (CET)</option>
                  <option value="Asia/Tokyo">Tokyo (JST)</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Danger Zone */}
          <motion.div 
            className="bg-white rounded-lg shadow-sm p-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-md">
                <h3 className="text-base font-medium text-red-800">Delete Account</h3>
                <p className="mt-1 text-sm text-red-700">
                  Once you delete your account, all of your data will be permanently removed. This action cannot be undone.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
              <div className="p-4 bg-orange-50 rounded-md">
                <h3 className="text-base font-medium text-orange-800">Export Data</h3>
                <p className="mt-1 text-sm text-orange-700">
                  Download all your data including leads, settings and usage history.
                </p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-white border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors"
                  >
                    Export All Data
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;