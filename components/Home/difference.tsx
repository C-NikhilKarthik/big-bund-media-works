"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GradientBackground from "../gradient-bg";
import DifferenceComponent from "./difference-component";
import CustomButton from "../CustomButton";
import { difference } from "@/data/Home/difference";

export default function Difference() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  const handleClick = () => {
    setVisibleIndex((prevIndex) => Math.min(prevIndex + 1, difference.length));
  };

  return (
    <section className="w-full flex flex-col gap-4 pt-10 relative px-4">
      <GradientBackground />

      <div className="max-w-7xl flex flex-col gap-6 w-full m-auto py-10">
        <span className="text-primary1 text-2xl text-center font-semibold">
          The Big Bund Difference
        </span>
      </div>

      <div className="max-w-5xl w-full mx-auto relative">
        <DifferenceComponent
          heading={difference[0].heading}
          subheading={difference[0].subheading}
          text1={difference[0].text1}
          text2={difference[0].text2}
          image={difference[0].image}
          classNameImg={difference[0].classNameImg}
        />
        {difference?.slice(1)?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: index <= visibleIndex ? 1 : 0,
              y: index <= visibleIndex ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            onClick={handleClick}
            className="absolute top-0 min-h-full w-full"
            style={{ zIndex: index }}
          >
            <DifferenceComponent
              heading={item.heading}
              subheading={item.subheading}
              text1={item.text1}
              text2={item.text2}
              image={item.image}
              classNameImg={item.classNameImg}
            />
          </motion.div>
        ))}
      </div>

      <CustomButton
        text="The difference we create"
        className="w-fit mx-auto"
        href={"/"}
      />
    </section>
  );
}
