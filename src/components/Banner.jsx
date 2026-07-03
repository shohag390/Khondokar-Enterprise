import bannerImage from "../assets/image/bannerImage.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "motion/react";
import WhatsappBtn from "../shared/WhatsappBtn";

const Banner = () => {
  return (
    <div className="h-full lg:h-[90vh] 2xl:h-[89vh] py-10 md:py-12 lg:py-0 px-5 md:px-13 lg:px-25 2xl:px-40 flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-6 lg:gap-15 banner">
      <div className="w-full lg:w-1/2">
        <span className="px-5 py-1 text-[14px] md:text-[16px] rounded-full bg-[#0537ce27] text-[#0537ce]">
          বিশ্বস্ত সেবা - দ্রুত প্রসেস - নির্ভরযোগ্য সমাধান
        </span>
        <h1 className="text-[25px] md:text-[30px] lg:text-[35px] 2xl:text-[40px] font-medium md:font-semibold 2xl:font-bold py-3 lg:py-4">
          সব ধরনের <span className="text-[#0537ce]">অনলাইন আবেদন</span>, <br />{" "}
          <span>প্রিন্টিং</span> ও{" "}
          <span className="text-[#e98400]">ডিজিটাল সেবা</span>{" "}
        </h1>
        <p className="text-[14px] md:text-[16px] text-gray-500">
          অনলাইন এর সকল ধরনের আবেদন, ফটোকপি, প্রিন্ট, স্ক্যান, ডিজাইন ও অন্যান্য
          সেবা এখন এক জায়গায়।
        </p>
        <div className="flex items-center gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pt-4 md:pt-5 lg:pt-8">
          <Link to={"/services"}>
            <button className="flex items-center gap-2 px-5 md:px-6 lg:px-7 2xl:px-8 py-2 md:py-2.5 lg:py-3 2xl:py-3.5 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full group">
              <span>সেবা সমূহ দেখুন</span>
              <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
            </button>
          </Link>
          <WhatsappBtn />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <motion.img
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-full"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
