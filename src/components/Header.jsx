import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';  // Import the hamburger icon

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location  = useLocation()

  useEffect(() =>{
    return () => {
      window.scrollTo(0, 0)
      setIsMenuOpen(false)
    }
  }, [location.pathname])

  return (
    <header className="flex fixed z-50 top-0 left-0 bg-inherit w-full justify-between gap-4 backdrop-blur">
      <div className="container mx-auto flex flex-wrap p-4 justify-between items-center">
        <div className="flex w-max gap-2 items-center">
          <h1 className='text-xl md:text-xl text-even font-extrabold'>Beauty By Maks</h1>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu className="w-6 h-6 text-even hover:text-secondary" />
        </button>
        
        {/* Navigation Links */}
        <nav className={`md:flex md:items-center md:gap-8 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row w-full md:w-auto`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `cursor-pointer flex items-center justify-center font-semibold ${isActive ? 'text-purple-400' : 'text-even'} hover:text-purple-400 py-2 md:py-0`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `cursor-pointer flex items-center justify-center font-semibold ${isActive ? 'text-purple-400' : 'text-even'} hover:text-purple-400 py-2 md:py-0`}
          >
            About
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => `cursor-pointer flex items-center justify-center font-semibold ${isActive ? 'text-purple-400' : 'text-even'} hover:text-purple-400 py-2 md:py-0`}
          >
            Login
          </NavLink>
        </nav>

        {/* Desktop Icons */}
        <div className='hidden md:flex w-max gap-4 items-center'>
          <div className="relative h-9 w-9 text-even cursor-pointer hover:text-secondary font-semibold flex justify-center items-center" aria-label="Search">
            <IoSearchOutline />
          </div>
          <Link to={"/account"} className="h-8 w-8 text-even cursor-pointer hover:text-secondary flex items-center" aria-label="User Profile">
            <FaRegUserCircle />
          </Link>
        </div>
      </div>
    </header>
  );
};

;
