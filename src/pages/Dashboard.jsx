import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div>
        <h1 className="mb-8">Hello {user.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
