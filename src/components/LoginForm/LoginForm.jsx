import React from "react";
import './LoginForm.scss';

export const LoginForm = () => {
  const onSubmit = () => {}

  return (
    <div className="login_box">
      <h2>Login</h2>
      <form action="" onSubmit={onSubmit}>
        <div className="user_box">
          <input id="user_name" type="text" name="" required/>
          <label htmlFor="user_name">Username</label>
        </div>
        <div className="user_box">
          <input id="user_password" type="password" name="" required/>
          <label htmlFor="user_password">Password</label>
        </div>
        <a href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};
