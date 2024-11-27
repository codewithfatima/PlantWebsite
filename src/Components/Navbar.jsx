import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Leaf from '../assets/img/leaf-1.png'
import LeafImage2 from '../assets/img/leaf-2.png'

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [lastScrolly, setLastScrolly] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const currentScrolly = window.scrollY;
    if (currentScrolly > 0) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
    setLastScrolly(currentScrolly);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrolly]); // Use `useEffect` correctly

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

 
  return (
    <>
      {/* Navbar Container */}
      <div className="bg-green-950 fixed w-full top-0 left-0 z-50" style={{
        borderBottom: navScroll ? '1px solid yellow' : 'none',
        width: '100%',
        transition: 'border-bottom 0.3s ease',
      }}>
        <nav
          className="container flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="flex justify-start cursor-pointer font-Lobster sm:text-2xl md:text-2xl sm:-ml-15 lg:-ml-38"
          >
            IndorePlants.
          </Link>

          {/* Menu Icon (Hamburger) */}
          <div className="lg:hidden md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? (
              <i className="ri-close-line text-white text-3xl"></i>
            ) : (
              <i className="ri-menu-4-line text-white text-3xl"></i>
            )}
          </div>

          {/* Navigation Links and Effects */}
          <div
            className={`absolute top-0 left-0 min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden ${isOpen ? 'left-0' : 'left-[-100%]'
              }`}
          >
            <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleMenu}>
              {isOpen && <i className="ri-close-line text-white text-3xl"></i>}
            </div>
            <ul className="flex flex-col items-center gap-8">
              <li><Link to="/header" className="nav-links hover:text-yellow-400" onClick={closeMenu}> Home </Link></li>
              <li><Link to="/services" className="nav-links hover:text-yellow-400" onClick={closeMenu}> Services</Link></li>
              <li><Link to="/popular" className="nav-links hover:text-yellow-400 font-bold" onClick={closeMenu}> Popular</Link></li> {/* Corrected closing tag here */}
              <li><Link to="/review" className="nav-links hover:text-yellow-400 font-bold" onClick={closeMenu}>Review</Link></li>
            </ul>


            {/* Leaf images visible on small screens */}
            <div className="absolute bottom-0 -right-0 opacity-90 sm:block">
              <img src={Leaf} alt="leaf_img" className="w-20 h-20 sm:w-32 sm:h-32" />
            </div>

            <div className="absolute -top-0 left-0 rotate-90 opacity-90 sm:block">
              <img src={LeafImage2} alt="leaf_img" className="w-30 h-20 sm:w-48 sm:h-32" />
            </div>
          </div>

          {/* Always visible navigation links on large screens */}
          <ul className="hidden lg:flex gap-8 ml-10">
            <Link to="/" className="nav-links font-bold hover:text-yellow-400 cursor-pointer">Home</Link>
            <Link to="/services" className="nav-links font-bold hover:text-yellow-400">Services</Link>
            <Link to="/popular" className="nav-links font-bold hover:text-yellow-400">Popular</Link>
            <Link to="/review" className="nav-links font-bold hover:text-yellow-400">Review</Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
