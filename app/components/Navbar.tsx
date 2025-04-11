import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import NavigationMenuBar from "./NavigationMenuBar";
import LoginDropdown from "./LoginDropdown";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between px-32 py-4 items-center">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="toyota logo"
          width={130}
          height={100}
          className="object-cover hover:opacity-80"
        />
      </Link>
      <div className="flex items-center space-x-8">
        <div>
          <NavigationMenuBar />
        </div>
        <div>
          <p>Search Inventory</p>
        </div>
        <div className="flex items-center space-x-2">
          <AiOutlineHeart size={30} />
          <LoginDropdown />
        </div>
      </div>
    </div>
  );
}
