import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import logo from "../../assets/image/logo.png";

const DashboardNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] px-5 md:px-13 lg:px-5 flex items-center justify-between bg-[#ffff] border-b border-gray-200 sticky top-0 left-0 z-50">
      {/* Logo */}
      <Link to={"/"}>
        <img className="h-[5vh] md:h-[6vh] lg:h-[7vh]" src={logo} alt="Logo" />
      </Link>

      {/* Mobile Menu */}
      <ul
        className={`absolute h-[92vh] lg:hidden bg-[#ffff] md:h-[91vh] flex flex-col items-center justify-center gap-5 md:gap-6 w-full top-[8vh] md:top-[9vh] duration-500 ${!open ? "-left-full" : "left-0"}`}
      >
        <li>
          <NavLink onClick={() => setOpen(!open)} to={"/dashboard"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(!open)} to={"addProduct"}>
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(!open)} to={"myProduct"}>
            My Product
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(!open)} to={"review"}>
            Review
          </NavLink>
        </li>
        <li>
          <button className="px-8 md:px-10 py-2 md:py-3 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full">
            Log Out
          </button>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center">
        <button className="lg:px-12 2xl:px-14 lg:py-2 2xl:py-3 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full hidden lg:inline-block">
          Logout
        </button>
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

export default DashboardNav;
