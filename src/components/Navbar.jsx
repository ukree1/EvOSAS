import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DCTlogo from "../assets/dct-logo.png";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Announcements", path: "/announcements" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-pink-400 border-b-2 border-pink-400 bg-pink-500/10"
      : "text-pink-200 hover:text-pink-400 hover:bg-pink-500/10";

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg border-b border-pink-500/20">
        <div className="flex items-center justify-between px-4 md:px-8 h-16">

          {/* BRAND */}
          <Link
            to="/"
            className="flex items-center font-extrabold cursor-pointer hover:scale-105 transition"
          >
            <img
              src={DCTlogo}
              alt="DCT Logo"
              className="h-16 w-16 object-contain"
            />

            <span className="text-2xl md:text-3xl font-black tracking-wide text-pink-400">
              EvOSAS
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-300 ${isActive(item.path)}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* LOGIN BUTTON */}
            <Link
              to="/login"
              className="hidden md:flex bg-pink-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-pink-600 transition duration-300 shadow-md"
            >
              Login
            </Link>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-2xl text-pink-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2 shadow-xl border-t border-pink-500/20">

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block text-pink-200 py-2 px-2 rounded-md border-b border-gray-700 text-sm font-medium hover:text-pink-400 hover:bg-pink-500/10 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 bg-pink-500 text-white py-2 rounded-lg font-bold text-center hover:bg-pink-600 transition duration-300"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}