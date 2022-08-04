import React from "react";

const SeparatingSections = () => {
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-0">
        <div className="mx-auto container xl:max-w-[1284px] py-8 sm:py-12 md:py-14 lg:py-0  xl:px-20 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0 lg:space-x-4 ">
            <div className="flex">
              <div className="flex lg:space-x-4 xl:space-x-8">
                <div className="lg:flex lg:flex-col lg:justify-center max-w-[492px] space-y-3 sm:space-y-5 ">
                  <div className="heading">
                    <h2 className="f-f-s leading-[36px] text-2xl sm:leading-6 lg:text-[32px] lg:leading-8 tracking-[-3%] font-normal text-[#1F2937] ">
                      Separating Sections
                    </h2>
                  </div>
                  <div className="para max-w-[492px] mt-[11.08px] sm:mt-6">
                    <p className="f-f-s text-base leading-6 font-normal text-[#4B5563] lg:pr-[32px] ">
                      For the home we used light gray divider lines in between
                      sections, and to differentiate between the sections we
                      used dark grey divider lines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block border-l h-[236px] sm:h-[268px] lg:h-[446px] " />
            </div>
            <div className="image flex justify-center items-center mt-[11.08px] sm:mt-8 lg:mt-0">
              <div className="lg:max-w-[624px] w-full bg-[#FFE8CB] rounded-xl flex justify-center">
                <img
                  src="/assets/images/cs2/seperate.png"
                  className="pl-[14.02px] pr-[13.72px] pb-[11.2px] md:pb-[31.03px] lg:pb-10 lg:px-8 w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[100%] h-[1px] text-[#E5E7EB]" />
      </div>
    </>
  );
};

export default SeparatingSections;
