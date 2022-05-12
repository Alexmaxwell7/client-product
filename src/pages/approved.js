import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SideMenu from "../components/sidebar";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import { getapprovedproduct,updateapproved } from '../service/api';
const ApprovedProduct = () => {
    const navigate = useNavigate();
    const [record,SetRecord]=useState([]);
    const [approved,Setupdate]=useState(true);
    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getapprovedproduct();
        SetRecord(response.data.msg);

    }
      const approvedproduct =async(id,vendorId,productimage,producttitle,productdescription,productprice)=>{
        const response= await updateapproved(id,{vendorId,productimage,producttitle,productdescription,productprice,approved})
        if (response.data.msg=="sucess"){
            alert("Vendor Update Successfull")
            navigate("/viewproduct", { replace: true });
           }
      }
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
       <SideMenu />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">Products For Approved</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Admin Id:123</li>
              </ol>
              <div class="row justify-content-center">
                <div class="col-sm-12">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                      <th scope="col">Vendor ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Discription</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.map((item) => (
                        <tr key={item._id}>
                          <td>{item.vendorId}</td>
                          <td><img src={item.productimage} class="card-img-top" alt="..." style={{width:'100px'}} /></td>
                          <td>{item.producttitle}</td>
                          <td>{item.productdescription}</td>
                          <td>
                          <button type="button" class="btn btn-success" onClick={()=>approvedproduct(item._id,item.approved,item.vendorId,
                          item.productimage,item.producttitle,item.productdescription,item.productprice
                            )}>Approved</button>
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

export default ApprovedProduct;
