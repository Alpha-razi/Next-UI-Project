import Benefits from "./Benefits";
import Job from "./Job";
import Skills from "./Skills";

export default function JobResponsibilities() {
  return (
    <>
      <div className="bg-white ">
        <div className="xl:mx-0  sm:mx-6 mx-4 border-zinc-200 border-y lg:py-16 sm:pt-12 pt-8 ">
          <div className="lg:flex lg:justify-between 2xl:px-0 xl:px-20   xl:max-w-[1280px] mx-auto container ">
            <div>
              <Job />
              <Skills />
              <Benefits />
            </div>
            <div className="flex flex-col space-y-6 lg:py-0 sm:py-12 py-8 lg:border-none border-zinc-200 border-y">
              <div className="lg:flex flex-col grid lg:grid-cols-1 lg:grid-flow-row sm:grid-cols-6 sm:grid-flow-row grid-cols-2 grid-flow-row gap-y-6   ">
                <div className="space-y-[6px]">
                  <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                    Experience
                  </h2>
                  <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600">
                    Benefits
                  </h2>
                </div>
                <div className="space-y-[6px] sm:text-left text-right">
                  <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                    Job Type
                  </h2>
                  <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600">
                    Full Time
                  </h2>
                </div>
                <div className="space-y-[6px]">
                  <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                    Vacancies
                  </h2>
                  <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600">
                    1 Post
                  </h2>
                </div>
                <div className="space-y-[6px] sm:text-left text-right">
                  <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                    Salary
                  </h2>
                  <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600">
                    40k-60k
                  </h2>
                </div>

                <div className="space-y-[6px]">
                  <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                    Posted On
                  </h2>
                  <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600">
                    13-6-2022
                  </h2>
                </div>
                <div className="space-y-[6px] sm:text-left text-right">
                  <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                    Last Date
                  </h2>
                  <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600">
                    27-6-2022
                  </h2>
                </div>
              </div>
              <div className="space-y-[6px]  ">
                <h2 className=" text-sm  leading-[18.9px] font-semibold   f-f-s text-zinc-800">
                  Location
                </h2>
                <h2 className=" text-sm leading-[18.9px]  f-f-s text-zinc-600 ">
                  One Constitution Avenue, <br /> Islamabad
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
