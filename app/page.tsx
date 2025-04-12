import BeyondZero from "./components/BeyondZero";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-30">
        <BeyondZero />
      </div>
    </div>
  );
}
