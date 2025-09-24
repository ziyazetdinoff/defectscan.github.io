"use client";
import React from "react";

export default function TechSpecs() {
  const specs = [
    { label: "Temperature", value: "-40°F to 176°F operating range" },
    { label: "H2S Resistance", value: "Certified for sour gas environments" },
    { label: "Corrosion Protection", value: "Marine-grade materials" },
    { label: "Autonomous Operation", value: "72 hours continuous" },
    { label: "Tubing Compatibility", value: "2-3/8\" to 7\" (60-178mm) diameter" },
    { label: "Certification", value: "API, NACE, explosion-proof ratings" },
    { label: "Data Storage", value: "1000+ well records offline capability" },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold">Built for the toughest environments</h2>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specs.map((s, i) => (
            <div key={i} className="card p-5">
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className="mt-2 font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


