import { useState } from "react";
import { BottomNavigation } from "./BottomNavigation";
import arrowIconDown from "./assets/desktop/icon-arrow-down.svg";

export function MoreButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="mb-10 px-6">
        <button
          onClick={onClick}
          className="font relative mt-12 h-10 w-28 rounded-full bg-white pe-5 tracking-widest text-slate-500"
        >
          <div className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#303030]">
            <img className="top-3 rounded-full" src={arrowIconDown} alt="" />
          </div>
          More
        </button>
      </div>
      <BottomNavigation isOpen={isOpen} />
    </div>
  );
}
