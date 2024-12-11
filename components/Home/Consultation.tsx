"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import ConsultationCard from "./consultation-card";
import { consultationData } from "@/data/Home/consulation";
import { motion } from "framer-motion";

export default function Consultation() {
  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
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
    <div className="bg-bg4 p-14 max-md:p-4">
      <div className="rounded-[20px] bg-white p-12 max-md:p-4 space-y-20">
        <Image
          className="w-full max-w-5xl mx-auto h-auto"
          alt={"image consultation"}
          src={"/Home/Consultation.png"}
          width={0}
          height={0}
          sizes="100%"
        />

        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <div className="text-lg md:text-2xl font-semibold leading-[1]">
              Get Started.
            </div>
            <div className="text-lg md:text-2xl font-semibold">
              Book Consultation.
            </div>
          </div>
          <CustomButton
            text={"Book a consultation - it's free"}
            href={"/contact"}
            className="w-fit mx-auto text-center"
          />
        </div>

        <div className="w-full flex max-md:flex-col gap-6">
          {consultationData?.map((data, i) => (
            <motion.div
              key={i}
              custom={i} // Pass index for stagger effect
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }} // Trigger animation when 20% is visible
              variants={cardVariants}
            >
              <ConsultationCard key={data.index} {...data} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
