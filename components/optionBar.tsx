import Image from "next/image";

export default function optionBar(): JSX.Element {
  return (
    <div className="flex flex-row justify-between relative items-center border-b border-slate-200 shadow-sm py-1 px-5 text-sm">
      <Image
        src="/menu.svg"
        alt="logo"
        width={25}
        height={20}
        sizes={"100vw"}
        priority={true}
        className="cursor-pointer"
      />
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
    </div>
  );
}
