import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/reducers/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordA, setPasswordA] = useState("");
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const { user, loading, error } = useSelector((state) => state.user);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    let userCredentials = {
      email,
      password,
    };

    console.log(userCredentials);

    // dispatch(loginUser(userCredentials)).then((result) => {
    //   console.log(result);
    // });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded mx-5 lg:mx-0 ">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="input-box-default"
              id="name"
              type="text"
              placeholder="E.g. Feyz Ibrahim"
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
              placeholder="E.g. faizibrahim@gmail.com"
              required
              value={email}
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
              placeholder="E.g. Faiz@1234"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-blue" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <Link className="form-additional" to="/login">
              Already a member?
            </Link>
          </div>
          {error && <p className="error-p-tag">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
