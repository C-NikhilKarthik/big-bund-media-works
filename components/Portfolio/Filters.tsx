"use client";
import { portfolio } from "@/data/Portfolio/all";
import React, { useState } from "react";
import Component from "./Component";
import { portfolioType } from "@/types/portfolio";

const filterOptions = [
  "Videography",
  "Photography",
  "Branding",
  "Health & Wellness",
  "Productivity",
  "Content Creation",
];

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <section className="w-full pt-8 mb-0">
      <div className="flex max-md:flex-col md:items-center w-full px-4 border-b border-b-primary3">
        <span className="flex-none">Filter by:</span>
        <div className="flex gap-4 md:p-4 max-md:py-4 rounded-lg w-full flex-wrap">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all 
                ${
                  activeFilter === filter
                    ? "bg-primary1 text-bg3"
                    : "bg-bg3 text-primary1 hover:bg-primary1 hover:text-bg3"
                }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      {portfolio?.map((item: portfolioType, index: number) => (
        <Component key={index} {...item} />
      ))}
      {/* <div className="mt-8 text-center">
        <p className="text-lg">
          Showing results for:{" "}
          <span className="font-bold text-primary1">{activeFilter}</span>
        </p>
      </div> */}
    </section>
  );
}
