import Link from "next/link";

export default function HeroSectionContactUs() {
  return (
    <>
      <div className="border-b border-zinc-200 lg:block hidden">sm:
        <div className="">
          <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
            <div className="flex space-x-8 items-start">
                <div className="lg:pt-[256px] lg:pb-0 sm:pt-[194px] sm:pb-[144px] pt-[196px] pb-[182px] max-w-[513px] mr-[187px]">
                <h1 className="my-0 f-f-s font-normal xl:text-[56px] xl:leading-[72.8px] sm:text-[48px] sm:leading-[52.8px] text-[30px] leading-[33px] text-zinc-800 max-w-[1171px] w-full relative z-10">
                This right here is the start of something <span className="amazing">amazing</span>
                </h1>
                <h2 className="f-f-s font-normal text-2xl leading-6 text-zinc-600 mt-8">We’re glad you’re here</h2>

                <div className="flex justify-between items-start pt-24">
                    <div>
                          <h3 className="f-f-i font-normal text-base leading-4 text-zinc-800">Start a conversation</h3>
                          <p className="mt-6 f-f-s font-medium text-base leading-4 text-zinc-600">howdy@alphasquad.tech</p>
                          <p className="mt-4 f-f-s font-medium text-base leading-4 text-zinc-600">858-405-0249</p>
                    </div>
                    <div>
                         <h3 className="f-f-i font-normal text-base leading-4 text-zinc-800">Follow Us:</h3>
                         <div className="flex items-center space-x-6">
                            <img src="/assets/images/contact/dr.svg" className="mt-6"/>
                            <img src="/assets/images/contact/In.svg" className="mt-6"/>
                            <img src="/assets/images/contact/fb.svg" className="mt-6"/>
                            <img src="/assets/images/contact/in.svg" className="mt-6"/>
                         </div>
                    </div>
                   
                </div>
                </div>
                <div className="border-r border-zinc-200 min-h-[830px]"/>
                <div className="lg:pt-[256px] lg:pb-0 max-w-[515px]">
                    <h3 className="f-f-s font-normal sm:text-[20px] sm:leading-[20px] text-lg leading-[18px] text-zinc-900">Let’s get to it</h3>
                    <div className="mt-10">
						<input
							placeholder="Name"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="text-lg focus:outline-none leading-none text-zinc-500 border-zinc-300 border-b w-[515px] pb-4"
						/>
					</div>
                    <div className="mt-8">
						<input
							placeholder="Company"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="text-lg leading-[18px] focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-[515px] pb-4"
						/>
					</div>
                    <div className="mt-8">
						<input
							placeholder="Email"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="text-lg leading-[18px] focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-[515px] pb-4"
						/>
					</div>
                    <div className="mt-8">
						<input
							placeholder="Phone number"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="text-lg leading-[18px] focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-[515px] pb-4"
						/>
					</div>

                    <div className="mt-16">
                        <h4 className="f-f-s font-normal sm:text-[20px] sm:leading-[20px] text-lg leading-[18px] text-zinc-900">How can we help?</h4>
                        <div className="mt-8">
						<input
							placeholder="Let’s deep dive into your project..."
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="text-lg leading-[18px] focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-[515px] pb-4"
						/>
					</div>
                    </div>
                    
                    <div className="flex justify-end items-center">
                    <div className="w-[122px] rounded-3xl bg-zinc-800 flex space-x-[10px] items-center px-6 py-3 mt-8 mb-[27px] ">
                         <div className="f-f-s font-normal text-lg leading-[18px] text-white">Send</div>
                         <img src="/assets/images/contact/arrow-forward.png"/>
                    </div>
                    </div>
                    

                </div>
            </div>
          </div>
        </div>
      </div>
      {/* tab & mobile view */}
      <div className="border-b border-zinc-200 lg:hidden block">
        <div className="">
          <div className="mx-auto xl:max-w-[1284px] container  2xl:px-0 xl:px-20 md:px-6 px-4">
            <div className="flex flex-col sm:space-y-24 space-y-16 items-start">
                <div className="lg:pt-[256px] lg:pb-0 sm:pt-[114px]  pt-[80px]  max-w-[624px] w-full ">
                <h1 className="my-0 f-f-s font-normal xl:text-[56px] xl:leading-[72.8px] sm:text-[48px] sm:leading-[62.8px] text-[30px] leading-[39px] text-zinc-800 max-w-[1171px] w-full relative z-10">
                This right here is the<br/> start of something<br/> <span className="amazing">amazing</span>
                </h1>
                <h2 className="f-f-s font-normal sm:text-[20px] sm:leading-[20px] text-base text-zinc-600 sm:mt-6 mt-4">We’re glad you’re here</h2>

              
                </div>
                
                <div className="w-full">
                    <h3 className="f-f-s font-normal sm:text-[20px] leading-[20px] text-zinc-900">Let’s get to it</h3>
                    <div className="mt-10">
						<input
							placeholder="Name"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="sm:text-lg sm:focus:outline- text-base leading-4none leading-none text-zinc-500 border-zinc-300 border-b w-full pb-4"
						/>
					</div>
                    <div className="mt-8">
						<input
							placeholder="Company"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="sm:text-lg sm:leading-[18px] text-base leading-4 focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-full pb-4"
						/>
					</div>
                    <div className="mt-8">
						<input
							placeholder="Email"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="sm:text-lg sm:leading-[18px] text-base leading-4 focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-full pb-4"
						/>
					</div>
                    <div className="mt-8">
						<input
							placeholder="Phone number"
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="sm:text-lg sm:leading-[18px] text-base leading-4 focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-full pb-4"
						/>
					</div>

                    <div className="mt-16">
                        <h4 className="f-f-s font-normal sm:text-[20px] leading-[20px] text-zinc-900">How can we help?</h4>
                        <div className="mt-8">
						<input
							placeholder="Let’s deep dive into your project..."
							type="text"
							// onChange={(e) => setCompany(e.target.value)}
							required={true}
							className="sm:text-lg sm:leading-[18px] text-base leading-4 focus:outline-none f-f-s text-zinc-500 border-zinc-300 border-b w-full pb-4"
						/>
					</div>
                    </div>
                    
                    <div className="flex justify-end items-center">
                    <div className="sm:w-[122px] w-full rounded-3xl bg-zinc-800 flex space-x-[10px] justify-center items-center sm:px-6 py-3 px-[107px] mt-8  ">
                         <div className="f-f-s font-normal text-lg leading-[18px] text-white">Send</div>
                         <img src="/assets/images/contact/arrow-forward.png"/>
                    </div>
                    </div>
                    

                </div>
            </div>
            <div className="flex sm:flex-row flex-col justify-between items-start sm:space-y-0 space-y-8 sm:pt-24 pt-8 pb-6">
                    <div>
                          <h3 className="f-f-i font-normal text-base leading-4 text-zinc-800">Start a conversation</h3>
                          <p className="mt-6 f-f-s font-medium text-base leading-4 text-zinc-600">howdy@alphasquad.tech</p>
                          <p className="mt-4 f-f-s font-medium text-base leading-4 text-zinc-600">858-405-0249</p>
                    </div>
                    <div>
                         <h3 className="f-f-i font-normal text-base leading-4 text-zinc-800">Follow Us:</h3>
                         <div className="flex items-center space-x-6">
                            <img src="/assets/images/contact/dr.svg" className="mt-6"/>
                            <img src="/assets/images/contact/In.svg" className="mt-6"/>
                            <img src="/assets/images/contact/fb.svg" className="mt-6"/>
                            <img src="/assets/images/contact/in.svg" className="mt-6"/>
                         </div>
                    </div>
                   
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
