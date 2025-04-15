import Image from "next/image";

export default function PerformanceHandlingCrown() {
  return (
    <div className="bg-[#cfcac7] h-[100vh] px-16">
      <h1 className="uppercase font-semibold border-[#a6a19e] border-b pb-8 w-[220px] pt-24">
        exterior
      </h1>
      <p className="text-6xl font-semibold tracking-tight pt-8">
        Crafted to captivate.
      </p>
      <div className="grid grid-cols-3 space-x-8 pt-8">
        <div className="col-span-2">
          <Image
            src={"/crownperf1.avif"}
            alt="supra"
            width={1000}
            height={1000}
            unoptimized
            className="object-cover w-full h- rounded-2xl"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={"/crownperf2.avif"}
            alt="supra"
            width={1000}
            height={1000}
            unoptimized
            className="object-cover  h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
