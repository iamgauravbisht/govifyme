"use client";
import Image from "next/image";
import { useState, MouseEvent } from "react";

export default function Search(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleModal(e: MouseEvent<HTMLDivElement>): void {
    if ((e.target as HTMLElement).classList.contains("modalController")) {
      setIsOpen((prev) => !prev);
    }
  }

  return (
    <>
      <div
        className="sm:flex-1 flex flex-row items-center w-fit sm:w-full sm:max-w-[300px] gap-1 p-1 sm:border border-slate-400 md:absolute md:left-1/2 md:-translate-x-1/2 mx-1 cursor-pointer modalController"
        onClick={(e) => handleModal(e)}
      >
        <Image
          src="/search.svg"
          alt=""
          width={15}
          height={15}
          sizes="100vw"
          className="modalController"
        />
        <p className="flex-1 text-slate-400 self-end truncate hidden sm:block modalController">
          Search or jump to..
        </p>
        <Image
          src={"/keyboard.svg"}
          alt=""
          width={15}
          height={15}
          sizes="100vw"
          className="hidden sm:block modalController"
        />
      </div>
      <div
        className={`w-screen h-screen bg-transparent/10 backdrop-blur-[1px] absolute top-0 left-1/2 -translate-x-1/2 
            ${isOpen ? "flex justify-center" : "hidden"} modalController
        `}
        onClick={(e) => handleModal(e)}
      >
        <div className=" w-3/4 sm:max-w-[600px] bg-white mt-2 rounded-t-lg shadow-xl px-3">
          <div className="flex-1 flex flex-row items-center w-full gap-1  py-2 cursor-pointer border-b border-b-slate-200">
            <Image
              src="/search.svg"
              alt=""
              width={15}
              height={15}
              sizes="100vw"
            />
            <input
              type="text"
              className="flex-1 self-end truncate hidden sm:block p-1 outline-none"
              placeholder="Search or jump to.."
            />

            <Image
              src={"/keyboard.svg"}
              alt=""
              width={15}
              height={15}
              sizes="100vw"
              className="hidden sm:block"
            />
          </div>
          <div className="">
            <p className="text-[12px] font-medium text-slate-600">Topics</p>
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

const List = (): JSX.Element => {
  const [onTouch, setOnTouch] = useState<boolean>(false);

  function hovering(): void {
    setOnTouch(true);
  }
  function notHovering(): void {
    setOnTouch(false);
  }

  return (
    <div
      className="flex w-full gap-4 cursor-pointer hover:bg-slate-100 hover:border hover:border-l-0 hover:border-slate-300 rounded-l-sm"
      onMouseEnter={hovering}
      onMouseLeave={notHovering}
    >
      <div
        className={`w-[4px] rounded-l-sm ${onTouch ? "bg-red-500" : null}`}
      ></div>
      <p className={`py-2 text-slate-600 ${onTouch ? "text-black" : null}`}>
        Exam 1
      </p>
    </div>
  );
};
