import React from "react";

const Challenge = ({ challenge }) => {
  // console.log(challenge);
  return (
    <>
      <div>
        <div className="mx-auto container py-8 sm:py-12 lg:py-20 xl:max-w-[1284px] px-4 md:px-6 xl:px-20 2xl:px-0">
          <div className="heading">
            <h2 className="f-f-s lg:leading-[72px] leading-[36px]  text-2xl sm:text-[30px] lg:text-6xl font-normal text-zinc-800 ">
              {challenge.title}
            </h2>
          </div>
          <div className="para f-f-s font-normal text-base sm:text-lg lg:text-2xl lg:leading-9 text-zinc-600 max-w-[1061px] pt-5 sm:pt-8 lg:pt-8">
            {challenge.desc}
          </div>
        </div>
        {/* <hr className="w-[100%] h-[1px] bg-zinc-200" /> */}
      </div>
    </>
  );
};

export default Challenge;
