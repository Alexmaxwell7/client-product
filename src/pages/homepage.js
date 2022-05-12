import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SideMenu from "../components/sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setuserName] = useState('')
	const [password, setPassword] = useState('')
  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <SideMenu />
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <h1 class="mt-4">Dashboard</h1>
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
