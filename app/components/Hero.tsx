import CarouselPage from "./CarouselPage";

const slides = [
  {
    image: "/supra.avif",
    title: "2026 GR Supra\nMkV Final Edition",
    subtitle: "Adrenaline on demand.",
  },
  {
    image: "/crown.avif",
    title: "2026 Toyota Crown",
    subtitle: "Innovation that makes a statement.",
  },
  {
    image: "/sequoia.avif",
    title: "2025 Sequoia",
    subtitle: "Elevate your presence.",
  },
  {
    image: "/gr86.avif",
    title: "2026 GR86",
    subtitle: "The ultimate game changer.",
  },
  {
    video: "/mirai.mp4",
    title: "2025 Mirai",
    subtitle: "Powerfully efficient. Zero tailpipe emissions.",
  },
];

export default function Hero() {
  return (
    <div className="relative">
      <CarouselPage slides={slides}></CarouselPage>
    </div>
  );
}
