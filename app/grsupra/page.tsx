import ModelViewerPage from "../components/ModelViewerSupra";
import InteriorSupra from "../components/InteriorSupra";
import PerformanceHandlingSupra from "../components/PerformanceHandlingSupra";
import MoreFeatures from "../components/MoreFeaturesSupra";

export default function GrSupraPage() {
  return (
    <div className="min-h-screen items-center bg-gradient-to-b from bg-slate-300 via-white to-gray-200 md:block hidden">
      <h1 className="text-7xl font-semibold flex justify-center pt-24 md:px-24 md:text-center">
        The ultimate rush hour.
      </h1>
      <p className="text-2xl lg:w-[42%] md:px-8 mx-auto text-center py-16 text-gray-800">
        Drive into the adrenaline-fueled world of GR Supra, where raw power,
        razor-sharp handling and a race-ready design are geared to subvert your
        every expectation.
      </p>
      <ModelViewerPage />
      <div className="h-[300px] bg-[#cfcac7] mt-24 grid grid-cols-3 place-items-center lg:px-24 px-2">
        <div className="">
          <h1 className="lg:text-7xl font-semibold md:text-5xl">
            GR Supra Highlights
          </h1>
        </div>
        <div>
          <div className="border-t border-b border-[#a6a19e] pt-4 pb-12">
            <h1>ENGINE</h1>
            <p className="font-semibold">3.0L Turbocharged Inline 6-Cylinder</p>
          </div>
          <div className="pt-4">
            <h1>TRANSMISSION</h1>
            <p className="font-semibold">
              6-Speed Manual Transmission or 8-Speed Automatic Transmission
            </p>
          </div>
        </div>
        <div>
          <div className="border-t border-b border-[#a6a19e] pt-4 pb-12">
            <h1>PERFORMANCE</h1>
            <p className="font-semibold">0-60 in 3.9 Seconds *</p>
          </div>
          <div className="pt-4">
            <h1>NATIONAL AUTO SPORT ASSOCIATION</h1>
            <p className="font-semibold">Complimentary 1-Year Membership *</p>
          </div>
        </div>
      </div>
      <InteriorSupra />
      <PerformanceHandlingSupra />
      <MoreFeatures />
    </div>
  );
}
