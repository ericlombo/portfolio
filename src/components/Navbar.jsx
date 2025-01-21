import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">Eric Lombo Mwakio</div>
        
        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#services" className="text-white hover:text-gray-400">Services</a> {/* Link to Services Section */}
          <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a> {/* Link to Contact Page */}
        </div>

        {/* Mobile Navbar Toggle Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center space-y-4 bg-gray-800 p-4">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#services" className="text-white hover:text-gray-400">Services</a> {/* Link to Services Section */}
          <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a> {/* Link to Contact Page */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
