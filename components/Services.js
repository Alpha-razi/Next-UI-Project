import React from "react";
import Button from "./Button/button";
import Cursor from "../components/cursor/cursor";
import LCursor from "./linkcursor/linkcursor";
import useHover from "../utills/useHover";

const Services = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <>
      <div className=" bg-white">
        <div className="mx-auto xl:max-w-[1284px] container py-24 lg:py-32  md:pr-[152px] md:pl-[151px] lg:pl-0 lg:pr-0 xl:pl-[395px] xl:pr-[396px] 2xl:px-0 ">
          <div className="max-w-[1284px]">
            <div className="heading text-center text-zinc-800 ">
              <h2 className="text-base leading-4 lg:text-lg lg:leading-[18px] font-bold f-f-s">
                What we do
              </h2>
            </div>
            <div className=" text-center text-zinc-800">
              <h2 className="font-normal text-[30px] leading-[39px] md:text-[38px] md:leading-[49.4px] lg:text-[56px] lg:leading-[67.2px] pt-8 f-f-s  sm:px-0 lg:px-6">
                Get kickass
                <br />
                <span className="text-[#5364FF]">Designs</span> &{" "}
                <span className="gradient">Development</span> <br />
                Solutions.
              </h2>
            </div>
            <div className="services-btn flex justify-center pt-8 items-center ">
              <Button ref={hoverRef} onClick={() => console.log("clicked")}>
                About Us
              </Button>
              <Cursor hover={isHovered} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
