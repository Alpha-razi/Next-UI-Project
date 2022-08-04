// import Table from "./Table";
import Testimonail from "./Testimonail";
const Client_Reviews = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto container xl:max-w-[1284px] lg:pt-20 sm:pt-[61px] pt-12 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 xl:px-20 2xl:px-0">
        <p className="lg:text-lg text-zinc-800 lg:leading-[18px] text-sm leading-[14px] f-f-s font-bold lg:pb-1 pb-[6px]">
          Client Reviews
        </p>
        <h1 className="max-w-[823px] text-2xl sm:text-[40px] lg:text-6xl text-zinc-800 leading-[28.8px] sm:leading-[48px] lg:leading-[72px] f-f-s font-normal">
          Not to gloat or anything but...
          <br />
          <span className="colorText">Let’s hear it from the real Gs.</span>
        </h1>
      </div>
      <div>
        <Testimonail />
      </div>
    </div>
  );
};
export default Client_Reviews;
