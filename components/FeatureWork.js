import Link from "next/link";
import { useRouter } from "next/router";
import Cursor from "./linkcursor/linkcursor";
import BCursor from "../components/cursor/cursor";
import useHover from "../utills/useHover";
import ViewLink from "./ViewLink/viewLink";

export default function FeatureWork() {
  const router = useRouter();
 const [hoverRef, isHovered] = useHover();
  return (
    <>
    <div className={`${router.pathname == '/'? 'pt-8':''}`}>
      <div className={`${router.pathname == '/' && "border-y border-[#1F2127]"}`}>
        <div className={`mx-auto xl:max-w-[1284px] container ${router.pathname == '/' ? "lg:py-12 sm:py-8 py-6" : "lg:pt-[116px] sm:pt-[34px] pt-0"}  2xl:px-0 xl:px-20 sm:px-6 px-4`}>
          <div className="flex justify-between items-center">
            <div className="f-f-s font-normal lg:text-[60px] lg:leading-[60px] sm:text-[48px] sm:leading-[60px] text-[34px] leading-[60px] text-zinc-50">
              Featured Work
            </div>
           {router.pathname == '/' && <Link href="/view-all-casestudies"><a> <div className="hidden sm:flex items-center justify-between space-x-[6px] cursor-pointer">
              <div className="f-f-s font-medium lg:text-base sm:text-sm sm:leading-[14px] text-xs xl:leading-4 text-white underline underline-offset-2">
              {/* <ViewLink ref={hoverRef}>View All Case Studies </ViewLink> */}
              View All Case Studies
              </div>
              <img
                src="/assets/images/case-study-arrow.png"
                className="xl:w-auto md:w-5 w-4"
              />
            </div></a></Link>}
          </div>
        </div>
        {/* <Cursor hover={isHovered} indexz={15} hide={"block"} fillColor={"#fff"}/> */}
        {/* <BCursor hover={isHovered} hide={"none"}/> */}
      </div>
      <div className={`${router.pathname == '/' ? " lg:pt-20 lg:pb-12 sm:pt-[60px] sm:pb-[60px] pt-6 pb-10" : "pt-12 pb-20"} 2xl:px-0 xl:px-20 md:px-6 px-4`}>
        <div className="mx-auto container ">
          <div className="flex sm:flex-row flex-col justify-between sm:items-end items-start lg:space-x-8 sm:space-x-6 space-x-0 xl:max-w-[1284px] max-w-full mx-auto">
          <Link href="/casestudy-toyota"><a> <img src="/assets/images/toyota-america.svg" className="lg:w-auto sm:w-[426px]"/></a></Link>
            <div className="lg:max-w-[301px] sm:max-w-[270px] xl:pt-0 pt-4">
              <Link href="/casestudy-toyota"><a>
              <h2 className="f-f-s font-normal lg:text-[28px] lg:leading-[28px] text-2xl leading-6  text-zinc-50">
                Toyota North America
              </h2>
              </a></Link>
              <p className="f-f-s font-medium lg:text-base lg:leading-[19.2px] text-xs leading-[14.4px]  text-zinc-400 pt-[9px]">
              <Link href="/casestudy-toyota"><a>  UX and Speed optimization to improve Conversion rates</a></Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto container lg:pb-20 sm:pb-11 pb-12 2xl:px-0 xl:px-20 md:px-6 px-4">
        <div className="flex sm:flex-row flex-col justify-between items-start sm:space-x-8 space-x-0 sm:space-y-0 space-y-10 max-w-[1284px] mx-auto">
          <div>
          <Link href="/casestudy-nys"><a> <img src="/assets/images/new-york.svg" /></a></Link>
            <h2 className="f-f-s font-normal lg:text-[28px] lg:leading-[28px] text-2xl leading-6  text-zinc-50 xl:pt-10 pt-4">
            <Link href="/casestudy-nys"><a> The New York Sun</a></Link>
            </h2>
            <p className="f-f-s font-medium lg:text-base lg:leading-[19.2px] text-sm leading-[19.2px] text-zinc-400 xl:pt-[17px] pt-[9px]">
            <Link href="/casestudy-nys"><a>Architectural innovation of the Website</a></Link>
            </p>
          </div>
          <div>
          <Link href="/casestudy-scte"><a> <img src="/assets/images/scte-banner.svg" /></a></Link>
            <h2 className="f-f-s font-normal lg:text-[28px] lg:leading-[28px] text-2xl leading-6  text-zinc-50 xl:pt-10 pt-4">
            <Link href="/casestudy-scte"><a> SCTE</a></Link>
            </h2>
            <p className="f-f-s font-medium lg:text-base lg:leading-[19.2px] text-sm leading-[19.2px] text-zinc-400 xl:pt-[17px] pt-[9px]">
            <Link href="/casestudy-scte"><a>  Digital transformation of SCTE’s legacy Software System</a></Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
