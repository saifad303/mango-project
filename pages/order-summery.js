import React from "react";

function OrderSummery() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/green.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="backdrop-blur-xl bg-white/30 w-full h-screen">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="form-area w-[600px] h-[600px] bg-white rounded-[10px] pt-[50px]">
            <div className=" text-center mb-[20px]">
              <h3 className=" text-green-800 font-bold">
                .:: এক নজরে অর্ডার বিবরন ::.
              </h3>
            </div>
            <div className=" leading-[30px] w-[80%] mx-auto">
              <p>নাম: </p>
              <p>মোবাইল নাম্বার: </p>
              <p>আম: </p>
              <p>আমের পরিমান: </p>
              <p>ঠিকানা: </p>
            </div>
            <table className="mt-[20px] border-[1px] border-green-400 mx-auto w-[80%]">
              <thead>
                <tr className="text-left border-b-[1px] border-b-green-400 leading-[40px]">
                  <th className="pl-[20px] ">PRODUCT</th>
                  <th className=" pl-[10%]">BILL (TAKA)</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className=" border-b-[1px] border-b-green-400 leading-[40px]">
                  <td className="pl-[20px] border-r-[1px] border-r-green-400 w-[50%]">
                    আমের টোটাল দাম
                  </td>
                  <td className=" text-center">2325 </td>
                </tr>
                <tr className="border-b-[1px] border-b-green-400 leading-[40px]">
                  <td className="pl-[20px] border-r-[1px] border-r-green-400">
                    প্যাকেজিং খরচ
                  </td>
                  <td className=" text-center">2325 </td>
                </tr>
                <tr className="border-b-[1px] border-b-green-400 leading-[40px]">
                  <td className="pl-[20px] border-r-[1px] border-r-green-400">
                    প্যাকেজিং খরচ
                  </td>
                  <td className=" text-center">2325 </td>
                </tr>
                <tr className="border-b-[1px] border-b-green-400 leading-[40px]">
                  <td className="pl-[20px] font-semibold border-r-[1px] border-r-green-400">
                    আপনার মোট বিলঃ
                  </td>
                  <td className=" font-semibold text-center">2325 </td>
                </tr>
              </tbody>
            </table>
            <div className=" text-right w-[80%] mx-auto flex items-center justify-between">
              <button className=" w-[160px] h-[38px] bg-[#49B050] text-white mt-[20px] rounded-[5px]">
                অর্ডার পরিবর্তন
              </button>
              <button className=" bg-white text-[#E2136E] mt-[20px] border-[1px] border-[#E2136E] rounded-[5px] flex items-center justify-center py-[6px] px-[5px]">
                <img
                  src="/img/bkash.svg"
                  className=" w-[28px] h-[23px]"
                  alt=""
                />
                <p>বিকাশ পেমেন্ট</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummery;
