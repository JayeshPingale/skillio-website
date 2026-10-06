"use client";

import React from "react";
import { Zap, XCircle, CheckCircle2, Award, Terminal, Users, Cpu } from "lucide-react";

export const WhySkillio: React.FC = () => {
  return (
    <section id="why-skillio" className="py-16 sm:py-24 bg-[#161B22] border-b border-[#30363D]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-[#30363D] text-xs font-mono text-[#58A6FF]">
            <Zap className="w-3.5 h-3.5 text-[#58A6FF]" />
            <span>THE SKILLIO ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
            Why Pune&apos;s Smartest Students Choose Skillio
          </h2>
          <p className="text-sm sm:text-base text-[#8B949E]">
            Traditional colleges teach for semester exams. Standard institutes teach from PPTs.
            Skillio trains you like an engineer inside a real software delivery team.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-[#FF8800] transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#FF8800]/10 border border-[#FF8800]/30 flex items-center justify-center text-[#FF8800]">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#F0F6FC] text-lg">Code-First Pedagogy</h3>
            <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
              No boring slides or theoretical memorization. 80% of class time is spent in IDEs
              writing production automation scripts, REST APIs, and database schemas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-[#58A6FF] transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#58A6FF]/10 border border-[#58A6FF]/30 flex items-center justify-center text-[#58A6FF]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#F0F6FC] text-lg">2026 AI-Ready Stacks</h3>
            <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
              We teach modern tools the industry is actively hiring for right now: Playwright,
              TypeScript, GenAI testing agents, Docker containers, and Spring Boot 3.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D1117] border border-[#30363D] hover:border-[#3FB950] transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#3FB950]/10 border border-[#3FB950]/30 flex items-center justify-center text-[#3FB950]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#F0F6FC] text-lg">Rigorous Mock Drives</h3>
            <p className="text-xs sm:text-sm text-[#8B949E] leading-relaxed">
              Every Saturday, attend 1-on-1 technical and HR mock interviews with working tech leads.
              Get brutal feedback on your resume, git repositories, and communication.
            </p>
          </div>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="overflow-hidden rounded-xl border border-[#30363D] bg-[#0D1117]">
          <div className="p-4 sm:p-6 bg-[#21262D] border-b border-[#30363D]">
            <h3 className="text-lg font-bold text-[#F0F6FC]">
              How Skillio Compares With Other Options
            </h3>
            <p className="text-xs text-[#8B949E] mt-0.5 font-mono">
              The honest breakdown of what you actually get
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#161B22] text-[#8B949E] font-mono uppercase tracking-wider text-[11px] border-b border-[#30363D]">
                <tr>
                  <th className="py-3.5 px-6">Criteria</th>
                  <th className="py-3.5 px-6 text-[#FF8800] font-bold">Skillio Academy</th>
                  <th className="py-3.5 px-6">Other Pune Institutes</th>
                  <th className="py-3.5 px-6">College / Self Study</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#30363D] text-[#C9D1D9]">
                <tr className="hover:bg-[#161B22]/50">
                  <td className="py-4 px-6 font-semibold text-[#F0F6FC]">Curriculum Recency</td>
                  <td className="py-4 px-6 text-[#3FB950] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3FB950]" />
                    <span>Updated for 2026 (GenAI, Playwright, Spring 3)</span>
                  </td>
                  <td className="py-4 px-6 text-[#8B949E]">Often outdated 2018-2020 syllabi</td>
                  <td className="py-4 px-6 text-[#8B949E]">Obsolete university syllabus</td>
                </tr>
                <tr className="hover:bg-[#161B22]/50">
                  <td className="py-4 px-6 font-semibold text-[#F0F6FC]">Project Experience</td>
                  <td className="py-4 px-6 text-[#3FB950] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3FB950]" />
                    <span>Real production apps on GitHub &amp; CI/CD</span>
                  </td>
                  <td className="py-4 px-6 text-[#8B949E]">Basic cookie-cutter demo scripts</td>
                  <td className="py-4 px-6 text-[#8B949E]">Copy-pasted academic projects</td>
                </tr>
                <tr className="hover:bg-[#161B22]/50">
                  <td className="py-4 px-6 font-semibold text-[#F0F6FC]">Placement Support</td>
                  <td className="py-4 px-6 text-[#3FB950] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3FB950]" />
                    <span>Dedicated corporate drives until placed</span>
                  </td>
                  <td className="py-4 px-6 text-[#8B949E]">Only forwarding Telegram/WhatsApp links</td>
                  <td className="py-4 px-6 text-[#8B949E]">Cold applying on Naukri / LinkedIn</td>
                </tr>
                <tr className="hover:bg-[#161B22]/50">
                  <td className="py-4 px-6 font-semibold text-[#F0F6FC]">Faculty Profile</td>
                  <td className="py-4 px-6 text-[#3FB950] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3FB950]" />
                    <span>10-12+ yrs MNC Leads &amp; Architects</span>
                  </td>
                  <td className="py-4 px-6 text-[#8B949E]">Recent students turned trainers</td>
                  <td className="py-4 px-6 text-[#8B949E]">Academic theoretical professors</td>
                </tr>
                <tr className="hover:bg-[#161B22]/50">
                  <td className="py-4 px-6 font-semibold text-[#F0F6FC]">Batch Size</td>
                  <td className="py-4 px-6 text-[#3FB950] font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3FB950]" />
                    <span>Capped at 15–18 students</span>
                  </td>
                  <td className="py-4 px-6 text-[#8B949E]">40–60 students per batch</td>
                  <td className="py-4 px-6 text-[#8B949E]">70+ students in classroom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
