import Autoplay from "embla-carousel-autoplay";

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
const Skills = () => {
  return (
    <>
      <div className=" py-10 mt-7 dark:text-white">
        <h3 className="text-3xl py-1">الآراء</h3>
        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white font-xl">
          استمع مباشرة إلى تجارب مرضانا لتتعرف على جودة الخدمات المقدمة في
          عيادتنا.
        </p>
      </div>
      <div className="flex align-middle justify-center w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-[40%] min-w-[400px]  "
          dir="ltr"
        >
          <CarouselContent>
            {skillsList.map((skill, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={skill.img}
                        alt={skill.id.toString()}
                        className=" rounded-sm"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Skills;
