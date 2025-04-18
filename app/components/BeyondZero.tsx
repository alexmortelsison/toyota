import Image from "next/image";
import Link from "next/link";

export default function BeyondZero() {
  return (
    <div className="min-h-full md:block hidden">
      <div className="relative">
        <Image
          src={"/bz.avif"}
          alt="beyond zero bg"
          width={2000}
          height={2000}
          className="object-cover -z-50 sm:h-full"
        />
        <div className="">
          <div className="absolute top-0 md:left-60 lg:left-150 2xl:left-200 pt-24">
            <Image
              src={"/bzlogo.svg"}
              alt="bzlogo"
              height={300}
              width={300}
              className="object-cover"
            />
          </div>
          <div className="absolute top-40 md:left-50 lg:left-140 2xl:left-192 ">
            <p className="text-nowrap text-gray-300 text-4xl font-semibold">
              Drive change your way.
            </p>
            <Link href={"/explorebeyondzero"}>
              <button className="absolute left-20 mt-12 text-nowrap flex justify-center items-center bg-white rounded-full py-2 px-8 font-semibold cursor-pointer hover:opacity-80">
                Explore Beyond Zero.
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
