"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { getHomeStorybook } from "@/app/action/home";
import { storyBook } from "@/types/home";
export default function OurStorybook() {
  const [storybook, setStoryBook] = useState<storyBook[]>([]);

  useEffect(() => {
    async function fetchStorybook() {
      try {
        const response = await getHomeStorybook();
        if (response.success && Array.isArray(response.homeStorybook)) {
          setStoryBook(response.homeStorybook);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching differences:", error);
      }
    }

    fetchStorybook();
  }, []);
  return (
    <section>
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex flex-col max-md:gap-8 md:flex-row w-full justify-between items-center">
          <div className="text-2xl font-semibold leading-[1.1]">
            Our Storybook
          </div>
          <div className="max-w-xs text-sm">
            the formation of the following and have to type some description
            about the same
          </div>
        </div>
        <div className="w-full bg-button-secondary h-[18px] my-6">
          <div className="relative left-0 top-0 h-full w-[160px] bg-button-primary"></div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {storybook?.map((item, index: number) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="">
                  <CardContent className="flex border border-border3 aspect-[1.5] relative items-center justify-center rounded-lg !p-0 overflow-clip">
                    <Image
                      className="w-full h-full object-cover"
                      height={0}
                      width={0}
                      sizes="100%"
                      alt={item?.image}
                      src={item?.image}
                    />
                    <div className="w-full absolute bottom-0 left-0 text-base p-2 flex justify-between items-center bg-gradient-to-r from-bg3 to-bg4">
                      <span className="">{item?.text1}</span>
                      <span className="text-gray2">{item?.text2}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-md:hidden" />
          <CarouselNext className="max-md:hidden" />
        </Carousel>
      </div>
    </section>
  );
}
