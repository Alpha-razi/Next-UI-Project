import React, { useState } from "react";

const Data = [
  {
    id: 1,
    name: "Spot Trender",
    desc: "Christopher South",
    btn: "Read",
    textUI: "UI/UX",
    textVisual: "Visual Design",
    textProduct: "Product Development",
    textBranding: "Branding",
    image: "./images/ProfileImage.svg",
    Desc: "AlphaSquad was very flexible with  us and moved quickly to make adjustments when we changed our project flow. I've received compliments from clients saying this is the best-looking research platform they've seen! I look forward to working with them again soon!",
  },
  {
    id: 2,
    name: "RunRepeat",
    desc: "Jens Jakob",
    btn: "Read",
    textUI: "React",
    textVisual: "Visual Design",
    textProduct: "Product Development",
    textBranding: "Branding",
    image: "./images/ProfileImage.svg",
    Desc: "AlphaSquad was very flexible with  us and moved quickly to make adjustments when we changed our project flow. I've received compliments from clients saying this is the best-looking research platform they've seen! I look forward to working with them again soon!",
  },
  {
    id: 3,
    name: "Spree Commerce",
    desc: "Amir Irani",
    btn: "Read",
    textUI: "Angular",
    textVisual: "Visual Design",
    textProduct: "Product Development",
    textBranding: "Branding",
    image: "./images/ProfileImage.svg",
    Desc: "AlphaSquad was very flexible with  us and moved quickly to make adjustments when we changed our project flow. I've received compliments from clients saying this is the best-looking research platform they've seen! I look forward to working with them again soon!",
  },
  {
    id: 4,
    name: "Tiny Organics",
    desc: "Benjamin Lehrer",
    btn: "Read",
    textUI: "UI/UX",
    textVisual: "Visual Design",
    textProduct: "Product Development",
    textBranding: "Branding",
    image: "./images/ProfileImage.svg",
    Desc: "AlphaSquad was very flexible with  us and moved quickly to make adjustments when we changed our project flow. I've received compliments from clients saying this is the best-looking research platform they've seen! I look forward to working with them again soon!",
  },
  {
    id: 5,
    name: "The Information Network",
    desc: "Gene Foo",
    btn: "Read",
    textUI: "UI/UX",
    textVisual: "Visual Design",
    textProduct: "Product Development",
    textBranding: "Branding",
    image: "./images/ProfileImage.svg",
    Desc: "AlphaSquad was very flexible with  us and moved quickly to make adjustments when we changed our project flow. I've received compliments from clients saying this is the best-looking research platform they've seen! I look forward to working with them again soon!",
  },
];

const Table = () => {
  const [value, setValue] = useState(1);

  return (
    <>
      {Data?.map((item) => (
        <div
          key={item.id}
          className="border-t border-zinc-200 py-6"
        >
          <div className="mx-auto container xl:max-w-[1284px] px-4 md:px-6 xl:px-20 2xl:px-0">
            <table className="w-full">
              <tbody>
                <tr className="">
                  <td className=" text-xs md:text-base text-zinc-800 leading-4 f-f-i font-normal w-[40%] xl:w-[45%] 2xl:w-[40%]">
                    {item.name}
                  </td>
                  <td className="text-xs md:text-base text-zinc-800 leading-4 f-f-i font-normal text-left w-[40%]">
                    {item.desc}
                  </td>
                  <td className="text-end w-[10%] md:w-[20%]">
                    <button
                      onClick={() => setValue(item.id)}
                      className="text-xs md:text-base text-zinc-500 leading-4 f-f-i font-normal border-b border-zinc-500 hover:text-black hover:border-black"
                    >
                      {item.btn}
                    </button>
                  </td>
                </tr>
                {item?.id === value ? (
                  <tr>
                    <td className="pb-[20px] flex flex-col pt-[33px]">
                      <p className="text-xs md:text-sm text-zinc-500 leading-4 f-f-i font-normal pb-[17px]">
                        Services:
                      </p>
                      <div className="flex space-x-1 md:space-x-3">
                        <div className="text-[10px] md:text-sm text-zinc-800 leading-4 f-f-s font-normal border border-zinc-800 rounded-[20px] py-1 px-2 md:py-2 md:px-4">
                          {item.textUI}
                        </div>
                        <div className="text-[10px] md:text-sm text-zinc-800 leading-4 f-f-s font-normal border border-zinc-800 rounded-[20px] py-1 px-2 md:py-2 md:px-4">
                          {item.textVisual}
                        </div>
                      </div>
                      <div className="max-w-[124px] md:max-w-[182px] text-[10px] md:text-sm text-zinc-800 leading-4 f-f-s font-normal border border-zinc-800 rounded-[20px] py-1 px-2 md:py-2 md:px-4 my-4">
                        <p>{item.textProduct}</p>
                      </div>
                      <div className="max-w-[63px] md:max-w-[93px] text-[10px] md:text-sm text-zinc-800 leading-4 f-f-s font-normal border border-zinc-800 rounded-[20px] py-1 px-2 md:py-2 md:px-4">
                        {item.textBranding}
                      </div>
                    </td>
                    <td className="">
                      <img
                        className="w-[70px] md:w-[105px] pt-3 pb-4 "
                        src={item.image}
                        alt=""
                      />
                      <p className="max-w-[300px] md:max-w-[249px] text-[10px] md:text-sm text-zinc-800 leading-3 md:leading-5 f-f-i font-normal ">
                        {item.Desc}
                      </p>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default Table;
