import Login from "./components/login";
import Home from './pages/homepage';
import AddUser from "./pages/adduser";
import ViewUsers from "./pages/viewuser";
import Editvendor from "./pages/editvendor";
import ApprovedProduct from "./pages/approved";
import ViewProduct from "./pages/viewproduct";
import VendorLogin from "./components/vendorlogin";
import Vendordashboard from "./pages/vendordashboard";
import PublicView from "./pages/publicproductview";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


function App() {
  let routes = useRoutes([
    { path:"/", element: <PublicView /> },
    { path:"/login", element: <Login /> },
    { path:"/vendorlogin", element: <VendorLogin /> },
    { path:"/vendordashboard", element: <Vendordashboard /> },
    { path: "/home", element: <Home /> },
    { path:"/adduser", element: <AddUser /> },
    { path:"/viewusers", element: <ViewUsers /> },
    { path:"/edit/:id", element: <Editvendor /> },
    { path:"/approved", element: <ApprovedProduct /> },
    { path:"/viewproduct", element: <ViewProduct /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
  

export default AppWrapper;
