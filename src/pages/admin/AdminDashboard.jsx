import React from "react";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div>
        <h1>Admin Here</h1>
        <h1 className="mb-8">Hello {user.userName}</h1>
        <h1 className="mb-8">User type: {user.userType}</h1>
      </div>
    </div>
  );
};

export default AdminDashboard;
