import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="bg-gray-100 px-16 mt-24">
      <div className="flex justify-between items-center pt-24">
        <div className="flex items-center space-x-8">
          <Link href={"/accessibility"}>
            <p className="font-semibold">Accessibility</p>
          </Link>
          <p className="flex uppercase text-red-500 font-semibold">
            your privacy choices{" "}
            <span>
              <Image
                src={"/privacyoptions.svg"}
                alt="privacylogo"
                width={50}
                height={50}
                className="object-cover"
              />
            </span>
          </p>
          <p className="font-semibold uppercase">
            disconnect remote vehicle access (ny residents)
          </p>
          <p className="font-semibold">Cookie Consent Options</p>
        </div>
        <div className="flex items-center space-x-8">
          <button className="text-white bg-red-500 px-8 py-2 rounded-full font-semibold">
            Manage Preferences
          </button>
          <Socials />
        </div>
      </div>
    </div>
  );
}
