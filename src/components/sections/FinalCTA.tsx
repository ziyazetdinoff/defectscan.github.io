"use client";
import React from "react";
import { Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Get Your Personal DefectScan AI Demonstration</h2>
          <p className="mt-2 text-sm text-muted-foreground">See how it works with your specific H2S well conditions</p>
          <ul className="mt-4 text-sm text-muted-foreground space-y-2">
            <li className="flex items-center gap-2"><Check className="text-secondary" size={16} /> Free trial on your actual wellhead</li>
            <li className="flex items-center gap-2"><Check className="text-secondary" size={16} /> Demo report within 24 hours</li>
            <li className="flex items-center gap-2"><Check className="text-secondary" size={16} /> 6-month ROI guarantee</li>
          </ul>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="card p-6 space-y-4"
        >
          <div>
            <label className="text-sm text-muted-foreground">Company name</label>
            <input required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 focus-ring" placeholder="e.g., NorthOil Group" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Technical director name</label>
            <input required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 focus-ring" placeholder="e.g., Alex Johnson" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Phone number</label>
            <input type="tel" pattern="[0-9+\-() ]+" required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 focus-ring" placeholder="+1 (555) 123-4567" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Number of harsh condition wells</label>
            <input type="number" min={1} max={500} required className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 focus-ring" placeholder="e.g., 24" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Current inspection challenges</label>
            <textarea className="mt-1 w-full rounded-md bg-transparent border border-border px-3 py-2 focus-ring" rows={3} placeholder="e.g., missed micro-cracks, long inspection time" />
          </div>
          <button className="btn-cta w-full" type="submit">Request Demo</button>
          <div className="text-xs text-muted-foreground text-center">Limited time: 10% discount for harsh condition specialists</div>
        </form>
      </div>
    </section>
  );
}


