import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ReferralForm({ onClose }) {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your referral logic here
    console.log('Referral details:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Referral Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
          {/* Referrer Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Referrer Details</h3>
            <div>
              <label htmlFor="referrerName" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="referrerName"
                name="referrerName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={formData.referrerName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="referrerEmail" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="referrerEmail"
                name="referrerEmail"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={formData.referrerEmail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="referrerPhone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                id="referrerPhone"
                name="referrerPhone"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={formData.referrerPhone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Referee Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Referee Details</h3>
            <div>
              <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="refereeName"
                name="refereeName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={formData.refereeName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="refereeEmail"
                name="refereeEmail"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={formData.refereeEmail}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="refereePhone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                id="refereePhone"
                name="refereePhone"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={formData.refereePhone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ReferralForm.propTypes = {
  onClose: PropTypes.func.isRequired
}; 