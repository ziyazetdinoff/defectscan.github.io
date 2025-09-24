"use client";
import React from "react";
import { motion } from "framer-motion";
import DeviceImage from "@/components/DeviceImage";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Timer, Target, Hourglass, ArrowRight } from "lucide-react";

export default function Solution() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });
  return (
    <section id="solution" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">DefectScan AI: Instant analysis during tubing extraction</h2>
          <p className="mt-3 text-base">Mounts above the wellhead and scans every pipe as it is pulled up. AI classifies defects in real time.</p>
          <div ref={ref} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Per pipe", value: 1.2, suffix: "s", Icon: Timer },
              { label: "Accuracy", value: 99, suffix: "%", Icon: Target },
              { label: "Extra downtime", value: 0, suffix: "h", Icon: Hourglass },
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/15 to-secondary/10 p-5">
                <div className="flex items-center gap-3">
                  <b.Icon className="text-primary" />
                  <div className="text-base text-muted-foreground">{b.label}</div>
                </div>
                <div className="mt-2 text-4xl font-bold">
                  {inView ? <CountUp end={b.value} decimals={b.value % 1 !== 0 ? 1 : 0} duration={1.2} /> : 0}
                  <span className="text-muted-foreground ml-1 text-2xl">{b.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              { text: "Mount above wellhead" },
              { text: "Scan during extraction" },
              { text: "AI classify" },
              { text: "Instant report" },
            ].map((c, i) => (
              <div key={i} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2">
                <span className="inline-block h-2 w-2 rounded-full bg-secondary" /> {c.text}
                {i < 3 && <ArrowRight className="size-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a href="#how" className="btn-outline">See how it works</a>
          </div>
        </div>
        <div className="card p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <DeviceImage width={440} height={300} className="rounded-lg" />
              <div className="absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs">Above the wellhead</div>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="rounded-lg bg-muted h-[140px] grid place-items-center text-base text-muted-foreground">Magnetogram preview</div>
              <div className="rounded-lg bg-muted h-[140px] grid place-items-center text-base text-muted-foreground">Defect classes heatmap</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


