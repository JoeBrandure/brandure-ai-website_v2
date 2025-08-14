import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-40">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* LEFT: Contact (aligned with header logo by container padding) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Contact</h4>
            <a href="mailto:info@brandureai.com" className="text-white hover:opacity-80 transition">
              info@brandureai.com
            </a>
            <div className="mt-2 flex flex-col md:flex-row md:items-center md:gap-6 text-gray-300">
              <span>UAE 🇦🇪 +971 585 081 399</span>
              <span>UK 🇬🇧 +44 7969 446 013</span>
            </div>
          </div>

          {/* CENTER: Legal (centered) */}
          <div className="text-center">
            <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition">
              Terms &amp; Conditions
            </Link>
            <span className="mx-3 text-gray-500">/</span>
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">
              Privacy Policy
            </Link>
          </div>

          {/* RIGHT: Follow (right-aligned, matches header CTA edge via container width) */}
          <div className="md:text-right">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Follow Us</h4>
            <a
              href="https://www.linkedin.com/company/brandureai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
