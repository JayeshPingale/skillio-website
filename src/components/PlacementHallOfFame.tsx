"use client";

import React from "react";
import { PLACEMENTS_HALL_OF_FAME } from "@/data";
import { Award, CheckCircle2, TrendingUp, Download, Building, ArrowUpRight } from "lucide-react";

interface PlacementHallOfFameProps {
  onOpenModal: (title?: string) => void;
}

export const PlacementHallOfFame: React.FC<PlacementHallOfFameProps> = ({ onOpenModal }) => {
  return (
    <section id="placements" className="py-16 sm:py-24 bg-[#0D1117] border-b border-[#30363D]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#3FB950] mb-3">
              <Award className="w-3.5 h-3.5 text-[#3FB950]" />
              <span>TRANSPARENT PROOF OF OUTCOMES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
              Placement Hall of Fame
            </h2>
            <p className="text-sm sm:text-base text-[#8B949E] mt-2">
              Real students, real company offers, and real career transformations.
              We don&apos;t just teach code—we place engineers.
            </p>
          </div>

          <button
            onClick={() => onOpenModal("Download 2026 Placements Report")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] text-xs font-mono transition-colors shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#58A6FF]" />
            <span>Download Verified Placements PDF</span>
          </button>
        </div>

        {/* Placements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEMENTS_HALL_OF_FAME.map((student, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#161B22] border border-[#30363D] p-6 hover:border-[#3FB950] transition-all flex flex-col justify-between relative group hover:shadow-lg hover:shadow-[#3FB950]/5"
            >
              <div>
                {/* Top Strip: Candidate & Package Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#21262D] border border-[#30363D] flex items-center justify-center font-bold text-sm text-[#FF8800] uppercase font-mono">
                      {student.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#F0F6FC] text-base group-hover:text-[#FFA657] transition-colors">
                        {student.name}
                      </h4>
                      <p className="text-xs text-[#8B949E] font-mono">
                        {student.priorBg}
                      </p>
                    </div>
                  </div>

                  {/* CTC Package Badge in Glowing Green */}
                  <div className="px-2.5 py-1 rounded bg-[#238636]/20 border border-[#238636]/40 text-[#3FB950] font-mono font-bold text-xs shrink-0 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{student.package}</span>
                  </div>
                </div>

                {/* Role and Company Tag */}
                <div className="p-3 rounded-lg bg-[#0D1117] border border-[#30363D] space-y-1 mb-4 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#C9D1D9]">
                    <span className="text-[#8B949E]">Role:</span>
                    <span className="font-semibold text-[#F0F6FC]">{student.role}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#C9D1D9]">
                    <span className="text-[#8B949E]">Company:</span>
                    <span className="text-[#79C0FF] font-semibold flex items-center gap-1">
                      <Building className="w-3 h-3" />
                      {student.company}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#C9D1D9]">
                    <span className="text-[#8B949E]">Track:</span>
                    <span className="text-[#FFA657]">{student.course}</span>
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-xs text-[#C9D1D9] italic leading-relaxed border-l-2 border-[#FF8800] pl-3 py-0.5">
                  &ldquo;{student.reviewSnippet}&rdquo;
                </p>
              </div>

              {/* Verified Badge footer */}
              <div className="mt-5 pt-3 border-t border-[#30363D] flex items-center justify-between text-[11px] font-mono text-[#8B949E]">
                <span className="flex items-center gap-1 text-[#3FB950]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Offer Verified by Skillio Cell</span>
                </span>
                <span className="text-[#6E7681]">Pune Campus</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Placement Cell Metrics */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-[#161B22] via-[#21262D] to-[#161B22] border border-[#30363D] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#F0F6FC]">
              Are you a fresher, or do you have a career gap?
            </h3>
            <p className="text-xs sm:text-sm text-[#8B949E]">
              Over 45% of our placed students had non-CS degrees (Mechanical, Civil, Commerce) or career gaps of 1–4 years.
            </p>
          </div>
          <button
            onClick={() => onOpenModal("Career Gap / Non-CS Placement Counseling")}
            className="px-6 py-3 rounded-lg bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] font-bold text-xs uppercase tracking-wider shrink-0 shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>Talk to Placement Officer</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
