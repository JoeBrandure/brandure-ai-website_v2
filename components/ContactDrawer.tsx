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
            height: 'calc(100% - 120px)', 
            overflowY: 'auto', 
            padding: '4px 24px 8px' 
          }}>
            <form onSubmit={handleSubmit} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px',
              height: '100%',
              width: '100%'
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

              <button 
                type="submit" 
                style={{ 
                  width: 'fit-content',
                  cursor: 'pointer', 
                  borderRadius: '25px', 
                  border: '1px solid black', 
                  padding: '8px 16px', 
                  color: 'black',
                  background: 'transparent',
                  fontSize: '16px',
                  marginTop: '16px'
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