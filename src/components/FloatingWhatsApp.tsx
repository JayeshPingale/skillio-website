"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Friendly Auto-Popup Bubble */}
      {showTooltip && (
        <div className="relative p-3 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl text-xs max-w-[220px] animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#8B949E] hover:text-[#F0F6FC]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-[#F0F6FC] pr-3">
            Have questions on batches or fees?
          </p>
          <p className="text-[11px] text-[#8B949E] mt-1">
            Chat 1-on-1 with our counselor on WhatsApp.
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919130502135?text=Hello%20Skillio%2C%20I%20want%20to%20know%20more%20about%20the%20upcoming%20IT%20batches%20and%20fees"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#238636] hover:bg-[#2ea043] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all glow-accent-sm group"
        aria-label="Chat with Skillio Counselor on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white text-[#238636]" />
      </a>
    </div>
  );
};
