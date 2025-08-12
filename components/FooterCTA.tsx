export default function FooterCTA(){
  return (
    <section className="section-snap bg-[linear-gradient(180deg,#0a0a0a,#000)]">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10 lg:px-12 text-center">
        <h2 className="text-[clamp(36px,5.5vw,72px)] font-light leading-tight">
          The best AI systems are built <span className="gradient-text font-semibold">side by side</span>.
        </h2>
        <div className="mt-8">
          <button
            onClick={()=>document.getElementById('contact-modal')?.classList.remove('hidden')}
            className="inline-flex items-center gap-2 px-9 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition"
          >
            Let&apos;s Partner Up →
          </button>
        </div>
        <p className="mt-6 text-[clamp(16px,1.6vw,20px)] text-[#C0C0C0]">Accelerate your AI adoption journey.</p>
      </div>
    </section>
  );
}
