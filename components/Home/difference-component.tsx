import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";
import { differenceComponentType } from "@/types/home";

export default function DifferenceComponent({
  heading,
  subheading,
  text1,
  text2,
  classNameImg,
  image,
}: differenceComponentType) {
  return (
    <div className="w-full rounded-[12px] bg-gradient-to-br from-button-secondary h-full md:h-[50vh] to-button-primary p-1">
      <div className="flex max-md:flex-col h-full w-full rounded-[12px] bg-gradient-to-br p-6 gap-6 from-white to-bg3">
        <div className="w-full flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="font-medium text-primary1 uppercase">{heading}</div>
            <div className="font-semibold text-xl">{subheading}</div>
            <div className="text-gray2">{text1}</div>
            <div className="text-gray2">{text2}</div>
          </div>

          <div className="flex gap-4">
            <CustomButton text={"Craft Your Story"} href={"/"} />
            <button className="bg-button-secondary px-4 py-2 rounded-[4px]">
              Craft Your Story
            </button>
          </div>
        </div>
        <Image
          src={image}
          className={`${classNameImg || ""} flex-1 object-contain`}
          alt={"image"}
          height={0}
          width={0}
          sizes="100%"
        />
      </div>
    </div>
  );
}
