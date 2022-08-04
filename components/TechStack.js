import Link from "next/link";

export default function TechStack({ tech }) {
  return (
    <>
      {/* <div className="border-b border-zinc-200"> */}
      <div className="mx-auto xl:max-w-[1284px] container lg:py-20 sm:py-12 py-8 2xl:px-0 xl:px-20 md:px-6 px-4">
        <div>
          <h2 className="f-f-s font-normal lg:text-[42px] md:leading-[50.4px] sm:text-[30px] text-2xl leading-[46px] tracking-[-0.03em] text-zinc-800">
            Tech Stack & Infrastructure
          </h2>
          <div className="lg:mt-12 sm:mt-6 mt-4 flex flex-wrap items-center lg:gap-x-4    gap-x-2 sm:gap-y-4 gap-y-2">
            {tech.map((item, index) => {
              return (
                <div className="sm:px-4 px-3 py-2 border border-zinc-800 rounded-[20px]">
                  <p className="f-f-s font-normal text-sm leading-[14px] text-zinc-800">
                    {item.ts}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
