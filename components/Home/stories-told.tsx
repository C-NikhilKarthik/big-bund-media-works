import React from "react";
import PulsingBackground from "../pulse";

export default function StoriesTold() {
  return (
    <section className="w-full pt-10 relative">
      <PulsingBackground />
      <div className="max-w-7xl flex flex-col gap-6 w-full m-auto">
        <div className="text-lg font-medium text-center">
          People don&apos;t buy products.{" "}
          <span className="text-primary1 font-semibold">They buy Stories.</span>
        </div>
        <div className="text-xl font-semibold text-center">
          Stories We Tell...
        </div>
      </div>
    </section>
  );
}
