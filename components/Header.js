import Link from "next/link";
import { useRouter } from "next/router";
import React,{useState} from "react";
import Menu from "./Menu";

export default function Header() {
  const router = useRouter();
  const [check , setCheck] = useState(false)
  // console.log(router.pathname);
  return (
    <>
      {router.pathname == "/" || router.pathname == "/view-all-casestudies" || router.pathname == "/aboutUs"  ? <div className="bg-header fixed top-0 left-0  z-20 w-full">
        <div className="mx-auto xl:max-w-[1284px] container  lg:py-[31px] sm:py-6 py-[19.46px] 2xl:px-0 xl:px-20 md:px-6 px-4">
          <div className="flex justify-between items-center">
            <Link href="/"><a>
            <div>
              <img
                src="/assets/images/logo.png"
                className="lg:w-auto w-[131px]"
              />
            </div>
            </a></Link>
            <div >
              {
                check === false ?
                <div onClick={()=> setCheck(true)} className="cursor-pointer">
                   <img src="/assets/images/menu.svg" />
                </div>
                :
                <div onClick={()=>setCheck(false)} className="text-white cursor-pointer">
                  <img src="/assets/images/menu/Frame.svg" />
                </div>
              }
              
            </div>
          </div>
        </div>
      </div>:
       <div className={`${check == true ? "bg-header" : "bg-casestudy-header "} fixed top-0 left-0 z-20 w-full`}>
        <div className="mx-auto xl:max-w-[1284px] container  lg:py-[31px] sm:py-6 py-[19.46px] 2xl:px-0 xl:px-20 md:px-6 px-4">
          <div className="flex justify-between items-center">
           {check == true ? (<Link href="/"><a>
            <div>
              <img
                src="/assets/images/logo.png"
                className="md:w-auto w-[135px]"
              />
            </div>
            </a></Link>): check == false ? (<Link href="/"><a>
            <div>
              <img
                src="/assets/images/cs1/logo.svg"
                className="md:w-auto w-[135px]"
              />
            </div>
            </a></Link>): <></>

           }

          
            <div>
              {
                check === false ?
                <div onClick={()=> setCheck(true)} className="cursor-pointer">
                   <img src="/assets/images/cs1/menu.svg" />
                </div>
                :
                <div onClick={()=>setCheck(false)} className="text-white cursor-pointer">
                  <img src="/assets/images/menu/Frame.svg" />
                </div>
              }
              
            </div>
          </div>
        </div>
      </div>}
      {
        check === true ?
        <Menu check={check} setCheck={setCheck}/>
        :
        ""
      }

    </>
  );
}
