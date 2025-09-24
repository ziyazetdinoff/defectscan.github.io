"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
// charts removed from this section

// no chart data

export default function Problem() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section id="problem" className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">Harsh condition wells: Every maintenance day costs millions</h2>
        <p className="mt-2 text-sm text-muted-foreground">Wells with hydrogen sulfide and high water content require workover every 6 months</p>
        <div ref={ref} className="mt-10 grid md:grid-cols-5 gap-6">
          {[
            { title: "Extract tubing from wellbore → 3-day maintenance cycle", icon: "⏱️", value: 3, suffix: " days" },
            { title: "Visual inspection by workers walking along pipes", icon: "👁️", value: 60, suffix: "–80% acc" },
            { title: "Manual defectoscopy with handheld devices", icon: "🔧", value: 4, suffix: "–8 hrs" },
            { title: "Human error factor in critical defect detection", icon: "🧑‍🏭", value: 18, suffix: "% risk" },
            { title: "Risk of missing micro‑cracks and corrosion spots", icon: "⚠️", value: 0.1, suffix: " mm" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="card p-6"
            >
              <div className="text-3xl">{item.icon}</div>
              <div className="mt-3 text-muted-foreground text-sm">{item.title}</div>
              <div className="mt-2 text-2xl font-bold">
                {inView ? <CountUp end={item.value} decimals={item.value % 1 !== 0 ? 1 : 0} duration={1.6} /> : 0}
                <span className="text-muted-foreground">{item.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="text-xl md:text-2xl font-semibold text-center">How to achieve 99% accuracy and 1s defectoscopy per pipe?</div>
          <a href="#solution" aria-label="Go to solution" className="group">
            <span className="inline-grid place-items-center w-12 h-12 rounded-full border border-border bg-card/70 backdrop-blur transition-transform group-hover:translate-y-0.5">
              <ChevronDown className="text-primary animate-bounce" />
            </span>
          </a>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">Key insight: Traditional methods designed for &quot;easy&quot; wells fail in harsh H2S environments</div>
      </div>
    </section>
  );
}


