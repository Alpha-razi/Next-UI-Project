import Link from "next/link";

export default function HeroSectionProduct() {
  return (
    <>
      <div>
        <div className="lg:pt-[176px] lg:pb-20 sm:pt-[114px] sm:pb-[96px] pt-[124px] pb-16">
          <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
            <div className="">
              <h4 className="f-f-s font-bold lg:text-lg lg:leading-[18px] text-[20px] leading-[20px] text-zinc-800">
                Our Products
              </h4>
              <h1 className="f-f-s font-normal xl:text-[60px] xl:leading-[72px] sm:text-[48px] sm:leading-[62.8px] text-[30px] leading-[45px] text-zinc-800 max-w-[1084px] w-full relative z-10 mt-4 mb-0">
                <span className="aboutTextColor font-light">
                  We are here to slove your problems{" "}
                </span><br/>
                through products that will exceed your expectations and grow
                your business
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center item-start sm:space-y-0 space-y-4">
            <h3 className="f-f-s font-normal lg:text-[34px] lg:leading-[34px] sm:text-[30px] sm:leading-[36px] text-2xl leading-9 text-[#0B0D13]">Tailwind UI Kit</h3>
            <div className="flex justify-between items-center space-x-[6px] w-[130px]">
                <div className="f-f-s font-medium text-base leading-4 text-zinc-800 underline underline-offset-1">Visit Website</div>
                <img src="/assets/images/products/arrow.svg"/>
            </div>
           
        </div>
        <div className="bg-zinc-900 w-full lg:mt-6 sm:mt-8 mt-4 flex flex-col justify-center items-center rounded-xl">
           <img src="/assets/images/products/Tuik.png"/>
           {/* <h3 className="f-f-s font-medium lg:text-[36px] lg:leading-[54px] sm:text-lg sm:leading-[27px] tracking-[-0.02em] text-white lg:pt-20 sm:pt-10">Creating a Tailwind CSS based UI Kit  used by over 25,000 people.</h3>
            <img src="/assets/images/products/group.png" className="lg:pt-[51px] sm:pt-6 px-0.5 pb-1 w-full"/>  */}
         </div>
      </div>

      <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4 lg:mt-16 sm:mt-12 mt-8">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center item-start sm:space-y-0 space-y-4">
            <h3 className="f-f-s font-normal lg:text-[34px] lg:leading-[34px] sm:text-[30px] sm:leading-[36px] text-2xl leading-9 text-[#0B0D13]">Figit-Figma UI Plugin</h3>
            <div className="flex justify-between items-center space-x-[6px] w-[130px]">
                <div className="f-f-s font-medium text-base leading-4 text-zinc-800 underline underline-offset-1">Visit Website</div>
                <img src="/assets/images/products/arrow.svg"/>
            </div>
           
        </div>
        <div sty className="w-full lg:mt-6 sm:mt-8 mt-4 flex flex-col justify-center items-center rounded-xl">
             <img src="assets/images/products/figit.png"/>
           {/* <h3 className="f-f-s font-medium text-2xl leading-[36px] tracking-[-0.02em] text-white text-center pt-10 lg:max-w-[688px]">1000+ Figma auto-layout components, a unified design system, and countless blueprint patterns to supercharge your workflow </h3> */}
            
         </div>
      </div>

      <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4 lg:mt-16 sm:mt-12 mt-8 mb-20">
        <div className="flex sm:flex-row flex-col justify-between sm:items-center item-start sm:space-y-0 space-y-4">
            <h3 className="f-f-s font-normal lg:text-[34px] lg:leading-[34px] sm:text-[30px] sm:leading-[36px] text-2xl leading-9 text-[#0B0D13]">Blox -  VS Code snippets library</h3>
            <div className="flex justify-between items-center space-x-[6px] w-[130px]">
                <div className="f-f-s font-medium text-base leading-4 text-zinc-800 underline underline-offset-1">Visit Website</div>
                <img src="/assets/images/products/arrow.svg"/>
            </div>
           
        </div>
        <div sty className="bg-image w-full lg:mt-6 sm:mt-8 mt-4 flex flex-col justify-center items-center rounded-xl">
             <img src="assets/images/products/blox.png"/>
           {/* <h3 className="text-grad f-f-s font-bold text-[36px] leading-[43.2px] tracking-[-0.02em] text-white text-center pt-11 lg:max-w-[591px]">1500+ Premium Code Blocks for 
           Visual Studio Code</h3>
            <img src="/assets/images/products/vs.png" className="pt-11"/> */}
         </div>
      </div>
    </>
  );
}
