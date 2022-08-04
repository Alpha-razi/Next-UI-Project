import Link from "next/link";

export default function MoreCaseStudies() {
  return (
    <>
      <div className=" xl:pb-20 pb-10 2xl:px-0 xl:px-20 md:px-6 px-4">
        <div className="mx-auto container ">
          <div className="hidden xl:flex xl:flex-row flex-col justify-between xl:items-end items-start xl:space-x-8 space-x-0 xl:max-w-[1284px] max-w-[625px] mx-auto">
        
            <div className="xl:max-w-[301px] xl:pt-0 pt-4">
              <Link href="/casestudy-sxm"><a>
              <h2 className="f-f-s font-normal md:text-[28px] md:leading-[28px] text-xl  text-zinc-50">
              SiriusXM Radio
              </h2>
              </a></Link>
              <p className="f-f-s font-medium md:text-base md:leading-[19.2px] text-sm text-zinc-400 pt-[9px]">
              <Link href="/casestudy-sxm"><a>Brochure Website</a></Link>
              </p>
            </div>
            <Link href="/casestudy-sxm"><a> <img src="/assets/images/sxm.svg" /></a></Link>
          </div>
          
          <div className="xl:hidden flex sm:flex-row flex-col justify-between sm:items-end items-start lg:space-x-8 sm:space-x-6 space-x-0 xl:max-w-[1284px] max-w-full mx-auto">
          <Link href="/casestudy-sxm"><a> <img src="/assets/images/sxm.svg" className="lg:w-auto sm:w-[426px]"/></a></Link>
            <div className="lg:w-[301px] sm:w-[270px] xl:pt-0 pt-4 justify-self-start ">
              <Link href="/casestudy-sxm"><a>
              <h2 className="f-f-s font-normal lg:text-[28px] lg:leading-[28px] text-2xl leading-6  text-zinc-50">
              SiriusXM Radio
              </h2>
              </a></Link>
              <p className="f-f-s font-medium lg:text-base lg:leading-[19.2px] text-xs leading-[14.4px]  text-zinc-400 pt-[9px]">
              <Link href="/casestudy-sxm"><a>Brochure Website</a></Link>
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="border-b border-zinc-800">
      <div className="mx-auto container pb-20 2xl:px-0 xl:px-20 md:px-6 px-4">
        <div className="flex sm:flex-row flex-col justify-between items-start sm:space-x-8 space-x-0 sm:space-y-0 space-y-10 max-w-[1284px] mx-auto">
          <div>
          <Link href="/casestudy-litecure"><a> <img src="/assets/images/litecure.svg" /></a></Link>
            <h2 className="f-f-s font-normal lg:text-[28px] lg:leading-[28px] text-2xl leading-6  text-zinc-50 xl:pt-10 pt-4">
            <Link href="/casestudy-litecure"><a>Litecure</a></Link>
            </h2>
            <p className="f-f-s font-medium lg:text-base lg:leading-[19.2px] text-sm leading-[19.2px] text-zinc-400 xl:pt-[17px] pt-[9px]">
            <Link href="/casestudy-litecure"><a>Companion Animal Health - Digital Transformation</a></Link>
            </p>
          </div>
          <div>
          <Link href="/casestudy-furbaby"><a> <img src="/assets/images/furbaby.png" /></a></Link>
            <h2 className="f-f-s font-normal lg:text-[28px] lg:leading-[28px] text-2xl leading-6  text-zinc-50 xl:pt-10 pt-4">
            <Link href="/casestudy-furbaby"><a>Furbaby Tracker</a></Link>
            </h2>
            <p className="f-f-s font-medium lg:text-base lg:leading-[19.2px] text-sm leading-[19.2px] text-zinc-400 xl:pt-[17px] pt-[9px]">
            <Link href="/casestudy-furbaby"><a>Real-time pet status Updates</a></Link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
