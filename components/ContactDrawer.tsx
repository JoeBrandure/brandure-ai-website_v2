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
    
    // Send form data to sales@brandureai.com
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'sales@brandureai.com',
          subject: 'New Contact Form Submission from Brandure Website'
        }),
      });
      
      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        // Reset form
        setFormData({
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
        onClose(); // Close the drawer
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    }
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

      {/* Backdrop - Force visible with !important */}
      <div
        onClick={() => { console.log('Backdrop clicked'); onClose(); }}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          border: '5px solid yellow !important',
          background: isOpen ? 'rgba(255, 255, 0, 0.5) !important' : 'rgba(255, 0, 255, 0.3) !important',
          visibility: 'visible' as any,
          pointerEvents: isOpen ? 'auto' : 'none',
          zIndex: '9998'
        }}
      >
        {/* Debug text on backdrop */}
        <div style={{
          position: 'absolute',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'black !important',
          color: 'white !important',
          padding: '10px',
          fontSize: '16px',
          zIndex: '10001'
        }}>
          BACKDROP: isOpen = {String(isOpen)}
        </div>
      </div>

      {/* Panel container - Force visible and working */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: '0',
          right: '0',
          width: '40vw',
          height: '100vh',
          border: '5px solid red !important',
          background: isOpen ? 'rgba(255, 0, 0, 0.8) !important' : 'rgba(0, 255, 0, 0.8) !important',
          visibility: 'visible' as any,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          zIndex: '9999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        {/* Panel content */}
        <div style={{
          width: '90%',
          height: '90%',
          background: '#EDECE4 !important',
          borderRadius: '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Debug header */}
          <div style={{ 
            background: 'red !important', 
            color: 'white !important', 
            padding: '5px', 
            textAlign: 'center',
            fontSize: '14px'
          }}>
            DEBUG: Drawer is {isOpen ? 'OPEN' : 'CLOSED'} - Content should be visible
          </div>
          
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            padding: '16px 24px 8px' 
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end' 
            }}>
              <button 
                onClick={onClose} 
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666',
                  fontSize: '18px'
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '500', 
              margin: '0 0 28px 0', 
              textAlign: 'left',
              color: 'black'
            }}>
              Tell us where you're at
            </h2>
          </div>

          {/* Scrollable content */}
          <div style={{ 
            height: 'calc(100% - 80px)', 
            overflowY: 'auto', 
            padding: '4px 24px 8px'
          }}>
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px',
              width: '100%',
              paddingBottom: '20px'
            }}>
              {/* Name and Email */}
              <div style={{ 
                display: 'flex', 
                gap: '16px' 
              }}>
                <div style={{ flex: '1' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: 'black',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    What is your name?
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                      outline: 'none',
                      padding: '8px 0',
                      color: 'black',
                      fontSize: '16px'
                    }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div style={{ flex: '1' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: 'black',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    What is your email?
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                      outline: 'none',
                      padding: '8px 0',
                      color: 'black',
                      fontSize: '16px'
                    }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Role */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px' 
              }}>
                <label style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  color: 'black'
                }}>
                  What is your role in the company?
                </label>
                <input
                  type="text"
                  placeholder="Enter role"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                    outline: 'none',
                    padding: '8px 0',
                    color: 'black',
                    fontSize: '16px'
                  }}
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
              </div>

              {/* Company name / website */}
              <div style={{ 
                display: 'flex', 
                gap: '16px' 
              }}>
                <div style={{ flex: '1' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: 'black',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                      outline: 'none',
                      padding: '8px 0',
                      color: 'black',
                      fontSize: '16px'
                    }}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div style={{ flex: '1' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: 'black',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Company Website
                  </label>
                  <input
                    type="url"
                    placeholder="Enter company website"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                      outline: 'none',
                      padding: '8px 0',
                      color: 'black',
                      fontSize: '16px'
                    }}
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              </div>

              {/* Size / Revenue */}
              <div style={{ 
                display: 'flex', 
                gap: '16px' 
              }}>
                <div style={{ flex: '1' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: 'black',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Company Size
                  </label>
                  <select
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                      outline: 'none',
                      padding: '8px 0',
                      color: 'black',
                      fontSize: '16px'
                    }}
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
                <div style={{ flex: '1' }}>
                  <label style={{ 
                    fontSize: '16px', 
                    fontWeight: '500',
                    color: 'black',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Company's Annual Revenue
                  </label>
                  <select
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                      outline: 'none',
                      padding: '8px 0',
                      color: 'black',
                      fontSize: '16px'
                    }}
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
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px' 
              }}>
                <label style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  color: 'black'
                }}>
                  Project budget
                </label>
                <select
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                    outline: 'none',
                    padding: '8px 0',
                    color: 'black',
                    fontSize: '16px'
                  }}
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
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px' 
              }}>
                <label style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  color: 'black'
                }}>
                  What services are you interested in?
                </label>
                <select
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                    outline: 'none',
                    padding: '8px 0',
                    color: 'black',
                    fontSize: '16px'
                  }}
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
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '8px' 
              }}>
                <label style={{ 
                  fontSize: '16px', 
                  fontWeight: '500',
                  color: 'black'
                }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter message"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.4)',
                    outline: 'none',
                    padding: '8px 0',
                    color: 'black',
                    fontSize: '16px',
                    resize: 'none'
                  }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Send Inquiry Button - at the end of the form */}
              <button 
                type="submit" 
                style={{ 
                  width: 'fit-content',
                  cursor: 'pointer', 
                  borderRadius: '25px', 
                  border: '1px solid black', 
                  padding: '12px 24px', 
                  color: 'black',
                  background: 'transparent',
                  fontSize: '16px',
                  marginTop: '16px',
                  alignSelf: 'center'
                }}
              >
                Send inquiry
              </button>
            </form>
          </div>
          

        </div>
      </div>
    </>
  );
}