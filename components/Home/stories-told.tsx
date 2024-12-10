"use client";
import React from "react";
import ProductComponent from "./productComponent";
import CustomButton from "../CustomButton";
import GradientBackground from "../gradient-bg";
import { motion } from "framer-motion";

export default function StoriesTold() {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger each card by 0.2s
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section className="w-full pt-10 relative px-4">
      <GradientBackground />
      <div className="max-w-7xl flex flex-col gap-6 w-full m-auto py-10">
        <div className="text-lg font-medium text-center">
          People don&apos;t buy products.{" "}
          <span className="text-primary1 font-semibold">They buy Stories.</span>
        </div>
        <div className="text-xl font-semibold text-center">
          Stories We Tell...
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              custom={i} // Pass index for stagger effect
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }} // Trigger animation when 20% is visible
              variants={cardVariants}
            >
              <ProductComponent
                image={`/Home/product/image${i + 1}.png`}
                heading={
                  [
                    "Digital content creation",
                    "Video production",
                    "Branding & creative direction",
                    "Photography",
                  ][i]
                }
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non est eu mauris sagittis tristique. Nunc semper placerat sapien, vel tempor erat suscipit at. Aliquam dictum "
                text="Let's create"
                href="/contact"
              />
            </motion.div>
          ))}
        </div>

        <CustomButton
          text={"More Stories"}
          href={"/contact"}
          className="text-base w-fit mx-auto"
        />
      </div>
    </section>
  );
}
