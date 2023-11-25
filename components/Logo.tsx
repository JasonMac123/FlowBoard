import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition hidden md:flex items-center gap-x-2">
        <Image src={"/logo.svg"} alt="Logo" height={30} width={30} />
        <p className="text-lg text-neutral-700 pb-1">FlowBoard</p>
      </div>
    </Link>
  );
};
