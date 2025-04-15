import Image from "next/image";

export default function Interior() {
  return (
    <div className="bg-white tracking-tight px-16">
      <h1 className="text-7xl font-semibold flex justify-center pt-24">
        Styled to rev up your heartbeat.
      </h1>
      <div className="grid grid-cols-2 space-x-8 pt-24 h-[110vh]">
        <div className="col-span-1">
          <Image
            src={"/supra4.avif"}
            alt="supra4"
            width={500}
            height={500}
            unoptimized
            className="object-cover w-screen h-[34%] rounded-3xl"
          />
          <div className="flex space-x-4 pt-4">
            <Image
              src={"/supra4.avif"}
              alt="supra4"
              width={500}
              height={500}
              unoptimized
              className="object-cover w-[49%] rounded-3xl"
            />
            <Image
              src={"/supra4.avif"}
              alt="supra4"
              width={500}
              height={500}
              unoptimized
              className="object-cover w-[49%] rounded-3xl"
            />
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={"/supra4.avif"}
            alt="supra4"
            width={1000}
            height={1000}
            unoptimized
            className="object-cover w-full h-[68%] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
