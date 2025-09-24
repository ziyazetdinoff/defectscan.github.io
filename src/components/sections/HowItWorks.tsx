"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HowItWorks() {
  const steps = [
    { title: "Mount & Scan", desc: "Device installs above wellhead in 10 minutes" },
    { title: "Extract & Analyze", desc: "AI captures magnetogram as tubing is pulled" },
    { title: "Classify Defects", desc: "Neural network identifies all defect types instantly" },
    { title: "Generate Report", desc: "Detailed defect map with severity levels" },
  ];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="how" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">How It Works - Detailed Process</h2>
        <p className="mt-2 text-sm text-muted-foreground">Seamless integration into existing workover process</p>
        <div ref={ref} className="mt-10 relative">
          <div className="absolute left-0 right-0 top-8 md:top-12 h-px bg-gradient-to-r from-transparent via-color-border to-transparent" />
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="card p-6 relative overflow-hidden">
                <div className="h-10 w-10 rounded-full bg-color-primary/20 text-color-primary flex items-center justify-center font-semibold z-10">{i + 1}</div>
                <div className="mt-3 font-semibold z-10">{s.title}</div>
                <div className="mt-2 text-sm text-color-muted-foreground z-10">{s.desc}</div>
                <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 right-[-12px] h-px w-12 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 grid md:grid-cols-5 gap-4 text-sm">
            {[
              "H2S corrosion (all stages)",
              "Stress corrosion cracking",
              "Wall thickness reduction",
              "Mechanical damage",
              "Fatigue cracks (from 0.1mm)",
            ].map((d) => (
              <div key={d} className="card p-3 text-center text-color-muted-foreground">{d}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


