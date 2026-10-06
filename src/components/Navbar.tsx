"use client";

import React, { useState } from "react";
import { Terminal, Phone, MessageSquare, Menu, X, Sparkles, MapPin, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenModal: (title?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<"all" | "pimple" | "erandwane">("all");

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#161B22] border-b border-[#30363D] py-1.5 px-4 text-xs font-mono text-[#C9D1D9] flex flex-wrap items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8800] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8800]"></span>
            </span>
            <span className="text-[#FFA657] font-semibold">[UPCOMING]:</span>
            <span className="text-[#E6EDF3] hidden sm:inline">
              Free Live Hands-on Masterclass: &quot;API Automation &amp; Mock Interview Strategy&quot;
            </span>
            <span className="text-[#E6EDF3] sm:hidden">Free Live Masterclass this Sunday</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#8B949E]">
            <span className="flex items-center gap-1 hover:text-[#FF8800] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Pimple Saudagar &amp; Erandwane, Pune</span>
            </span>
            <span>|</span>
            <a
              href="tel:+919130502135"
              className="flex items-center gap-1 hover:text-[#58A6FF] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#58A6FF]" />
              <span>+91 91305 02135</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0D1117]/90 backdrop-blur-md border-b border-[#30363D]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo with Developer Aesthetic */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#161B22] border border-[#30363D] flex items-center justify-center group-hover:border-[#FF8800] transition-colors shadow-inner">
              <Terminal className="w-5 h-5 text-[#FF8800]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#F0F6FC] font-sans flex items-center gap-1">
                Skillio<span className="text-[#FF8800]">.</span>
                <span className="text-[10px] uppercase tracking-wider font-mono px-1.5 py-0.5 rounded bg-[#21262D] text-[#FFA657] border border-[#30363D]">
                  Tech Hub
                </span>
              </span>
              <span className="text-[10px] text-[#8B949E] tracking-tight -mt-1 font-mono">
                pune_campus://pimple_saudagar
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#C9D1D9]">
            <a href="#courses" className="hover:text-[#FF8800] transition-colors flex items-center gap-1">
              Courses <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a href="#batches" className="hover:text-[#FF8800] transition-colors">
              Upcoming Batches
            </a>
            <a href="#placements" className="hover:text-[#FF8800] transition-colors flex items-center gap-1">
              Placements &amp; CTC
              <span className="text-[10px] font-mono px-1.5 py-0.2 bg-[#238636]/30 text-[#3FB950] border border-[#238636] rounded">
                Verified
              </span>
            </a>
            <a href="#why-skillio" className="hover:text-[#FF8800] transition-colors">
              Why Skillio
            </a>
            <a href="#mentors" className="hover:text-[#FF8800] transition-colors">
              Mentors
            </a>
            <a href="#calculator" className="hover:text-[#FF8800] transition-colors">
              Fee &amp; EMI
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/919130502135?text=Hi%20Skillio%2C%20I%20am%20interested%20in%20learning%20more%20about%20upcoming%20IT%20batches"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-md bg-[#161B22] text-[#3FB950] border border-[#30363D] hover:border-[#3FB950] transition-all"
              title="Chat directly on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Book Free Demo Button (Primary Accent) */}
            <button
              onClick={() => onOpenModal("Book Your Free Demo Session")}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold font-sans uppercase tracking-wider rounded-md bg-[#FF8800] text-[#0D1117] hover:bg-[#FFA657] transition-all shadow-md shadow-[#FF8800]/20 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Free Demo</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md bg-[#161B22] border border-[#30363D] text-[#C9D1D9] hover:text-[#F0F6FC]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[#30363D] bg-[#161B22] px-4 py-5 animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-3 font-medium text-sm">
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#21262D] text-[#F0F6FC]"
              >
                🎓 All Courses &amp; Modules
              </a>
              <a
                href="#batches"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#21262D] text-[#F0F6FC]"
              >
                📅 Upcoming Batch Schedule
              </a>
              <a
                href="#placements"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#21262D] text-[#F0F6FC] flex items-center justify-between"
              >
                <span>💼 Placements &amp; Salary Packages</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#238636] text-white">4.2 - 12 LPA</span>
              </a>
              <a
                href="#why-skillio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#21262D] text-[#F0F6FC]"
              >
                ⚡ Why Skillio vs Others
              </a>
              <a
                href="#mentors"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#21262D] text-[#F0F6FC]"
              >
                👨‍🏫 Mentors &amp; Faculty
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-[#21262D] text-[#F0F6FC]"
              >
                💰 Zero-Cost EMI Calculator
              </a>

              <div className="pt-3 border-t border-[#30363D] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenModal("Book Free Demo Class");
                  }}
                  className="w-full py-2.5 rounded bg-[#FF8800] text-[#0D1117] font-bold text-center uppercase tracking-wider text-xs"
                >
                  Book Free Demo Class
                </button>
                <a
                  href="https://wa.me/919130502135?text=Hi%20Skillio%2C%20I%20am%20interested%20in%20learning%20more%20about%20upcoming%20IT%20batches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded bg-[#21262D] text-[#3FB950] border border-[#30363D] font-mono text-center text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp (+91 91305 02135)
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
