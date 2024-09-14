import AdminSidebar from "../_component/admin-sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="flex-[20%] bg bg bg-slate-200">
        <AdminSidebar />
      </div>
      <div className="flex-[80%]">{children}</div>
    </div>
  );
};

export default AdminLayout;
