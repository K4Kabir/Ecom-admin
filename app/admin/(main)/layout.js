import AdminSidebar from "../_component/admin-sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default AdminLayout;
