import Link from "next/link";
import { useRouter } from "next/router";
export default function Applicatons({apoints }) {
  // console.log(para);
  const router = useRouter();
  return (
    <>
      <div className="border-y border-zinc-200">
        <div className="mx-auto xl:max-w-[1284px] container 2xl:px-0 xl:px-20 md:px-6 px-4 flex lg:flex-row flex-col justify-between items-start  lg:space-y-0 space-x-0 ">
          <div
            className={`lg:w-[37%] w-full  ${
              router.pathname == "/casestudy-scte"
                ? "lg:pt-20 sm:pt-12 pt-8"
                : "lg:pt-20 sm:pt-12 pt-8"
            } `}
          >
            <h2 className="f-f-s lg:text-[60px] lg:leading-[72px] sm:leading-[36px] sm:text-[30px] text-2xl font-normal tracking-[-0.03em] text-zinc-800 max-w-[330px]">
              Applicatons
            </h2>
          </div>
          {/* <div
            className={` ${
              router.pathname == "/casestudy-scte"
                ? "min-h-[472px]"
                : router.pathname == "/casestudy-sxm"
                ? "min-h-[376px]"
                : "min-h-[688px]"
            }  lg:block hidden`}
          /> */}
          <div className="lg:pt-20 pt-0 lg:pb-20 sm:pb-12 pb-8 lg:w-3/4 w-full lg:border-l border-zinc-200 lg:pl-8 lg:mt-0 sm:mt-8 mt-4 ">
            <div>
              <div className="lg:w-[752px]">
                <ul className="list-disc f-f-s font-normal lg:text-base sm:text-lg text-base text-zinc-600  pl-5">
                  {apoints.map((item, index) => {
                    return <li>{item.point}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
