const OurSolutions = ({ Data }) => {
  return (
    <>
      {Data?.map((item, index) => (
        <div key={index} className="bg-white">
          <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-20 pb-8  lg:pb-20">
            <h3 className=" text-2xl sm:text-[30px] lg:text-[32px] text-zinc-800 sm:leading-[30px] lg:leading-8 f-f-s font-normal tracking-[-0.03em] pb-4 sm:pb-6">
              {item.title}
            </h3>
            {item.paragraph1 ? (
              <p
                className={`max-w-full lg:max-w-[624px] text-base sm:text-base text-zinc-600 leading-6 md:leading-6 f-f-s font-normal pb-6 sm:pb-8 lg:pb-20`}
              >
                {item.paragraph1}
              </p>
            ) : item.paragraph3 ? (
              <p
                className={`max-w-full lg:max-w-[837px] text-sm md:text-base text-zinc-600 leading-6 md:leading-6 f-f-s font-normal pb-6 sm:pb-8 lg:pb-20`}
              >
                {item.paragraph3}
              </p>
            ) : item.paragraph4 ? (
              <p
                className={`max-w-full lg:max-w-[733px] text-base sm:text-base text-zinc-600 leading-6 md:leading-6 f-f-s font-light`}
              >
                {item.paragraph4}
              </p>
            ) : item.paragraph6 ? (
              <p
                className={`max-w-full lg:max-w-[511px] text-base sm:text-base text-zinc-600 leading-6 md:leading-6 f-f-s font-light pb-8  sm:pb-8 lg:pb-20`}
              >
                {item.paragraph6}
              </p>
            ) : (
              ""
            )}
            {item.paragraph5 ? (
              <p className="max-w-full lg:max-w-[733px] text-base sm:text-base text-zinc-600 leading-6 md:leading-6 f-f-s font-normal pb-8 sm:pb-8 lg:pb-20">
                {item.paragraph5}
              </p>
            ) : (
              ""
            )}

            <div className="w-full bg-[#FFE8CB] rounded-xl px-[27px]  lg:px-[80px] py-4  sm:py-6 lg:py-20">
              {item.imageTitle ? (
                <h3 className="text-base sm:text-3xl lg:text-[32px] text-zinc-800 leading-6 md:leading-8 f-f-s font-normal tracking-[-0.03em] pb-[20px] sm:pb-6 lg:pb-8 ">
                  {item.imageTitle}
                </h3>
              ) : (
                ""
              )}
              <img className="w-full " src={item.imageUrl} alt="" />
            </div>
          </div>
          <div className="w-full border border-zinc-200"></div>
        </div>
      ))}
    </>
  );
};
export default OurSolutions;
