import React from "react";

const socialLinks = [
  { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0016.616 3c-2.733 0-4.946 2.21-4.946 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.883 1.671 3.905a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099A4.904 4.904 0 01.964 9.03v.062c0 2.385 1.697 4.374 3.946 4.827a4.935 4.935 0 01-2.212.084c.623 1.942 2.432 3.355 4.576 3.395A9.874 9.874 0 010 21.543 13.945 13.945 0 007.548 24c9.058 0 14.009-7.496 14.009-13.981 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z"/></svg>, href: "https://twitter.com/" },
  { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.974.977 1.244 2.243 1.306 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.062 1.366-.332 2.633-1.306 3.608-.975.976-2.242 1.246-3.608 1.308-1.265.058-1.645.069-4.849.069s-3.584-.011-4.849-.069c-1.366-.062-2.633-.332-3.608-1.308-.974-.975-1.244-2.242-1.306-3.608C2.175 15.645 2.163 15.265 2.163 12s.012-3.584.07-4.849c.062-1.366.332-2.633 1.306-3.608.975-.976 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.737 0 8.332.013 7.052.072c-1.676.076-3.184.524-4.387 1.727A6.081 6.081 0 00.073 7.051C.014 8.332 0 8.737 0 12s.013 3.668.072 4.948c.076 1.676.524 3.184 1.728 4.387a6.074 6.074 0 004.387 1.728c1.281.059 1.686.072 4.948.072s3.668-.013 4.948-.072c1.676-.076 3.184-.524 4.387-1.728a6.082 6.082 0 001.728-4.387c.059-1.281.072-1.686.072-4.948s-.013-3.668-.072-4.948c-.076-1.676-.524-3.184-1.728-4.387A6.08 6.08 0 0016.948.072C15.668.013 15.263 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>, href: "https://instagram.com/" },
  { icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.4H3.56V9h3.56v11.4zM5.34 7.67a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm15.06 12.73h-3.56v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.39-1.87 3.63 0 4.3 2.39 4.3 5.5v6.21z"/></svg>, href: "https://linkedin.com/" },
];

const footerLinks = [
  { name: "FAQs", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-4 animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center gap-2 mb-2">
            <img src="/logo-exotic-fruits.svg" alt="Logo" className="h-7 w-7" />
            <span className="text-lg font-bold text-primary">ExoticFruits</span>
          </a>
          <span className="text-gray-500 text-sm mb-3">hello@exoticfruits.com</span>
          <div className="flex gap-3 mb-3">
            {socialLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-gray-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
          <span className="text-gray-400 text-xs">© {new Date().getFullYear()} ExoticFruits. All rights reserved.</span>
        </div>
        <div className="flex flex-col md:items-end items-center gap-3">
          {footerLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary text-sm transition-colors">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
