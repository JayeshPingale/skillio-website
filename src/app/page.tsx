"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HiringPartners } from "@/components/HiringPartners";
import { CourseTracks } from "@/components/CourseTracks";
import { BatchSchedule } from "@/components/BatchSchedule";
import { PlacementHallOfFame } from "@/components/PlacementHallOfFame";
import { WhySkillio } from "@/components/WhySkillio";
import { MentorShowcase } from "@/components/MentorShowcase";
import { FeeEmiCalculator } from "@/components/FeeEmiCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { LeadModal } from "@/components/LeadModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Book Free 2-Day Demo Session");

  const handleOpenModal = (title?: string) => {
    if (title) setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0D1117] text-[#C9D1D9]">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero with Developer Terminal simulation */}
      <Hero onOpenModal={handleOpenModal} />

      {/* Hiring Partners Logo Banner */}
      <HiringPartners />

      {/* Course Catalog Tracks */}
      <CourseTracks onOpenModal={handleOpenModal} />

      {/* Upcoming Batches Table */}
      <BatchSchedule onOpenModal={handleOpenModal} />

      {/* Placement Hall of Fame & Real CTC packages */}
      <PlacementHallOfFame onOpenModal={handleOpenModal} />

      {/* Why Skillio vs College / Competitors */}
      <WhySkillio />

      {/* Senior MNC Mentors */}
      <MentorShowcase onOpenModal={handleOpenModal} />

      {/* Zero-Cost EMI & Scholarship Calculator */}
      <FeeEmiCalculator onOpenModal={handleOpenModal} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Global Interactive Lead Capture & Demo Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTitle={modalTitle}
      />

      {/* Floating 1-Click WhatsApp Support */}
      <FloatingWhatsApp />
    </main>
  );
}
