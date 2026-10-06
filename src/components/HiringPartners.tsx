"use client";

import React from "react";
import { HIRING_PARTNERS } from "@/data";
import { Building2 } from "lucide-react";

export const HiringPartners: React.FC = () => {
  return (
    <section className="bg-[#161B22] border-b border-[#30363D] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5 shrink-0">
            <Building2 className="w-5 h-5 text-[#FF8800]" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#8B949E]">
                Where Our Students Work
              </p>
              <h3 className="text-sm font-bold text-[#F0F6FC]">
                150+ Top IT &amp; Product Hiring Companies
              </h3>
            </div>
          </div>

          {/* Partner Badges Carousel / Grid */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5 sm:gap-3">
            {HIRING_PARTNERS.map((partner) => (
              <div
                key={partner}
                className="px-3.5 py-1.5 rounded-md bg-[#0D1117] border border-[#30363D] hover:border-[#FF8800] transition-colors group cursor-default"
              >
                <span className="text-xs sm:text-sm font-mono font-semibold text-[#C9D1D9] group-hover:text-[#F0F6FC] transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
