"use client";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import skillsList from "./skillsList";
import React from "react";
const Skills = () => {
  return (
    <>
      <div className=" py-10 mt-7 dark:text-white">
        <h3 className="text-3xl py-1">الآراء</h3>
        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white font-xl">
          استمع مباشرة إلى تجارب مرضانا لتتعرف على جودة الخدمات المقدمة في
          عيادتنا.
        </p>

        <CarouselComp list={skillsList} />
      </div>
    </>
  );
};

export function CarouselComp({
  list,
  className,
}: {
  list: any;
  className?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
        className={className || `w-[40%] min-w-[400px]`}
        dir="ltr"
      >
        <CarouselContent>
          {list.map((skill: any, index: number) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 dark:bg-gray-800">
                    <Image
                      src={skill.img}
                      alt={skill.id.toString()}
                      width={700}
                      height={700}
                      className="rounded-sm"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="dark:text-white dark:bg-gray-800" />
        <CarouselNext className="dark:text-white dark:bg-gray-800" />
      </Carousel>
      <div className="flex mt-1 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all mx-1 ${
              count - 1 - index === current
                ? "bg-blue-600 scale-125"
                : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(count - 1 - index)}
          >
            <span className="sr-only">{count - index}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Skills;
