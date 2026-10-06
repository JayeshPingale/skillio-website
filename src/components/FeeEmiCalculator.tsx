"use client";

import React, { useState } from "react";
import { CreditCard, CheckCircle2, Calculator, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

interface FeeEmiCalculatorProps {
  onOpenModal: (title?: string) => void;
}

export const FeeEmiCalculator: React.FC<FeeEmiCalculatorProps> = ({ onOpenModal }) => {
  const [selectedTrack, setSelectedTrack] = useState<"testing" | "fullstack" | "data">("testing");
  const [tenure, setTenure] = useState<number>(9);

  // Approximate baseline transparent market estimates for reference
  const courseBaseFees: Record<string, { total: number; title: string }> = {
    testing: { total: 32000, title: "AI-Powered Testing (Java + Selenium)" },
    fullstack: { total: 42000, title: "Java Full Stack Development" },
    data: { total: 38000, title: "Data Analytics & AI Mastery" },
  };

  const currentCourse = courseBaseFees[selectedTrack];
  const monthlyEmi = Math.round(currentCourse.total / tenure);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#161B22] border-b border-[#30363D]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-[#30363D] text-xs font-mono text-[#3FB950]">
            <CreditCard className="w-3.5 h-3.5 text-[#3FB950]" />
            <span>AFFORDABLE, ZERO-SURPRISE PRICING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
            Transparent Fees &amp; Zero-Cost EMI Calculator
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E]">
            Financial constraints shouldn&apos;t block your tech career. Learn first, pay in flexible
            monthly installments with 0% interest and scholarship grants.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0D1117] border border-[#30363D] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Select Track */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[#8B949E] block mb-2">
                  1. Select Your Target Career Track:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "testing", label: "QA Testing" },
                    { id: "fullstack", label: "Java Full Stack" },
                    { id: "data", label: "Data Analytics" },
                  ].map((track) => (
                    <button
                      key={track.id}
                      onClick={() => setSelectedTrack(track.id as any)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-semibold font-mono transition-all border cursor-pointer ${
                        selectedTrack === track.id
                          ? "bg-[#21262D] text-[#FF8800] border-[#FF8800]"
                          : "bg-[#161B22] text-[#8B949E] border-[#30363D] hover:text-[#E6EDF3]"
                      }`}
                    >
                      {track.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Tenure */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#8B949E] uppercase tracking-wider">
                    2. Select Zero-Cost EMI Tenure:
                  </span>
                  <span className="text-[#FF8800] font-bold">{tenure} Months</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setTenure(m)}
                      className={`py-2 rounded-lg text-xs font-mono font-bold transition-all border cursor-pointer ${
                        tenure === m
                          ? "bg-[#FF8800] text-[#0D1117] border-[#FF8800]"
                          : "bg-[#161B22] text-[#C9D1D9] border-[#30363D] hover:bg-[#21262D]"
                      }`}
                    >
                      {m} Mos
                    </button>
                  ))}
                </div>
              </div>

              {/* Scholarship & Payment Perks */}
              <div className="space-y-2 pt-2 border-t border-[#30363D] text-xs text-[#C9D1D9]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                  <span>0% Interest with all major credit/debit cards &amp; NBFC partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                  <span>Up to 30% Fee Waiver via Skillio Aptitude Test (SAT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                  <span>Includes all course material, LMS videos, and placement drives</span>
                </div>
              </div>

            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-5 rounded-xl bg-[#161B22] border border-[#30363D] p-6 text-center space-y-4">
              <span className="inline-block text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#21262D] text-[#79C0FF] border border-[#30363D]">
                Monthly Investment
              </span>

              <div>
                <p className="text-4xl sm:text-5xl font-extrabold text-[#F0F6FC] font-sans">
                  ₹{monthlyEmi.toLocaleString("en-IN")}
                  <span className="text-sm font-normal text-[#8B949E] font-mono"> / mo</span>
                </p>
                <p className="text-xs text-[#3FB950] font-mono mt-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero Processing Fee • 0% Interest</span>
                </p>
              </div>

              <div className="p-3 rounded bg-[#0D1117] border border-[#30363D] text-left text-xs font-mono space-y-1 text-[#8B949E]">
                <div className="flex justify-between">
                  <span>Selected Track:</span>
                  <span className="text-[#C9D1D9] font-medium">{currentCourse.title.slice(0, 18)}...</span>
                </div>
                <div className="flex justify-between">
                  <span>Tenure Duration:</span>
                  <span className="text-[#C9D1D9] font-medium">{tenure} Months</span>
                </div>
                <div className="flex justify-between">
                  <span>Scholarship:</span>
                  <span className="text-[#3FB950] font-semibold">Eligible (Apply Below)</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal(`Apply for EMI & Scholarship: ${currentCourse.title}`)}
                className="w-full py-3.5 rounded-lg bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] font-bold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Apply for EMI &amp; Scholarship</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-[#8B949E] font-mono">
                No credit card? Speak with our counselor for monthly installment plans.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
