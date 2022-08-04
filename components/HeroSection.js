import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function HeroSection() {
  return ( 
    <>
      <div className="xl:pt-[272px] md:pt-[200px] pt-[150px]">
        <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 sm:px-6 px-4">
          <div className="">
            <h1 className="f-f-s font-normal xl:text-7xl xl:leading-[79.2px] md:text-[52px] md:leading-[62px] text-5xl text-white max-w-[1080px] w-full relative z-10">
              Turning <span className="colorText font-light">Intents</span> into
              Interfaces. <br className="xl:block hidden" />
              <span className="textColor font-light">Collaborating</span> with
              clients <br className="xl:block hidden" />
              to deliver <span className="textColor font-light">Results</span>.
            </h1>
            <Link href="/view-all-casestudies"><a>
            <div className="rounded-full border relative 2xl:left-[51%] xl:left-[58%] md:left-[72%] left-[48%] border-zinc-600 flex flex-col items-center justify-center space-y-[15.49px] md:w-[186px] md:h-[186px] w-[150px] h-[150px] md:p-0 p-4 -mt-4 cursor-pointer">
              <img
                src="/assets/images/arrow.png"
                className="md:w-auto w-[50px]"
              />
              <p className="f-f-s font-normal md:text-xs md:leading-3 text-[8px] leading-[8px] text-white">
                See what we have done
              </p>
            </div>
            </a></Link>
            <div className="flex justify-between items-center xl:pt-[224px] md:pt-[200px] pt-[100px] pb-12">
              <div className="f-f-s font-normal text-slate-50 text-base leading-4">
                San Diego - Islamabad
              </div>
              <div className="f-f-s font-normal text-slate-50 text-base leading-4 cursor-pointer">
                <a href="#footer">
                  Scroll{" "}
                  <span className="ml-[6px] inline-block">
                    <img src="/assets/images/arrow-forward.png" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1F2127]" />
        <Marquee gradientColor={[0, 0, 0]}>
          <div className="flex items-center justify-between space-x-[160px] py-[68px]">
            <img
              src="/assets/images/toyota.svg"
              className="2xl:ml-0 ml-[160px]"
            />
            <img src="/assets/images/nys.svg" />
            <img src="/assets/images/kribbz.svg" />
            <img src="/assets/images/scte.svg" />
            <img src="/assets/images/ash.svg" />
          </div>
        </Marquee>
      </div>
    </>
  );
}
