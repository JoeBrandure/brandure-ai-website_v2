import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AnimatedText, RotatingTextAnimation } from '../components/AnimatedText';
import SideNavigation from '../components/SideNavigation';
import JourneySection from '../components/JourneySection';
import ContactDrawer from '../components/ContactDrawer';
import CounterAnimation from '../components/CounterAnimation';

// Dynamic import for WebGL to avoid SSR issues
const WebGLBackground = dynamic(() => import('../components/WebGLBackground'), {
  ssr: false,
});

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize smooth scroll
    if (typeof window !== 'undefined') {
      import('lenis').then(({ default: Lenis }) => {
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      });
    }
  }, []);

  const rotatingTexts = [
    'AI Partner',
    'Innovation',
    'Transformation',
    'Excellence',
  ];

  return (
    <>
      <Head>
        <title>Brandure AI — Leading AI Agency & AI Automation Agency in UAE & UK</title>
        <meta name="description" content="Brandure.ai is your trusted AI Agency and AI Automation Agency, empowering small businesses with bespoke AI Solutions in the UAE & UK." />
        {/* Keep all existing meta tags */}
      </Head>

      {mounted && <WebGLBackground />}
      <SideNavigation />

      <div className="snap-container no-scrollbar">
        {/* Navigation - Fixed */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 py-4 flex justify-between items-center">
            <Image
              src="/logos/brandure-ai-white-2.png"
              alt="Brandure AI"
              width={150}
              height={40}
              priority
            />
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-6 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Get In Touch →
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="snap-section flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8">
              <AnimatedText>We&apos;re Your</AnimatedText>
              <div className="h-[1.2em] my-4">
                <RotatingTextAnimation texts={rotatingTexts} />
              </div>
              <AnimatedText delay={0.3}>—Not Just a Provider</AnimatedText>
            </h1>
            <p className="text-xl md:text-2xl text-[#C0C0C0] max-w-3xl mx-auto">
              <AnimatedText delay={0.5}>
                Your trusted partner in becoming an AI-first business—from insight to execution
              </AnimatedText>
            </p>
          </div>
        </section>

        {/* Pitch Section */}
        <section id="pitch" className="snap-section flex items-center justify-center bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light">
              <AnimatedText>From insight to execution,</AnimatedText>
              <br />
              <AnimatedText delay={0.2}>we harness the</AnimatedText>{' '}
              <span className="gradient-text-animated font-bold">power of AI</span>
              <br />
              <AnimatedText delay={0.4}>to transform your business</AnimatedText>
            </h2>
          </div>
        </section>

        {/* Journey Statement */}
        <section id="journey" className="snap-section flex items-center justify-center bg-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light max-w-5xl mx-auto">
              <AnimatedText>We equip businesses with the bespoke AI tools</AnimatedText>{' '}
              <AnimatedText delay={0.3} gradient>they need to compete and scale</AnimatedText>
              <br />
              <AnimatedText delay={0.5}>—your trusted partner in every step of the journey.</AnimatedText>
            </h2>
          </div>
        </section>

        {/* How We Work - 3 Steps */}
        <JourneySection />

        {/* Results Section */}
        <section id="results" className="snap-section flex items-center justify-center bg-black">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                <AnimatedText>We don&apos;t sell AI.</AnimatedText>
              </h2>
              <p className="text-4xl md:text-5xl lg:text-6xl font-light">
                <AnimatedText delay={0.2}>We sell</AnimatedText>{' '}
                <span className="gradient-text-animated font-bold italic">Results.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-[#00D9FF] mb-4">
                  <CounterAnimation end={48} />
                </div>
                <p className="text-lg text-[#C0C0C0]">Bespoke AI Solutions Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-[#00D9FF] mb-4">
                  <CounterAnimation end={220} />
                </div>
                <p className="text-lg text-[#C0C0C0]">AI Opportunities Identified</p>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-[#00D9FF] mb-4">
                  <CounterAnimation end={10000} />
                </div>
                <p className="text-lg text-[#C0C0C0]">Hours Saved Through Automation</p>
              </div>
            </div>

            {/* Client Logos Carousel Placeholder */}
            <div className="mt-16 overflow-hidden">
              <div className="flex items-center justify-center gap-8 opacity-30">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/logos/brandure-ai-white-2.png"
                    alt="Client Logo"
                    width={120}
                    height={40}
                    className="grayscale"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA Section */}
        <section id="partnership" className="snap-section flex items-center justify-center bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8">
              <AnimatedText>The best AI systems</AnimatedText>
              <br />
              <AnimatedText delay={0.2}>are built</AnimatedText>{' '}
              <span className="gradient-text-animated font-bold">side by side.</span>
            </h2>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="mt-8 px-10 py-4 text-2xl border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Let&apos;s Partner Up →
            </button>
            <p className="mt-8 text-xl text-[#C0C0C0]">
              <AnimatedText delay={0.5}>Accelerate your AI adoption journey.</AnimatedText>
            </p>
          </div>
        </section>

        {/* Footer/Contact Section */}
        <section id="contact" className="snap-section bg-black">
          <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <h3 className="text-sm font-medium text-[#C0C0C0] uppercase mb-4">Contact</h3>
                <p className="text-white mb-2">info@brandureai.com</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://wa.me/971585081399" className="text-[#C0C0C0] hover:text-white transition-colors">
                    UAE 🇦🇪 +971 585 081 399
                  </a>
                  <a href="https://wa.me/447969446013" className="text-[#C0C0C0] hover:text-white transition-colors">
                    UK 🇬🇧 +44 7969 446 013
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-[#C0C0C0] uppercase mb-4">Follow</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-[#C0C0C0] hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="block text-[#C0C0C0] hover:text-white transition-colors">YouTube</a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-[#C0C0C0] uppercase mb-4">Legal</h3>
                <div className="space-y-2">
                  <a href="/privacy-policy" className="block text-[#C0C0C0] hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms-and-conditions" className="block text-[#C0C0C0] hover:text-white transition-colors">Terms & Conditions</a>
                  <a href="/sitemap.xml" className="block text-[#C0C0C0] hover:text-white transition-colors">Sitemap</a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-[#C0C0C0]">
              <p>© 2025 Brandure AI. All rights reserved.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      {/* Relevance AI Chat Widget - Keep exactly as is */}
      <script
        defer
        data-relevanceai-share-id="d7b62b/6271ce55f7b2-46d5-9d84-562aba385b32/ba0ee5a0-3f17-4f24-bd77-6616e27e04b5"
        src="https://app.relevanceai.com/embed/chat-bubble.js"
        data-share-styles="starting_message_prompts=Hey%21+Is+there+anything+I+can+help+you+with%3F+&hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=true&bubble_style=icon&primary_color=%2300D9FF&bubble_icon=sparkles&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=true"
      />
    </>
  );
}
