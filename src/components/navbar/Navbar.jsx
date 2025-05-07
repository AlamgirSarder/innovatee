
import React from "react";
import logo from "../../assets/logo.png"
import Container from "../layout/Container";


function Navbar() {
  return (
    <div className= "pt-8 absolute top-0 left-0 w-full z-50">
     
       <Container>
       <div className="flex justify-between items-center ">
          <div>
            <img src={logo} alt="#logo" />
          </div>
          <div>
            <ul className="flex gap-x-[50px] font-primary text-white text-lg font-medium">
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Blog</a></li>
           
            </ul>
          </div>
          <div className="flex items-center">
            <p className="font-primary text-white text-lg font-medium mr-9">Login</p>
            <a className="font-primary text-lg font-medium py-5 px-12 bg-secondary rounded-md text-[#2C2643]">Register</a>
          </div>
        </div>
       </Container>
     
    </div>
  );
}

export default Navbar;
