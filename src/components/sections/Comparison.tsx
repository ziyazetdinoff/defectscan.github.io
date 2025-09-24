"use client";
import React from "react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const options = [
    {
      name: "DefectScan AI",
      highlight: true,
      tagline: "Best for H2S — fast, accurate, affordable",
      items: [
        { label: "Cost: $15k", good: true },
        { label: "Time: 5 sec per pipe", good: true },
        { label: "Accuracy: 99% in H2S", good: true },
        { label: "Harsh environment: Designed for H2S", good: true },
      ],
    },
    {
      name: "Downhole Robots",
      highlight: false,
      items: [
        { label: "Cost: $150k–$300k", good: false },
        { label: "Time: 2–4 hours", good: false },
        { label: "Accuracy: 95–98%", good: true },
        { label: "Harsh environment: Limited capability", good: false },
      ],
    },
    {
      name: "Manual Inspection",
      highlight: false,
      items: [
        { label: "Cost: $500 (risky)", good: false },
        { label: "Time: 6–8 hours", good: false },
        { label: "Accuracy: 60–80%", good: false },
        { label: "Harsh environment: Unreliable", good: false },
      ],
    },
  ];

  return (
    <section id="comparison" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-semibold">Why choose DefectScan AI for harsh conditions</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div
              key={opt.name}
              className={`rounded-2xl border p-6 ${
                opt.highlight ? "border-primary bg-primary/5 shadow-[0_20px_60px_-24px_rgba(27,77,255,0.35)]" : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl font-semibold">{opt.name}</div>
                {opt.highlight && <span className="text-xs rounded-full bg-primary/20 text-primary px-2 py-1">Recommended</span>}
              </div>
              {opt.tagline && <div className="mt-2 text-base text-muted-foreground">{opt.tagline}</div>}
              <ul className="mt-4 space-y-3 text-base">
                {opt.items.map((it) => (
                  <li key={it.label} className="flex items-center gap-2">
                    {it.good ? <Check className="text-secondary" /> : <X className="text-red-500" />}
                    <span>{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


