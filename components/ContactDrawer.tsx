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
      <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`drawer-panel ${isOpen ? 'open' : ''}`}>
        <div className="px-4 md:px-6 pt-0 pb-[1.75rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl md:text-4xl font-medium text-black">Tell us where you&apos;re at</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close drawer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-4 py-1 md:px-6 md:py-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 (2 cols): Name / Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">What is your name?</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">What is your email?</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
            </div>

            {/* Row 2 (1 col): Role */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">What is your role in the company?</label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="border w-full px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Row 3 (2 cols): Company Name / Company Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="border w-full px-4 py-2 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Company Website</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="border w-full px-4 py-2 rounded-md"
                />
              </div>
            </div>

            {/* Row 4 (2 cols): Company Size / Company's Annual Revenue */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Company Size</label>
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="border w-full px-4 py-2 rounded-md"
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
                <label className="block text-sm font-medium text-black mb-2">Company&apos;s Annual Revenue</label>
                <select
                  value={formData.revenue}
                  onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                  className="border w-full px-4 py-2 rounded-md"
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

            {/* Row 5 (1 col): Project budget */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Project budget</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="border w-full px-4 py-2 rounded-md"
              >
                <option value="">Select budget range</option>
                <option value="<5K">Less than $5K</option>
                <option value="5K-20K">$5K-$20K</option>
                <option value="20K-100K">$20K-$100K</option>
                <option value=">100K">More than $100K</option>
              </select>
            </div>

            {/* Row 6 (1 col): What services are you interested in? */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">What services are you interested in?</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="border w-full px-4 py-2 rounded-md"
                required
              >
                <option value="">Select service</option>
                <option value="identifying">Identifying AI Opportunities</option>
                <option value="developing">Developing Custom AI Solutions</option>
                <option value="scaling">Scaling Through AI</option>
              </select>
            </div>

            {/* Row 7 (1 col): Message */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border w-full px-4 py-2 rounded-md resize-none"
                rows={7}
                required
              />
            </div>

            <button
              type="submit"
              className="w-fit cursor-pointer rounded-full border border-black px-4 py-2 text-black"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
