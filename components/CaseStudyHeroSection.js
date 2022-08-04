import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button/buttonVisit";
import Cursor from "../components/cursor/cursor";
import useHover from "../utills/useHover";

export default function CaseStudyHeroSection({ data, services, nysservices }) {
  const [hoverRef, isHovered] = useHover();
  const router = useRouter();
  return (
    <>
      <div className="xl:mx-0  sm:mx-6 mx-4 border-b border-zinc-200">
        <div className="pt-24 mx-auto xl:max-w-[1284px] container lg:pb-20 sm:pb-12 pb-10 2xl:px-0 xl:px-20 ">
          <img src={data.heroimage} className="w-full"/>
          <div className="lg:flex justify-between items-start lg:pt-16  pt-8 ">
            <div>
              <h1 className="f-f-s font-normal  lg:text-[40px] lg:leading-[40px] sm:text-2xl text-[30px] leading-[30px] text-zinc-800 my-0">
                {data.heading}
              </h1>
              <p className="f-f-s font-normal lg:text-base lg:leading-4 sm:text-sm text-base text-zinc-600 sm:pt-6  pt-4">
                {data.desc}
              </p>
              <div className=" sm:mt-0 mt-6 flex md:flex-col flex-row  sm:items-start justify-between items-center ">
              
              <img
                src="/assets/images/cs1/MobArrow.svg"
                className=" sm:hidden block   cursor-pointer"
              />
              {/* <div className="flex justify-center items-center space-x-[10.42px] lg:w-[176px] sm:w-[150px] w-[176px] rounded-3xl bg-zinc-800 lg:px-6 lg:py-[14px] px-2 sm:py-2 py-[14px] lg:mt-10 sm:mt-6  cursor-pointer"> */}
              <div className=" flex justify-center items-center space-x-[10.42px]   rounded-3xl   lg:mt-10 sm:mt-6  ">
                {/* <div className="f-f-i text-white lg:text-base lg:leading-4 text-sm font-normal ">
                  Visit Website
                </div>
                <img
                  src="/assets/images/cs1/arrow.svg"
                  className="lg:w-auto w-3"
                /> */}
                  <Button ref={hoverRef} onClick={() => console.log("clicked")}>
                    Visit Website
                  </Button>
                  <Cursor hover={isHovered} />
              </div>
             
              
              <img
                src="/assets/images/cs1/arrow-left.svg"
                className="lg:block hidden  md:mt-16 mt-8 cursor-pointer"
              />
              </div>
            </div>
            <div className="lg:mt-0 mt-8 ">
              <div className="f-f-i text-[18px] leading-[18px] font-normal text-zinc-800">
                Services
              </div>
              <div className="flex lg:flex-col sm:flex-row lg:space-x-0 sm:space-x-[12px] ">

              <div className="flex  flex-wrap  items-center lg:gap-y-3 lg:gap-x-2  sm:gap-2  gap-[12px] mt-4 lg:max-w-[296px]">
                {services.map((item, index) => {
                  return (
                    <div className="f-f-s  lg:text-sm lg:leading-[14px] md:text-xs text-[14px] leading-[7.5px] font-normal text-zinc-800 border border-zinc-800 sm:py-2 py-2 sm:px-4 px-3 rounded-[20px]">
                      {item.service}
                    </div>
                  );
                })}
              </div>
              {/* {router.pathname == "/casestudy-nys" && (
                <div className="flex md:flex-row flex-col items-center lg:space-x-4 md:space-y-0 md:space-x-2 space-y-2 space-x-0 md:mt-4 mt-2">
                  {nysservices.map((item, index) => {
                    return (
                      <div className="f-f-s lg:text-sm lg:leading-[14px] md:text-xs text-[14px] leading-[7.5px] font-normal text-zinc-800 border border-zinc-800 lg:py-2 sm:py-2 py-1 lg:px-4 sm:px-3 px-2 rounded-[20px]">
                        {item.service}
                      </div>
                    );
                  })}
                </div>
              )} */}
              </div>
            </div>
            <img
                src="/assets/images/cs1/arrow-left.svg"
                className="lg:hidden sm:block hidden  mt-6 cursor-pointer"
              />
          </div>
        </div>
      </div>
    </>
  );
}
