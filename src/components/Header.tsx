"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Logo from "@/components/Logo";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-wide">DefectScan AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground">Problem</a>
          <a href="#solution" className="hover:text-foreground">Solution</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#roi" className="hover:text-foreground">ROI</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            className="btn-ghost"
            onClick={() => setTheme(isLight ? "dark" : "light")}
          >
            <Sun className="size-5 hidden light:inline" />
            <Moon className="size-5 inline light:hidden" />
          </button>
          <a href="#contact" className="btn-cta">Get Demo Report</a>
        </div>
      </div>
    </header>
  );
}

