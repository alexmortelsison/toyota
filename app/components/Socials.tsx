import { BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";

const socialLinks = [
  {
    name: "facebook",
    icon: <AiFillFacebook size={30} />,
    href: "",
  },
  {
    name: "youtube",
    icon: <AiOutlineYoutube size={30} />,
    href: "",
  },
  {
    name: "X",
    icon: <AiFillTwitterCircle size={30} />,
    href: "",
  },
  {
    name: "instagram",
    icon: <AiOutlineInstagram size={30} />,
    href: "",
  },
  {
    name: "tiktok",
    icon: <BsTiktok size={30} />,
    href: "",
  },
];

export default function Socials() {
  return (
    <div className="flex items-center ">
      <div className="flex items-center space-x-8 ">
        {socialLinks.map((link) => (
          <div key={link.name} className="">
            <Link href={link.href} className="">
              <p className="border border-gray-800 rounded-full items-center p-2">
                {link.icon}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
