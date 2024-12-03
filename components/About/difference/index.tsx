import PulsingBackground from "@/components/pulse";
import { difference } from "@/data/About/difference";
import React from "react";
import Component from "./component";
import CustomButton from "@/components/CustomButton";
import { difference_component } from "@/types/about";

export default function Page() {
  return (
    <section className="flex flex-col gap-10 mt-20 items-center relative">
      <div>
        <div className="font-semibold text-2xl text-center leading-[1]">
          The difference
        </div>
        <div className="font-semibold text-2xl text-center">we create</div>
      </div>
      <div className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. F. Nibh metus a
        semper purus
      </div>

      <PulsingBackground />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-36 gap-y-10">
        {difference?.map((item: difference_component, index: number) => (
          <Component {...item} key={index} />
        ))}
      </div>

      <CustomButton
        href="/contact"
        className="text-sm"
        text={"Let's make you different"}
      />
    </section>
  );
}
