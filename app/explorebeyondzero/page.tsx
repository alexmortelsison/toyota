import Image from "next/image";
import ThePowerOfChoice from "../components/ThePowerOfChoice";

export default function ExploreBeyondZeroPage() {
  return (
    <div className="bg-gradient-to-b from bg-slate-400 via-white to-gray-200 min-h-screen">
      <div className="flex flex-col items-center justify-center pt-24">
        <Image
          src={"/toyotabz.svg"}
          alt="bzlogo"
          width={200}
          height={200}
          className="object-cover"
        />
        <h1 className="text-6xl font-semibold pt-16">Our Beyond Zero Vision</h1>
        <p className="w-[50%] mxau text-center text-2xl pt-6">
          Beyond Zero is our vision to reach carbon neutrality with our
          products, services and operations, and go beyond, as we find new ways
          to make a positive impact on our planet and society. We currently
          offer more low and zero emission vehicles combined than any other
          automaker, to give customers numerous choices to reduce their carbon
          footprint.
        </p>
        <ThePowerOfChoice />
      </div>
      <div className="h-[300px] bg-[#020d26] mt-24 grid grid-cols-3 place-items-center px-24 text-white">
        <div className="">
          <h1 className="text-7xl font-semibold">Power in Numbers</h1>
        </div>
        <div>
          <div className="border-t border-b border-[#a6a19e] pt-4 pb-12">
            <h1>ELECTRIFIED VEHICLES SOLD BY TOYOTA GLOBALLY IN 2022</h1>
            <p className="font-semibold">2.73 Million</p>
          </div>
          <div className="pt-4">
            <h1>WASTE RECYCLED, REUSED OR RECYCLED IN 2023</h1>
            <p className="font-semibold">93%</p>
          </div>
        </div>
        <div>
          <div className="border-t border-b border-[#a6a19e] pt-4 pb-12">
            <h1>TOYOTA MODELS WITH AN ELECTRIFIED OPTION</h1>
            <p className="font-semibold">77% as of 2023</p>
          </div>
          <div className="pt-4">
            <h1>TOTAL RENEWABLE ELECTRICITY PURCHASED IN 2023</h1>
            <p className="font-semibold">380,688 MWH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
