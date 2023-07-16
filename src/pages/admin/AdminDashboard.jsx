import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { adminGetAllUser } from "../../redux/actions/adminUserActions";

// Extra things
import { AiOutlineUserAdd } from "react-icons/ai";
import SignUpToggle from "./components/SignUpToggle";
import UserTableData from "./components/UserTableData";

const AdminDashboard = () => {
  const [signUpOn, setSignUpOn] = useState(false);
  const dispatch = useDispatch();

  const { adminUser, loading, error } = useSelector((state) => state.adminUser);

  useEffect(() => {
    dispatch(adminGetAllUser({ hell: "hello" }));
  }, []);

  const toggleSignUp = () => {
    setSignUpOn(!signUpOn);
  };

  return (
    <div className="min-h-screen pt-20">
      {signUpOn && <SignUpToggle toggleSignUp={toggleSignUp} />}
      <div className="w-3/5 mx-auto my-2 flex justify-between">
        <h1>Admin Dashboard</h1>
        <button
          className="btn btn-blue flex items-center"
          onClick={toggleSignUp}
        >
          <AiOutlineUserAdd className="mr-2" /> New User
        </button>
      </div>
      {loading ? <p>Loading....</p> : ""}
      {error && <p>{error}</p>}
      {!loading && (
        <table className="table w-3/5 mx-auto bg-white ">
          <thead className="text-left">
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
                <UserTableData
                  key={userList._id}
                  userList={userList}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
