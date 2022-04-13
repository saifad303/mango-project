import React, { useState } from "react";
import { colourOptions } from "../data";
import Select from "react-select";

function Location() {
  const [options, setOptions] = useState(colourOptions);
  return (
    <div className="w-[400px] h-[500px] bg-white rounded-[10px] px-[40px] pt-[80px]">
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
          আপনার ডেলিভারি পয়েন্ট সিলেক্ট করুনঃ
        </p>
        <Select
          name="color"
          options={options}
          defaultValue={options[0]}
          classNamePrefix="select"
          className="mb-[30px]"
        />
        <p htmlFor="" className="mb-[20px]">
          🏠 হোম ডেলিভারিঃ
        </p>
        <div className="mb-[8px]">
          <input type="radio" name="home" />
          <span> হ্যাঁ</span>
        </div>
        <div>
          <input type="radio" name="home" />
          <span> না</span>
        </div>
      </div>
    </div>
  );
}

export default Location;
