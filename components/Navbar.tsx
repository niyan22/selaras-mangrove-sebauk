"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Program", href: "/program" },
  { label: "Dampak", href: "/dampak" },
  { label: "Linimasa", href: "/linimasa" },
  { label: "Galeri", href: "/galeri" },
  { label: "Peta", href: "/peta" },
  { label: "Tim", href: "/tim" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/75 text-white backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em]">
          <Image src="/logo.png" alt="Logo Selaras Mangrove Sebauk" width={40} height={40} priority className="h-10 w-10 object-contain" />
          Mangrove Sebauk
        </Link>

        <div className="hidden items-center gap-1 text-sm text-white/78 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 transition hover:text-white"
              >
                <span className={active ? "text-white" : ""}>{item.label}</span>
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-x-2 -bottom-[1px] h-[2px] rounded-full bg-ember"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-ember lg:hidden"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {navItems.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                        active ? "bg-white/10 text-white" : "text-white/76 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
