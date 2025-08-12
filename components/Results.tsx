export default function Results(){
  return (
    <section className="section-snap bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <p className="text-center text-[clamp(36px,5.5vw,72px)] font-light">
          We don&apos;t sell AI. We sell <em className="italic" style={{color:'#00D9FF'}}>Results</em>.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <p className="text-[clamp(44px,8vw,120px)] font-semibold" style={{color:'#00D9FF'}}>48+</p>
            <p className="text-[clamp(14px,1.2vw,18px)] text-[#C0C0C0]">Bespoke AI Solutions Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(44px,8vw,120px)] font-semibold" style={{color:'#00D9FF'}}>220+</p>
            <p className="text-[clamp(14px,1.2vw,18px)] text-[#C0C0C0]">AI Opportunities Identified</p>
          </div>
          <div className="text-center">
            <p className="text-[clamp(44px,8vw,120px)] font-semibold" style={{color:'#00D9FF'}}>10,000+</p>
            <p className="text-[clamp(14px,1.2vw,18px)] text-[#C0C0C0]">Hours Saved Through Automation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
