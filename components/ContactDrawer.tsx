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

  console.log('ContactDrawer render - isOpen:', isOpen);

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
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-[9998]" 
            onClick={onClose}
          />
          
          {/* Drawer Panel - dark theme inside */}
          <div 
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white transform transition-all duration-300 ease-in-out z-[9999] translate-x-0"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-8 border-b border-white/10">
              <h2 className="text-2xl font-medium text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Tell us where you&apos;re at
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close drawer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-neutral-300"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="h-[calc(100vh-120px)] overflow-y-auto">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        What is your name?
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent placeholder-white/40 transition-all duration-200"
                        placeholder="Name"
                        required
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        What is your email?
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent placeholder-white/40 transition-all duration-200"
                        placeholder="Email"
                        required
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Row 2: Role */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      What is your role in the company?
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent placeholder-white/40 transition-all duration-200"
                      placeholder="Enter role"
                      required
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </div>

                  {/* Row 3: Company Name and Website */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent placeholder-white/40 transition-all duration-200"
                        placeholder="Enter company name"
                        required
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Company Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent placeholder-white/40 transition-all duration-200"
                        placeholder="Enter company website"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                  </div>

                  {/* Row 4: Company Size and Revenue */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Company Size
                      </label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all duration-200"
                        required
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
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
                      <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Company&apos;s Annual Revenue
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all duration-200"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
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

                  {/* Row 5: Project Budget */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Project budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all duration-200"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select budget range</option>
                      <option value="<5K">Less than $5K</option>
                      <option value="5K-20K">$5K-$20K</option>
                      <option value="20K-100K">$20K-$100K</option>
                      <option value=">100K">More than $100K</option>
                    </select>
                  </div>

                  {/* Row 6: Services */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      What services are you interested in?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent transition-all duration-200"
                      required
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="">Select service</option>
                      <option value="identifying">Identifying AI opportunities</option>
                      <option value="developing">Developing custom AI solutions</option>
                      <option value="scaling">Scaling through AI</option>
                    </select>
                  </div>

                  {/* Row 7: Message */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent placeholder-white/40 resize-none transition-all duration-200"
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}