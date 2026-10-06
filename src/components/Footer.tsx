"use client";

import React from "react";
import { Terminal, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";
import { COURSES_DATA } from "@/data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D1117] border-t border-[#30363D] pt-16 pb-12 text-xs text-[#8B949E]">
      <div className="container mx-auto px-4">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Philosophy (2 cols wide on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-[#FF8800]" />
              </div>
              <span className="text-xl font-extrabold text-[#F0F6FC]">
                Skillio<span className="text-[#FF8800]">.</span>
              </span>
            </div>
            
            <p className="text-[#C9D1D9] text-xs sm:text-sm leading-relaxed max-w-sm">
              Pune&apos;s outcome-driven technical training accelerator. We equip graduates, freshers,
              and working professionals with the exact skills, frameworks, and confidence needed to crack
              tier-1 IT roles.
            </p>

            <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D] text-[11px] font-mono space-y-1">
              <div className="flex items-center gap-2 text-[#3FB950]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-semibold">ISO Certified &amp; MSME Recognized Institute</span>
              </div>
              <p className="text-[#8B949E]">
                Over 5,000+ alumni working across 150+ tech MNCs and startups.
              </p>
            </div>
          </div>

          {/* Col 2: In-Demand Courses */}
          <div className="space-y-3">
            <p className="font-mono font-bold uppercase tracking-wider text-[#F0F6FC]">
              Top Tech Tracks
            </p>
            <ul className="space-y-2 text-[#C9D1D9]">
              {COURSES_DATA.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href="#courses" className="hover:text-[#FF8800] transition-colors">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Campus Locations in Pune */}
          <div className="space-y-3 lg:col-span-2">
            <p className="font-mono font-bold uppercase tracking-wider text-[#F0F6FC]">
              Our Pune Campuses
            </p>
            
            <div className="space-y-4">
              {/* Branch 1 */}
              <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#F0F6FC] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF8800]" />
                    Pimple Saudagar Center (Headquarters)
                  </span>
                  <a
                    href="https://maps.google.com/?q=Unit+504+Ganeesham+E+Pimple+Saudagar+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#58A6FF] hover:underline flex items-center gap-0.5"
                  >
                    Maps <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <p className="text-[11px] text-[#8B949E] leading-relaxed">
                  Unit 504, Ganeesham E, Near Govind Yashada BRT stop, Pimple Saudagar, Pune - 411027
                </p>
                <p className="text-[11px] font-mono text-[#C9D1D9]">
                  Call / WhatsApp: +91 91305 02135 / +91 84848 31616
                </p>
              </div>

              {/* Branch 2 */}
              <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D] space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#F0F6FC] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#58A6FF]" />
                    Erandwane Center (Karve Road)
                  </span>
                  <a
                    href="https://maps.google.com/?q=Bhalekar+Chawl+Erandwane+Pune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#58A6FF] hover:underline flex items-center gap-0.5"
                  >
                    Maps <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <p className="text-[11px] text-[#8B949E] leading-relaxed">
                  Office No. 6 &amp; 7, 1st Floor, Bhalekar Chawl, Karve Road, Erandwane, Pune - 411004
                </p>
                <p className="text-[11px] font-mono text-[#C9D1D9]">
                  Call / WhatsApp: +91 91305 02135 / +91 84848 31600
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-[#30363D] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8B949E]">
          <div>
            © {new Date().getFullYear()} Skillio Tech Training Academy. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@helloskillio.com" className="hover:text-[#F0F6FC] flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#FF8800]" />
              info@helloskillio.com
            </a>
            <span>•</span>
            <span className="text-[#C9D1D9]">Crafted with GitHub Dark &amp; Orange Palette</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
