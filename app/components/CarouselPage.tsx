"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const slides = ["/supra.avif"];

type CarouselPageProps = {
  children: React.ReactNode; // Accepts any React content, including video elements
};

export default function CarouselPage({ children }: CarouselPageProps) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current == 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current == slides.length - 1 ? 0 : current + 1));
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={""}
              className={`transition-all w-2 h-2 bg-white rounded-full ${
                current === i ? "p-1" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
