import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavigationMenuBar() {
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
    <div className="flex items-center">
      <div className="flex space-x-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex space-x-6 items-center font-semibold">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center cursor-pointer">
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
