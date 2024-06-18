import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie animations/coding-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Animation = () => {
  const [size, setSize] = useState({ height: 350, width: 350 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSize({ height: 500, width: 500 });
      } else if (window.innerWidth >= 640) {
        setSize({ height: 400, width: 400 });
      } else {
        setSize({ height: 350, width: 350 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Lottie
        options={defaultOptions}
        height={size.height}
        width={size.width}
      />
    </div>
  );
};

export default Animation;
