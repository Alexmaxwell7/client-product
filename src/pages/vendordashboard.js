import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { useNavigate,useLocation } from "react-router-dom";
import { getvendorposted,addproduct} from '../service/api';
import Logo from '../assets/login.jpg';
import FileBase64 from 'react-file-base64';
const Vendordashboard = () => {
    const location = useLocation();
    const [vendorId,setVendorId]=useState('');
    // const [item, setItem] = useState();
    const [productimage,setImage]=useState('');
    const [producttitle,setProducttitle]=useState('');
    const [productdescription,setDescription]=useState('');
    const [productprice,setPrice]=useState('');
    const [record, SetRecord] = useState([]);
    useEffect(() => {
      loadProductDetails();
    }, []);
  
    const loadProductDetails = async () => {
      const response = await getvendorposted(location.state.vendorId);
      SetRecord(response.data.msg);
    };
    const handleSubmit= async(e)=>{
        e.preventDefault();
           const response= await addproduct({vendorId,productimage,producttitle,productdescription,productprice});
            if (response.data.msg=="success"){
             alert("Product Added")
             setVendorId('');
             setImage([]);
             setPrice('');
             setDescription('');
             setProducttitle('');
             loadProductDetails();
            }
        };
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">Vendor Dashboard</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Vendor Name:&nbsp;&nbsp;{location.state.name}</li>
              </ol>
              <div class="row">
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-primary text-white mb-4">
                    <div class="card-body">Vendor Email:&nbsp;&nbsp;{location.state.email}</div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-success text-white mb-4">
                    <div class="card-body">Vendor District:&nbsp;&nbsp;{location.state.district}</div>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="card bg-warning text-white mb-4">
                    <div class="card-body">Vendor ID:&nbsp;&nbsp;{location.state.vendorId}</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6">
                <div class="card mb-4">
                    <div class="card-header">Add Product</div>
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
                             <FileBase64
          type="file"
          name="productimage"
          multiple={false}
          onDone={({ base64 }) => setImage( ...productimage,base64 )}
        />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Product Title"
                            name="producttitle"
                            value={producttitle}
                            onChange={(e) => setProducttitle(e.target.value)} required="true"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Productdescription"
                            name="productdescription"
                            value={productdescription}
                            onChange={(e) => setDescription(e.target.value)} required="true"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter the Product Price"
                            value={productprice}
                            name="productprice"
                            onChange={(e) => setPrice(e.target.value)} required="true"
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                {record.map((item) => (
                      <div class="card mb-4">
                        <img src={item.productimage} class="card-img-top" alt="..." style={{width:'100px'}} />
                        <div class="card-body">
                          <h5 class="card-title">{item.producttitle}</h5>
                          <p class="card-text">{item.productdescription}</p>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">{item.productprice}</small>
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

export default Vendordashboard;
