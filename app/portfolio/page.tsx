import Filters from "@/components/Portfolio/Filters";
import Landing from "@/components/Portfolio/Landing";
import React from "react";

export default function Page() {
  return (
    <main className="pt-20">
      <Landing />
      <Filters />
    </main>
  );
}
