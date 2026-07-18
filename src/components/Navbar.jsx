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
    path: "/all-product",
    display: "আমাদের পণ্য",
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
  const [user, setUser] = useState(false);
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
          {!user ? (
            <Link onClick={() => setOpen(!open)} to={"/login"}>
              <button className="px-8 md:px-10 py-2 md:py-3 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
                Sign In
              </button>
            </Link>
          ) : (
            <Link onClick={() => setOpen(!open)} to={"/dashboard"}>
              <button className="px-8 md:px-10 py-2 md:py-3 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
                Dashboard
              </button>
            </Link>
          )}
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
          {!user ? (
            <Link to={"/login"}>
              <button className="lg:px-12 2xl:px-14 lg:py-2 2xl:py-3 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
                Sign In
              </button>
            </Link>
          ) : (
            <Link to={"/dashboard"}>
              <button className="lg:px-12 2xl:px-14 lg:py-2 2xl:py-3 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
                Dashboard
              </button>
            </Link>
          )}
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
