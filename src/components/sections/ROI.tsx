"use client";
import React, { useMemo, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ROI() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [wells, setWells] = useState(10);
  const [freq, setFreq] = useState(2);
  const [cost, setCost] = useState(10000);
  const [inspectionCost, setInspectionCost] = useState(20000);

  const compute = useMemo(() => {
    const numWells = Number(wells);
    const maintenancePerYear = Number(freq);
    const dailyCost = Number(cost);
    const baselineDays = 3;
    const improvedDays = 2;
    const savingsPerMaintenance = (baselineDays - improvedDays) * dailyCost;
    const annualTimeSavingsDays = numWells * maintenancePerYear * (baselineDays - improvedDays);
    const annualSavings = numWells * maintenancePerYear * savingsPerMaintenance + Math.max(0, inspectionCost * 0.6);
    const deviceCost = 80000; // hypothetical
    const paybackMonths = Math.max(1, Math.round((deviceCost / Math.max(1, annualSavings)) * 12));
    const detectionImprovement = 99 - 70; // vs 60-80% manual
    return { annualSavings, paybackMonths, annualTimeSavingsDays, detectionImprovement };
  }, [wells, freq, cost, inspectionCost]);

  return (
    <section id="roi" className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">ROI Calculator</h2>
          <p className="mt-2 text-muted-foreground">Calculate savings for your harsh condition wells</p>
          <div ref={ref} className="mt-6 space-y-6">
            <div>
              <div className="flex justify-between text-sm"><span>Number of H2S wells</span><span>{wells}</span></div>
              <input type="range" min={1} max={50} value={wells} className="w-full" onChange={(e) => setWells(Number(e.target.value))} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Workover frequency (per year)</span><span>{freq}</span></div>
              <input type="range" min={1} max={12} value={freq} className="w-full" onChange={(e) => setFreq(Number(e.target.value))} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Daily downtime cost ($)</span><span>{cost}</span></div>
              <input type="range" min={3000} max={30000} step={500} value={cost} className="w-full" onChange={(e) => setCost(Number(e.target.value))} />
            </div>
            <div>
              <div className="flex justify-between text-sm"><span>Current inspection method cost ($/year)</span><span>{inspectionCost}</span></div>
              <input type="range" min={0} max={60000} step={1000} value={inspectionCost} className="w-full" onChange={(e) => setInspectionCost(Number(e.target.value))} />
            </div>
          </div>
        </div>
        <div className="card p-6">
          <div className="grid gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Annual savings</div>
              <div className="text-4xl font-bold">{inView ? <CountUp end={compute.annualSavings} prefix="$" separator="," duration={0.6} /> : "$0"}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Annual time savings</div>
              <div className="text-2xl font-semibold">{inView ? <CountUp end={compute.annualTimeSavingsDays} suffix=" days" duration={0.6} /> : "0 days"}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Defect detection improvement</div>
              <div className="text-2xl font-semibold">{inView ? <CountUp end={compute.detectionImprovement} suffix="%" duration={0.6} /> : "0%"}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Payback period</div>
              <div className="text-2xl font-semibold">{inView ? <CountUp end={compute.paybackMonths} suffix=" months" duration={0.6} /> : "0 months"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


