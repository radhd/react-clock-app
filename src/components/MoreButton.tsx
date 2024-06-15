import { useState } from "react";
import { BottomNavigation } from "./BottomNavigation";

export function MoreButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={onClick} className="bg-red-500">
        More
      </button>

      <BottomNavigation isOpen={isOpen} />
    </>
  );
}
