import { ChevronUpIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export const ScrolltoTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisiblity] = useState(false);

  useEffect(() => {
    if (pageYOffset > 800) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <div
      className="scrollto-top cursor-pointer text-center"
      onClick={scrollToTop}
    >
      <ChevronUpIcon className="h-10 w-10 border-2 rounded-lg bg-black text-white"></ChevronUpIcon>
    </div>
  );
};
