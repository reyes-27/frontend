import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import OverkillOrcaLogo from '../../assets/logos/OVERKILL-ORCA.png'
import ProfilePicture from '../../assets/profile-picture.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearch = (e) => {
    // If on mobile and the input isn't open, open it instead of submitting
    if (window.innerWidth < 640 && !isSearchOpen) {
      e.preventDefault();
      setIsSearchOpen(true);
      // Timeout ensures the input is visible before focusing
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 mx-auto bg-gray-800/95 backdrop-blur-md rounded-xl w-[95%] md:w-[90%] mt-5 shadow-2xl px-4 py-3 border border-white/5">
      <div className="flex flex-row items-center justify-between gap-2">
        
        {/* Logo Section - Hide text on tiny mobile when search is open */}
        <div className={`flex items-center gap-2 md:gap-4 shrink-0 ${isSearchOpen ? 'hidden xs:flex' : 'flex'}`}>
          <img src={OverkillOrcaLogo} alt="Logo" className="w-8 h-8 md:w-14 md:h-14" />
          <h2 className="text-white text-base md:text-xl font-black tracking-tighter hidden sm:block">OVERKILL</h2>
        </div>

        {/* Search Bar Container */}
        <form 
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isSearchOpen ? 'flex-grow' : 'w-auto'
          } sm:flex-grow sm:max-w-md`}
        >
          <div className="relative flex items-center w-full group">
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search hardware..."
              onBlur={() => setIsSearchOpen(false)} // Auto-hide when clicking away
              className={`h-10 md:h-11 bg-gray-900 text-white rounded-2xl border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-sm px-4 pr-12
                ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0 sm:w-full sm:opacity-100'}
              `} 
            />
            
            <button
              type="submit"
              onClick={toggleSearch}
              className="sm:absolute right-1 w-10 h-10 md:w-9 md:h-9 bg-gradient-to-tr from-blue-500 to-[#6554b4] text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm" />
            </button>
          </div>
        </form>

        {/* Profile & Menu - Hide when search is expanded on mobile to give space */}
        <div className={`flex items-center gap-2 md:gap-6 shrink-0 ${isSearchOpen ? 'hidden' : 'flex'}`}>
          <div className="hidden md:flex items-center text-gray-300 font-medium gap-5">
            <Link className="hover:text-blue-400" to="/upgrade">Upgrade</Link>
            <Link className="hover:text-blue-400" to="/orders">Orders</Link>
          </div>
          
          <img
            src={ProfilePicture}
            alt="Profile"
            className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-gray-900 shadow-lg"
          />

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 text-xl p-1">
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 pb-2 animate-in slide-in-from-top-2 duration-200">
          <Link className="block py-2 text-gray-200" to="/upgrade" onClick={() => setIsOpen(false)}>Upgrade</Link>
          <Link className="block py-2 text-gray-200" to="/orders" onClick={() => setIsOpen(false)}>Orders</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;