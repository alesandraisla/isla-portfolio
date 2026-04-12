"use client";

import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return <motion.div {...fade}>{children}</motion.div>;
}
