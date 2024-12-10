import Filters from "@/components/Portfolio/Filters";
import Landing from "@/components/Portfolio/Landing";
import { Metadata } from "next";
import React from "react";

export default function Page() {
  return (
    <main className="pt-20">
      <Landing />
      <Filters />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portfolio | Big Bund Media Works",
  description: "Big Bund Media Works is a digital marketing agency.",
};
