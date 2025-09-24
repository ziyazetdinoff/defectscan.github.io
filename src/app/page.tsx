"use client";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import ROI from "@/components/sections/ROI";
import Comparison from "@/components/sections/Comparison";
import Proof from "@/components/sections/Proof";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <ROI />
      <Comparison />
      <Proof />
      <FinalCTA />
      <footer className="border-t border-border py-10">
        <div className="container text-xs text-muted-foreground">© {new Date().getFullYear()} DefectScan AI. All rights reserved.</div>
      </footer>
    </div>
  );
}
