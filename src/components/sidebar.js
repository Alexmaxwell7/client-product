import { useState, useEffect } from "react";
const SideMenu =()=>{
return(
    <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu">
              <div class="nav">
                <a class="nav-link" href="/home">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>
                <a class="nav-link" href="/adduser">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-users"></i>
                  </div>
                  Add User
                </a>
                <a class="nav-link" href="/viewusers">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-eye"></i>
                  </div>
                  View User
                </a>
                <a class="nav-link" href="/approved">
                  <div class="sb-nav-link-icon">
                    <i class="fab fa-buffer"></i>
                  </div>
                  Accept Product
                </a>
                <a class="nav-link" href="/viewproduct">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-tv"></i>
                  </div>
                  View Product
                </a>

              </div>
            </div>
            <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              Admin
            </div>
          </nav>
        </div>
)
}
export default SideMenu;