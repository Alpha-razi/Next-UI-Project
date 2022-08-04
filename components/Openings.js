import React from "react";
import Button from "./Button/buttonCareer";
import Cursor from "../components/cursor/cursor";
import useHover from "../utills/useHover";
const Openings = () => {
  const [hoverRef, isHovered] = useHover();
  const Data = [
    {
      id: 1,
      title: "Development",
      para1: "Senior Front-end Engineer",
      para2: "Full Time",
      para3: "F-6, Islamabad",
      para4: "Full Time",
      btn: "Apply",
    },
    {
      para1: "Angular Developer",
      para2: "Full Time",
      para3: "One Constitution Avenue, Islamabad",
      para4: "Full Time",
      btn: "Apply",
    },
    {
      para1: "React Js Developer",
      para2: "Full Time",
      para3: "H-12, Islamabad",
      para4: "Full Time",
      btn: "Apply",
    },
    {
      para1: "AWS Engineer",
      para2: "Full Time",
      para3: "F-6, Islamabad",
      para4: "Full Time",
      btn: "Apply",
    },

    {
      title: "Design",
      para1: "UI/UX Designer",
      para2: "Full Time",
      para3: "F-6, Islamabad",
      para4: "Full Time",
      btn: "Apply",
    },
    {
      title: "Marketing",
      para1: "Content Writer",
      para2: "Full Time",
      para3: "F-6, Islamabad",
      para4: "Full Time",
      btn: "Apply",
    },
  ];

  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0">
        <div className="mx-auto pt-8 sm:pt-12 lg:pt-14  xl:px-20 2xl:px-0 sm:pb-[56px]">
          <div className="xl:max-w-[1284px] mx-auto">
            <h2 className="f-f-s font-normal lg:text-[42px] lg:leading-[42px] sm:text-3xl sm:leading-[30px] text-xl leading-5 text-zinc-800">
              We Have 6 current openings
            </h2>
          </div>
          {Data.map((item, index) => (
            <div key={index}>
              {item.title ? (
                <div
                  key={index}
                  className="xl:max-w-[1284px] mx-auto mt-6 sm:mt-10 lg:mt-16 mb-6 lg:mb-8"
                >
                  <h2 className="f-f-s font-normal sm:text-2xl sm:leading-6 text-lg leading-[18px] text-zinc-800">
                    {item.title}
                  </h2>
                </div>
              ) : (
                ""
              )}
              <hr className=" w-[100%] h-[1px] text-zinc-200 " />
              <div key={item.id} className="xl:max-w-[1284px] mx-auto flex lg:flex-row flex-col items-start justify-between sm:items-center my-4 sm:my-4 lg:my-3 ">
                <div className="flex justify-between sm:w-[100%] lg:w-[48%]">
                  <h2 className="f-f-s font-normal text-base leading-4 text-zinc-800">
                    {item.para1}
                  </h2>
                  <h2 className="hidden sm:block f-f-s font-normal text-base leading-4 text-zinc-800">
                    {item.para2}
                  </h2>
                </div>
                <div className="flex justify-between items-center w-[100%] lg:w-[46%] pt-6 sm:pt-8 lg:pt-0">
                  <h2 className="f-f-s font-normal text-base leading-4 text-zinc-800">
                    {item.para3}
                  </h2>
                  <h2 className="block sm:hidden f-f-s font-normal text-base leading-4 text-zinc-800">
                    {item.para4}
                  </h2>
                  <button className="hidden w-full text-center text-[#fff] text-sm leading-[14px] sm:w-auto mt-8 mb-4 sm:mt-0 sm:mb-0 py-[10px] px-6 bg-zinc-800 rounded-3xl sm:flex ">
                    <span className="f-f-i font-normal text-sm leading-[14px] text-[#fff]">
                      {item.btn}
                    </span>
                    <img
                      src="/assets/images/arrow-forward.svg"
                      className="pl-[8.67px]"
                    />
                  </button>

                  {/* <div className="hidden w-full text-center text-[#fff] text-sm leading-[14px] sm:w-auto mt-8 mb-4 sm:mt-0 sm:mb-0 py-[10px] px-6 bg-zinc-800 rounded-3xl sm:flex ">
                    <span className="f-f-i font-normal text-sm leading-[14px] text-[#fff]">
                      {item.btn}
                    </span>
                    <img
                      src="/assets/images/arrow-forward.svg"
                      className="pl-[8.67px]"
                    />
                    <Button
                      ref={hoverRef}
                      onClick={() => console.log("clicked")}
                    >
                      {item.btn}
                    </Button>
                    <Cursor hover={isHovered} />
                  </div> */}
                </div>
                <button className="sm:hidden w-full text-center items-center justify-center text-[#fff] text-sm leading-[14px] sm:w-auto mt-8 mb-4 sm:mt-0 sm:mb-0 py-[10px] px-6 bg-zinc-800 rounded-3xl flex ">
                  <span className="f-f-i font-normal text-sm leading-[14px] text-[#fff]">
                    {item.btn}
                  </span>
                  <img
                    src="/assets/images/arrow-forward.svg"
                    className="pl-[8.67px]"
                  />
                </button>
              </div>
              {item.para1 === "AWS Engineer" ? (
                <hr className=" w-[100%] h-[1px] text-zinc-200 " />
              ) : item.para1 === "UI/UX Designer" ? (
                <hr className=" w-[100%] h-[1px] text-zinc-200 " />
              ) : item.para1 === "Content Writer" ? (
                <hr className=" w-[100%] h-[1px] text-zinc-200 " />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Openings; 
