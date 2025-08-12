import { useEffect, useState } from 'react';

export default function ContactModal(){
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === 'contact-modal' || target.classList.contains('close-modal')) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!open) return null;

  return (
    <div id="contact-modal" className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="relative z-10 mx-auto my-12 w-full max-w-lg rounded-xl border border-white/20 bg-black p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Get In Touch</h3>
          <button className="close-modal text-2xl hover:text-gray-300">×</button>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Coming soon'); }}>
          <label className="block text-sm">
            Name<span className="text-red-500">*</span>
            <input required className="mt-1 w-full rounded-md border border-white/20 bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-[#00d9ff]" />
          </label>
          <label className="block text-sm">
            Email<span className="text-red-500">*</span>
            <input type="email" required className="mt-1 w-full rounded-md border border-white/20 bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-[#00d9ff]" />
          </label>
          <label className="block text-sm">
            Company
            <input className="mt-1 w-full rounded-md border border-white/20 bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-[#00d9ff]" />
          </label>
          <label className="block text-sm">
            Message<span className="text-red-500">*</span>
            <textarea required className="mt-1 min-h-[120px] w-full rounded-md border border-white/20 bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-[#00d9ff]" />
          </label>
          <div className="flex justify-end gap-3">
            <button type="button" className="close-modal rounded-full border border-white/20 px-5 py-2">Cancel</button>
            <button type="submit" className="rounded-full border border-[#00d9ff] text-[#00d9ff] px-5 py-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
