import Link from "next/link";

export default function SunMember() {
  return (
    <>
      <div className="lg:border-b border-none border-zinc-200">
        <div className="mx-auto xl:max-w-[1284px] container flex lg:flex-row flex-col justify-between lg:space-x-8 lg:space-y-0 space-x-0 sm:space-y-8 space-y-6 items-start lg:py-20 sm:py-10 py-6 2xl:px-0 xl:px-20 md:px-6 px-4">
          <div>
            <h2 className="f-f-s font-normal lg:text-[32px] lg:leading-[48px] sm:text-[30px] sm:leading-[30px] text-[24px] leading-[36px] tracking-[-0.03em] text-zinc-800 lg:max-w-[269px] max-w-3xl lg:pt-[186px]">
              Sun Member & Founder Packages
            </h2>
            <p className="f-f-s font-normal text-base leading-6 sm:text-sm sm:leading-[21px] text-zinc-600 mt-4 sm:mt-6 lg:max-w-[405px] max-w-3xl">
              Through design and colors, a balance was created to emphasize each
              pricing plan, the users were unconsciously directed to"Sun member"
              without being oblivious to "Sun founder" that would give them a
              premium experience.{" "}
            </p>
          </div>
          <div className="bg-[#FFE8CB] rounded-xl lg:px-12 lg:py-[52px] sm:px-10 sm:py-[51px] px-[29px] py-[29px]">
            <img src="/assets/images/cs2/sunMember.png" />
          </div>
        </div>
      </div>

      <div className="border-b border-zinc-200 xl:mx-0 md:mx-6 mx-4">
        <div className="mx-auto xl:max-w-[1284px] container flex lg:flex-row flex-col-reverse justify-between lg:space-x-8 lg:space-y-0 space-x-0 sm:space-y-8 sm:space-y-reverse space-y-6 space-y-reverse items-end lg:pt-20 lg:pb-20 sm:pt-0 sm:pb-10 pt-0 pb-6 2xl:px-0 xl:px-20 ">
          <div className="bg-[#FFE8CB] rounded-xl lg:px-12 lg:py-[52px] sm:px-10 sm:py-[51px] px-[29px] py-[29px]">
            <img src="/assets/images/cs2/AnnualPrices.png" />
          </div>
          <div>
            <h2 className="f-f-s font-normal lg:text-[32px] lg:leading-[48px] sm:text-[30px] sm:leading-[30px] text-[28px] leading-[44px] tracking-[-0.03em] text-zinc-800 ">
              Annual & Monthly Prices
            </h2>
            <p className="f-f-s font-normal text-sm leading-[21px] text-zinc-600 sm:mt-6 mt-4 lg:max-w-[405px] max-w-3xl">
              For the home we used light zinc divider lines in between sections,
              and to differentiate between the sections we used dark grey
              divider lines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
