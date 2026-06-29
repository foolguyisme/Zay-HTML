"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "home", href: "#hero" },
  { label: "whoami", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "kaggle", href: "#kaggle" },
  { label: "projects", href: "#projects" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border-dim bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="font-mono text-sm text-cyber glow-text">
          ~/foolguyisme
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-xs text-neutral-400 transition-colors hover:text-cyber"
              >
                <span className="text-terminal">./</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-neutral-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border-dim bg-background/95 px-4 py-4 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-sm text-neutral-400 hover:text-cyber"
            >
              <span className="text-terminal">$</span> cd {item.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
