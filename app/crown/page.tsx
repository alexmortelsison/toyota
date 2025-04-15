import MoreFeatures from "../components/MoreFeatures";
import ModelViewerPageCrown from "../components/ModelViewerCrown";
import InteriorCrown from "../components/InteriorCrown";
import PerformanceHandlingCrown from "../components/PerformanceHandlingCrown";

export default function CrownPage() {
  return (
    <div className="min-h-screen items-center bg-gradient-to-b from bg-slate-300 via-white to-gray-200">
      <h1 className="text-7xl font-semibold flex justify-center pt-24">
        Innovation that makes a statement.
      </h1>
      <p className="text-2xl w-[42%] mx-auto text-center py-16 text-gray-800">
        Push the boundaries with Toyota Crown’s sophisticated design, modern
        technology and high-end performance.
      </p>
      <ModelViewerPageCrown />
      <div className="h-[300px] bg-[#cfcac7] mt-24 grid grid-cols-3 place-items-center px-24">
        <div className="">
          <h1 className="text-7xl font-semibold">Toyota Crown Specs</h1>
        </div>
        <div>
          <div className="border-t border-b border-[#a6a19e] pt-4 pb-12">
            <h1>HORSEPOWER</h1>
            <p className="font-semibold">Up to 340</p>
          </div>
          <div className="pt-4">
            <h1>POWERTRAIN</h1>
            <p className="font-semibold">Standard All-Wheel Drive (AWD)</p>
          </div>
        </div>
        <div>
          <div className="border-t border-b border-[#a6a19e] pt-4 pb-12">
            <h1>EST. MPG RATING</h1>
            <p className="font-semibold">Up to Est. 41 Combined MPG *</p>
          </div>
          <div className="pt-4">
            <h1>ENGINE</h1>
            <p className="font-semibold">
              2.5L Inline 4-Cylinder Hybrid or Hybrid MAX 2.4L Inline 4-Cylinder
              Turbocharged Hybrid
            </p>
          </div>
        </div>
      </div>
      <InteriorCrown />
      <PerformanceHandlingCrown />
      <MoreFeatures />
    </div>
  );
}
