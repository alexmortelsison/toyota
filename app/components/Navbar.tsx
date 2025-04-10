import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white flex justify-between px-32 py-4">
      <Image
        src={"/logo.png"}
        alt="toyota logo"
        width={130}
        height={100}
        className="object-cover"
      />
    </div>
  );
}
