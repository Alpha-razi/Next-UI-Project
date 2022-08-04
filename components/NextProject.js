import Link from "next/link";
import { useRouter } from "next/router";
export default function NextProject() {
  const router = useRouter();
  return (
    <>
      {router.pathname == "/casestudy-nys" ? (
        <div className="bg-[#0B0D13] flex items-center ">
          <div className=" 2xl:px-0  xl:px-20 md:px-6 sm:px-[60px] px-4   mx-auto xl:max-w-[1280px] container">
            <Link href="/casestudy-toyota">
              <a>
                <div className="flex  items-center space-x-[9px] xl:py-[160px] lg:py-32  sm:py-12 py-6  cursor-pointer">
                  <h2 className="2xl:text-6xl lg:text-4xl sm:text-[60px] text-2xl tracking-[-3%] leading-[60px] f-f-s text-zinc-50">
                    Next Project
                  </h2>
                  <div>
                    <img
                      src="../assets/images/cs1/arrow-forward.svg"
                      className="2xl:w-full lg:pt-[5px] sm:pt-[10px] pt-[5px]  lg:w-[80%]  sm:w-full w-[55%]"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ) : router.pathname == "/casestudy-toyota" ? (
        <div className="bg-[#0B0D13] flex items-center ">
          <div className=" 2xl:px-0  xl:px-20 md:px-6 sm:px-[60px] px-4   mx-auto xl:max-w-[1280px] container">
            <Link href="/casestudy-scte">
              <a>
                <div className="flex  items-center space-x-[9px] xl:py-[160px] lg:py-32  sm:py-12 py-6  cursor-pointer">
                  <h2 className="2xl:text-6xl lg:text-4xl sm:text-[60px] text-2xl tracking-[-3%] leading-[60px] f-f-s text-zinc-50">
                    Next Project
                  </h2>
                  <div>
                    <img
                      src="../assets/images/cs1/arrow-forward.svg"
                      className="2xl:w-full lg:pt-[5px] sm:pt-[10px] pt-[5px]  lg:w-[80%]  sm:w-full w-[55%]"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ) : router.pathname == "/casestudy-scte" ? (
        <div className="bg-[#0B0D13] flex items-center ">
          <div className=" 2xl:px-0  xl:px-20 md:px-6 sm:px-[60px] px-4   mx-auto xl:max-w-[1280px] container">
            <Link href="/casestudy-sxm">
              <a>
                <div className="flex  items-center space-x-[9px] xl:py-[160px] lg:py-32  sm:py-12 py-6  cursor-pointer">
                  <h2 className="2xl:text-6xl lg:text-4xl sm:text-[60px] text-2xl tracking-[-3%] leading-[60px] f-f-s text-zinc-50">
                    Next Project
                  </h2>
                  <div>
                    <img
                      src="../assets/images/cs1/arrow-forward.svg"
                      className="2xl:w-full lg:pt-[5px] sm:pt-[10px] pt-[5px]  lg:w-[80%]  sm:w-full w-[55%]"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ) : router.pathname == "/casestudy-sxm" ? (
        <div className="bg-[#0B0D13] flex items-center ">
          <div className=" 2xl:px-0  xl:px-20 md:px-6 sm:px-[60px] px-4   mx-auto xl:max-w-[1280px] container">
            <Link href="/casestudy-litecure">
              <a>
                <div className="flex  items-center space-x-[9px] xl:py-[160px] lg:py-32  sm:py-12 py-6  cursor-pointer">
                  <h2 className="2xl:text-6xl lg:text-4xl sm:text-[60px] text-2xl tracking-[-3%] leading-[60px] f-f-s text-zinc-50">
                    Next Project
                  </h2>
                  <div>
                    <img
                      src="../assets/images/cs1/arrow-forward.svg"
                      className="2xl:w-full lg:pt-[5px] sm:pt-[10px] pt-[5px]  lg:w-[80%]  sm:w-full w-[55%]"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ) : router.pathname == "/casestudy-litecure" ? (
        <div className="bg-[#0B0D13] flex items-center ">
          <div className=" 2xl:px-0  xl:px-20 md:px-6 sm:px-[60px] px-4   mx-auto xl:max-w-[1280px] container">
            <Link href="/casestudy-furbaby">
              <a>
                <div className="flex  items-center space-x-[9px] xl:py-[160px] lg:py-32  sm:py-12 py-6  cursor-pointer">
                  <h2 className="2xl:text-6xl lg:text-4xl sm:text-[60px] text-2xl tracking-[-3%] leading-[60px] f-f-s text-zinc-50">
                    Next Project
                  </h2>
                  <div>
                    <img
                      src="../assets/images/cs1/arrow-forward.svg"
                      className="2xl:w-full lg:pt-[5px] sm:pt-[10px] pt-[5px]  lg:w-[80%]  sm:w-full w-[55%]"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ) 
       : router.pathname == "/casestudy-furbaby" ? (
        <div className="bg-[#0B0D13] flex items-center ">
          <div className=" 2xl:px-0  xl:px-20 md:px-6 sm:px-[60px] px-4   mx-auto xl:max-w-[1280px] container">
            <Link href="/casestudy-nys">
              <a>
                <div className="flex  items-center space-x-[9px] xl:py-[160px] lg:py-32  sm:py-12 py-6  cursor-pointer">
                  <h2 className="2xl:text-6xl lg:text-4xl sm:text-[60px] text-2xl tracking-[-3%] leading-[60px] f-f-s text-zinc-50">
                    Next Project
                  </h2>
                  <div>
                    <img
                      src="../assets/images/cs1/arrow-forward.svg"
                      className="2xl:w-full lg:pt-[5px] sm:pt-[10px] pt-[5px]  lg:w-[80%]  sm:w-full w-[55%]"
                    />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>): (
        ""
      )}
    </>
  );
}
