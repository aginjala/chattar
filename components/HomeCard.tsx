'use client';

import { HomeCardModel } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HomeCard = (model: HomeCardModel) => {
  const isBlue1 = model.bgColor === "bg-blue-1";
  const isBlue2 = model.bgColor === "bg-blue-2";
  const isBlue3 = model.bgColor === "bg-blue-3";
  const isBlue4 = model.bgColor === "bg-blue-4";
  return (
    <div
      className={
        cn(`px-4 py-6 flex flex-col justify-between 
        w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`, 
        {'bg-blue-1': isBlue1}, {'bg-blue-2': isBlue2}, {'bg-blue-3': isBlue3}, {'bg-blue-4': isBlue4})}
      onClick={model.handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={model.img}
          alt={model.title}
          width={27}
          height={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{model.title}</h1>
        <p className="text-lg font-normal">{model.description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
