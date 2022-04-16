import React, { useState } from "react";
import { colourOptions } from "../data";
import Select from "react-select";

function Location() {
  const [options, setOptions] = useState(colourOptions);
  const [isHomeDeliver, setIsHomeDeliver] = useState(null);
  const homeDeliveryHandler = (bool) => {
    // console.log(bool);
    setIsHomeDeliver(bool);
  };
  return (
    <div className="w-[400px] h-[600px] bg-white rounded-[10px] px-[40px] pt-[40px] ">
      <div>
        <p htmlFor="" className="">
          🏠 হোম ডেলিভারি
        </p>
        <p className="mb-[20px] pl-[22px]">
          {"(শুধুমাত্র চট্টগ্রাম শহরের জন্য)"}
        </p>
        <div className="mb-[8px] flex items-center space-x-2">
          <input
            type="radio"
            name="home"
            onChange={() => homeDeliveryHandler(true)}
            className="w-[20px] h-[20px]"
          />
          <span> হ্যাঁ</span>
        </div>
        <div className=" mb-[30px] flex items-center space-x-2">
          {isHomeDeliver ? (
            <input
              type="radio"
              name="home"
              onChange={() => homeDeliveryHandler(false)}
              className="w-[20px] h-[20px]"
            />
          ) : (
            <input
              type="radio"
              name="home"
              onChange={() => homeDeliveryHandler(false)}
              className="w-[20px] h-[20px]"
              checked
            />
          )}

          <span> না</span>
        </div>

        {isHomeDeliver ? (
          <div>
            <p htmlFor="" className="mb-[20px]">
              ঠিকানা প্রদান করুনঃ
            </p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="border-[1px] border-[#42ce42] outline-none p-[20px] rounded-[10px] w-[100%]"
            ></textarea>
          </div>
        ) : (
          <div>
            <p htmlFor="" className="mb-[20px]">
              আপনার জেলা সিলেক্ট করুনঃ
            </p>
            <Select
              name="color"
              options={options}
              defaultValue={options[0]}
              classNamePrefix="select"
              className=" mb-[30px] bg-white"
            />
            <p htmlFor="" className="mb-[20px]">
              আপনার পছন্দের কুরিয়ার সার্ভিস নির্বাচন করুনঃ
            </p>
            <Select
              name="color"
              options={options}
              defaultValue={options[0]}
              classNamePrefix="select"
              className="mb-[20px]"
            />
            <p htmlFor="" className="mb-[20px]">
              কুরিয়ার পয়েন্ট নির্বাচন করুনঃ
            </p>
            <Select
              name="color"
              options={options}
              defaultValue={options[0]}
              classNamePrefix="select"
              className="mb-[20px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Location;
