import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="pb-6 md:pb-7 lg:pb-8">
      <h4 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#0537ce] pb-1">
        {title}
      </h4>
      <p className="text-[14px] md:text-[16px] text-gray-500">{subTitle}</p>
    </div>
  );
};

export default SectionHeader;
