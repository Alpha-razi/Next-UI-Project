import Link from "next/link";

export default function HeroSectionAboutUs() {
  return (
    <>
    <div className="border-b border-zinc-800">
      <div className="lg:pt-[336px] lg:pb-[240px] sm:pt-[194px] sm:pb-[144px] pt-[196px] pb-[182px]">
        <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
          <div className="">
            <h1 className="f-f-s font-normal xl:text-[60px] xl:leading-[66px] sm:text-[48px] sm:leading-[52.8px] text-[30px] leading-[33px] text-white max-w-[1171px] w-full relative z-10">
            Together, we define the innovation you need to win today — <span className="aboutTextColor font-light">& the vision you need to win tomorrow.</span> 
            </h1>
          </div>
        </div>
        </div>
        </div>
        {/* Our values */}
        <div className="border-b border-zinc-800">
            <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
               <h2 className="f-f-s font-normal lg:text-[60px] lg:leading-[60px] text-[30px] leading-[30px] text-zinc-50 lg:py-12 sm:py-8 py-6">Our Values</h2>
            </div>
        </div>
        <div className="border-b border-zinc-800">
            <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
                <div className="flex lg:flex-row flex-col justify-between items-center w-full">
                    <div className="lg:pt-0 lg:pb-0 sm:pt-14 sm:pb-14 pt-12 pb-8 lg:border-none border-b border-zinc-800">
                         <h2 className="f-f-s font-normal lg:text-[52px] lg:leading-[60px] text-2xl leading-6 text-zinc-50">Teamwork</h2>
                         <p className="f-f-s font-normal lg:text-lg lg:leading-[27px] text-base text-zinc-400 lg:mt-16 mt-4 lg:w-[314px] w-full">Our team comes together to push the envelope of design and technology to help companies achive lasting success.</p> 
                    </div>
                    <div className="border-r border-zinc-800 min-h-[654px] lg:block hidden"></div>
                    <div className="lg:pt-0 lg:pb-0 sm:pt-14 sm:pb-14 pt-8 pb-8 lg:border-none border-b border-zinc-800">
                         <h2 className="f-f-s font-normal lg:text-[52px] lg:leading-[60px] text-2xl leading-6 text-zinc-50">Innovation</h2>
                         <p className="f-f-s font-normal lg:text-lg lg:leading-[27px] text-base text-zinc-400 lg:mt-16 mt-4 lg:w-[314px] w-full">Digital Innovation lies at the heart of business success, which we use to reduce project risk, empower teams, and deliver measurable results.</p>
                    </div>
                    <div className="border-r border-zinc-800 min-h-[654px] lg:block hidden"></div>
                    <div className="lg:pt-0 lg:pb-0 sm:pt-14 sm:pb-24 pt-8 pb-24">
                        <h2 className="f-f-s font-normal lg:text-[52px] lg:leading-[60px] text-2xl leading-6 text-zinc-50">Creativity</h2>
                        <p className="f-f-s font-normal lg:text-lg lg:leading-[27px] text-base text-zinc-400 lg:mt-16 mt-4 lg:w-[314px] w-full">Alpha Squad’s innovation is driven by the unrelenting drive to go beyond boundaries and do something creative and unique.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Clients */}
        <div className="border-b border-zinc-800">
            <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
               <h2 className="f-f-s font-normal lg:text-[60px] lg:leading-[60px] text-[30px] leading-[30px] text-zinc-50 lg:py-12 sm:py-8 py-6">Our Clients</h2>
            </div>
        </div>
        <div className="border-b border-zinc-800 lg:pt-24 lg:pb-24 sm:pt-[58px] sm:pb-12 pt-14 pb-12">
            <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
                <div className="flex lg:flex-row flex-col lg:space-x-[182px] lg:space-y-0 space-x-0 sm:space-y-[111px] space-y-16 justify-center  items-center">
                    <div className="flex lg:flex-col sm:flex-row flex-col lg:space-y-[182px] lg:space-x-0 sm:space-y-0 sm:space-x-5 space-x-0 space-y-16 lg:justify-center justify-between items-center w-full">
                    <div className="flex justify-center items-center lg:w-full sm:w-[316px]"><img src="/assets/images/about/toyota.svg" className="max-w-[191px]" /></div>
                    <div className="flex justify-center items-center lg:w-full sm:w-[161px]"><img src="/assets/images/about/nys.svg" className="max-w-[161px]"/></div>
                    </div>
                    <div className="flex lg:flex-col sm:flex-row flex-col lg:space-y-[182px] lg:space-x-0 sm:space-y-0 sm:space-x-5 space-x-0 space-y-16 lg:justify-center justify-between items-center w-full">
                    <div className="flex justify-center items-center lg:w-full sm:w-[316px]"><img src="/assets/images/about/kribbz.svg" /></div>
                    <div className="flex justify-center items-center lg:w-full sm:w-[161px]"><img src="/assets/images/about/scte.svg" /></div>
                    </div>
                     
                    <div className="flex lg:flex-col sm:flex-row flex-col lg:space-y-[182px] lg:space-x-0 sm:space-y-0 sm:space-x-5 space-x-0 space-y-16 lg:justify-center justify-between items-center w-full">
                    <div className="flex justify-center items-center lg:w-auto sm:w-[316px]"><img src="/assets/images/about/ash.svg" className="max-w-[315px]"/></div>
                    <div className="flex justify-center items-center lg:w-full sm:w-[161px]"><img src="/assets/images/about/upland.svg" /></div>
                    </div> 

                    <div className="flex lg:flex-col sm:flex-row flex-col lg:space-y-[182px] lg:space-x-0 sm:space-y-0 sm:space-x-5 space-x-0 space-y-16 lg:justify-center justify-between items-center w-full">
                    <div className="flex justify-center items-center lg:w-full sm:w-[316px]"><img src="/assets/images/about/s.svg"/></div>
                    <div className="flex justify-center items-center lg:w-full sm:w-[161px]"><img src="/assets/images/about/gs1.svg"/></div>
                    </div>  
                    
                   
                </div>
            </div>
        </div> 

{/* 
        <div className="border-b border-zinc-800 py-24">
            <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
               
                   
                    <div className="flex lg:flex-row flex-col  sm:space-x-[182px] sm:space-y-0  lg:justify-center justify-between items-center w-full">
                    <div className="flex justify-center w-full lg:max-w-[192px]"><img src="/assets/images/about/toyota.svg"  /></div>
                    <div className="flex justify-center w-full lg:max-w-[136px]"><img src="/assets/images/about/kribbz.svg" /></div>
                    <div className="flex justify-center w-full lg:max-w-[316px]"><img src="/assets/images/about/ash.svg" /></div>
                    <div className="flex justify-center w-full lg:max-w-[88px]"><img src="/assets/images/about/s.svg"/></div>
                
                    </div>
                    <div className="flex lg:flex-row flex-col sm:space-x-[182px]  sm:space-y-0 lg:justify-center justify-between items-center w-full mt-[182px]">
                    <div className="flex justify-center w-full lg:max-w-[192px]"><img src="/assets/images/about/nys.svg" /></div>
                    <div className="flex justify-center w-full lg:max-w-[136px]"><img src="/assets/images/about/scte.svg" /></div>
                    <div className="flex justify-center w-full lg:max-w-[316px]"><img src="/assets/images/about/upland.svg" /></div>
                    <div className="flex justify-center w-full lg:max-w-[88px]"><img src="/assets/images/about/gs1.svg"/></div>
                    </div>
                    
                   
                
            </div>
        </div>  */}


    </>
  );
}
