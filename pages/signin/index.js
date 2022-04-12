import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/green.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" backdrop-blur-xl bg-white/30 w-full h-screen ">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="form-area w-[406px] h-[450px] bg-white rounded-[10px] pt-[120px] px-[40px]">
            <form action="" className="">
              <label htmlFor="" className="text-[#49B050] text-base font-bold">
                <span>Phone </span>
                <span className=" text-red-500">*</span>
              </label>
              <div className=" relative">
                <input
                  type="number"
                  name="phone"
                  className="block text-gray-500 outline-none border-b-[3px] border-[#b7d196] w-full mb-[35px] font-semibold text-base pl-[43px]"
                />
                <p className="absolute text-gray-500 font-semibold text-base top-0 left-0">
                  +880
                </p>
              </div>
              <label htmlFor="" className="text-[#49B050] text-base font-bold">
                <span>Password </span>
                <span className=" text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                className="block text-gray-500 outline-none border-b-[3px] border-[#b7d196] w-full mb-[20px]  font-semibold"
              />
              <Link href={`signup`} passHref>
                <div className="mb-[55px] text-right cursor-pointer">
                  <p className="text-[#72a431]">Dont have any account?</p>
                </div>
              </Link>
              <div className=" text-center">
                <button
                  type="submit"
                  className=" bg-[#49B050] text-white uppercase w-[150px] h-[38px] font-semibold rounded-[2px] "
                >
                  Login
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
