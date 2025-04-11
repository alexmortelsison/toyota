import { NextResponse } from "next/server";

export async function GET() {
  const vehicles = [
    {
      id: "1",
      name: "2025 Corolla",
      price: 22235,
      image: "/vehicles/corolla.webp",
      category: "Cars & Minivan",
    },
    {
      id: "2",
      name: "2025 Corolla Hybrid",
      price: 23825,
      image: "/vehicles/corollahybrid.webp",
      category: "Cars & Minivan",
    },
    {
      id: "3",
      name: "2025 Corolla Hatchback",
      price: 23870,
      image: "/vehicles/corollahatchback.webp",
      category: "Cars & Minivan",
    },
    {
      id: "4",
      name: "2025 Prius",
      price: 28350,
      image: "/vehicles/prius.webp",
      category: "Cars & Minivan",
    },
    {
      id: "5",
      name: "2025 Prius Plug-in Hybrid",
      price: 33375,
      image: "/vehicles/priushybrid.webp",
      category: "Cars & Minivan",
    },
    {
      id: "6",
      name: "2025 Camry",
      price: 28700,
      image: "/vehicles/camry.webp",
      category: "Cars & Minivan",
    },
    {
      id: "7",
      name: "2026 Toyota Crown",
      price: 41440,
      image: "/vehicles/crown.webp",
      category: "Cars & Minivan",
    },
    {
      id: "8",
      name: "2025 Mirai",
      price: 51795,
      image: "/vehicles/mirai.webp",
      category: "Cars & Minivan",
    },
    {
      id: "9",
      name: "2025 GR86",
      price: 30000,
      image: "/vehicles/gr86.webp",
      category: "Cars & Minivan",
    },
    {
      id: "10",
      name: "2025 GR Corolla",
      price: 38860,
      image: "/vehicles/grcorolla.webp",
      category: "Cars & Minivan",
    },
    {
      id: "11",
      name: "2026 GR Supra",
      price: 56900,
      image: "/vehicles/grsupra.webp",
      category: "Cars & Minivan",
    },
    {
      id: "12",
      name: "2025 Sienna",
      price: 39185,
      image: "/vehicles/sienna.webp",
      category: "Cars & Minivan",
    },
    {
      id: "13",
      name: "2025 Tacoma",
      price: 31590,
      image: "/vehicles/tacoma.webp",
      category: "Trucks",
    },
    {
      id: "14",
      name: "2025 Tacoma i-FORCE MAX",
      price: 46320,
      image: "/vehicles/tacomaiforcemax.webp",
      category: "Trucks",
    },
    {
      id: "15",
      name: "2025 Tundra",
      price: 40090,
      image: "/vehicles/tundra.webp",
      category: "Trucks",
    },
    {
      id: "16",
      name: "2025 Tundra i-FORCE MAX",
      price: 58005,
      image: "/vehicles/tundraiforcemax.webp",
      category: "Trucks",
    },
  ];
  return NextResponse.json(vehicles);
}
