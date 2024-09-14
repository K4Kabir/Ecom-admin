import React from "react";
import { AdminSideBarData } from "@/data/admin-sidebar-data";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      {AdminSideBarData.map((d, index) => {
        return (
          <div className="flex items-center p-3 gap-3">
            <div className="w-2 h-2 bg bg-red-400 rounded-full"></div>
            <Link
              href={d.route}
              className="bg  h-9 flex items-center justify-start "
            >
              {d.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
