import { useState } from "react";
import { FaArrowAltCircleRight, FaHome } from "react-icons/fa";

import { Link } from "react-router";

const DashboardSidebar = () => {
  const [active, setActive] = useState("/dashboard");
  const [role, setRole] = useState("admin");

  return (
    <div className="">
      <h4 className="py-4 border-b border-gray-300 text-[18px] text-[#0537ce] lg:font-bold">
        Dashboard Menu
      </h4>
      {/* For design */}
      <button onClick={() => setRole("buyer")}>
        {role ? "buyer" : "admin"}
      </button>
      <ul className="flex flex-col py-5">
        <li className="p-2">
          <Link
            onClick={() => setActive("/dashboard")}
            className={`flex items-center justify-between ${active === "/dashboard" && "text-[#0537ce]"}`}
            to={"/dashboard"}
          >
            <div className="flex items-center gap-3">
              <FaHome />
              <span>Home</span>
            </div>
            <div>
              <FaArrowAltCircleRight />
            </div>
          </Link>
        </li>
        {role === "admin" && (
          <li className="p-2">
            <Link
              onClick={() => setActive("/dashboard/myProduct")}
              className={`flex items-center justify-between ${active === "/dashboard/myProduct" && "text-[#0537ce]"}`}
              to={"myProduct"}
            >
              <div className="flex items-center gap-3">
                <FaHome />
                <span>My Product</span>
              </div>
              <div>
                <FaArrowAltCircleRight />
              </div>
            </Link>
          </li>
        )}

        {role === "admin" && (
          <li className="p-2">
            <Link
              onClick={() => setActive("/dashboard/addProduct")}
              className={`flex items-center justify-between ${active === "/dashboard/addProduct" && "text-[#0537ce]"}`}
              to={"addProduct"}
            >
              <div className="flex items-center gap-3">
                <FaHome />
                <span>Add Product</span>
              </div>
              <div>
                <FaArrowAltCircleRight />
              </div>
            </Link>
          </li>
        )}

        {role === "buyer" && (
          <li className="p-2">
            <Link
              onClick={() => setActive("/dashboard/review")}
              className={`flex items-center justify-between ${active === "/dashboard/review" && "text-[#0537ce]"}`}
              to={"review"}
            >
              <div className="flex items-center gap-3">
                <FaHome />
                <span>Review</span>
              </div>
              <div>
                <FaArrowAltCircleRight />
              </div>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
