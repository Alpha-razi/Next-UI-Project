import { useRouter } from "next/router";
export default function Footer() {
  const router = useRouter();
  return (
    <>
      {router.pathname == "/contactUs" ? (
        <>
          <div className="mx-auto xl:max-w-[1284px] container 2xl:px-0 xl:px-20 md:px-6 px-4">
            <div className="flex sm:flex-row flex-col justify-between items-center sm:space-y-0 space-y-6 pt-12 pb-10">
              <div className="flex lg:space-x-12 sm:space-x-8 justify-between items-center lg:w-[253px] sm:w-[234px] w-full">
                <div className="f-f-s font-medium text-sm leading-[14px] text-zinc-600">
                  Terms of Service
                </div>
                <div className="f-f-s font-medium text-sm leading-[14px] text-zinc-600">
                  Privacy Policy
                </div>
              </div>
              <div className="f-f-s font-medium text-sm leading-[14px] text-zinc-600">
                © 2022 AlphaSquad. All Rights Reserved.
              </div>
            </div>
          </div>
        </>
      ) : router.pathname == "/career" || router.pathname == "/job-desc" ? (
        <div className="bg-[#0B0D13]">
          <div className="mx-auto xl:max-w-[1284px] container 2xl:px-0 xl:px-20 md:px-6 px-4">
            <div className="sm:flex justify-between items-start lg:py-12 py-8">
              <div>
                <h3 className="f-f-i font-normal text-base leading-4 text-zinc-50">
                  Follow Us:
                </h3>
                <div className="flex  items-center mt-6  space-x-6">
                  <img src="/assets/images/footer/dr.svg" />
                  <img src="/assets/images/footer/In.svg" />
                  <img src="/assets/images/footer/fb.svg" />
                  <img src="/assets/images/footer/in.svg" />
                </div>
                <div className="f-f-s font-medium text-sm leading-4 text-zinc-500 lg:mt-12 sm:mt-8 mt-6 ">
                  ©2022 AlphaSquad. All Rights Reserved.
                </div>
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="f-f-i font-normal text-base leading-4 text-zinc-50">
                  Find Us:
                </h3>
                <div className="f-f-s font-medium text-base leading-4 text-zinc-50 mt-8">
                  San Diego
                </div>
                <div className="f-f-s font-medium lg:text-sm leading-[21px] text-zinc-400 mt-4 lg:max-w-[227px] sm:max-w-[227px]">
                  4275 Executive Square, Suite 200{" "}
                  <br className="sm:hidden block" /> LA Jolla, CA 92037
                </div>
                <div className="f-f-s font-medium text-base leading-4 text-zinc-50 mt-10">
                  Islamabad
                </div>
                <div className="f-f-s font-medium lg:text-sm leading-[21px] text-zinc-400 mt-6 lg:max-w-[360px] ">
                  Suite 301-305, Ground Floor, NSTP, NUST{" "}
                  <br className="lg:hidden sm:block" /> H-12, Islamabad
                </div>
                <div className="f-f-s font-medium lg:text-sm leading-[21px] text-zinc-400 mt-6 lg:max-w-[360px]">
                  2103, 21st Floor, One Constitution Avenue,
                  <br /> Islamabad
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : router.pathname == "/casestudy-nys" || router.pathname == "/casestudy-toyota" || router.pathname == "/casestudy-furbaby" || router.pathname == "/casestudy-litecure" || router.pathname == "/casestudy-scte" || router.pathname == "/casestudy-sxm" ? (
        ""
      ) : (
        <div className="bg-white" id="footer">
          <div
            className={`${
              router.pathname == "/view-all-casestudies" && "bg-[#0B0D13]"
            } ${router.pathname == "/products" && "hidden"} `}
          >
            <h2
              className={`2xl:text-[100px] xl:text-[80px] lg:text-[70px]  sm:text-[80px] text-5xl xl:leading-[110px] lg:leading-[95px]  sm:leading-[88px] leading-[52.8px]  f-f-s text-zinc-800 text-center lg:pt-[128px] sm:pt-[70px] pt-12  xl:pb-[128px] lg:pb-[120px]  pb-12 ${
                router.pathname == "/view-all-casestudies" && "text-zinc-50"
              }`}
            >
              Ready to <br /> get onboard?{" "}
            </h2>
          </div>

          <div className="lg:flex w-full ">
            <div
              className={`w-full sm:pt-12 pt-8 xl:pb-[108px] lg:pb-[101px] sm:pb-6 pb-8  2xl:pl-[315px] xl:pl-[80px] sm:px-6 md:pl-6 pl-[16px] border-zinc-200 border  `}
            >
              <div className="max-w-[449px]">
                <h2 className="xl:text-[60px] lg:text-[50px]  text-[40px] lg:leading-[66px] leading-[44px] f-f-s text-zinc-800 ">
                  Let’s Talk about <br />{" "}
                  <span className="gradient1">Your Needs</span>
                </h2>

                <div className="lg:block hidden">
                  <h3 className="pt-[48px] pb-[33px] text-[16px] leading-[16px] text-zinc-800 f-f-i">
                    Find Us:
                  </h3>
                  <div>
                    <h3 className="text-[16px] leading-[16px] text-zinc-800 f-f-s font-medium ">
                      San Diego
                    </h3>
                    <p className="pt-[16px] text-[14px] leading-[21px] text-zinc-600 f-f-s font-medium">
                      4275 Executive Square, Suite 200 <br /> LA Jolla, CA 92037
                    </p>
                  </div>
                  <div className="pt-[40px]">
                    <h3 className="text-[16px] leading-[16px] text-zinc-800 f-f-s font-medium">
                      Islamabad
                    </h3>
                    <p className="pt-[24px] text-[14px] leading-[21px] text-zinc-600 f-f-s font-medium ">
                      Suite 301-305, Ground Floor, NSTP, NUST H-12, <br />{" "}
                      Islamabad
                    </p>
                    <p className="pt-[24px] text-[14px] leading-[21px] text-zinc-600 f-f-s font-medium">
                      2103, 21st Floor, One Constitution Avenue,
                      <br /> Islamabad
                    </p>
                  </div>
                  <div className="pt-[48px] ">
                    <h3 className="text-[16px] leading-[16px] text-zinc-800 f-f-i">
                      Follow Us:
                    </h3>
                    <div className="pt-6 flex space-x-[24px]">
                      <img src="../Images/dr.svg" className="cursor-pointer" />
                      <img src="../Images/ln.svg" className="cursor-pointer" />
                      <img src="../Images/fb.svg" className="cursor-pointer" />
                      <img src="../Images/in.svg" className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[60%] lg:w-[80%] w-full sm:flex hidden   ">
              <div className={`w-[50%]  border border-zinc-200   `}>
                <div className="flex items-end justify-between lg:h-[50%] lg:pt-20 pt-28  lg:pl-[32px]   sm:pl-6 lg:pr-[32px] pr-[47px]  border-zinc-200  border-b-[1px] lg:pb-4 pb-6 cursor-pointer text-zinc-600 hover:bg-black hover:text-white group ">
                  <h2 className="f-f-s text-[24px]   leading-[36px]  ">
                    Chat <br /> with us
                  </h2>
                  <svg
                    className="fill-[#4B5563] group-hover:fill-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                  </svg>
                </div>
                <div className="flex items-end justify-between lg:h-[50%] lg:pt-20 pt-28 lg:pl-[32px]   sm:pl-6 lg:pr-[32px] pr-[47px]  lg:pb-4 pb-6 cursor-pointer  text-zinc-600 hover:bg-black hover:text-white group">
                  <h2 className="f-f-s text-[24px]   leading-[36px] ">
                    Send us <br />
                    an email
                  </h2>
                  <svg
                    className="fill-zinc-600 group-hover:fill-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                  </svg>
                </div>
              </div>
              <div className={`w-[50%] border border-zinc-200`}>
                <div className="flex items-end justify-between lg:h-[50%] lg:pt-20 pt-28  border-zinc-200  border-b-[1px] lg:pl-[32px]   sm:pl-6 lg:pr-[32px] pr-[47px]  lg:pb-4 pb-6 cursor-pointer  text-zinc-600 hover:bg-black hover:text-white group">
                  <h2 className="f-f-s text-[24px]   leading-[36px] ">
                    Speak on <br />
                    the phone
                  </h2>
                  <svg
                    className="fill-zinc-600 group-hover:fill-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                  </svg>
                </div>
                <div className="flex items-end justify-between lg:h-[50%] lg:pt-20 pt-28  lg:pl-[32px]   sm:pl-6 lg:pr-[32px] pr-[47px]  lg:pb-4 pb-6 cursor-pointer text-zinc-600 hover:bg-black hover:text-white group ">
                  <h2 className="f-f-s text-[24px]   leading-[36px]  ">
                    Know more <br />
                    about us
                  </h2>
                  <svg
                    className="fill-zinc-600 group-hover:fill-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="sm:hidden block">
              <div className="flex items-end justify-between lg:h-[50%] pt-44     md:px-6 px-[16px]   pb-6  border-zinc-200  border-b-[1px]  cursor-pointer text-zinc-600 hover:bg-black hover:text-white group ">
                <h2 className="f-f-s xl:text-[24px] sm:text-[20px] text-2xl xl:leading-[36px] leading-9 ">
                  Chat <br /> with us
                </h2>
                <svg
                  className="fill-zinc-600 group-hover:fill-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                </svg>
              </div>
              <div className="flex items-end justify-between lg:h-[50%] pt-44     md:px-6 px-[16px]    pb-6  border-zinc-200  border-b cursor-pointer  text-zinc-600 hover:bg-black hover:text-white group">
                <h2 className="f-f-s xl:text-[24px] sm:text-[20px] text-2xl xl:leading-[36px] leading-9 ">
                  Speak on <br />
                  the phone
                </h2>
                <svg
                  className="fill-zinc-600 group-hover:fill-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                </svg>
              </div>
              <div className="flex items-end justify-between lg:h-[50%]  pt-44    md:px-6 px-[16px]   pb-6 cursor-pointer  text-zinc-600 hover:bg-black hover:text-white group">
                <h2 className="f-f-s xl:text-[24px] sm:text-[20px] text-2xl xl:leading-[36px] leading-9 ">
                  Send us <br />
                  an email
                </h2>
                <svg
                  className="fill-zinc-600 group-hover:fill-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                </svg>
              </div>
              <div className="border-zinc-200  border-y flex items-end justify-between lg:h-[50%]  pt-44     md:px-6 px-[16px]    pb-6 cursor-pointer text-zinc-600 hover:bg-black hover:text-white group ">
                <h2 className="f-f-s xl:text-[24px] sm:text-[20px] text-2xl xl:leading-[36px] leading-9  ">
                  Know more <br />
                  about us
                </h2>
                <svg
                  className="fill-zinc-600 group-hover:fill-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.9293 8.33935L17.1 8.16845V8.41003V14C17.1 14.4955 17.4959 14.9 18 14.9C18.4948 14.9 18.9 14.4948 18.9 14V6.00003C18.9 5.50526 18.4948 5.10003 18 5.10003H10C9.50524 5.10003 9.10001 5.50526 9.10001 6.00003C9.10001 6.4948 9.50524 6.90003 10 6.90003H15.59H15.8313L15.6608 7.07071L4.78075 17.9607L4.78072 17.9607C4.42977 18.3117 4.42977 18.8784 4.78072 19.2293C5.13166 19.5803 5.69832 19.5803 6.04927 19.2294C6.04928 19.2293 6.04929 19.2293 6.0493 19.2293L16.9293 8.33935Z" />
                </svg>
              </div>
            </div>
            <div className="lg:hidden block sm:py-8 py-6  sm:px-6 px-[16px]  border-zinc-200 border-b ">
              <h3 className=" pb-[32px] text-[16px] leading-[16px] text-zinc-800 f-f-i">
                Find Us:
              </h3>
              <div>
                <h3 className="text-[16px] leading-[16px] text-zinc-800 f-f-s font-medium ">
                  San Diego
                </h3>
                <p className="pt-[16px] text-[14px] leading-[21px] text-zinc-600 f-f-s font-medium">
                  4275 Executive Square, Suite 200 <br /> LA Jolla, CA 92037
                </p>
              </div>
              <div className="pt-[40px]">
                <h3 className="text-[16px] leading-[16px] text-zinc-800 f-f-s font-medium">
                  Islamabad
                </h3>
                <p className="pt-[24px] text-[14px] leading-[21px] text-zinc-600 f-f-s font-medium ">
                  Suite 301-305, Ground Floor, NSTP, NUST H-12, <br /> Islamabad
                </p>
                <p className="pt-[24px] text-[14px] leading-[21px] text-zinc-600 f-f-s font-medium">
                  2103, 21st Floor, One Constitution Avenue,
                  <br /> Islamabad
                </p>
              </div>
              <div className="pt-[48px] ">
                <h3 className="text-[16px] leading-[16px] text-zinc-800 f-f-i">
                  Follow Us:
                </h3>
                <div className="pt-6 flex space-x-[24px]">
                  <img src="../Images/dr.svg" className="cursor-pointer" />
                  <img src="../Images/ln.svg" className="cursor-pointer" />
                  <img src="../Images/fb.svg" className="cursor-pointer" />
                  <img src="../Images/in.svg" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto xl:max-w-[1284px] container">
            <div className="  sm:flex  justify-between items-center 2xl:px-0 xl:px-20   sm:px-6 px-[16px]   lg:py-12 sm:py-8 py-6 sm:space-y-0 space-y-6 ">
              <div className="md:space-x-[48px]  sm:space-x-[27px] space-x-[32px]  text-center ">
                <button className="text-[14px] leading-[16px] text-zinc-600 f-f-s font-medium">
                  Terms of Service
                </button>
                <button className="text-[14px] leading-[16px] text-zinc-600 f-f-s font-medium">
                  Privacy Policy
                </button>
              </div>
              <p className="text-[14px] leading-[16px] sm:text-left text-center text-zinc-600 f-f-s font-medium">
                © 2022 AlphaSquad. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 
