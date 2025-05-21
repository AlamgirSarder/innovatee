import React from "react";
import Container from "../layout/Container";
import bannerlogo from "../../assets/banner.png";
import banner_laptop from "../../assets/banner_laptop.png";

const Banner = () => {
  return (
    <div className="bg-[url(assets/banner.png)] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="pt-[195px] pb-[250px] md:pb-[559px] relative">
          <h1 className="md:w-[796px] font-secondary font-bold text-[30px] md:text-[56px] md:leading-16 text-center mx-auto text-white">
            Get your work done with Management Tool
          </h1>
          <p className="md:w-[467px] font-primary text-lg font-normal text-center mx-auto leading-[32px] text-white mt-5">
            The world's first project management platform that connects
            everything
          </p>

          <div className="relative text-center mt-8">
            <input
              className="py-3 md:py-5 bg-white rounded-md w-full md:w-[480px] outline-0 pl-6 placeholder:font-secondary placeholder:text-[16px] placeholder:text-[#B4B6C4] placeholder:leading-[26px]"
              type="text"
              placeholder="Your business email"
            />

            <a className="absolute right-[5px] md:right-[472px] top-1/2 md:top-auto md:bottom-[3px] transform -translate-y-1/2 md:translate-y-0 font-primary text-[12px] md:text-lg font-medium py-[12px] px-[10px] md:py-[15px] md:px-7 bg-secondary rounded-md text-[#2C2643] capitalize cursor-pointer inline-block">
              try for free
            </a>
          </div>
          <img
            className="absolute bottom-0 md:bottom-[-280px] left-[-20px] md:left-[-40px]"
            src={banner_laptop}
            alt="#banner_laptop"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
