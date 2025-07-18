import React from "react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Fruits", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Order", href: "#cta" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm animate-fadeIn">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo-exotic-fruits.svg"
            alt="Exotic Fruits Logo"
            className="h-9 w-9 object-contain animate-zoomIn"
          />
          <span className="font-bold text-2xl text-primary tracking-tight">
            ExoticFruits
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button placeholder */}
          <Button variant="outline" size="icon" aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
