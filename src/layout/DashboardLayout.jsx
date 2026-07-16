import { Outlet } from "react-router";
import DashboardNav from "../components/Dashboard/DashboardNav";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNav />
      <div className="flex justify-between">
        <div className="w-[20%] lg:h-[90vh] 2xl:h-[89vh] hidden lg:inline-block sticky lg:top-[10vh] 2xl:top-[11vh] right-0 bg-[#f5f7fd] px-5 md:px-13 lg:px-5">
          <DashboardSidebar />
        </div>
        <div className="w-full lg:w-[80%] p-5 md:p-13 lg:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
