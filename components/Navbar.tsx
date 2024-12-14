"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { linksType } from "@/types/global";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, toggleOpen] = useCycle(false, true);

  const links: linksType[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Our Story",
      href: "/about",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Portfolio",
      href: "/portfolio",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full px-6 py-4 flex z-[50] justify-between items-center rounded-b-xl
      ${pathname === "/" ? "bg-white shadow-[0_4px_4px_0_#FFB22C80]" : "bg-bg3"}
      ${pathname.includes("studio") ? "hidden" : ""}
    `}
    >
      <div className="text-lg font-bold text-black">Logo</div>
      <div className="md:flex gap-5 xl:gap-12 hidden">
        {links.map((item: linksType, index: number) => (
          <Link
            key={index}
            href={item.href}
            className={`text-black font-medium
              ${
                pathname === item.href &&
                "!text-primary1 underline underline-offset-4"
              }
            `}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <CustomButton
        href="/contact"
        className="text-sm max-md:hidden"
        text={"Craft your Story"}
      />

      <motion.div
        animate={open ? "open" : "closed"}
        className="bg-white absolute z-[101] right-2 top-1 justify-center px-4 py-4 text-base rounded-lg border border-primary1 w-fit h-fit flex md:hidden flex-col items-end"
      >
        <MenuToggle toggle={() => toggleOpen()} />

        <motion.div
          variants={{
            visible: {
              opacity: 1,
              paddingTop:
                "calc(clamp(1rem, -0.1036rem + 1.7817vw, 1.5rem)*1.3)",
            },
            hidden: { opacity: 0, paddingTop: 0 },
          }}
          animate={!open ? "hidden" : "visible"}
          className="justify-start origin-[0] flex flex-col items-center"
        >
          <motion.div
            variants={{
              visible: {
                height: "auto",
                width: "85vw",
              },
              hidden: { height: 0, width: 0 },
            }}
            animate={!open ? "hidden" : "visible"}
            className="overflow-clip flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((navItem, i) => (
                <Link
                  key={i}
                  href={navItem.href}
                  className={`justify-center font-light flex`}
                >
                  {navItem.text}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
