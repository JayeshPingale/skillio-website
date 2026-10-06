"use client";

import React, { useState } from "react";
import { COURSES_DATA, Course } from "@/data";
import { Clock, Briefcase, Check, ArrowUpRight, Flame, Layers, Download } from "lucide-react";

interface CourseTracksProps {
  onOpenModal: (courseName?: string) => void;
}

export const CourseTracks: React.FC<CourseTracksProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCourses =
    activeTab === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="py-16 sm:py-24 bg-[#0D1117] border-b border-[#30363D]">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#FFA657] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>INDUSTRY-ALIGNED CURRICULUM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
              Job-Oriented Tech Career Tracks
            </h2>
            <p className="text-sm sm:text-base text-[#8B949E] mt-2">
              Every course is built around live sprint cycles, GitHub portfolio repositories, and
              rigorous mock interviews.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#161B22] p-1.5 rounded-lg border border-[#30363D]">
            {[
              { id: "all", label: "All Tracks" },
              { id: "testing", label: "Software Testing & QA" },
              { id: "fullstack", label: "Full Stack Development" },
              { id: "data-ai", label: "Data Science & AI" },
              { id: "cloud", label: "Cloud & DevOps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FF8800] text-[#0D1117] font-bold shadow"
                    : "text-[#8B949E] hover:text-[#F0F6FC] hover:bg-[#21262D]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl bg-[#161B22] border border-[#30363D] hover:border-[#FF8800] transition-all flex flex-col justify-between p-6 relative group hover:shadow-xl hover:shadow-[#FF8800]/5"
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-3 right-5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF8800] text-[#0D1117] text-[11px] font-mono font-bold uppercase tracking-wider shadow">
                  <Flame className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8B949E] mb-2">
                  <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-[#21262D] border border-[#30363D] text-[#58A6FF]">
                    {course.category}
                  </span>
                  <span className="flex items-center gap-1 text-[#3FB950] font-semibold">
                    <Briefcase className="w-3.5 h-3.5" />
                    Avg: {course.avgSalary}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#F0F6FC] group-hover:text-[#FFA657] transition-colors leading-snug">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8B949E] mt-2 leading-relaxed">
                  {course.tagline}
                </p>

                {/* Duration & Mode Specs */}
                <div className="flex items-center gap-4 py-3 my-4 border-y border-[#30363D] text-xs font-mono text-[#C9D1D9]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF8800]" />
                    <span>{course.duration}</span>
                  </div>
                  <span>•</span>
                  <div>{course.mode}</div>
                </div>

                {/* Tools Stack Tags in JetBrains Mono */}
                <div className="mb-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#8B949E] mb-2">
                    Tools &amp; Frameworks Covered:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0D1117] text-[#79C0FF] border border-[#30363D]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features Bullet Points */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#C9D1D9]">
                      <Check className="w-3.5 h-3.5 text-[#3FB950] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="pt-4 border-t border-[#30363D] flex items-center gap-3">
                <button
                  onClick={() => onOpenModal(`Enroll in Demo: ${course.title}`)}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-[#FF8800] hover:bg-[#FFA657] text-[#0D1117] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Free Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenModal(`Download Syllabus: ${course.title}`)}
                  className="py-2.5 px-3 rounded-lg bg-[#21262D] hover:bg-[#30363D] text-[#C9D1D9] hover:text-[#F0F6FC] border border-[#30363D] text-xs transition-colors flex items-center justify-center cursor-pointer"
                  title="Download Curriculum PDF"
                >
                  <Download className="w-3.5 h-3.5 text-[#58A6FF]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
