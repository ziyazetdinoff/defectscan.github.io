"use client";
import Image from "next/image";
import DeviceImage from "@/components/DeviceImage";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import heroBg from "@/../public/hero-bg.jpg";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const [bgSrc, setBgSrc] = useState(withBasePath(heroBg.src));

  return (
    <section id="hero" ref={ref} className="relative section">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <Image
          src={bgSrc}
          alt="Harsh condition oil well background"
          fill
          className="object-cover opacity-50"
          priority
          onError={() =>
            setBgSrc(
              "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1960&auto=format&fit=crop"
            )
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-secondary" /> MVP is live: magnetogram capture + ML classification
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              AI device for instant tubing defect inspection at the wellhead
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-semibold">
              Scans every pipe during extraction. 99% accuracy in defects detection
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#contact" className="btn-cta">Get Demo Report</a>
              <a href="#comparison" className="btn-outline">Why DefectScan</a>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="card p-4">
          <DeviceImage width={900} height={600} className="rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
}

