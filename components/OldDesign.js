import React from "react";

const OldDesign = () => {
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0">
        <div className="mx-auto xl:max-w-[1284px] container py-8 md:py-12 lg:py-20  xl:px-20 2xl:px-0">
          <div>
            <div className="heading f-f-s font-normal text-[26px] text-2xl leading-9 sm:text-3xl md:leading-9 lg:text-[40px] lg:leading-10 md:tracking-[-3%] sm:leading-10 text-zinc-800 ">
              Now let’s get back to the actual Problem
            </div>
            <div className="para font-normal f-f-s lg:max-w-[836px] text-lg leading-[27px] text-zinc-600 pt-4 sm:pt-6">
              The real challange was to design NYSUN’s website with modern
              approach but at the same time keeping it traditional as it was in
              1800’s. So, we divided challenge into two parts, the overall user
              experience (Performance, scalability, and SEO optimization) and
              visual design.{" "}
            </div>
            <div className="pt-10 lg:pt-20 flex flex-col lg:flex-row lg:justify-between items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 ">
              <div className="lg:max-w-[624px] w-full bg-black rounded-xl ">
                <h2 className="f-f-s font-normal text-2xl leading-6 sm:text-[42px] sm:leading-[42px] tracking-[-3%] pb-[67.62px] pl-[14.77px] pt-[26.54px] sm:pb-[150px] sm:pt-[64px] sm:pl-[32px] lg:pt-16 lg:pl-8 lg:pb-[144px] text-white">
                  The old design
                </h2>
                <img
                  src="/assets/images/cs2/nys-old2.png"
                  className="px-[14.77px] sm:px-[26px] lg:px-[24px] w-full "
                />
              </div>
              <div className="lg:max-w-[624px] w-full bg-black rounded-xl">
                <h2 className="f-f-s text-2xl leading-6 sm:text-[42px] sm:leading-[42px] tracking-[-3%] sm:pb-[150px] pb-[67.62px] pl-[14.77px] pt-[26.54px] sm:pt-[64px] sm:pl-[32px] lg:pt-16 lg:pl-8 lg:pb-[144px] text-white">
                  The final results
                </h2>
                <img
                  src="/assets/images/cs2/new-design.svg"
                  className="px-[14.77px] sm:px-[26px] lg:px-[24px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className=" w-[100%] h-[1px] text-zinc-200" />
      </div>
    </>
  );
};

export default OldDesign;
