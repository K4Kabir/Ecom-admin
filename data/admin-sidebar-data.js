import { Home, Users, Settings } from "lucide-react";

export const AdminSideBarData = [
  { id: 1, label: "User", icon: Home, link: "/admin/user-management" },
  { id: 2, label: "Category", icon: Users, link: "/admin/category-management" },
  {
    id: 3,
    label: "Products",
    icon: Settings,
    link: "/admin/product-management",
  },
];
