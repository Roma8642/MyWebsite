import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-gradient-to-b from-gray-600 to-gray-950">

      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          My Work<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default Page;
