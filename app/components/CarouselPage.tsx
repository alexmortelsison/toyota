"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Slide = {
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
};

type CarouselPageProps = {
  slides: Slide[];
};

export default function CarouselPage({ slides }: CarouselPageProps) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[80vh] relative">
            {slide.video ? (
              <video
                src={slide.video}
                className="object-cover w-full h-full brightness-80"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <Image
                src={slide.image!}
                alt={`slide-${index}`}
                width={1920}
                height={1080}
                className="object-cover w-full h-full brightness-80"
              />
            )}
          </div>
        ))}
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

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none pt-72">
        <h1 className="text-white font-semibold text-7xl whitespace-pre-line">
          {slides[current].title}
        </h1>
        <p className="text-gray-200 pt-4 text-2xl">
          {slides[current].subtitle}
        </p>
        <Link href={"/grsupra"}>
          <button className="mt-16 bg-white px-8 py-2 rounded-full font-semibold pointer-events-auto">
            Learn More
          </button>
        </Link>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 rounded-full ${
                current === i ? "bg-white p-1" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
