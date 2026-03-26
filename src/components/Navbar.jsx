import { useState } from "react";
import logo from "../assets/learnhub-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Features", "About", "Contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="LearnHub" className="w-10 h-10 object-contain" />
          <span className="text-[#0D1A2E] font-bold text-xl tracking-tight">
            LearnHub
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[#0D1A2E] text-sm font-medium hover:text-[#1A3A6E] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="text-[#1A3A6E] text-sm font-semibold px-4 py-2 rounded-lg border border-[#1A3A6E] hover:bg-[#EEF0F6] transition-colors">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#C89030] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#b07d28] transition-colors">
              Register
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#0D1A2E]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#EEF0F6] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#0D1A2E] text-sm font-medium"
            >
              {link}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <Link to="/login" className="flex-1" onClick={closeMenu}>
              <button className="w-full text-[#1A3A6E] text-sm font-semibold px-4 py-2 rounded-lg border border-[#1A3A6E]">
                Sign In
              </button>
            </Link>
            <Link to="/signup" className="flex-1" onClick={closeMenu}>
              <button className="w-full bg-[#C89030] text-white text-sm font-semibold px-4 py-2 rounded-lg">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
