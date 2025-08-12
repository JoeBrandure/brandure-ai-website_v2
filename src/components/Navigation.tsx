'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full pt-4">
      {/* morningside uses px-4/8/12 — we mirror that so CTA isn't on the edge */}
      <div className="w-full px-4 md:px-8 lg:px-12 mx-auto flex justify-between items-center">
        <Link href="/" className="w-fit cursor-pointer">
          {/* Use our Brandure white logo; make it noticeably larger than before */}
          <Image
            src="/Logos/brandure-ai-white.png"
            alt="Brandure AI"
            width={220}
            height={40}
            className="w-[11rem] md:w-[12.5rem] lg:w-[14rem] h-auto"
            priority
          />
        </Link>

        <div className="flex items-center">
          <a href="#contact" className="flex items-center cursor-pointer gap-1 px-5 py-3 border border-white rounded-full text-white bg-transparent hover:bg-[#EDECE4] hover:text-black transition-all duration-300">
            Get In Touch
            <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
