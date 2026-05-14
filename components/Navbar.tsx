"use client";

import Link from "next/link";
import { useState } from "react";

import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, label: "Home", href: "home" },
  { id: 2, label: "Services", href: "services" },
  { id: 3, label: "About Us", href: "about" },
  { id: 4, label: "Blog", href: "blog" },
  { id: 5, label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-red-500"
        >
          DETIST CLINIC
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="font-medium hover:text-red-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* BUTTON */}
        <Link
          href="/reserve"
          className="hidden lg:flex bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition font-semibold shadow-md"
        >
          Book Appointment
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">

          <nav className="flex flex-col gap-5 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-red-500 transition"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/reserve"
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl text-center transition font-semibold"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}