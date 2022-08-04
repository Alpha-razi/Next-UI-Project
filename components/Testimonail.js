import Link from "next/link";

export default function Testimonail() {
  const data = [
    {
      id: 1,
      heading: "“Clients saying this is the best-looking research platform”",
      desc: "AlphaSquad was very flexible with  us and moved quickly to make adjustments when we changed our project flow. I've received compliments from clients saying this is the best-looking research platform they've seen! I look forward to working with them again soon!",
      img: "/assets/images/Christopher-South.png",
      name: "Christopher South",
      desi: "Spot Trender",
      banpic: "/assets/images/spot-trender.svg",
    },
    {
      id: 2,
      heading: "“AlphaSquad did an amazing job.They over-delivered!”",
      desc: `"AlphaSquad did an amazing job. They over-delivered! Their communication was clear, they were honest and their feedback was amazing. AlphaSquad has my highest recommendation. Thank you very much. I am sure we will be working together in the future again :)"`,
      img: "/assets/images/Jens-Jakob.png",
      name: "Jens Jakob",
      desi: "Run Repeat",
      banpic: "/assets/images/run-repeat.png",
    },
    {
      id: 3,
      heading:
        "“Their quality of work and design skills are by far the best I've found”",
      desc: `"AlphaSquad is an excellent design team. Their quality of work and design skills are by far the best I've found. I'll happily be working with AlphaSquad again soon."`,
      img: "/assets/images/Amir-Irani.png",
      name: "Amir Irani",
      desi: "Spree Commerce",
      banpic: "/assets/images/spree.svg",
    },
    {
      id: 4,
      heading:
        "“The Alpha team is totally committed and goes the extra mile to get things done”",
      desc: `"The AlphaSquad team is totally committed and goes the extra mile to get things done. They have most talented developers I’ve come across in my tenure in the web business and I will continue to work with them in the future."`,
      img: "/assets/images/Benjamin.png",
      name: "Benjamin Lehrer",
      desi: "Tiny",
      banpic: "/assets/images/tiny.svg",
    },
  ];

  return (
    <>
      <div className="border-t border-zinc-200">
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`${
                item.id == 1 ? "lg:pt-20 sm:pt-10 pt-8" : "lg:pt-24 sm:pt-20 pt-16"
              } ${
                item.id == 4 ? "lg:pb-20 pb-12" : "pb-0"
              } mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4`}
            >
              <div className="flex lg:flex-row flex-col justify-between items-start lg:space-x-4 lg:space-y-0 space-x-0 space-y-4 lg:pb-8 sm:pb-4 pb-2">
                <div className="f-f-s font-medium lg:text-[40px] lg:leading-[52px] text-2xl leading-[31.2px] text-slate-800 lg:w-[515px] w-full">
                  {item.heading}
                </div>
                <div className="f-f-s font-normal lg:text-lg lg:leading-[27px] text-sm leading-[21px] text-slate-800 lg:w-[624px] w-full">
                  {item.desc}
                </div>
              </div>
              <hr className="w-full bg-zinc-500 " />
              <div className="flex justify-between items-center lg:pt-8 sm:pt-4 pt-2">
                <div className="flex justify-between items-center space-x-4">
                  <img src={item.img} />
                  <div>
                    <h5 className="f-f-s font-normal lg:text-base lg:leading-4 sm:text-sm sm:leading-[14px] text-xs leading-3 text-zinc-800">
                      {item.name}
                    </h5>
                    <p className="f-f-s font-normal lg:text-sm lg:leading-[14px] text-xs leading-3 text-zinc-600 pt-[7px]">
                      {item.desi}
                    </p>
                  </div>
                </div>
                <div>
                  <img src={item.banpic} className={`lg:w-auto ${item.id == 1?"sm:w-[82.86px] w-[82px]":item.id == 2?"sm:w-[130px] w-[94px]":item.id == 3?"sm:w-[116px] w-[72px]":"sm:w-[99px] w-[53px]"}`}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
