"use client";

import React from "react";
import { MENTORS } from "@/data";
import { ShieldCheck, UserCheck, Terminal, Award, ArrowUpRight } from "lucide-react";

interface MentorShowcaseProps {
  onOpenModal: (title?: string) => void;
}

export const MentorShowcase: React.FC<MentorShowcaseProps> = ({ onOpenModal }) => {
  return (
    <section id="mentors" className="py-16 sm:py-24 bg-[#0D1117] border-b border-[#30363D]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#D2A8FF] mb-3">
              <Award className="w-3.5 h-3.5 text-[#D2A8FF]" />
              <span>LEARN FROM WORKING MNC PRACTITIONERS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
              Meet Your Technical Mentors
            </h2>
            <p className="text-sm sm:text-base text-[#8B949E] mt-2">
              You are taught by engineering leads who build high-throughput systems and enterprise
              automation frameworks during the day, not freelance theoreticians.
            </p>
          </div>

          <button
            onClick={() => onOpenModal("Book 1-on-1 Profile Review with Lead Mentor")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md"
          >
            <UserCheck className="w-4 h-4" />
            <span>Book 1-on-1 Profile Review</span>
          </button>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENTORS.map((mentor, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#D2A8FF] p-6 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-[#D2A8FF]/5"
            >
              <div>
                {/* Avatar Icon / Initial */}
                <div className="w-16 h-16 rounded-xl bg-[#21262D] border border-[#30363D] flex items-center justify-center font-bold text-xl text-[#FF8800] mb-4 group-hover:border-[#FF8800] transition-colors font-mono">
                  {mentor.name.split(" ").map(n => n[0]).join("")}
                </div>

                <h3 className="font-bold text-[#F0F6FC] text-lg group-hover:text-[#FFA657] transition-colors">
                  {mentor.name}
                </h3>
                <p className="text-xs font-mono text-[#58A6FF] font-semibold mt-0.5">
                  {mentor.role}
                </p>

                {/* Experience & Ex-Company Badges */}
                <div className="my-3 space-y-1 text-xs font-mono">
                  <div className="px-2 py-0.5 rounded bg-[#0D1117] border border-[#30363D] text-[#3FB950] inline-block mr-1">
                    {mentor.experience}
                  </div>
                  <p className="text-[#8B949E] text-[11px] pt-1">
                    {mentor.exCompanies}
                  </p>
                </div>

                {/* Specialty */}
                <p className="text-xs text-[#C9D1D9] leading-relaxed mt-2 pt-3 border-t border-[#30363D]">
                  <strong className="text-[#F0F6FC] font-semibold block mb-1">Core Focus:</strong>
                  {mentor.specialty}
                </p>
              </div>

              {/* Verified Instructor Badge */}
              <div className="mt-5 pt-3 border-t border-[#30363D] flex items-center justify-between text-[11px] font-mono text-[#8B949E]">
                <span className="flex items-center gap-1 text-[#3FB950]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Senior Faculty</span>
                </span>
                <span className="text-[#6E7681]">Offline &amp; Live</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
