"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are Skillio's courses beginner-friendly for non-IT & career-gap students?",
      a: "Yes, 100%. Over 45% of our placed candidates come from non-CS backgrounds (Mechanical, Civil, Commerce) or have career gaps of 1 to 4 years. We start from ground-zero programming basics before advancing to enterprise framework development."
    },
    {
      q: "How does Skillio's 100% Placement Support work?",
      a: "Our dedicated placement cell conducts weekly resume-building sessions, 1-on-1 mock technical interviews with MNC leads, and connects you directly with 150+ hiring partners across Hinjewadi, Magarpatta, and Kharadi until you secure an offer letter."
    },
    {
      q: "Where are your Pune offline centers located?",
      a: "We have two premier centers: 1) Pimple Saudagar Campus (Unit 504, Ganeesham E, Near Govind Yashada BRT stop) and 2) Erandwane Campus (Karve Road, Near Bhalekar Chawl). Both campuses have high-speed AC computer labs."
    },
    {
      q: "Can I attend a free demo class before paying fees?",
      a: "Absolutely! We invite you to attend a 2-day live interactive demo session. You can experience our teaching quality, code along with mentors, inspect our lab facilities, and only then make an informed admission decision."
    },
    {
      q: "What if I miss a live lecture?",
      a: "Every single classroom and live session is recorded in HD and uploaded to your personal Skillio Student LMS portal within 2 hours. You get lifetime access to all session recordings, code repositories, and notes."
    },
    {
      q: "Do you offer zero-cost EMI or installment plans?",
      a: "Yes. We offer flexible zero-cost EMI options starting at just ₹3,499/month through our education financing partners, as well as customized installment plans for students paying via UPI/bank transfer."
    },
    {
      q: "Do you have special weekend batches for working professionals?",
      a: "Yes, we run dedicated Saturday-Sunday batches tailored for working professionals looking to transition from manual testing/support to automation, full stack, or cloud engineering without leaving their jobs."
    }
  ];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#0D1117] border-b border-[#30363D]">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#FF8800]">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF8800]" />
            <span>STUDENT QUERIES RESOLVED</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#8B949E]">
            Everything you need to know about admissions, placements, and campus life.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#161B22] border border-[#30363D] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#F0F6FC] hover:text-[#FFA657] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#FF8800] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#8B949E] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#C9D1D9] leading-relaxed border-t border-[#30363D]/60 pt-3 font-sans">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
