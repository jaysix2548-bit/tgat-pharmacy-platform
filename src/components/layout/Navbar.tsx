"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookMarked, BookOpen, BrainCircuit, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/my-mistakes", label: "Mistake Notebook", icon: BookMarked },
    { href: "/tgat1/study", label: "English Prep", icon: BookOpen },
    { href: "/tgat2/study", label: "Logic Prep", icon: BookOpen },
    { href: "/tgat3/study", label: "Workforce Prep", icon: BookOpen },
  ];

  // Don't show navbar in active exams to prevent distraction/accidental navigation
  const isExamPage = ["/tgat1", "/tgat2", "/tgat3"].includes(pathname);
  if (isExamPage) return null;

  return (
    <nav className="sticky top-0 z-50 bg-[#050b14]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <BrainCircuit className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-black text-base text-white tracking-tight group-hover:text-neon-blue transition-colors">
              TGAT PHARMACY
            </span>
            <span className="text-[9px] bg-neon-blue/10 text-neon-blue border border-neon-blue/20 font-bold px-1.5 py-0.5 rounded ml-2">
              TCAS 2570
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? "text-neon-blue" : "text-slate-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" /> {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050b14] border-b border-white/5 py-4 px-6 space-y-4 shadow-2xl z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 text-sm font-bold uppercase tracking-wider py-2 border-b border-white/5 transition-colors ${
                  isActive ? "text-neon-blue" : "text-slate-400 hover:text-white"
                }`}
              >
                <Icon className="w-4.5 h-4.5" /> {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
