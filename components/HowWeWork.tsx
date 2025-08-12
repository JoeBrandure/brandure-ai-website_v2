type Step = { title:string; body:string; id:string };
const STEPS:Step[] = [
  { id:'identify', title:'Identify', body:'We identify high-impact AI opportunities and map the transformation strategy to bring them to life.' },
  { id:'develop', title:'Develop',  body:'We design and build bespoke AI systems and automations proven to move the needle.' },
  { id:'scale',   title:'Scale',    body:'We monitor, optimize and scale adoption across teams to compound ROI.' },
];

export default function HowWeWork(){
  return (
    <section className="section-snap bg-black">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="w-full text-center mb-10">
          <p className="text-[clamp(44px,6.5vw,88px)] font-light">How we work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STEPS.map((s)=>(
            <div key={s.id} className="border border-white/15 rounded-3xl p-6 md:p-8 bg-white/5 backdrop-blur-[1px]">
              <h3 className="text-[clamp(28px,3.8vw,40px)] font-light mb-3">{s.title}</h3>
              <p className="text-[clamp(14px,1.4vw,18px)] text-[#C0C0C0] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
