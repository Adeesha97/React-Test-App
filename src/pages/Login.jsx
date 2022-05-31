import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import TodoDashboard from "./TodoDashboard";

const Login = () => {
  const adminUser = {
    email: "admin@test.com",
    password: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  const LogOut = () => {
    console.log("logout");
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <TodoDashboard />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
