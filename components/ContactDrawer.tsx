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

  // Debug logging
  useEffect(() => {
    console.log('ContactDrawer: isOpen prop changed to:', isOpen);
  }, [isOpen]);

  useEffect(() => {
    console.log('ContactDrawer: Component rendered with isOpen:', isOpen);
    console.log('ContactDrawer: Component DOM element should be visible:', isOpen);
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
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
      {/* Debug element - remove after testing */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'red',
        color: 'white',
        padding: '5px',
        zIndex: 10000,
        fontSize: '12px'
      }}>
        Drawer: {isOpen ? 'OPEN' : 'CLOSED'}
      </div>

      {/* Always visible debug panel to test if component renders */}
      <div style={{
        position: 'fixed',
        top: '50px',
        right: '10px',
        background: 'lime',
        color: 'black',
        padding: '10px',
        zIndex: 10000,
        fontSize: '14px',
        border: '2px solid black'
      }}>
        Component is rendering!<br/>
        isOpen: {String(isOpen)}<br/>
        Time: {new Date().toLocaleTimeString()}
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-[#1C1B1C]/80 backdrop-blur-[2px] transition-opacity z-[9998] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
        onClick={() => { console.log('Backdrop clicked'); onClose(); }}
        style={{
          border: isOpen ? '3px solid blue' : 'none', // Debug border for backdrop
          background: isOpen ? 'rgba(0, 0, 255, 0.3)' : 'rgba(0, 0, 0, 0)', // Debug background
          visibility: isOpen ? 'visible' : 'hidden' // Ensure backdrop visibility
        }}
      />

      {/* Panel container (slide in) */}
      <div
        className={`fixed right-0 top-0 h-[95vh] md:h-[100vh] w-full lg:w-[40vw] px-2 pb-4 flex items-center justify-center text-black transition-all duration-300 ease-in-out z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        style={{
          border: isOpen ? '3px solid red' : 'none', // Debug border
          background: isOpen ? 'rgba(255, 0, 0, 0.1)' : 'transparent', // Debug background
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)', // Force transform
          visibility: isOpen ? 'visible' : 'hidden' // Ensure visibility
        }}
      >
        {/* Panel */}
        <div className="shadow-2xl rounded-xl w-[96%] md:w-[98%] lg:w-full h-[90%] bg-[#EDECE4] overflow-hidden">
          {/* Debug header */}
          <div style={{ background: 'red', color: 'white', padding: '5px', textAlign: 'center' }}>
            DEBUG: Drawer is {isOpen ? 'OPEN' : 'CLOSED'} - Content should be visible
          </div>
          
          {/* Header */}
          <div className="flex flex-col px-4 md:px-6 py-2">
            <div className="flex flex-row justify-end">
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-gray-600" fill="currentColor">
                  <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </button>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium pt-0 pb-[1.75rem] text-left">Tell us where you're at</h2>
          </div>

          {/* Scrollable content */}
          <div className="h-[calc(100%-56px)] overflow-y-auto px-4 py-1 md:px-6 md:py-2">
            <form onSubmit={handleSubmit} className="flex h-full w-full flex-col gap-4 pr-1 md:pr-0" action="#">
              {/* Row 1 */}
              <div className="flex w-full flex-col gap-2 lg:flex-row">
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label className="text-md font-medium">What is your name?</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-b border-black/40 bg-transparent outline-none py-2"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label className="text-md font-medium">What is your email?</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b border-black/40 bg-transparent outline-none py-2"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Role */}
              <div className="flex w-full flex-col gap-2">
                <label className="text-md font-medium">What is your role in the company?</label>
                <input
                  type="text"
                  placeholder="Enter role"
                  className="border-b border-black/40 bg-transparent outline-none py-2"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>

              {/* Company name / website */}
              <div className="flex w-full flex-col gap-2 lg:flex-row">
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label className="text-md font-medium">Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="border-b border-black/40 bg-transparent outline-none py-2"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label className="text-md font-medium">Company Website</label>
                  <input
                    type="url"
                    placeholder="Enter company website"
                    className="border-b border-black/40 bg-transparent outline-none py-2"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </div>

              {/* Size / Revenue */}
              <div className="flex w-full flex-col gap-2 lg:flex-row">
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label className="text-md font-medium">Company Size</label>
                  <select
                    className="border-b border-black/40 bg-transparent outline-none py-2"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  >
                    <option value="">Select company size</option>
                    <option value="<20">Less than 20</option>
                    <option value="20-50">20-50</option>
                    <option value="50-200">50-200</option>
                    <option value="200-500">200-500</option>
                    <option value=">500">More than 500</option>
                  </select>
                </div>
                <div className="flex w-full flex-col gap-2 lg:w-1/2">
                  <label className="text-md font-medium">Company's Annual Revenue</label>
                  <select
                    className="border-b border-black/40 bg-transparent outline-none py-2"
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
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

              {/* Budget */}
              <div className="flex w-full flex-col gap-2">
                <label className="text-md font-medium">Project budget</label>
                <select
                  className="border-b border-black/40 bg-transparent outline-none py-2"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="">Select budget range</option>
                  <option value="<5K">Less than $5K</option>
                  <option value="5K-20K">$5K-$20K</option>
                  <option value="20K-100K">$20K-$100K</option>
                  <option value=">100K">More than $100K</option>
                </select>
              </div>

              {/* Services */}
              <div className="flex w-full flex-col gap-2">
                <label className="text-md font-medium">What services are you interested in?</label>
                <select
                  className="border-b border-black/40 bg-transparent outline-none py-2"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select service</option>
                  <option value="identifying">Identifying AI opportunities</option>
                  <option value="developing">Developing custom AI solutions</option>
                  <option value="scaling">Scaling through AI</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex w-full flex-col gap-2">
                <label className="text-md font-medium">Message</label>
                <textarea
                  rows={7}
                  placeholder="Enter message"
                  className="resize-none border-b border-black/40 bg-transparent outline-none py-2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="w-fit cursor-pointer rounded-full border border-black px-4 py-2 text-black">Send inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}