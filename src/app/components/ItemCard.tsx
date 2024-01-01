import {
  BeerBottle,
  Cake,
  Carrot,
  Check,
  FishSimple,
  OrangeSlice,
} from "@phosphor-icons/react";
import classNames from "classnames";
import { useState } from "react";

interface ItemCardProps {
  isFruit?: boolean;
  isBakery?: boolean;
  isVegetable?: boolean;
  isDrink?: boolean;
  isMeat?: boolean;
  category: string;
}

export function ItemCard({
  isFruit,
  isBakery,
  isVegetable,
  isDrink,
  isMeat,
  category,
}: ItemCardProps) {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <div className="w-full bg-[#17171A] rounded-lg border border-[#252529] p-4 mb-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <button
            className="w-4 h-4 bg-[#17171A] items-center justify-center flex rounded border-2 border-[#A881E6]"
            onClick={() => setRememberMe(!rememberMe)}
          >
            {rememberMe && <Check size={13} />}
          </button>
          <div className="flex flex-col">
            <p className="font-bold text-sm">teste</p>
            <p className="text-sm font-normal text-[#AFABB6] mt-2">teste</p>
          </div>
        </div>
        <div
          className={classNames(
            " rounded-full items-center flex flex-row justify-center",
            isFruit
              ? "bg-[#261A17]"
              : isBakery
              ? "bg-[#211E12]"
              : isVegetable
              ? "bg-[#1C2015]"
              : isDrink
              ? "bg-[#1A1D23]"
              : isMeat
              ? "bg-[#251622]"
              : null,
          )}
        >
          {isFruit ? (
            <OrangeSlice size={30} className="ml-4" color="#E07B67" />
          ) : isBakery ? (
            <Cake size={30} className="ml-4" color="#BB9F3A" />
          ) : isVegetable ? (
            <Carrot size={30} className="ml-4" color="#8CAD51" />
          ) : isDrink ? (
            <BeerBottle size={30} className="ml-4" color="#7B94CB" />
          ) : isMeat ? (
            <FishSimple size={30} className="ml-4" color="#DB5BBF" />
          ) : null}
          <p
            className={classNames(
              "text-xs font-semibold text-center p-2 mr-2 ",
              isFruit
                ? "text-[#E07B67]"
                : isBakery
                ? "text-[#BB9F3A]"
                : isVegetable
                ? "text-[#8CAD51]"
                : isDrink
                ? "text-[#7B94CB]"
                : isMeat
                ? "text-[#DB5BBF]"
                : null,
            )}
          >
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}
