import React from "react";
import Container from "../layout/Container";
import bannerlogo from "../../assets/banner.png"
import banner_laptop from "../../assets/banner_laptop.png"

const Banner = () => {
  return (
    <div className="bg-[url(assets/banner.png)] bg-cover bg-center bg-no-repeat">

      <Container>
        <div className="pt-[195px] pb-[559px] relative">
          <h1 className="w-[796px] font-secondary font-bold text-[56px] leading-16 text-center mx-auto text-white">
            Get your work done with Management Tool
          </h1>
          <p className="w-[467px] font-primary text-lg font-normal text-center mx-auto leading-[32px] text-white mt-5">
            The world's first project management platform that connects
            everything
          </p>

          <div className="relative text-center mt-8">
            <input className="py-5 bg-white rounded-md w-[480px] outline-0 pl-6 placeholder:font-secondary text-[16px] text-[#B4B6C4]"
             type="text" placeholder="Your business email" />

             <a className="absolute top-1 right-[480px] font-primary text-lg font-medium py-[15px] px-7 bg-secondary rounded-md text-[#2C2643]">Try for free</a>
          </div>
        <img className="absolute -bottom-[280px]" src={banner_laptop} alt="#banner_laptop" />
        </div>
      </Container>
    </div> 
  );
};

export default Banner;
