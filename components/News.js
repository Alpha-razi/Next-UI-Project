import React from "react";

const News = () => {
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0">
        <div className="mx-auto container xl:max-w-[1284px] xl:px-20 2xl:px-0 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-14">
            <div className="heading pt-0 lg:pt-[133px] flex text-left">
              <h2 className="font-medium lg:text-[52px] lg:leading-[67.6px] tracking-[-3%] sm:text-3xl sm:leading-[45px] text-[24px] leading-9 f-f-s max-w-[508px] flex-wrap ">
                <span className="text-zinc-800 ">
                  You must’ve
                </span>{" "}
                <span className="text-zinc-800 lg:font-normal">
                  heard the news?
                </span>
              </h2>
            </div>
            <div className="flex justify-end items-end bg-[#FFE8CB] rounded-xl lg:max-w-[624px] mt-4 sm:mt-8 lg:mt-0 ">
              <img src="/assets/images/cs2/news.png" className="pt-[144px] pl-[96px]" />
            </div>
          </div>
        
        </div>
        <hr className="w-[100%] h-[1px] text-zinc-200" />
      </div>
    </>
  );
};

export default News;
