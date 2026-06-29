"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

export function GlowButton({ href, children, external }: GlowButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glow-hover inline-flex items-center justify-center gap-2 rounded border border-cyber/40 bg-cyber/5 px-6 py-3 font-mono text-sm text-cyber transition-colors hover:border-cyber hover:bg-cyber/10"
    >
      {children}
    </motion.a>
  );
}
