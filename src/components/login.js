import { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setuserName] = useState('')
	const [password, setPassword] = useState('')
    const loginUser = async(e) => {
        e.preventDefault();
        const response= await axios.post("http://localhost:5000/login",{username,password});
        const data = await response.data
      if (data.token) {
          localStorage.setItem('token', data.token)
          alert('Admin Login successful')
          window.location.href = '/home'
      } else {
          alert(data.msg)
      }
    }
  return (
    <div className="maincontainer">
      <div class="container-fluid">
        <div class="row no-gutter">
          <div class="col-md-6 d-none d-md-flex bg-image"></div>

          <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-10 col-xl-7 mx-auto">
                    <h3 class="display-4">E-commerce-Admin</h3>
                    <form onSubmit={loginUser} method="post">
                      <div class="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          autofocus=""
                          class="form-control rounded-pill border-0 shadow-sm px-4"
                          name="username"
                          value={username}
                          onChange={(e) => setuserName(e.target.value)} 
                          required="true"
                        />
                      </div>
                      <div class="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)} 
                          value={password}
                          required="true"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                      >
                        Sign in
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                        onClick={()=>window.location.href = '/vendorlogin'}
                      >
                        Vendor Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
