import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminGetAllUser } from "../../redux/actions/adminUserActions";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { adminUser, loading, error } = useSelector((state) => state.adminUser);

  useEffect(() => {
    dispatch(adminGetAllUser({ hell: "hello" }));
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div>
        {loading ? <p>Loading....</p> : ""}
        {error && <p>{error}</p>}
        {!loading && (
          <table className="table w-3/5 mx-auto bg-white ">
            <thead className="text-left">
              <h1>Admin Dashboard</h1>
              <tr>
                <th className="table-head">#</th>
                <th className="table-head">Name</th>
                <th className="table-head">Email</th>
                <th className="table-head">User Type</th>
                <th className="table-head">Sign Up Date</th>
                <th className="table-head">Actions</th>
              </tr>
            </thead>

            <tbody>
              {adminUser.map((userList, index) => {
                return (
                  <tr key={userList._id} className="hover:bg-gray-100">
                    <td className="table-data">{index + 1}</td>
                    <td className="table-data">
                      {userList.userName}{" "}
                      {userList.email === user.email && "(You)"}
                    </td>
                    <td className="table-data">{userList.email}</td>
                    <td className="table-data">
                      <span
                        className={`${
                          userList.userType === "admin"
                            ? "bg-red-300"
                            : "bg-green-300"
                        } px-2 py-1 rounded`}
                      >
                        {userList.userType}
                      </span>
                    </td>
                    <td className="table-data">
                      {formatDistanceToNow(new Date(userList.createdAt), {
                        addSuffix: true,
                      })}
                    </td>
                    <td className="table-data">
                      <button className="mr-4 table-button">
                        <AiOutlineEdit />
                      </button>
                      <button className="table-button">
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
