"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export default function NavigationMenuBar() {
  const pathName = usePathname();
  const navLinks = [
    {
      name: "Vehicles",
    },
    {
      name: "Shipping Tools",
    },
    {
      name: "Owners",
    },
  ];

  return (
    <div className="flex items-center border-transparent">
      <div className="flex space-x-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex space-x-1 items-center font-semibold border-transparent">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className={`border-transparent ${
                  pathName === link.name
                    ? "border-transparent"
                    : "hover:border hover:border-gray-800 px-4 py-1 rounded-full  cursor-pointer"
                } flex items-center`}
              >
                {link.name} <MdKeyboardArrowDown size={20} />
              </div>
            ))}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="h-[800px] w-screen">
              <div></div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
