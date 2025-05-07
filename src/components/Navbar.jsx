import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-dusty-rose w-full">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-blush-pink font-body font-bold text-[20px]">
          built-by-ann
        </div>
        <div className="hidden md:flex space-x-8 text-blush-pink font-body text-[20px]">
          <a href="#about" className="font-normal">about</a>
          <a href="#resume" className="font-normal">resume</a>
          <a href="#projects" className="font-normal">projects</a>
          <a href="#spotlights" className="font-normal">spotlights</a>
          <a href="#study-abroad" className="font-normal">study abroad</a>
          <a href="#contact" className="font-bold">contact me</a>
        </div>
        <button
          className="md:hidden text-blush-pink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-end px-6 pb-4 text-blush-pink font-body text-[20px] space-y-2 bg-dusty-rose">
          <a href="#about" className="font-normal" onClick={() => setIsOpen(false)}>about</a>
          <a href="#resume" className="font-normal" onClick={() => setIsOpen(false)}>resume</a>
          <a href="#projects" className="font-normal" onClick={() => setIsOpen(false)}>projects</a>
          <a href="#spotlights" className="font-normal" onClick={() => setIsOpen(false)}>spotlights</a>
          <a href="#study-abroad" className="font-normal" onClick={() => setIsOpen(false)}>study abroad</a>
          <a href="#contact" className="font-bold" onClick={() => setIsOpen(false)}>contact me</a>
        </div>
      )}
    </nav>
  );
}
