import { BsHeart } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import NavigationMenuBar from "./NavigationMenuBar";
import SearchInventory from "./SearchInventory";

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between px-32 py-4 items-center">
      <Image
        src={"/logo.png"}
        alt="toyota logo"
        width={130}
        height={100}
        className="object-cover"
      />
      <div className="flex items-center">
        <div className="pr-12">
          <NavigationMenuBar />
        </div>
        <div className="pr-2">
          <SearchInventory />
        </div>
        <div className="flex items-center space-x-4 pl-8">
          <BsHeart size={30} />
          <RxAvatar size={30} />
        </div>
      </div>
    </div>
  );
}
