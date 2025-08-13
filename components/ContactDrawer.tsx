'use client';

import { useState } from 'react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  role: string;
  companyName: string;
  companyWebsite: string;
  companySize: string;
  annualRevenue: string;
  projectBudget: string;
  serviceInterested: string;
  message: string;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    companyName: '',
    companyWebsite: '',
    companySize: '',
    annualRevenue: '',
    projectBudget: '',
    serviceInterested: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Thank you for your inquiry! We will get back to you soon.');
        onClose();
        setFormData({
          name: '',
          email: '',
          role: '',
          companyName: '',
          companyWebsite: '',
          companySize: '',
          annualRevenue: '',
          projectBudget: '',
          serviceInterested: '',
          message: '',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to mailto
      const subject = encodeURIComponent('New Inquiry from Brandure AI Website');
      const body = encodeURIComponent(Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join('\n'));
      window.location.href = `mailto:sales@brandureai.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <>
      <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`drawer-panel ${isOpen ? 'open' : ''}`}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>

          <h2 style={{ fontSize: '2rem', marginBottom: '40px', fontWeight: 500 }}>
            Tell us where<br />you&apos;re at
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              placeholder="What is your name?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
              required
            />

            <input
              type="email"
              placeholder="What is your email?"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
              required
            />

            <input
              type="text"
              placeholder="What is your role in the company?"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
              required
            />

            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
              required
            />

            <input
              type="url"
              placeholder="Company Website"
              value={formData.companyWebsite}
              onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
            />

            <select
              value={formData.companySize}
              onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
            >
              <option value="">Select company size</option>
              <option value="<20">Less than 20 employees</option>
              <option value="20-100">20-100 employees</option>
              <option value="100-500">100-500 employees</option>
              <option value=">500">More than 500 employees</option>
            </select>

            <select
              value={formData.annualRevenue}
              onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
            >
              <option value="">Select revenue range</option>
              <option value="<100K">Less than $100K</option>
              <option value="100K-500K">$100K-$500K</option>
              <option value="500K-1M">$500K-$1M</option>
              <option value="1M-2M">$1M-$2M</option>
              <option value=">2M">More than $2M</option>
            </select>

            <select
              value={formData.projectBudget}
              onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
            >
              <option value="">Select budget range</option>
              <option value="<5K">Less than $5K</option>
              <option value="5K-20K">$5K-$20K</option>
              <option value="20K-100K">$20K-$100K</option>
              <option value=">100K">More than $100K</option>
            </select>

            <select
              value={formData.serviceInterested}
              onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
              }}
              required
            >
              <option value="">Select service</option>
              <option value="identifying">Identifying AI Opportunities</option>
              <option value="developing">Developing AI Solutions</option>
              <option value="scaling">Scaling Through AI</option>
            </select>

            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              style={{
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                color: 'white',
                fontSize: '16px',
                resize: 'none',
              }}
              required
            />

            <button
              type="submit"
              style={{
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid white',
                borderRadius: '50px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = 'black';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
