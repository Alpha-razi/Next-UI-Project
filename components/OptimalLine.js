export default function OptimalLine() {
  return (
    <>
      <div className="bg-white">
        <div className="lg:py-0  sm:py-12 py-8  ">
          <div className="flex lg:flex-row flex-col justify-between w-full  2xl:px-0 xl:px-20 md:px-6 sm:px-[60px] px-4  max-w-[1280px] mx-auto container">
            <div className="lg:w-[40%] flex  items-center border-zinc-200 lg:border-r 2xl:min-h-[694px] xl:min-h-[645px] lg:min-h-[592px]  ">
              <div className="sm:space-y-6 space-y-4 xl:w-[405px] lg:w-[335px] w-full lg:pb-0 pb-6  ">
                <h2 className=" lg:text-[32px] lg:leading-[38.4px] sm:text-[32px] tracking-[-3%] sm:leading-[32px] text-2xl leading-9 font-normal f-f-s text-zinc-800">
                  Optimal line Length
                </h2>
                <p className="text-base  f-f-s text-zinc-600 ">
                  Optimal line length to increase the readibility of the
                  articles is kept to 60-75 characters.
                </p>
              </div>
            </div>
            <div className="sm:rounded-xl rounded-md 2xl:ml-[110px] lg:ml-16 lg:w-[60%] xl:h-auto lg:h-1/2 bg-[#FFE8CB] flex justify-center items-center  lg:py-24 sm:py-8  py-[27px] lg:px-[87px] sm:px-4 px-[27px] lg:my-20  ">
              <img src="../assets/images/cs2/optimal.png" className="w-full" />
            </div>
          </div>
        </div>
        <div className="border-zinc-200 border-y lg:py-0 sm:py-12  py-8 xl:mx-0 md:mx-6 sm:mx-[60px] mx-4">
          <div className="flex lg:flex-row flex-col justify-between w-full  2xl:px-0 xl:px-20   max-w-[1280px] mx-auto container">
            <div className="lg:w-[42%]  flex  items-center border-zinc-200 lg:border-l lg:h-[694px] lg:pl-[32px] lg:hidden ">
              <div className=" sm:space-y-6  space-y-4  lg:pb-0 pb-6   ">
                <h2 className="lg:text-[32px] lg:leading-[38.4px] sm:text-[32px] tracking-[-3%] sm:leading-[32px] text-2xl leading-9 font-normal f-f-s text-zinc-800">
                  Static & Floating Share Buttons
                </h2>
                <p className="xl:w-[444px] lg:w-[393px] sm:w-full  text-base  f-f-s text-zinc-600 ">
                  We added static and floating share buttons to the inner
                  article page so that the reader would have an opportunity to
                  share their thoughts where ever they are on the page.
                </p>
              </div>
            </div>

            <div className=" bg-[#FFE8CB] lg:mr-[71px] xl:h-auto lg:h-1/2   lg:w-[58%] lg:my-20 flex justify-center items-center xl:py-24 sm:rounded-xl rounded-md sm:py-8 py-[27px] xl:px-[87px] sm:px-4 px-[27px]  ">
              <img src="../assets/images/cs2/static.png" className="w-full" />
            </div>

            <div className="lg:w-[42%] lg:flex  items-center border-zinc-200 lg:border-l 2xl:min-h-[694px] xl:min-h-[608px] lg:min-h-[592px] lg:pl-[32px] hidden  ">
              <div className=" 2xl:space-y-[24px] sm:space-y-[16px] space-y-[10px]    ">
                <h2 className=" sm:text-[32px] text-[28px] tracking-[-3%] leading-[38.4px] f-f-s text-zinc-800">
                  Static & Floating Share Buttons
                </h2>
                <p className="xl:w-[444px] lg:w-[385px] w-[444px] sm:text-base text-sm leading-6 f-f-s text-zinc-600 ">
                  We added static and floating share buttons to the inner
                  article page so that the reader would have an opportunity to
                  share their thoughts where ever they are on the page. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
