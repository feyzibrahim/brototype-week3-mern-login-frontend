import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/actions/userActions";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordA, setPasswordA] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);

    // Create a preview URL for the selected file
    const previewURL = URL.createObjectURL(file);
    setPreviewPhoto(previewURL);
  };

  const { user, loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = name;
    const email = userEmail.toLowerCase();
    if (password != passwordA) {
      return;
    }

    let userCredentials = {
      email,
      password,
      userName,
    };

    // console.log(userCredentials);

    dispatch(signUpUser(userCredentials));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded mx-5 lg:mx-0 ">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="mb-4">
              <label className="form-label" htmlFor="profilePhoto">
                Profile Photo
              </label>
              <input
                className="input-box-default"
                id="profilePhoto"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              {previewPhoto && (
                <img
                  src={previewPhoto}
                  alt="Profile Preview"
                  className="mt-2 w-20 h-20 object-cover rounded-full"
                />
              )}
            </div>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="input-box-default"
              id="name"
              type="text"
              placeholder="Feyz Ibrahim"
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
              placeholder="faizibrahim@gmail.com"
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
              placeholder="Faiz@1234"
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
              placeholder="Faiz@1234"
              required
              value={passwordA}
              onChange={(e) => setPasswordA(e.target.value)}
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
