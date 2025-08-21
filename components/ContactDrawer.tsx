'use client';

import { useState, useEffect } from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    website: '',
    size: '',
    revenue: '',
    budget: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={onClose} 
      />
      
      {/* Drawer Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-full md:w-[700px] bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-10 border-b border-gray-200">
            <h2 className="text-3xl font-semibold text-gray-900">Tell us where you&apos;re at</h2>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close drawer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-600"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Form Content - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-10">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">What is your name?</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-base"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">What is your email?</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-base"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">What is your role in the company?</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-base"
                    placeholder="Enter role"
                    required
                  />
                </div>

                {/* Company Name and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-base"
                      placeholder="Enter company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Company Website</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all text-base"
                      placeholder="Enter company website"
                    />
                  </div>
                </div>

                {/* Company Size and Revenue */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Company Size</label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                      required
                    >
                      <option value="">Select company size</option>
                      <option value="<20">Less than 20</option>
                      <option value="20-50">20-50</option>
                      <option value="50-200">50-200</option>
                      <option value="200-500">200-500</option>
                      <option value=">500">More than 500</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">Company&apos;s Annual Revenue</label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                    >
                      <option value="">Select revenue range</option>
                      <option value="<100K">Less than $100K</option>
                      <option value="100K-500K">$100K-$500K</option>
                      <option value="500K-1M">$500K-$1M</option>
                      <option value="1M-2M">$1M-$2M</option>
                      <option value=">2M">More than $2M</option>
                    </select>
                  </div>
                </div>

                {/* Project Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Project budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                  >
                    <option value="">Select budget range</option>
                    <option value="<5K">Less than $5K</option>
                    <option value="5K-20K">$5K-$20K</option>
                    <option value="20K-100K">$20K-$100K</option>
                    <option value=">100K">More than $100K</option>
                  </select>
                </div>

                {/* Services */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">What services are you interested in?</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                    required
                  >
                    <option value="">Select service</option>
                    <option value="identifying">Identifying AI opportunities</option>
                    <option value="developing">Developing custom AI solutions</option>
                    <option value="scaling">Scaling through AI</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 resize-none transition-all text-base"
                    placeholder="Message"
                    rows={8}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium text-lg"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
