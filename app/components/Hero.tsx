import CarouselPage from "./CarouselPage";
import ExploreAllVehicles from "./ExploreAllVehicles";

const slides = [
  {
    image: "/supra.avif",
    title: "2026 GR Supra\nMkV Final Edition",
    subtitle: "Adrenaline on demand.",
    href: "/grsupra",
  },
  {
    image: "/crown.avif",
    title: "2026 Toyota Crown",
    subtitle: "Innovation that makes a statement.",
    href: "/grsupra",
  },
  {
    image: "/sequoia.avif",
    title: "2025 Sequoia",
    subtitle: "Elevate your presence.",
    href: "/grsupra",
  },
  {
    image: "/gr86.avif",
    title: "2026 GR86",
    subtitle: "The ultimate game changer.",
    href: "/grsupra",
  },
  {
    video: "/mirai.mp4",
    title: "2025 Mirai",
    subtitle: "Powerfully efficient. Zero tailpipe emissions.",
    href: "/grsupra",
  },
];

export default function Hero() {
  return (
    <div className="relative">
      <CarouselPage slides={slides}></CarouselPage>
      <ExploreAllVehicles />
    </div>
  );
}
