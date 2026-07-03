import aboutImage from "../assets/image/about.png";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import WhatsappBtn from "../shared/WhatsappBtn";
import { Link } from "react-router";

const service = [
  "৫+ বছরের অভিজ্ঞতা",
  "১০০০০+ সফল সেবা",
  "দ্রুত ও নিরাপদ সেবা",
  "দক্ষ ও অভিজ্ঞ টিম",
];

const About = () => {
  return (
    <div className="py-8 md:py-10 lg:py-12 px-5 md:px-13 lg:px-25 2xl:px-40 flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-6 lg:gap-15 about">
      <div className="w-full lg:w-1/2">
        <span className="px-5 py-1 text-[14px] md:text-[16px] rounded-full bg-[#0537ce27] text-[#0537ce]">
          আমাদের সম্পর্কে!
        </span>
        <h2 className="text-[25px] md:text-[30px] lg:text-[35px] 2xl:text-[40px] font-medium md:font-semibold 2xl:font-bold py-3 lg:py-4">
          বিশ্বস্ত ডিজিটাল সেবার <br /> নির্ভরযোগ্য ঠিকানা
        </h2>
        <p className="text-[14px] md:text-[16px] text-justify text-gray-500 pb-3 lg:pb-4">
          আমরা দীর্ঘদিন ধরে কুষ্টিয়া ও আশেপাশের এলাকার মানুষকে অনলাইন আবেদন,
          প্রিন্টিং, ফটোকপি, স্ক্যানিং, ডিজাইন, লেমিনেশন ও বাইন্ডিংসহ বিভিন্ন
          ডিজিটাল সেবা দ্রুত, নির্ভুল এবং সাশ্রয়ী মূল্যে প্রদান করে আসছি।
          গ্রাহকের সন্তুষ্টিই আমাদের সর্বোচ্চ অগ্রাধিকার।
        </p>

        <ul className="flex flex-col gap-2">
          {service?.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <div>
                <IoCheckmarkDone className="text-[#1953fb]" />
              </div>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 md:gap-4 lg:gap-5 2xl:gap-6 pt-4 md:pt-5 lg:pt-8">
          <Link to={"/about-us"}>
            <button className="flex items-center gap-2 px-5 md:px-6 lg:px-7 2xl:px-8 py-2 md:py-2.5 lg:py-3 2xl:py-3.5 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full group">
              <span>আমাদের সম্পর্কে</span>
              <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
            </button>
          </Link>
          <WhatsappBtn />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
        <img className="h-80 md:h-130 lg:h-160" src={aboutImage} alt="Image" />
      </div>
    </div>
  );
};

export default About;
