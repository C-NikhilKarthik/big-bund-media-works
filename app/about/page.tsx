import About from "@/components/About/About";
import Landing from "@/components/About/Landing";
import React from "react";
import StoryTeller from "@/components/About/story-tellers";
import Difference from "@/components/About/difference";

export default function Page() {
  return (
    <main className="w-full pt-32 px-4">
      <Landing />
      <About />
      <StoryTeller />
      <Difference />
    </main>
  );
}
