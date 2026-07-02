"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
    const sections = [
        "home",
        "about",
        "services",
        "gallery",
        "reviews",
        "contact",
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
        const element = document.getElementById(section);

        if (
            element &&
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
        ) {
            setActiveSection(section);
        }
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-2 h-20 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-1 -ml-1">
          <Image
            src="/images/logo.png"
            alt="Move With Physio"
            width={120}
            height={120}
          />

          <div>
            <h2 className="font-bold text-xl text-slate-900">
              Move With Physio
            </h2>

            <p className="text-xs text-emerald-600">
              Healing Through Movement
            </p>
          </div>
        </a>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 items-center">
            <a href="#home"className="text-slate-500 hover:text-emerald-600 font-medium transition duration-300">Home</a>

            <a href="#about" className="text-slate-500 hover:text-emerald-600 font-medium transition duration-300">About</a>

            <a href="#services" className="text-slate-500 hover:text-emerald-600 font-medium transition duration-300">Services</a>

            <a href="#gallery" className="text-slate-500 hover:text-emerald-600 font-medium transition duration-300">Gallery</a>

            <a href="#reviews" className="text-slate-500 hover:text-emerald-600 font-medium transition duration-300">Reviews</a>

            <a href="#contact" className="text-slate-500 hover:text-emerald-600 font-medium transition duration-300">Contact</a>
          <a
            href="tel:9899361297"
            className="bg-emerald-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-emerald-700 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-white border-t">

          <div className="flex flex-col">

            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="px-6 py-4 border-b hover:bg-emerald-50"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            ))}

            <a
              href="tel:9899361297"
              className="m-5 bg-emerald-600 text-white py-4 rounded-xl text-center"
            >
              📞 Call Reception
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}