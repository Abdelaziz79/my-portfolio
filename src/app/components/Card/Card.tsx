import React from "react";

import Image from "next/image";

interface CardProps {
  description?: string;
  imageSrc: string;
  title?: string;
  source?: string;
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
        <div className="relative w-[100%] h-[60%] overflow-hidden">
          <Image src={imageSrc} alt="" objectFit="cover" fill />
        </div>
        <div className="text-center my-3">
          <h3 className="capitalize text-xl">{title}</h3>
          <p className="text-ellipsis line-clamp-3 p-1 text-gray-800 text-md dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
