import Image from "next/image";

export default function MoreFeatures() {
  return (
    <div className="bg-[#dbdfee] h-[100vh] pt-24">
      <p className="flex justify-center items-center font-semibold text-2xl border-b-2 pb-6 w-[9%] mx-auto">
        More Features
      </p>
      <h1 className="flex justify-center items-center text-7xl font-semibold w-[50%] text-center mx-auto pt-8">
        Track-ready tech at every turn.
      </h1>
      <div className="grid grid-cols-2 px-16 gap-x-12 pt-12">
        <div>
          <Image
            src={"/safety.avif"}
            alt="photo"
            width={1000}
            height={1000}
            className="object-cover h-[50%]"
          />
        </div>
        <div>
          <Image
            src={"/grfamily.avif"}
            alt="photo"
            width={1000}
            height={1000}
            className="object-cover h-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
