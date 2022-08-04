import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cursor from "./linkcursor/linkcursor";
import BCursor from "../components/cursor/cursor";
import useHover from "../utills/useHoverDuplicate";
import AnimateLink from "./AnimateLink/animateLink";

const Menu = ({ check, setCheck }) => {
  const router = useRouter();
  const [refArray, isHovered] = useHover(6);
 



  return (
    <div
      className={`bg-[#0B0D13] h-full min-h-screen fixed inset-0 z-20 w-full transition-all duration-6000 ease-in-out ${
        check ? `translate-x-0` : `translate-x-full`
      }`}
    >
      <div className="">
        <div className="mx-auto xl:max-w-[1284px] container  md:py-[31px] py-[26px] 2xl:px-0 xl:px-20 md:px-6 px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <a onClick={() => setCheck(false)}>
                <div>
                  <img
                    src="/assets/images/logo.png"
                    className="md:w-auto w-[135px]"
                  />
                </div>
              </a>
            </Link>
            <div onClick={() => setCheck(false)}>
              <div className="text-white cursor-pointer">
                <img src="/assets/images/menu/Frame.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0B0D13] xl:pt-16 md:pt-12 pt-0 mx-auto container xl:w-[1284px]  px-4 md:px-6 xl:px-20 2xl:px-0 sm:flex justify-between">
          <div className="xl:space-y-[56px] md:space-y-[36px] space-y-[10px] flex flex-col   ">
            <Link href="/">
              <a onClick={() => setCheck(false)}>
                <div
                  className={`text-left xl:text-[54px]  md:text-[40px] md:leading-[40px] text-[30px] leading-[48px]  xl:leading-[54px] f-f-s ${
                    router.pathname == "/" ? "text-zinc-50" : "text-zinc-400"
                  } hover:text-zinc-50 cursor-pointer`}
                 
                >
                  <AnimateLink ref={refArray[0]}>Home</AnimateLink>
                </div>
              </a>
            </Link>

            <Link href="/view-all-casestudies">
              <a onClick={() => setCheck(false)}>
                <div
                  className={`text-left  xl:text-[54px]  md:text-[40px] md:leading-[40px] text-[30px] leading-[48px]  xl:leading-[54px] f-f-s ${
                    router.pathname == "/view-all-casestudies"
                      ? "text-zinc-50"
                      : "text-zinc-400"
                  } hover:text-zinc-50 cursor-pointer`}
                 
                >
                  <AnimateLink ref={refArray[1]}>Work</AnimateLink>
                </div>
              </a>
            </Link>
            <Link href="/products">
              <a onClick={() => setCheck(false)}>
            <div className={`text-left  xl:text-[54px]  md:text-[40px] md:leading-[40px] text-[30px] leading-[48px]  xl:leading-[54px] f-f-s ${
                    router.pathname == "/products"
                      ? "text-zinc-50"
                      : "text-zinc-400"
                  } hover:text-zinc-50 cursor-pointer`}>
              <AnimateLink ref={refArray[2]}>Products</AnimateLink>
            </div>
            </a>
            </Link>
            <Link href="/aboutUs">
              <a onClick={() => setCheck(false)}>
            <div className={`text-left  xl:text-[54px]  md:text-[40px] md:leading-[40px] text-[30px] leading-[48px]  xl:leading-[54px] f-f-s ${
                    router.pathname == "/aboutUs"
                      ? "text-zinc-50"
                      : "text-zinc-400"
                  } hover:text-zinc-50 cursor-pointer`}>
              <AnimateLink ref={refArray[3]}>About</AnimateLink>
            </div>
            </a>
            </Link>
            <Link href="/contactUs">
              <a onClick={() => setCheck(false)}>
            <div className={`text-left xl:text-[54px]  md:text-[40px] md:leading-[40px] text-[30px] leading-[48px]  xl:leading-[54px] f-f-s ${
                    router.pathname == "/contactUs"
                      ? "text-zinc-50"
                      : "text-zinc-400"
                  } hover:text-zinc-50 cursor-pointer`}>
              <AnimateLink ref={refArray[4]}> Contact</AnimateLink>
            </div>
            </a>
            </Link>
            <Link href="/career">
              <a onClick={() => setCheck(false)}>
            <div className={`text-left  xl:text-[54px]  md:text-[40px] md:leading-[40px] text-[30px] leading-[48px]  xl:leading-[54px] f-f-s ${
                    router.pathname == "/career"
                      ? "text-zinc-50"
                      : "text-zinc-400"
                  } hover:text-zinc-50 cursor-pointer`}>
              <AnimateLink ref={refArray[5]}> Careers</AnimateLink>
            </div>
            </a>
            </Link>
          </div>
          <div className="sm:mt-0 mt-10">
            <h3 className=" pb-[33px] text-[16px] leading-[16px] text-zinc-50 f-f-i">
              Find Us:
            </h3>
            <div>
              <div>
                <h3 className="text-[16px] leading-[16px] text-zinc-50 f-f-s font-medium ">
                  San Diego
                </h3>
                <p className="pt-[16px] text-[14px] leading-[21px] text-zinc-400 f-f-s font-medium">
                  4275 Executive Square, Suite 200 <br /> LA Jolla, CA 92037
                </p>
              </div>
              <div className="md:pt-[40px] pt-[20px]">
                <h3 className="text-[16px] leading-[16px] text-zinc-50 f-f-s font-medium">
                  Islamabad
                </h3>
                <p className="pt-[24px] text-[14px] leading-[21px] text-zinc-400 f-f-s font-medium ">
                  Suite 301-305, Ground Floor, NSTP, NUST H-12, <br /> Islamabad
                </p>
                <p className="md:pt-[24px] pt-[16px] text-[14px] leading-[21px] text-zinc-400 f-f-s font-medium">
                  2103, 21st Floor, One Constitution Avenue,
                  <br /> Islamabad
                </p>
              </div>
              <div className="md:pt-[48px] pt-[24px] xl:pb-[101px] pb-[80px]">
                <h3 className="text-[16px] leading-[16px] text-zinc-50 f-f-i">
                  Follow Us:
                </h3>
                <div className="md:pt-[23px] pt-[16px] flex space-x-[25px]">
                  <img
                    src="../assets/images/menu/dr.svg"
                    className="cursor-pointer hover:scale-125"
                  />
                  <img
                    src="../assets/images/menu/ln.svg"
                    className="cursor-pointer hover:scale-125"
                  />
                  <img
                    src="../assets/images/menu/fb.svg"
                    className="cursor-pointer hover:scale-125"
                  />
                  <img
                    src="../assets/images/menu/in.svg"
                    className="cursor-pointer hover:scale-125"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cursor hover={isHovered} indexz={10} hide={'block'} fillColor={"#fff"}/>
      {/* <BCursor hover={isHovered} indexz={-1} hide={'none'}/> */}
    </div>
  );
};

export default Menu;
