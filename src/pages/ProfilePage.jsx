import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="max-w-3xl mx-auto  p-6 flex flex-col justify-center h-screen">
      <div className="bg-white rounded shadow-lg p-20">
        <div className="flex items-center">
          <img
            src={user.profilePhotoUrl || "/default-profile-photo.png"}
            alt="Profile"
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-semibold">{user.userName}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">User Information</h2>
          <p>
            <span className="font-semibold">User Type:</span> {user.userType}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
