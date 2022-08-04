import Link from "next/link";

export default function HeroSectionCareer() {
  const Data = [
    {
      title: "Teamwork",
      para: "Our team comes together to push the envelope of design and technology to help companies achive lasting success.",
    },
    {
      title: "Innovation",
      para: "Digital Innovation lies at the heart of business success, which we use to reduce project risk, empower teams, and deliver measurable results.",
    },
    {
      title: "Creativity",
      para: "Alpha Squad’s innovation is driven by the unrelenting drive to go beyond boundaries and do something creative and unique.",
    },
  ];

  return (
    <>
      <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
        <h2 className="lg:max-w-[1011px] text-3xl sm:text-5xl leading-[45px] sm:leading-[62px] lg:text-[64px] lg:leading-[77px] text-zinc-800 font-normal f-f-s pt-[114px] lg:pt-[308px] pb-8 sm:pb-12 lg:pb-52">
          If you feel that we match together perfectly{" "}
          <span className="colorCareer">send us your CV & join our team</span>
        </h2>
        <div className="md:block lg:hidden w-full border border-zinc-200"></div>
        <h2 className="text-2xl sm:text-3xl leading-9 lg:text-[64px] sm:leading-9 lg:leading-[60px] text-zinc-800 font-normal f-f-s pt-8 sm:pt-12 pb-4 sm:pb-8 ">
          About Us
        </h2>

        <div className="flex flex-col lg:flex-row lg:pt-24">
          <div className="w-full lg:w-1/2 pb-8 sm:pb-12 lg:pb-0">
            <img
              className="w-full"
              src="./assets/images/Career/alphaImage.png"
              alt=""
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            {Data.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-2xl leading-[22px] sm:leading-6 text-zinc-800 font-normal f-f-s pb-4 sm:pb-6">
                  {item.title}
                </h3>
                <p className=" lg:max-w-[547px] text-base leading-6 text-zinc-600 font-normal f-f-s pb-6 sm:pb-8 lg:pb-16">
                  {item.para}
                </p>
              </div>
            ))}
            <div className="md:block lg:hidden w-full border border-zinc-200 mt-6 sm:mt-4 lg:mt-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
