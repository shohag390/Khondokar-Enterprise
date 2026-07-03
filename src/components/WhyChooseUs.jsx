import React from "react";
import { BsStopwatchFill } from "react-icons/bs";
import { FaStopwatch20 } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";

const whyChooseUs = [
  {
    id: 1,
    title: "দ্রুত সেবা",
    description: "সময়মতো ও সম্পূর্ণ দ্রুত সেবা প্রদান।",
    icon: <FaStopwatch20 />,
  },
  {
    id: 2,
    title: "নির্ভরযোগ্য সেবা",
    description: "অভিজ্ঞ টিমের মাধ্যমে নির্ভরযোগ্য ডিজিটাল সে।",
    icon: <MdVerifiedUser />,
  },
  {
    id: 3,
    title: "স্বল্প খরচে সেবা",
    description: "সেরা মানের সেবা সাশ্রয়ী মূল্যে প্রদান।",
    icon: <BsStopwatchFill />,
  },
  {
    id: 4,
    title: "গোপনীয়তা নিশ্চিত",
    description: "আপনার সকল তথ্য সম্পূর্ণ নিরাপদ ও গোপন রাখা হয়।",
    icon: <VscVerifiedFilled />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-8 md:py-10 lg:py-12 px-5 md:px-13 lg:px-25 2xl:px-40 whyChooseUs">
      <div className="w-full md:w-[70%] lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 2xl:gap-6">
        {whyChooseUs?.map((item) => (
          <div key={item?.id} className="flex items-center justify-between">
            <div className="text-[60px] text-[#1953fb] w-[25%]">
              {item?.icon}
            </div>
            <div className="w-[75%]">
              <h4 className="text-[16px] lg:text-[18px] font-semibold lg:font-bold text-[#0537ce] pb-2">
                {item?.title}
              </h4>
              <p className="text-[14px] md:text-[16px] text-gray-500">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
