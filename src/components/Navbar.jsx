import logo from "../assets/image/logo.png";
import { Link, NavLink } from "react-router";
import { MdPhoneInTalk } from "react-icons/md";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const navManu = [
  {
    path: "/",
    display: "হোম",
  },
  {
    path: "/about-us",
    display: "আমাদের সম্পর্কে",
  },
  {
    path: "/services",
    display: "সেবা সমূহ",
  },
  {
    path: "/contact-us",
    display: "যোগাযোগ",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] px-5 md:px-13 lg:px-25 2xl:px-40 flex items-center justify-between bg-[#ffff] border-b border-gray-200 sticky top-0 left-0 z-50">
      {/* Logo */}
      <Link to={"/"}>
        <img className="h-[5vh] md:h-[6vh] lg:h-[7vh]" src={logo} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="lg:flex lg:items-center hidden lg:gap-6 2xl:gap-8">
        {navManu?.map((item, index) => (
          <li key={index}>
            <NavLink
              className={(navClass) =>
                navClass?.isActive ? "text-[#1953fb]" : "text-[#000000]"
              }
              to={item?.path}
            >
              {item?.display}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`absolute h-[92vh] lg:hidden bg-[#ffff] md:h-[91vh] flex flex-col items-center justify-center gap-5 md:gap-6 w-full top-[8vh] md:top-[9vh] duration-500 ${!open ? "-left-full" : "left-0"}`}
      >
        {navManu?.map((item, index) => (
          <li key={index}>
            <NavLink
              onClick={() => setOpen(!open)}
              className={(navClass) =>
                navClass?.isActive ? "text-[#1953fb]" : "text-[#000000]"
              }
              to={item?.path}
            >
              {item?.display}
            </NavLink>
          </li>
        ))}
        <li>
          <Link onClick={() => setOpen(!open)} to={"/contact-us"}>
            <button className="px-5 md:px-6 lg:px-7 2xl:px-8 py-2 md:py-2.5 lg:py-3 2xl:py-3.5 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
              অনলাইন আবেদন
            </button>
          </Link>
        </li>
      </ul>

      {/* Right Site Buttomn */}
      <div className="flex items-center justify-center">
        <div className="lg:flex lg:items-center hidden lg:gap-8 2xl:gap-10">
          <div className="flex items-center gap-3 cursor-pointer">
            <div>
              <MdPhoneInTalk className="text-[30px] text-[#000000]" />
            </div>
            <div>
              <h4 className="lg:font-medium 2xl:font-semibold text-[18px] text-[#000000]">
                ০১৫৮০-৩৮০৪৯৮
              </h4>
              <p className="text-[#1c3b8e] font-medium">সকাল ৯টা - সন্ধা ৭টা</p>
            </div>
          </div>
          <Link to={"/contact-us"}>
            <button className="px-5 md:px-6 lg:px-7 2xl:px-8 py-2 md:py-2.5 lg:py-3 2xl:py-3.5 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
              অনলাইন আবেদন
            </button>
          </Link>
        </div>

        {/* ManuBar */}
        <button
          className="text-[26px] md:text-[30px] lg:hidden text-[#000000]"
          onClick={() => setOpen(!open)}
        >
          {!open ? <IoMenu /> : <IoClose />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
