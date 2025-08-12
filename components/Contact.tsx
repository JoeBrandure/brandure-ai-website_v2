export default function Contact(){
  return (
    <section className="section-snap bg-black">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-10 lg:px-12 text-center">
        <h2 className="text-[clamp(32px,4.5vw,56px)] font-light mb-6">Contact</h2>
        <p className="text-[clamp(16px,1.6vw,20px)] text-[#C0C0C0] mb-8">
          WhatsApp: UAE 🇦🇪 <a className="underline hover:no-underline" href="https://wa.me/971585081399" target="_blank">+971585081399</a> {' '}| UK 🇬🇧 <a className="underline hover:no-underline" href="https://wa.me/447969446013" target="_blank">+447969446013</a>
        </p>
        <button 
          onClick={()=>document.getElementById('contact-modal')?.classList.remove('hidden')}
          className="inline-flex items-center gap-2 px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
