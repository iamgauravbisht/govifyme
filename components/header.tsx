import Image from "next/image";
import React from "react";
import Search from "@/components/ui/search";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center border-b border-slate-200 shadow-sm py-1 px-5 text-sm z-30 sticky top-0 bg-slate-100 ">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={25}
          height={25}
          sizes={"100vw"}
          priority={true}
          className="cursor-pointer"
        />
      </Link>
      <Search />
      <div className="flex flex-row gap-1 items-end">
        <Image
          src="/bell.svg"
          alt="logo"
          width={20}
          height={20}
          sizes={"100vw"}
          priority={true}
          className="cursor-pointer"
        />
        <div className="hover:underline text-sm cursor-pointer text-nowrap">
          Sign in/Log in
        </div>
      </div>
    </header>
  );
}
