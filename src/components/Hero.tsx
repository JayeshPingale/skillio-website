"use client";

import React, { useState } from "react";
import { Sparkles, Download, CheckCircle2, Star, ShieldCheck, Play, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenModal: (title?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<"testing" | "fullstack">("testing");

  return (
    <section className="relative overflow-hidden bg-[#0D1117] pt-10 pb-16 lg:py-20 border-b border-[#30363D]">
      {/* Subtle background tech glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF8800]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[300px] bg-[#58A6FF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion Triggers */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#C9D1D9]">
              <span className="flex h-2 w-2 rounded-full bg-[#3FB950] animate-pulse" />
              <span className="text-[#F0F6FC] font-semibold">PUNE IT CAREER ACCELERATOR</span>
              <span className="text-[#8B949E]">|</span>
              <span className="text-[#FFA657]">Pimple Saudagar &amp; Erandwane</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F0F6FC] tracking-tight leading-[1.15]">
              Break into High-Paying Tech Jobs with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8800] via-[#FFA657] to-[#FF7B72]">
                Guaranteed Career Support.
              </span>
            </h1>

            {/* Subtitle addressing student pain points directly */}
            <p className="text-base sm:text-lg text-[#C9D1D9] max-w-2xl leading-relaxed">
              Don’t get stuck in non-IT or outdated theory. Master{" "}
              <strong className="text-[#F0F6FC]">AI-Powered Software Testing</strong>,{" "}
              <strong className="text-[#F0F6FC]">Java Full Stack</strong>, or{" "}
              <strong className="text-[#F0F6FC]">Data Analytics</strong> through 100% practical,
              live-project mentoring designed for freshers and career changers.
            </p>

            {/* Key Value Checklist (Direct Answers to Student Doubts) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-[#E6EDF3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Live Real-Time Projects (Not Just Theory)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Unlimited Mock Interviews with MNC Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Zero-Cost EMI &amp; Flexible Installments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#3FB950] shrink-0" />
                <span>Hybrid Learning: AC Labs + Live Streams</span>
              </div>
            </div>

            {/* High-Converting CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => onOpenModal("Book Free 2-Day Trial Session")}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#FF8800]/25 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free 2-Day Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenModal("Download 2026 Course Curriculum")}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#161B22] hover:bg-[#21262D] text-[#E6EDF3] border border-[#30363D] hover:border-[#58A6FF] font-medium text-sm transition-all cursor-pointer font-mono"
              >
                <Download className="w-4 h-4 text-[#58A6FF]" />
                <span>Get 2026 Syllabus (PDF)</span>
              </button>
            </div>

            {/* Social Proof Strip with Google Reviews & Placements */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#8B949E]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#FF8800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF8800]" />
                  ))}
                </div>
                <span className="font-bold text-[#F0F6FC]">4.8 / 5.0</span>
                <span>(500+ Google Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3FB950]" />
                <span className="font-semibold text-[#E6EDF3]">100% Placement Cell Assistance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal Preview */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#161B22] border border-[#30363D] overflow-hidden shadow-2xl relative">
              
              {/* Terminal Window Header with Window Dots */}
              <div className="bg-[#21262D] px-4 py-3 border-b border-[#30363D] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  <span className="ml-2 text-xs font-mono text-[#8B949E]">
                    terminal://skillio-live-session
                  </span>
                </div>
                
                {/* Switcher Tab between Testing and FullStack */}
                <div className="flex items-center gap-1 bg-[#161B22] p-1 rounded border border-[#30363D] text-[11px] font-mono">
                  <button
                    onClick={() => setActiveCodeTab("testing")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === "testing"
                        ? "bg-[#FF8800] text-[#0D1117] font-bold"
                        : "text-[#8B949E] hover:text-[#E6EDF3]"
                    }`}
                  >
                    QA_Test.java
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("fullstack")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeCodeTab === "fullstack"
                        ? "bg-[#FF8800] text-[#0D1117] font-bold"
                        : "text-[#8B949E] hover:text-[#E6EDF3]"
                    }`}
                  >
                    ApiServer.java
                  </button>
                </div>
              </div>

              {/* Terminal Body with JetBrains Mono */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-[#C9D1D9] bg-[#0D1117]/80 overflow-x-auto">
                {activeCodeTab === "testing" ? (
                  <div className="space-y-2">
                    <p className="text-[#8B949E]">
                      // Real-World Hybrid Automation Framework (Skillio Lab)
                    </p>
                    <p>
                      <span className="text-[#FF7B72]">@Test</span>(priority = 1)
                    </p>
                    <p>
                      <span className="text-[#FF7B72]">public void</span>{" "}
                      <span className="text-[#D2A8FF]">validateBankingCheckoutFlow</span>() &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-[#58A6FF]">LoginPage</span> login ={" "}
                      <span className="text-[#FF7B72]">new</span>{" "}
                      <span className="text-[#58A6FF]">LoginPage</span>(driver);
                    </p>
                    <p className="pl-4">
                      login.<span className="text-[#D2A8FF]">authenticate</span>(
                      <span className="text-[#79C0FF]">&quot;candidate@skillio.com&quot;</span>);
                    </p>
                    <p className="pl-4">
                      <span className="text-[#FF7B72]">Assert</span>.
                      <span className="text-[#D2A8FF]">assertTrue</span>(
                      dashboard.<span className="text-[#D2A8FF]">isPlacedSuccessfully</span>());
                    </p>
                    <p>&#125;</p>

                    <div className="mt-4 pt-3 border-t border-[#30363D] space-y-1.5 text-xs">
                      <p className="text-[#8B949E]">$ mvn test -Dsuite=E2E_Regression</p>
                      <p className="text-[#3FB950] flex items-center gap-1.5">
                        <span>✔</span> 48/48 Scenarios Passed (POM + Selenium 4)
                      </p>
                      <p className="text-[#58A6FF]">
                        ℹ CI/CD: Jenkins Job #142 Deployed to AWS Lab
                      </p>
                      <div className="p-2 rounded bg-[#21262D] border border-[#30363D] text-[#FFA657] mt-2">
                        🎉 <span className="font-bold text-[#F0F6FC]">Hiring Outcome:</span> Placed at Persistent Systems (₹5.2 LPA)
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-[#8B949E]">
                      // Spring Boot 3 Microservice Architecture (Full Stack Lab)
                    </p>
                    <p>
                      <span className="text-[#FF7B72]">@RestController</span>
                    </p>
                    <p>
                      <span className="text-[#FF7B72]">@RequestMapping</span>(
                      <span className="text-[#79C0FF]">&quot;/api/v1/admissions&quot;</span>)
                    </p>
                    <p>
                      <span className="text-[#FF7B72]">public class</span>{" "}
                      <span className="text-[#58A6FF]">StudentCareerController</span> &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-[#FF7B72]">@PostMapping</span>(
                      <span className="text-[#79C0FF]">&quot;/enroll-demo&quot;</span>)
                    </p>
                    <p className="pl-4">
                      <span className="text-[#FF7B72]">public</span>{" "}
                      <span className="text-[#58A6FF]">ResponseEntity</span>&lt;CareerTrack&gt;{" "}
                      <span className="text-[#D2A8FF]">launchCareer</span>() &#123;
                    </p>
                    <p className="pl-8 text-[#3FB950]">
                      return Response.ok(new PlacementPromise(&quot;100%_SUPPORT&quot;));
                    </p>
                    <p className="pl-4">&#125;</p>
                    <p>&#125;</p>

                    <div className="mt-4 pt-3 border-t border-[#30363D] space-y-1.5 text-xs">
                      <p className="text-[#8B949E]">$ docker-compose up -d --build</p>
                      <p className="text-[#3FB950]">✔ Container skillio-backend: Active (Port: 8080)</p>
                      <div className="p-2 rounded bg-[#21262D] border border-[#30363D] text-[#FFA657] mt-2">
                        🚀 <span className="font-bold text-[#F0F6FC]">Stack:</span> Spring Boot + React 19 + PostgreSQL + Docker
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Action Banner inside Terminal */}
              <div className="bg-[#21262D] px-4 py-2.5 border-t border-[#30363D] flex items-center justify-between text-xs">
                <span className="text-[#8B949E] flex items-center gap-1 font-mono">
                  <Play className="w-3.5 h-3.5 text-[#3FB950]" />
                  Try live lab environment
                </span>
                <button
                  onClick={() => onOpenModal("Experience Live Lab Environment")}
                  className="text-[#FF8800] hover:text-[#FFA657] font-semibold underline underline-offset-4"
                >
                  Join Demo Lab →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-[#30363D] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-3 rounded-lg bg-[#161B22]/60 border border-[#30363D]">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#FF8800] font-sans">5,000+</p>
            <p className="text-xs text-[#8B949E] uppercase tracking-wider font-mono mt-0.5">Students Trained &amp; Placed</p>
          </div>
          <div className="p-3 rounded-lg bg-[#161B22]/60 border border-[#30363D]">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC] font-sans">₹4.2L - ₹12L</p>
            <p className="text-xs text-[#8B949E] uppercase tracking-wider font-mono mt-0.5">Salary Package Range</p>
          </div>
          <div className="p-3 rounded-lg bg-[#161B22]/60 border border-[#30363D]">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#3FB950] font-sans">150+</p>
            <p className="text-xs text-[#8B949E] uppercase tracking-wider font-mono mt-0.5">Active Hiring Partners</p>
          </div>
          <div className="p-3 rounded-lg bg-[#161B22]/60 border border-[#30363D]">
            <p className="text-2xl sm:text-3xl font-extrabold text-[#58A6FF] font-sans">2 Centers</p>
            <p className="text-xs text-[#8B949E] uppercase tracking-wider font-mono mt-0.5">Pimple Saudagar &amp; Erandwane</p>
          </div>
        </div>

      </div>
    </section>
  );
};
