"use client";

import React, { useState } from "react";
import { AdminSideBarData } from "@/data/admin-sidebar-data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      } min-h-screen`}
    >
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && <h2 className="text-xl font-bold">My App</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-gray-700"
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <nav>
        <ul>
          {AdminSideBarData.map((item) => (
            <li key={item.id}>
              <Link href={item.link} passHref>
                <div
                  className={`flex items-center p-4 hover:bg-gray-700 ${
                    pathname === item.link ? "bg-gray-700" : ""
                  }`}
                >
                  <item.icon size={24} />
                  {!isCollapsed && <span className="ml-4">{item.label}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
