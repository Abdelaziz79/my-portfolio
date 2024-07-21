import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import MyButton from "../MyButton";

interface CardProps {
  description: string;
  imageSrc: StaticImageData;
  title: string;
  source: string;
  demo?: string;
}

const Card: React.FC<CardProps> = ({
  description,
  imageSrc,
  title,
  source,
  demo,
}) => {
  return (
    <>
      <div className="border-2 rounded-xl shadow-md  overflow-hidden  h-[400px] hover:shadow-xl my-2 bg-gray-100 dark:text-white dark:bg-gray-800  border-none">
        <div className="relative w-[100%] h-[50%] overflow-hidden">
          <Image
            className="   "
            src={imageSrc}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-center my-3">
          <h3 className="capitalize text-xl">{title}</h3>
          <p className="text-ellipsis line-clamp-3 p-1 text-gray-800 text-md dark:text-white">
            {description}
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <MyButton>
            <a href={source} target="_blank">
              Source
            </a>
          </MyButton>
          {demo && (
            <MyButton>
              <Link href={demo} target="_blank">
                Demo
              </Link>
            </MyButton>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
