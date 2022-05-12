import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SideMenu from "../components/sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addVendor } from '../service/api';
const AddUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [district, setDistrict] = useState('')
	const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
	const [password, setPassword] = useState('')
  const [vendorId, setVendorId] = useState('')

    const handleSubmit= async(e)=>{
        e.preventDefault();
        if(role=="admin"){
            console.log("hello admin")
        }else if (role=="vendor"){
           const response= await addVendor({name,email,password,role,district,vendorId});
            if (response.data.success==true){
             alert("Vendor Register Successfull")
             navigate("/home", { replace: true });
            }
        }
      
      };
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
       <SideMenu />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">Add User</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Admin Id:123</li>
              </ol>
              <div class="row justify-content-center">
                <div class="col-sm-8">
                  <div class="card mb-4">
                    <div class="card-header">Add User</div>
                    <div class="card-body">
                      <form onSubmit={handleSubmit} method="post">
                      <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the vendorId"
                            name="vendorId"
                            value={vendorId}
                            onChange={(e) => setVendorId(e.target.value)} required="true"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} required="true"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Enter the email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required="true"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required="true"
                          />
                        </div>
                        <div class="form-group">
                          <select
                            class="form-control"
                            aria-label="Default select example"
                            placeholder="Enter the role"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)} required="true"
                          >
                            <option value="admin">Admin</option>
                            <option value="vendor">Vendor</option>
                          </select>
                          {/* <input
                            type="text"
                            class="form-control"
                            placeholder="Password"
                          /> */}
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the district"
                            value={district}
                            name="district"
                            onChange={(e) => setDistrict(e.target.value)} required="true"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
