import React, { useState } from "react";
import { colourOptions } from "../data";
import Select from "react-select";

function ChooseMangoType() {
  const [options, setOptions] = useState(colourOptions);
  return (
    <div className="w-[400px] h-[500px] bg-white rounded-[10px] px-[40px] pt-[80px]">
      <div>
        <p htmlFor="" className="mb-[20px]">
          🥭 আপনার পছন্দের আমটি সিলেক্ট করুনঃ
        </p>
        <Select
          name="color"
          options={options}
          defaultValue={options[0]}
          classNamePrefix="select"
          className=" mb-[30px] bg-white"
        />
        <p htmlFor="" className="mb-[20px]">
          ⚖️ আমের পরিমান সিলেক্ট করুনঃ
        </p>
        <Select
          name="color"
          options={options}
          defaultValue={options[0]}
          classNamePrefix="select"
          className="mb-[30px]"
        />
        <p htmlFor="" className="mb-[20px]">
          🎁 আমের প্যাকেজিং সিলেক্ট করুনঃ
        </p>
        <Select
          name="color"
          options={options}
          defaultValue={options[0]}
          classNamePrefix="select"
          className="mb-[30px]"
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
        />
      </div>
    </div>
  );
}

export default ChooseMangoType;
