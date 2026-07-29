import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="https://i.ibb.co/DH6v7qcX/135820508-424008445307142-4129750934846353851-n.jpg"
            alt="The Movie People Logo"
            className="h-10 w-auto rounded-sm object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-xs tracking-[0.2em] uppercase transition-colors duration-500 relative",
                  isActive ? "text-white" : "text-white/50 hover:text-white"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Button (Visual only for minimal setup, could expand) */}
        <div className="md:hidden flex flex-col items-end gap-1.5 cursor-pointer p-2 opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-6 h-[1px] bg-white" />
          <div className="w-4 h-[1px] bg-white" />
          <div className="w-6 h-[1px] bg-white" />
        </div>
      </div>
    </header>
  );
}
