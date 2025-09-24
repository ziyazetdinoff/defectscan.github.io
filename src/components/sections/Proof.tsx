"use client";
import React from "react";
import Image from "next/image";
import gazpromImg from "@/../public/gazprom-review.jpeg";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

export default function Proof() {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-semibold">Proven results</h2>
        <div className="card p-8 mt-5">
          <div className="text-base">MVP is working today</div>
          <p className="mt-3 text-lg">We built and tested an experimental unit on a live test stand. It reliably captures magnetograms in real time, and the on‑device ML model instantly detects and classifies defects.</p>
          <ul className="mt-5 grid sm:grid-cols-3 gap-3 text-base">
            <li className="flex items-center gap-2"><Check className="text-secondary" /> Experimental unit operational</li>
            <li className="flex items-center gap-2"><Check className="text-secondary" /> Stable magnetogram capture</li>
            <li className="flex items-center gap-2"><Check className="text-secondary" /> ML model trained and running</li>
          </ul>
        </div>
        <div className="card p-8 mt-5 grid gap-4 md:grid-cols-2 items-center">
          <div>
          <div className="text-base">Industry interest</div>
          <p className="mt-3 text-lg">We received interest for deployment from PJSC &quot;Gazprom Automation&quot;.</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border bg-black/20 p-2 flex items-center justify-center max-h-[420px]">
            <Image src={gazpromImg} alt="Letter of interest from Gazprom Automation" width={996} height={1064} className="w-full h-auto object-contain" />
          </div>
        </div>
        <div ref={ref} className="mt-8" />
      </div>
    </section>
  );
}


