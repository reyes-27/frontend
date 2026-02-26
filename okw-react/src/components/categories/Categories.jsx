import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define common links to avoid repetition
  const links = [
    { name: 'Categories', href: '#' },
    { name: 'My Orders', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Benchmarks', href: '#' },
  ];

  return (
    <div className="mt-4 px-4 w-full flex flex-col items-center">
      
      {/* --- MOBILE VIEW: Menu Button --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden w-full items-center justify-between gap-4 px-8 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-[#6554b4] shadow-lg active:scale-95 transition-all"
      >
        <span>Menu</span>
        {isOpen ? <ChevronUpIcon className="size-5" /> : <ChevronDownIcon className="size-5" />}
      </button>

      {/* --- MOBILE VIEW: Stacked List --- */}
      <div 
        className={`${
          isOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'
        } md:hidden transition-all duration-300 ease-in-out w-full bg-[#1a2238] rounded-xl flex flex-col divide-y divide-gray-700 shadow-xl`}
      >
        {links.map((link) => (
          <a key={link.name} href={link.href} className="px-6 py-4 text-white hover:bg-blue-600 transition">
            {link.name}
          </a>
        ))}
        {/* PC Factory with extra padding below */}
        <a href="#" className="px-6 pt-4 pb-8 text-white font-bold bg-gradient-to-r from-blue-500/20 to-[#6554b4]/20 hover:bg-blue-600 transition rounded-b-xl">
          PC Factory
        </a>
      </div>

      {/* --- DESKTOP VIEW: Horizontal Bar --- */}
      <div className="hidden md:flex w-full max-w-5xl overflow-hidden rounded-xl bg-[#1a2238] text-white shadow-lg border border-gray-800">
        {links.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="flex-1 text-center px-6 py-3 hover:bg-blue-600 transition whitespace-nowrap border-r border-gray-700/50 last:border-0"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#"
          className="flex-1 text-center px-8 py-3 text-white font-bold bg-gradient-to-r from-blue-500 to-[#6554b4] hover:opacity-90 transition whitespace-nowrap"
        >
          PC Factory
        </a>
      </div>

    </div>
  );
};

export default Categories;