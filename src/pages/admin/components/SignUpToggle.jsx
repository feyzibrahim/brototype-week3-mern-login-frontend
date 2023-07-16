import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";

const SignUpToggle = ({ toggleSignUp }) => {
  const [name, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordA, setPasswordA] = useState("");

  const { loading, error } = useSelector((state) => state.adminUser);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-1/3">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold ">Create New User</h2>
          <button
            className="text-gray-800 text-2xl hover:text-gray-500"
            onClick={toggleSignUp}
          >
            <AiFillCloseCircle />
          </button>
        </div>

        {/* <form onSubmit={handleSubmit}> */}
        <form>
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
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="input-box-default"
              id="password"
              type="password"
              placeholder="Your Password Here"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="input-box-default"
              id="passwordA"
              type="password"
              placeholder="One More Time"
              required
              value={passwordA}
              onChange={(e) => setPasswordA(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-blue" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          {error && <p className="error-p-tag">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpToggle;
