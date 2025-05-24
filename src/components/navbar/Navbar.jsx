import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [show, setShow] = useState(false);

  const handclick = () => {
    setShow(!show);
  };
  return (
    <div className="relative">
      <div className="pt-8 absolute top-0 left-0 w-full z-50">
        <Container>
          <div className="md:flex justify-between items-center ">
            <div className="flex justify-between items-center">
              <img src={logo} alt="#logo" />

              <div className="block md:hidden">
                <FaBars onClick={handclick} className="text-white text-2xl" />
              </div>
            </div>

            <div className="hidden md:flex">
              <ul className="md:flex gap-x-[50px] font-primary text-white text-lg font-medium">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>

            <Flex className=" hidden md:flex items-center">
              <p className="font-primary text-white text-lg font-medium mr-9">
                Login
              </p>
              <a className="font-primary text-lg font-medium py-5 px-12 bg-secondary rounded-md text-[#2C2643]">
                Register
              </a>
            </Flex>
          </div>
        </Container>
      </div>
      {show && (
        <div className="absolute w-full z-[999] bg-primary h-screen flex justify-center  text-center ">
          <div className="md:flex justify-center items-center">
            <div className="absolute top-[50px] right-[50px]">
              <RxCross2
                onClick={() => setShow(false)}
                className="text-white text-2xl"
              />
            </div>
            <div>
              <ul className="font-primary text-white text-lg font-medium gap-py[100px] mt-[100px]">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Service</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>

            <Flex className="flex-col items-center mt-[30px]">
              <p className="font-primary text-white text-lg font-medium">
                Login
              </p>
              <a className="font-primary text-lg font-medium py-[5px] px-[10px] bg-secondary rounded-md text-[#2C2643] mt-[10px]">
                Register
              </a>
            </Flex>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
