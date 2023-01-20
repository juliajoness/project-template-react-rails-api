import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login({ updateUser, user }) {
  const [userToLogin, updateUserLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const { username, password } = userToLogin;

  const handleLoginSubmit = (sythE) => {
    sythE.preventDefault();
    const user = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          navigate(`/users/${user.id}`);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.error)));
      }
    });
  };

  const handleLogOut = () => {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        console.log("log out");
        updateUser(null);
      }
    });
  };

  const handleOnChangeUserToLogin = (sythE) => {
    updateUserLoginInfo({
      ...userToLogin,
      [sythE.target.name]: sythE.target.value,
    });
  };

  return (
    <div className="page-login">
      <div className="ui centered grid container">
        <div className="ten wide column">
          <div className="ui fluid card">
            <div className="content">
              {user ? (
                <>
                  <h2> Welcome {user.username}!!! </h2>
                </>
              ) : (
                <div className="ui icon warning message">
                  <i className="lock icon"></i>
                  <div className="content">
                    <div className="header">Login failed!</div>
                    <p>You might have misspelled your username or password!</p>
                  </div>
                </div>
              )}
              <div className="ui form">
                <div className="field">
                  <label>User</label>
                  <input
                    onChange={handleOnChangeUserToLogin}
                    type="text"
                    name="username"
                    placeholder="User"
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    onChange={handleOnChangeUserToLogin}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  onClick={handleLoginSubmit}
                  className="ui primary labeled icon button"
                  type="submit"
                >
                  <i className="unlock alternate icon"></i>
                  Login
                </button>
                <button
                  onClick={handleLogOut}
                  className="ui primary labeled icon button"
                  type="submit"
                >
                  <i className="unlock alternate icon"></i>
                  Logout
                </button>
                <NavLink className="button" role="button" to="/signup">
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="hand point right outline"></i>
                    Signup
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
