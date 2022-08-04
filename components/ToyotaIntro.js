import Link from "next/link";

export default function ToyotaIntro() {
  return (
    <>
      <div className="xl:mx-0  sm:mx-6 mx-4 border-b border-zinc-200">
        <div className="lg:py-20 sm:py-12 py-8 mx-auto xl:max-w-[1284px] container 2xl:px-0 xl:px-20">
          <div className="md:max-w-[734px] max-w-sm">
            <h2 className="f-f-s lg:text-[40px] lg:leading-[40px] text-[30px] text-xl font-normal  tracking-[-0.03em] text-zinc-800">
              Introduction
            </h2>
            <p className="f-f-s font-normal lg:text-lg lg:leading-[27px] sm:text-lg text-base text-zinc-600 lg:pt-6 sm:pt-8 pt-4">
              Toyota USA’s website is their brand’s gateway, responsible for
              building trust, driving sales, and creating lifelong customers.
              Toyota came to us with the goal of increasing conversion and
              revenue on their site and engaged AlphaSquad to perform a full
              audit and performance overhaul..{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
