import { useState } from "react";
import { BottomNavigation } from "./BottomNavigation";
import arrowIconDown from "./assets/desktop/icon-arrow-down.svg";

export function MoreButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-6">
      <button
        onClick={onClick}
        className="font relative h-10 w-28 rounded-full bg-white"
      >
        {/* <img className="rounded-full bg-black" src={arrowIconDown} alt="" /> */}
        <div className="absolute h-8 w-8 rounded-full bg-[#303030]"></div>
        More
      </button>
      <BottomNavigation isOpen={isOpen} />
    </div>
  );
}
