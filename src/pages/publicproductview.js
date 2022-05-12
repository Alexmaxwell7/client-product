import { useState, useEffect } from "react";
import './styles.css';
import { useNavigate, useParams } from "react-router-dom";
import { viewapprovedproduct } from "../service/api";
const PublicView = () => {
  const navigate = useNavigate();
  const [record, SetRecord] = useState([]);
  useEffect(() => {
    loadProductDetails();
  }, []);

  const loadProductDetails = async () => {
    const response = await viewapprovedproduct();
    SetRecord(response.data);
  };
  const login=()=>{
    navigate("/login", { replace: true });
  }
  console.log("record",record);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">E Commerce</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit" onClick={login}>
                            <i class="bi-cart-fill me-1"></i>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">New Arrivals</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Shop Now </p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                {record.map((item) => (
                 <div class="col mb-5">
                 <div class="card h-100">
                     <img class="card-img-top" src={item.producttitle} alt="..." />
                    
                     <div class="card-body p-4">
                         <div class="text-center">
                             <h5 class="fw-bolder">{item.productdescription}</h5>
                             <p class="text-center">{item.productprice}</p>
                         </div>
                     </div>
                 </div>
             </div>
              ))}
                   
                    
                   
                  
                    </div>
                    </div>
                    </section>
      {/* <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">View Products</h1>
              <div class="row">
              <div class="col-sm-6">
              {record.map((item) => (
                 <div class="card  mb-4">
                    <img src={item.producttitle} class="card-img-top" alt="..." style={{width:'100px'}} />
                 <div class="card-body">
                 <h5 class="card-title">{item.productimage}</h5>
                 <p class="card-text">{item.productdescription}</p>
                 </div>
               </div>
              ))}
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div> */}
    </div>
  );
};

export default PublicView;
