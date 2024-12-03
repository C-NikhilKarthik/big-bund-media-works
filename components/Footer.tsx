"use client";

import React from "react";
import Link from "next/link";
import { BsCameraVideoFill } from "react-icons/bs";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaDribbble,
  FaFacebook,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { linksType } from "@/types/global";

export default function Footer() {
  const pathname = usePathname();

  const links: linksType[] = [
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Testimonials",
      href: "/testimonials",
    },
  ];
  return (
    <footer
      className={`p-3 md:p-10 bg-bg3 ${pathname === "/contact" && "hidden"} `}
    >
      <div className="flex flex-col gap-[10px] w-full mx-auto">
        <div className="bg-white rounded-[20px] px-10 py-6 flex max-md:flex-col max-md:gap-4 justify-between md:items-center">
          <div className="text-lg font-medium">
            EXCITED? US TOO. LET&apos;S CREATE YOUR STORY
          </div>
          <Link
            href={"/contact"}
            className="bg-primary1 text-primary4 flex gap-3 w-fit items-center px-4 py-2 border-[#FFB22C] border-[3px] rounded-lg"
          >
            Schedule a call
            <BsCameraVideoFill className="text-white text-base" />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[10px]">
          <div className="bg-white flex flex-col items-center gap-4 rounded-[20px] p-10">
            <Image
              className="h-auto w-[10vw]"
              src={"/gitlab.png"}
              alt="footer"
              height={0}
              width={0}
              sizes="100%"
            />
            <div className="text-lg font-medium">Company Name</div>
          </div>

          <div className="bg-white flex flex-col justify-end gap-8 rounded-[20px] md:col-span-2 p-10">
            <div className="max-w-sm w-full flex flex-wrap gap-x-6 gap-y-3">
              {links?.map((item: linksType, index: number) => (
                <Link
                  key={index}
                  href={item?.href}
                  className="uppercase font-medium text-base"
                >
                  {item?.text}
                </Link>
              ))}
            </div>

            <div className="flex max-md:flex-col max-md:gap-2 md:justify-between md:items-center">
              <div className="text-gray3 text-sm">
                2024 Big Bung Media Works.
              </div>
              <div className="flex gap-6">
                <span>TERMS</span>
                <span>PRIVACY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-4">
          <div className="basis-1/4 bg-white rounded-lg md:rounded-[20px] p-2 md:p-4 flex items-center">
            <FaXTwitter className="text-primary1 text-[clamp(24px,4vw,60px)] mx-auto" />
          </div>
          <div className="basis-1/4 bg-white rounded-lg md:rounded-[20px] p-2 md:p-4 flex items-center">
            <FaLinkedinIn className="text-primary1 text-[clamp(24px,4vw,60px)] mx-auto" />
          </div>
          <div className="basis-1/4 bg-white rounded-lg md:rounded-[20px] p-2 md:p-4 flex items-center">
            <FaDribbble className="text-primary1 text-[clamp(24px,4vw,60px)] mx-auto" />
          </div>
          <div className="basis-1/4 bg-white rounded-lg md:rounded-[20px] p-2 md:p-4 flex items-center">
            <FaFacebook className="text-primary1 text-[clamp(24px,4vw,60px)] mx-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
