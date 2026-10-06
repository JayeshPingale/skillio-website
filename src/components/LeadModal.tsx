"use client";

import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, Phone, User, BookOpen, MapPin } from "lucide-react";
import { COURSES_DATA } from "@/data";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTitle?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialTitle = "Book Free Demo Session",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(COURSES_DATA[0].title);
  const [branch, setBranch] = useState("Pimple Saudagar");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#161B22] border border-[#30363D] shadow-2xl p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#21262D] text-[#8B949E] hover:text-[#F0F6FC] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#238636]/20 border border-[#238636] text-[#3FB950] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#F0F6FC]">
              Booking Confirmed! 🎉
            </h3>
            <p className="text-sm text-[#C9D1D9] max-w-sm mx-auto leading-relaxed">
              Hi <strong className="text-[#F0F6FC]">{name}</strong>, your demo seat for{" "}
              <strong className="text-[#FFA657]">{course}</strong> at our{" "}
              <strong className="text-[#79C0FF]">{branch}</strong> campus has been reserved.
            </p>
            <div className="p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-xs font-mono text-[#8B949E]">
              Our Senior Career Counselor will WhatsApp you the batch link &amp; lab directions on {phone}.
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-lg bg-[#FF8800] text-[#0D1117] font-bold text-xs uppercase tracking-wider"
              >
                Close &amp; Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF8800] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Zero Cost • Free 2-Day Trial
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F0F6FC]">
                {initialTitle}
              </h3>
              <p className="text-xs text-[#8B949E]">
                Fill details to attend live sessions and receive full curriculum PDF.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono text-[#C9D1D9] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8B949E] absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0D1117] border border-[#30363D] text-sm text-[#F0F6FC] placeholder-[#6E7681] focus:outline-none focus:border-[#FF8800] transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-mono text-[#C9D1D9] mb-1">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8B949E] absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0D1117] border border-[#30363D] text-sm text-[#F0F6FC] placeholder-[#6E7681] focus:outline-none focus:border-[#FF8800] transition-colors"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-mono text-[#C9D1D9] mb-1">
                  Course of Interest *
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-[#8B949E] absolute left-3 top-3" />
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#0D1117] border border-[#30363D] text-sm text-[#F0F6FC] focus:outline-none focus:border-[#FF8800] transition-colors"
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.title} className="bg-[#161B22] text-[#F0F6FC]">
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Campus */}
              <div>
                <label className="block text-xs font-mono text-[#C9D1D9] mb-1">
                  Preferred Pune Center / Mode *
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  {["Pimple Saudagar", "Erandwane", "Online Live"].map((loc) => (
                    <button
                      type="button"
                      key={loc}
                      onClick={() => setBranch(loc)}
                      className={`py-2 px-1 rounded-lg border text-center transition-all cursor-pointer ${
                        branch === loc
                          ? "bg-[#21262D] text-[#FF8800] border-[#FF8800] font-bold"
                          : "bg-[#0D1117] text-[#8B949E] border-[#30363D]"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#FF8800]/20 cursor-pointer mt-2"
              >
                Confirm Free Demo Seat →
              </button>

              <p className="text-[10px] text-center text-[#8B949E] font-mono">
                🔒 Your number is never spammed. Only shared with assigned mentor.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
