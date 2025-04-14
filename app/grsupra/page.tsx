import Image from "next/image";
import ModelViewerPage from "../components/ModelViewer";

export default function GrSupraPage() {
  return (
    <div className="min-h-screen items-center bg-gradient-to-b from bg-slate-300 via-white to-gray-300">
      <h1 className="text-7xl font-semibold flex justify-center pt-24">
        The ultimate rush hour.
      </h1>
      <p className="text-2xl w-[42%] mx-auto text-center py-16 text-gray-800">
        Drive into the adrenaline-fueled world of GR Supra, where raw power,
        razor-sharp handling and a race-ready design are geared to subvert your
        every expectation.
      </p>
      <ModelViewerPage />
      <div className="h-[300px] bg-[#cfcac7] mt-24 grid grid-cols-3 place-items-center px-24">
        <div className="">
          <h1 className="text-7xl font-semibold">GR Supra Highlights</h1>
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
      <div className="bg-white tracking-tight w-screen mx-auto">
        <h1 className="text-7xl font-semibold flex justify-center pt-24">
          Styled to rev up your heartbeat.
        </h1>
        <div className="flex items-center">
          <div>
            <Image
              src={"/supra4.avif"}
              alt="supra4"
              width={500}
              height={1000}
              className="object-cover  rounded-3xl"
            />
            <div className="flex space-x-4">
              <Image
                src={"/supra4.avif"}
                alt="supra4"
                width={500}
                height={500}
                className="object-cover rounded-3xl"
              />
              <Image
                src={"/supra4.avif"}
                alt="supra4"
                width={500}
                height={500}
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
          <div>
            <Image
              src={"/supra4.avif"}
              alt="supra4"
              width={1000}
              height={1000}
              className="object-cover w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
