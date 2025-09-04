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
    honeypot: '', // Honeypot field for bot protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Debug logging for submitStatus changes
  useEffect(() => {
    console.log('ContactDrawer: submitStatus changed to:', submitStatus);
  }, [submitStatus]);

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
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in your name and email address.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      alert('Please add a message describing your project or inquiry.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    // Show immediate feedback that form is being processed
    console.log('Form submission started, setting submitting state');
    
    try {
      // Prepare payload with additional tracking data
      const payload = {
        ...formData,
        pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
        utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get("utm_source") || "" : "",
        utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get("utm_medium") || "" : "",
        utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get("utm_campaign") || "" : "",
      };

      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      const responseData = await response.json();
      
      if (response.ok && responseData.ok) {
        console.log('Form submission successful, setting success status');
        setSubmitStatus('success');
        console.log('Success status set, message should be visible now');
        // Google Ads Conversion: Submit lead form
        try {
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              send_to: 'AW-17512432668/dMqqCM2DrpMbEJyIyp5B',
              value: 1.0,
              currency: 'AED',
            });
          }
        } catch (e) {
          console.warn('gtag conversion event failed to fire', e);
        }
        
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
          honeypot: '',
        });
        
        // Show success message immediately, then close after delay
        // The success message will be visible for 3 seconds before closing
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 3000); // Show success message for 3 seconds
      } else {
        console.log('Form submission failed:', response.status, responseData);
        setSubmitStatus('error');
        console.error('API Error:', response.status, response.statusText);
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error submitting form:', errorMessage);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>




      {/* Backdrop - Only visible when drawer is open */}
      {isOpen && (
        <div
          onClick={() => { console.log('Backdrop clicked'); onClose(); }}
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: '9998'
          }}
        />
      )}

      {/* Panel container - Force visible and working */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: '0',
          right: '0',
          width: isMobile ? '100vw' : '40vw',
          height: '100vh',
          background: isOpen ? 'transparent' : 'transparent',
          visibility: 'visible' as const,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          zIndex: '9999',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isMobile ? '0' : '20px'
        }}
      >
        {/* Panel content */}
        <div style={{
          width: isMobile ? '100%' : '90%',
          height: isMobile ? '100%' : '90%',
          background: '#EDECE4 !important',
          borderRadius: isMobile ? '0' : '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          position: 'relative'
        }}>

          
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
              Tell us where you&apos;re at
            </h2>
          </div>

          {/* Scrollable content */}
          <div style={{ 
            height: 'calc(100% - 160px)', 
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
              {/* Required fields note */}
              <div style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '8px'
              }}>
                <span style={{ color: '#ef4444' }}>*</span> Required fields
              </div>
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
                    What is your name? <span style={{ color: '#ef4444' }}>*</span>
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
                    What is your email? <span style={{ color: '#ef4444' }}>*</span>
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
                    placeholder="Enter your role"
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
                    Company&apos;s Annual Revenue
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
                  maxLength={500}
                />
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  textAlign: 'right'
                }}>
                  {formData.message.length}/500 characters
                </div>
              </div>

              {/* Hidden honeypot field for bot protection */}
              <input
                name="honeypot"
                type="text"
                style={{ 
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                  pointerEvents: 'none'
                }}
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              />

              {/* Send Inquiry Button - at the end of the form */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ 
                  width: 'fit-content',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                  borderRadius: '25px', 
                  border: '1px solid black', 
                  padding: '12px 24px', 
                  color: isSubmitting ? '#999' : 'black',
                  background: isSubmitting ? '#f5f5f5' : 'transparent',
                  fontSize: '16px',
                  marginTop: '16px',
                  marginBottom: '20px',
                  alignSelf: 'center',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid transparent',
                      borderTop: '2px solid currentColor',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </span>
                ) : (
                  'Send inquiry'
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div 
                  style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginTop: '24px',
                    marginBottom: '24px',
                    padding: '24px',
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: 'white',
                    borderRadius: '16px',
                    border: '2px solid #16a34a',
                    boxShadow: '0 12px 32px rgba(34, 197, 94, 0.4)',
                    position: 'relative',
                    zIndex: 1000,
                    transform: 'scale(1.05)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    animation: 'successPulse 2s ease-in-out'
                  }}
                >
                  🎉 Thank You!
                  <br />
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: '400', 
                    marginTop: '12px', 
                    display: 'block', 
                    opacity: 0.95,
                    lineHeight: '1.4'
                  }}>
                    Your message has been sent successfully.
                    <br />
                    We&apos;ll get back to you within 24 hours.
                  </span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div style={{
                  textAlign: 'center',
                  color: '#ef4444',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginTop: '24px',
                  marginBottom: '24px',
                  padding: '24px',
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0.25))',
                  borderRadius: '16px',
                  border: '2px solid rgba(239, 68, 68, 0.4)',
                  boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3)',
                  transform: 'scale(1.02)',
                  transition: 'all 0.3s ease'
                }}>
                  ❌ Something went wrong
                  <br />
                  <span style={{ 
                    fontSize: '18px', 
                    fontWeight: '400', 
                    marginTop: '12px', 
                    display: 'block',
                    lineHeight: '1.4'
                  }}>
                    There was an error sending your message.
                    <br />
                    Please try again or contact us directly.
                  </span>
                </div>
              )}
            </form>
          </div>
          

        </div>
      </div>
    </>
  );
}