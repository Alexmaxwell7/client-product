import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SideMenu from "../components/sidebar";
import { useNavigate,Link } from "react-router-dom";
import { getAllvendors, deleteVendor } from "../service/api";

const ViewUsers = () => {
  const navigate = useNavigate();
  const [vendordetails, setVendorDetails] = useState([]);


  const getallvendors = async () => {
    const response = await getAllvendors();
    setVendorDetails(response.data);
  };
  useEffect(() => {
    getallvendors();
  }, []);

  const deletevendor = async (id) => {
    console.log("idwas", id);
    await deleteVendor(id);
    getallvendors();
  };

  return (
    <div>
      <Navbar/>
      <div id="layoutSidenav">
        <SideMenu/>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">View Users</h1>
              <div class="row justify-content-center">
                <div class="col-sm-12">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">District</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendordetails.map((item) => (
                        <tr key={item._id}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.role}</td>
                          <td>{item.district}</td>
                          <td>
                            <Link to={`/edit/${item._id}`}><button type="button" class="btn btn-success">Edit</button></Link>
                          &nbsp;&nbsp;
                          <button type="button" class="btn btn-danger" onClick={() => deletevendor(item._id)}>delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
