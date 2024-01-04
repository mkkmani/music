import { useState } from "react";
import Navbar from "../Navbar";
import "./index.css";

const LoginPage = () => {
  const [studentLogin, setStudentLogin] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsernameErr, setUsernameErr] = useState(false);
  const [showPasswordErr, setPasswordErr] = useState(false);

  const openStudentLoginForm = () => {
    setStudentLogin(true);
    setAdminLogin(false);
  };

  const openAdminLoginForm = () => {
    setAdminLogin(true);
    setStudentLogin(false);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async (e) => {
    e.preventDefault();
    setPasswordErr(false);
    setUsernameErr(false);

    if (username !== "" && password !== "") {
      if (studentLogin) {
        const api = "https://sssvmusic.onrender.com/studentLogin";
        const details = { username, password };
        const options = {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const response = await fetch(api, options);
          const data = await response.json();
          console.log("data from api l45", data);
        } catch (error) {
          console.error("error in data fetching", error);
        }
      } else if (adminLogin) {
        const api = "https://sssvmusic.onrender.com/admin-login";
        const details = { username, password };
        const options = {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const response = await fetch(api, options);
          const data = await response.json();
          console.log("data from api l45", data);
        } catch (error) {
          console.error("error in data fetching", error);
        }
      }
    } else {
      if (username === "" && password === "") {
        setPasswordErr(true);
        setUsernameErr(true);
      } else if (username === "") {
        setUsernameErr(true);
      } else if (password === "") {
        setPasswordErr(true);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="admin-student-btn-container">
          <button
            type="button"
            className={
              adminLogin
                ? "student-admin-btn active-login-btn"
                : "student-admin-btn"
            }
            onClick={openAdminLoginForm}
          >
            Admin login
          </button>
          <button
            type="button"
            className={
              studentLogin
                ? "student-admin-btn active-login-btn"
                : "student-admin-btn"
            }
            onClick={openStudentLoginForm}
          >
            Student login
          </button>
        </div>
        <div>
          {(studentLogin || adminLogin) && (
            <form className="login-form" onSubmit={onClickLogin}>
              <div className="label-input">
                <label className="login-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  type="text"
                  className="login-input"
                  placeholder="Enter mobile or email"
                  onChange={onChangeUsername}
                  value={username}
                  name="username"
                  id="username"
                />
                {showUsernameErr && (
                  <p className="err-msg">* username required</p>
                )}
              </div>
              <div className="label-input">
                <label className="login-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="login-input"
                  placeholder="Enter password"
                  onChange={onChangePassword}
                  value={password}
                  name="password"
                  id="password"
                />
                {showPasswordErr && (
                  <p className="err-msg">* password required</p>
                )}
              </div>
              <button className="login-form-btn" type="submit">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
