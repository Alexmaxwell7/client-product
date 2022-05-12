import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SideMenu from "../components/sidebar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { viewapprovedproduct } from "../service/api";
import Logo from '../assets/login.jpg';
const ViewProduct = () => {
  const navigate = useNavigate();
  const [record, SetRecord] = useState([]);
  useEffect(() => {
    loadProductDetails();
  }, []);

  const loadProductDetails = async () => {
    const response = await viewapprovedproduct();
    SetRecord(response.data);
  };
  console.log("recorddata",record);
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <SideMenu />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">View Approved Products</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Admin Id:123</li>
              </ol>
              <div class="row">
              <div class="col-sm-6">
              {record.map((item) => (
                 <div class="card  mb-4">
                    <img src={item.producttitle} class="card-img-top" alt="..." style={{width:'100px'}} />
                 <div class="card-body">
                 <h5 class="card-title">VendorId:&nbsp; &nbsp;&nbsp;{item.productimage}</h5>
                          <p class="card-text">{item.productdescription}</p>
                 </div>
               </div>
              ))}
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
