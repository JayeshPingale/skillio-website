"use client";

import React, { useState } from "react";
import { UPCOMING_BATCHES, BatchItem } from "@/data";
import { Calendar, Clock, MapPin, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface BatchScheduleProps {
  onOpenModal: (batchName?: string) => void;
}

export const BatchSchedule: React.FC<BatchScheduleProps> = ({ onOpenModal }) => {
  const [branchFilter, setBranchFilter] = useState<string>("all");

  const filteredBatches =
    branchFilter === "all"
      ? UPCOMING_BATCHES
      : UPCOMING_BATCHES.filter((b) =>
          branchFilter === "online"
            ? b.branch === "Online Live"
            : b.branch.toLowerCase().includes(branchFilter)
        );

  return (
    <section id="batches" className="py-16 sm:py-24 bg-[#161B22] border-b border-[#30363D]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0D1117] border border-[#30363D] text-xs font-mono text-[#3FB950] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#3FB950]" />
              <span>LIVE ADMISSION SCHEDULE (PUNE)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
              Upcoming &amp; Ongoing Batches
            </h2>
            <p className="text-sm sm:text-base text-[#8B949E] mt-2">
              Small batch sizes (max 15-18 students) to ensure personal 1-on-1 code reviews and doubt clearing.
            </p>
          </div>

          {/* Center Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0D1117] p-1.5 rounded-lg border border-[#30363D]">
            {[
              { id: "all", label: "All Centers" },
              { id: "pimple", label: "Pimple Saudagar" },
              { id: "erandwane", label: "Erandwane" },
              { id: "online", label: "Online Live" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setBranchFilter(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${
                  branchFilter === tab.id
                    ? "bg-[#FF8800] text-[#0D1117] font-bold"
                    : "text-[#8B949E] hover:text-[#F0F6FC]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-[#30363D] bg-[#0D1117]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#21262D] text-xs font-mono uppercase tracking-wider text-[#8B949E] border-b border-[#30363D]">
              <tr>
                <th className="py-4 px-6">Course Track</th>
                <th className="py-4 px-4">Start Date</th>
                <th className="py-4 px-4">Daily Timing</th>
                <th className="py-4 px-4">Duration</th>
                <th className="py-4 px-4">Campus / Mode</th>
                <th className="py-4 px-4">Availability</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#30363D] font-mono text-xs sm:text-sm">
              {filteredBatches.map((batch, idx) => (
                <tr key={idx} className="hover:bg-[#161B22] transition-colors group">
                  <td className="py-4 px-6 font-sans font-bold text-[#F0F6FC] group-hover:text-[#FFA657]">
                    {batch.courseName}
                  </td>
                  <td className="py-4 px-4 text-[#79C0FF]">
                    {batch.startDate}
                  </td>
                  <td className="py-4 px-4 text-[#C9D1D9]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8B949E]" />
                      {batch.timeSlot}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#8B949E]">
                    {batch.duration}
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 text-[#C9D1D9]">
                      <MapPin className="w-3.5 h-3.5 text-[#FF8800]" />
                      {batch.branch}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DA3633]/20 text-[#F85149] border border-[#DA3633]/40 text-xs font-semibold">
                      <AlertCircle className="w-3 h-3" />
                      Only {batch.seatsLeft} Seats Left
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onOpenModal(`Reserve Seat: ${batch.courseName} (${batch.branch})`)}
                      className="px-3.5 py-1.5 rounded bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] font-sans font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4">
          {filteredBatches.map((batch, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-3"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-bold text-[#F0F6FC] text-base leading-snug">
                  {batch.courseName}
                </h4>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#DA3633]/20 text-[#F85149] border border-[#DA3633]/40 shrink-0 ml-2">
                  {batch.seatsLeft} seats left
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#8B949E] pt-2 border-t border-[#30363D]">
                <div>
                  <span className="text-[#6E7681]">Date:</span>{" "}
                  <span className="text-[#79C0FF]">{batch.startDate}</span>
                </div>
                <div>
                  <span className="text-[#6E7681]">Time:</span>{" "}
                  <span className="text-[#C9D1D9]">{batch.timeSlot}</span>
                </div>
                <div>
                  <span className="text-[#6E7681]">Duration:</span>{" "}
                  <span className="text-[#C9D1D9]">{batch.duration}</span>
                </div>
                <div>
                  <span className="text-[#6E7681]">Campus:</span>{" "}
                  <span className="text-[#FFA657]">{batch.branch}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal(`Reserve Seat: ${batch.courseName} (${batch.branch})`)}
                className="w-full py-2.5 rounded-lg bg-[#FF8800] text-[#0D1117] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
              >
                <span>Reserve Seat (Free Demo)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg bg-[#0D1117] border border-[#30363D] text-xs text-[#8B949E] gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#3FB950] shrink-0" />
            <span>
              <strong>Zero-Risk Guarantee:</strong> Attend 2 days of live classes. If you are not 100% satisfied with the mentors, no fees required.
            </span>
          </div>
          <button
            onClick={() => onOpenModal("Talk to Academic Counselor")}
            className="text-[#58A6FF] hover:underline shrink-0 font-mono"
          >
            Need a custom weekend schedule? Speak with counselor →
          </button>
        </div>

      </div>
    </section>
  );
};
