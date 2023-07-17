import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateUser } from "../../../redux/actions/adminUserActions";

const UpdateToggle = ({ toggleUpdate, userList }) => {
  const [name, setName] = useState(userList.userName);
  const [userEmail, setEmail] = useState(userList.email);
  const [userType, setUserType] = useState(userList.userType);

  const { loading, error } = useSelector((state) => state.adminUser);

  const dispatch = useDispatch();

  // Update the user using redux
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        userId: userList._id,
        email: userEmail,
        userName: name,
        userType,
      })
    ).then(() => toggleUpdate());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-1/3">
        {/* Heading and new user button */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold ">Update User</h2>
          <button
            className="text-gray-800 text-2xl hover:text-gray-500"
            onClick={toggleUpdate}
          >
            <AiFillCloseCircle />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="input-box-default"
              id="name"
              type="text"
              placeholder="Your Name Here"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="input-box-default"
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="userType">
              User Type
            </label>
            <input
              className="input-box-default"
              id="userType"
              type="userType"
              placeholder="userType Here"
              required
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="btn btn-blue" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Update"}
            </button>
          </div>
          {error && <p className="error-p-tag">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateToggle;
