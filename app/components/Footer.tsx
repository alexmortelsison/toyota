import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import { Separator } from "@/components/ui/separator";

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
      <div className="flex justify-between items-center pt-16">
        <div className="space-y-4">
          <p className="uppercase font-semibold">shopping tools</p>
          <ul className="text-sm space-y-4">
            <li className="hover:underline cursor-pointer">Trade-In Value</li>
            <li className="hover:underline cursor-pointer">
              Build Your Toyota
            </li>
            <li className="hover:underline cursor-pointer">Search Inventory</li>
            <li className="hover:underline cursor-pointer">Find a Dealer</li>
            <li className="hover:underline cursor-pointer">
              Shop Online With SmartPath
            </li>
            <li className="hover:underline cursor-pointer">Special Offers</li>
            <li className="hover:underline cursor-pointer">
              What Fits My Budget
            </li>
            <li className="hover:underline cursor-pointer">
              Payment Estimator
            </li>
            <li className="hover:underline cursor-pointer">Request a Quote</li>
            <li className="hover:underline cursor-pointer">
              Toyota Certified Used Vehicles
            </li>
            <li className="hover:underline cursor-pointer">
              Buy Parts & Accessories
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="uppercase font-semibold">vehicles</p>
          <ul className="text-sm space-y-4">
            <li className="hover:underline cursor-pointer">
              All Toyota Vehicles
            </li>
            <li className="hover:underline cursor-pointer">SUVs</li>
            <li className="hover:underline cursor-pointer">Trucks</li>
            <li className="hover:underline cursor-pointer">Cars</li>
            <li className="hover:underline cursor-pointer">Crossovers</li>
            <li className="hover:underline cursor-pointer">
              Electrified Vehicles
            </li>
            <li className="hover:underline cursor-pointer">Hybrids</li>
            <li className="hover:underline cursor-pointer">Hybrid Cars</li>
            <li className="hover:underline cursor-pointer">Hybrid SUVs</li>
            <li className="hover:underline cursor-pointer">TRD Pro Series</li>
            <li className="hover:underline cursor-pointer">
              Nightshade Series
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="uppercase font-semibold">helpful links</p>
          <ul className="text-sm space-y-4">
            <li className="hover:underline cursor-pointer">
              All Toyota Vehicles
            </li>
            <li className="hover:underline cursor-pointer">SUVs</li>
            <li className="hover:underline cursor-pointer">Trucks</li>
            <li className="hover:underline cursor-pointer">Cars</li>
            <li className="hover:underline cursor-pointer">Crossovers</li>
            <li className="hover:underline cursor-pointer">
              Electrified Vehicles
            </li>
            <li className="hover:underline cursor-pointer">Hybrids</li>
            <li className="hover:underline cursor-pointer">Hybrid Cars</li>
            <li className="hover:underline cursor-pointer">Hybrid SUVs</li>
            <li className="hover:underline cursor-pointer">TRD Pro Series</li>
            <li className="hover:underline cursor-pointer">
              Nightshade Series
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="uppercase font-semibold">owners</p>
          <ul className="text-sm space-y-4">
            <li className="hover:underline cursor-pointer">
              All Toyota Vehicles
            </li>
            <li className="hover:underline cursor-pointer">SUVs</li>
            <li className="hover:underline cursor-pointer">Trucks</li>
            <li className="hover:underline cursor-pointer">Cars</li>
            <li className="hover:underline cursor-pointer">Crossovers</li>
            <li className="hover:underline cursor-pointer">
              Electrified Vehicles
            </li>
            <li className="hover:underline cursor-pointer">Hybrids</li>
            <li className="hover:underline cursor-pointer">Hybrid Cars</li>
            <li className="hover:underline cursor-pointer">Hybrid SUVs</li>
            <li className="hover:underline cursor-pointer">TRD Pro Series</li>
            <li className="hover:underline cursor-pointer">
              Nightshade Series
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="uppercase font-semibold">about toyota</p>
          <ul className="text-sm space-y-4">
            <li className="hover:underline cursor-pointer">
              All Toyota Vehicles
            </li>
            <li className="hover:underline cursor-pointer">SUVs</li>
            <li className="hover:underline cursor-pointer">Trucks</li>
            <li className="hover:underline cursor-pointer">Cars</li>
            <li className="hover:underline cursor-pointer">Crossovers</li>
            <li className="hover:underline cursor-pointer">
              Electrified Vehicles
            </li>
            <li className="hover:underline cursor-pointer">Hybrids</li>
            <li className="hover:underline cursor-pointer">Hybrid Cars</li>
            <li className="hover:underline cursor-pointer">Hybrid SUVs</li>
            <li className="hover:underline cursor-pointer">TRD Pro Series</li>
            <li className="hover:underline cursor-pointer">
              Nightshade Series
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-44 pb-24">
        <Separator />
        <div className="flex flex-col items-center justify-center pt-24 w-[300px] mx-auto">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="object-cover"
          />
          <div className="flex items-center space-x-4 pt-8 font-semibold">
            <p className="hover:underline">Contact Us</p>
            <p className="hover:underline">FAQs</p>
            <p className="hover:underline">Español</p>
          </div>
          <div className="pt-8">
            <p className="text-[10px] text-nowrap">
              ©2025 Toyota Motor Sales, U.S.A., Inc. All information applies to
              U.S. vehicles only.
            </p>
          </div>
          <div className="flex items-center">
            <div className="pt-8 text-[10px]  flex items-center">
              <p className="text-nowrap hover:underline">Privacy Notice</p>
              <p className="px-4">|</p>
            </div>
            <div className="pt-8 text-[10px]  flex items-center">
              <p className="text-nowrap hover:underline">Legal Terms</p>
              <p className="px-4">|</p>
            </div>
            <div className="pt-8 text-[10px]  flex items-center">
              <p className="text-nowrap hover:underline">Site Map</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
