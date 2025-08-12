import { useEffect, useState } from 'react';

const ROTATIONS = ['Consulting','Development','Specialist','Provider'];

export default function Hero(){
  const [idx,setIdx]=useState(0);
  useEffect(()=>{
    const t=setInterval(()=>setIdx(i=>(i+1)%ROTATIONS.length),2600);
    return()=>clearInterval(t);
  },[]);
  return (
    <section className="section-snap bg-[linear-gradient(180deg,#000,rgba(10,10,10,1))]">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12 pt-28 text-center">
        {/* Three same-sized lines */}
        <p className="text-[clamp(40px,7.5vw,112px)] leading-[0.98] tracking-[-0.04em] font-light">We&apos;re not just your AI</p>
        <p className="text-[clamp(40px,7.5vw,112px)] leading-[0.98] tracking-[-0.04em] italic">
          <span style={{color:'#00D9FF'}}>{ROTATIONS[idx]}</span>
        </p>
        <p className="text-[clamp(40px,7.5vw,112px)] leading-[0.98] tracking-[-0.04em] font-light">Company</p>

        <p className="mt-6 text-[clamp(18px,2.2vw,28px)] text-[#C0C0C0]">We&apos;re your AI Partner</p>
      </div>
    </section>
  );
}
