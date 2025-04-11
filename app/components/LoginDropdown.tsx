"use client";
import { BiCart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginDropdown() {
  const { data: session } = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {!session ? (
          <RxAvatar size={30} />
        ) : (
          <Image
            src={session.user?.image as string}
            alt="user"
            width={30}
            height={30}
            className="object-cover rounded-full"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[400px] h-[380px] mr-12 px-8">
        <DropdownMenuLabel className=" items-center flex justify-center mt-8">
          <h1 className="text-lg font-bold">My Toyota</h1>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="flex items-center space-x-4 pt-6 cursor-pointer hover:underline underline-offset-4">
          <AiOutlineHeart size={20} />
          <p className="">My Saves</p>
        </DropdownMenuLabel>
        <Separator className="mt-2" />
        <DropdownMenuLabel className="flex items-center space-x-4 pt-4 cursor-pointer hover:underline underline-offset-4">
          <BiCart size={20} />
          <p className="">My Cart</p>
        </DropdownMenuLabel>
        <Separator className="mt-2" />
        {!session ? (
          <DropdownMenuLabel className="flex flex-col justify-center items-center space-y-4 pt-16">
            <button
              onClick={() => signIn("google")}
              className="bg-red-500 text-white px-8 py-2 rounded-full w-full cursor-pointer hover:opacity-80"
            >
              Sign in
            </button>
            <button className="border border-gray-800 px-8 py-2 rounded-full w-full cursor-pointer hover:opacity-80">
              Create Account
            </button>
          </DropdownMenuLabel>
        ) : (
          <button
            onClick={() => signOut()}
            className="border border-gray-800 px-8 py-2 rounded-full w-full cursor-pointer hover:opacity-80 mt-24"
          >
            Sign Out
          </button>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
