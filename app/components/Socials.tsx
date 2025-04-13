import { BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const socialLinks = [
  {
    name: "facebook",
    icon: <AiFillFacebook size={30} />,
    href: "https://www.facebook.com/toyota",
  },
  {
    name: "youtube",
    icon: <AiOutlineYoutube size={30} />,
    href: "https://www.youtube.com/user/ToyotaUSA",
  },
  {
    name: "X",
    icon: <AiFillTwitterCircle size={30} />,
    href: "https://x.com/toyota",
  },
  {
    name: "instagram",
    icon: <AiOutlineInstagram size={30} />,
    href: "https://www.instagram.com/toyotausa/",
  },
  {
    name: "tiktok",
    icon: <BsTiktok size={30} />,
    href: "https://www.tiktok.com/@toyotausa",
  },
];

export default function Socials() {
  return (
    <div className="flex items-center ">
      <div className="flex items-center space-x-8 ">
        {socialLinks.map((link) => (
          <div key={link.name} className="">
            <a href={link.href} target="_blank">
              <p className="border border-gray-800 rounded-full p-2 transition-all duration-200 hover:shadow-[0_0_0_1px_rgba(31,41,55,1)]">
                {link.icon}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
