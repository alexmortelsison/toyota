import Image from "next/image";
import CarouselPage from "./CarouselPage";

const slides = ["/supra.avif"];

export default function Hero() {
  return (
    <div className="relative">
      <CarouselPage>
        {slides.map((slide, index) => (
          <Image
            src={slide}
            key={index}
            alt="portfolio"
            width={1000}
            height={1000}
            unoptimized
            className="object-cover w-full h-auto -z-50"
          />
        ))}
      </CarouselPage>
      <div className="absolute top-1/2 right-1/3">
        <h1 className="text-center text-white font-semibold text-7xl">
          2026 GR Supra <br /> MkV Final Edition
        </h1>
        <p className="text-gray-200 flex items-center justify-center pt-4 text-2xl">
          Adrenaline on demand.
        </p>
      </div>
    </div>
  );
}
