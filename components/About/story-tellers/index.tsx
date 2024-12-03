import { storyTeller } from "@/data/About/story-teller";
import React from "react";
import Component from "./Component";
import { story_component } from "@/types/about";

export default function Page() {
  return (
    <section className="space-y-[14px]">
      <div className="font-semibold text-2xl text-center">
        The story Tellers
      </div>
      <div className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. F. Nibh metus a
        semper purus
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {storyTeller?.map((item: story_component, index: number) => (
          <Component {...item} key={index} />
        ))}
      </div>
    </section>
  );
}
