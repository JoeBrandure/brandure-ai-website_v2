import React from "react";

type Props = {
  onOpenContact?: () => void; // optional, we'll also search for the global modal hook if available
};

export default function Contact({ onOpenContact }: Props) {
  // Try to reuse existing modal/drawer opener if globally available:
  //  - If you have a custom hook like useContactModal(), call it.
  //  - Else, fallback to DOM id used previously (e.g., "contact-modal").

  const openContact = () => {
    if (onOpenContact) return onOpenContact();
    // Fallback: try to open the existing modal/drawer by id or global function
    document.getElementById("contact-modal")?.classList.remove("hidden");
  };

  return (
    <section
      id="contact"
      className="relative section-snap min-h-screen flex flex-col items-center justify-center"
      aria-label="Contact"
    >
      <div className="w-full max-w-6xl px-10 md:px-[40px] mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          Ready to{" "}
          <span className="font-semibold accent-blue accent-animated">
            transform
          </span>{" "}
          your business?
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Let&apos;s discuss how AI can drive your growth
        </p>

        <div className="mt-10">
          <button
            onClick={openContact}
            className="group inline-flex items-center justify-center rounded-full border border-gray-500 px-6 md:px-8 py-3 text-base md:text-lg text-white hover:border-[#00D9FF] transition-colors"
            aria-label="Get Started"
          >
            Get Started
            <span className="ml-2 group-hover:translate-x-0.5 transition-transform">↗</span>
          </button>
        </div>
      </div>

      {/* Reserve space for footer overlay and place it at the bottom */}
      <div className="h-[160px] md:h-[180px]" aria-hidden="true" />
    </section>
  );
}
