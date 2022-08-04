import React,{useRef} from "react";
const Form = () => {
  const hiddenFileInput = useRef(null);

  const onSubmit = () => {
  };

  const handleClick = event => {
    event.preventDefault();
    hiddenFileInput.current.click();
};
const handleButton = (e) =>{
 e.preventDefault()
}

  return (
    <div className="mx-auto xl:max-w-[842px] 2xl:px-0 xl:px-20 md:px-6 px-4 pt-8 sm:pt-12 lg:pt-16 ">
      <h2 className=" text-2xl sm:text-xl lg:text-[28px] leading-6 sm:leading-5 lg:leading-[22px] text-zinc-800 sm:text-zinc-900 font-normal f-f-s  pb-9 lg:pb-10 ">
        Application form
      </h2>
      <form className="max-w-[842px]" onSubmit={onSubmit}>
        <div className="text-base sm:text-lg leading-4 sm:leading-[18px] text-zinc-500 font-normal f-f-s pb-9 lg:pb-8">
          <input
            className="w-full outline-none border-b border-zinc-300 pb-[18px] lg:pb-4"
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="text-base sm:text-lg leading-4 sm:leading-[18px] text-zinc-500 font-normal f-f-s pb-9 lg:pb-8">
          <input
            className="w-full outline-none border-b border-zinc-300 pb-[18px] lg:pb-4"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="text-base sm:text-lg leading-4 sm:leading-[18px] text-zinc-500 font-normal f-f-s pb-9 lg:pb-8">
          <input
            className="w-full outline-none border-b border-zinc-300 pb-[18px] lg:pb-4"
            type="number"
            placeholder="Phone Number"
          />
        </div>

        <div className="relative flex">
          <label className="text-base sm:text-lg leading-6 lg:leading-[18px] text-zinc-500 font-normal f-f-s pb-4 sm:pb-[18px] lg:pb-4">
            Resume
          </label>
          <img
            className="absolute left-[68px] sm:left-[75px] top-[2px] sm:top-1 lg:top-0"
            src="./assets/images/Career/question.svg"
            alt=""
          />
        </div>

        <div className="flex justify-center w-full bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-lg">
          <div className="flex py-8 space-x-1">
          <button onClick={handleClick}>
          <p className="underline text-[14px] text-[#0B0D13] leading-[18px] font-normal f-f-s">Upload a file</p> 
          </button>
          <p className="text-[14px] text-zinc-500 leading-[18px] font-normal f-f-s">or drag and drop here</p>
          </div>  
          <input
            ref={hiddenFileInput}
            style={{display:'none'}}
            className="w-full flex justify-center outline-none py-8 items-center"
            type="file"
          />
        </div>

        <div className="flex justify-end pt-12 sm:pt-12 lg:pt-[56px]  pb-8 sm:pb-12 lg:pb-16">
          <div className="w-full sm:w-[122px] flex justify-center sm:justify-between bg-zinc-800 rounded-3xl py-3 px-6 space-x-[10px] ">
            <button onClick={(e)=> {handleButton}} className="text-base sm:text-lg leading-4 sm:leading-[18px] text-white font-normal f-f-s">Send</button>
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.82525 3.341C9.15476 3.0115 9.68899 3.0115 10.0185 3.341L15.081 8.4035C15.4105 8.73301 15.4105 9.26724 15.081 9.59674L10.0185 14.6592C9.68899 14.9887 9.15476 14.9887 8.82525 14.6592C8.49575 14.3297 8.49575 13.7955 8.82525 13.466L13.2911 9.00012L8.82525 4.53424C8.49575 4.20474 8.49575 3.67051 8.82525 3.341Z"
                fill="#FAFAFA"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.67188 9.00012C2.67188 8.53413 3.04963 8.15637 3.51562 8.15637H13.7812C14.2472 8.15637 14.625 8.53413 14.625 9.00012C14.625 9.46611 14.2472 9.84387 13.7812 9.84387H3.51562C3.04963 9.84387 2.67188 9.46611 2.67188 9.00012Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
