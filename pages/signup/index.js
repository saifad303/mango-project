import React from "react";
import Link from "next/link";

function Registration() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/green.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="backdrop-blur-xl bg-white/30 w-full h-screen ">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="form-area w-[406px] h-[450px] bg-white rounded-[10px] pt-[120px] px-[40px]">
            <form action="" className="">
              <label htmlFor="" className="text-[#49B050] text-base font-bold">
                <span>Name </span>
              </label>
              <input
                type="text"
                name="name"
                className=" text-base text-gray-500 font-semibold block outline-none border-b-[3px] border-[#b7d196] w-full mb-[35px]"
              />
              <label htmlFor="" className="text-[#49B050] text-base font-bold">
                <span>Phone </span>
                <span className=" text-red-500">*</span>
              </label>
              <div className=" relative">
                <input
                  type="number"
                  name="phone"
                  className="block text-gray-500 outline-none border-b-[3px] border-[#b7d196] w-full mb-[20px] font-semibold text-base pl-[43px]"
                />
                <p className="absolute text-gray-500 font-semibold text-base top-0 left-0">
                  +880
                </p>
              </div>
              <Link href={`signin`} passHref>
                <div className="mb-[55px] text-right cursor-pointer">
                  <p className="text-[#72a431]">Have an account?</p>
                </div>
              </Link>
              <div className=" text-center">
                <button
                  type="submit"
                  className=" bg-[#49B050] text-white uppercase w-[150px] h-[38px] font-semibold rounded-[2px]"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
