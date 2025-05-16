import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import Flex from "../layout/Flex";

import pman1 from "../../assets/pman1.jpg";
import pman2 from "../../assets/pman2.jpg";
import pman3 from "../../assets/pman3.jpg";
import pman4 from "../../assets/pman4.jpg";

import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";


import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="w-[35px] !bg-primary h-[35px] rounded-full !flex justify-center items-center absolute top-[50%] translate-y-[-50%] right-[-40px] cursor-pointer"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
     >
     <MdOutlineKeyboardArrowRight size={30} className="text-white" />
     </span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="w-[35px] !bg-primary h-[35px] rounded-full !flex justify-center items-center absolute top-[50%] translate-y-[-50%] left-[-40px] cursor-pointer"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
     >
      <MdKeyboardArrowLeft  size={30} className="text-white"/>
     </span>
  );
}

function SliderTestimonial() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
  };

  return (
    <Slider {...settings}>
      <div>
        <div className=" relative w-[687px] bg-white rounded-[20px] pt-[64px] px-[60px] pb-[50px]">
          <div className="absolute top-[-80px] flex justify-center items-center w-[124px] h-[124px] rounded-full outline-[10px] outline-[#F7F7FC]">
            <img
              className="w-full h-full rounded-full"
              src={pman1}
              alt="#pman5"
            />
          </div>

          <p className="w-[567px] font-primary text-[#6C6E81] text-[22px] leading-[44px] mb-[37px]">
            “Wow. Amazing company amazing Expert Manager. They know how to get
            things done when it comes to online trading.{" "}
          </p>

          <Flex className="justify-between items-end">
            <div>
              <h1 className="font-bold font-secondary text-[24px] text-[#30344E] leading-[36px] mb-1">
                Robert Fox
              </h1>
              <p className="font-primary text-[16px] text-[#30344E] opacity-80 leading-[26px]">
                Digital Marketer
              </p>
            </div>

            <Flex>
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
            </Flex>
          </Flex>
        </div>
      </div>

      <div>
        <div className=" relative w-[687px] bg-white rounded-[20px] pt-[64px] px-[60px] pb-[50px]">
          <div className="absolute top-[-80px] flex justify-center items-center w-[124px] h-[124px] rounded-full outline-[10px] outline-[#F7F7FC]">
            <img
              className="w-full h-full rounded-full"
              src={pman2}
              alt="#pman5"
            />
          </div>

          <p className="w-[567px] font-primary text-[#6C6E81] text-[22px] leading-[44px] mb-[37px]">
            “Wow. Amazing company amazing Expert Manager. They know how to get
            things done when it comes to online trading.{" "}
          </p>

          <Flex className="justify-between items-end">
            <div>
              <h1 className="font-bold font-secondary text-[24px] text-[#30344E] leading-[36px] mb-1">
                Robert Fox
              </h1>
              <p className="font-primary text-[16px] text-[#30344E] opacity-80 leading-[26px]">
                Digital Marketer
              </p>
            </div>

            <Flex>
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
            </Flex>
          </Flex>
        </div>
      </div>

      <div>
        <div className=" relative w-[687px] bg-white rounded-[20px] pt-[64px] px-[60px] pb-[50px]">
          <div className="absolute top-[-80px] flex justify-center items-center w-[124px] h-[124px] rounded-full outline-[10px] outline-[#F7F7FC]">
            <img
              className="w-full h-full rounded-full"
              src={pman3}
              alt="#pman5"
            />
          </div>

          <p className="w-[567px] font-primary text-[#6C6E81] text-[22px] leading-[44px] mb-[37px]">
            “Wow. Amazing company amazing Expert Manager. They know how to get
            things done when it comes to online trading.{" "}
          </p>

          <Flex className="justify-between items-end">
            <div>
              <h1 className="font-bold font-secondary text-[24px] text-[#30344E] leading-[36px] mb-1">
                Robert Fox
              </h1>
              <p className="font-primary text-[16px] text-[#30344E] opacity-80 leading-[26px]">
                Digital Marketer
              </p>
            </div>

            <Flex>
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
            </Flex>
          </Flex>
        </div>
      </div>

       <div>
        <div className=" relative w-[687px] bg-white rounded-[20px] pt-[64px] px-[60px] pb-[50px]">
          <div className="absolute top-[-80px] flex justify-center items-center w-[124px] h-[124px] rounded-full outline-[10px] outline-[#F7F7FC]">
            <img
              className="w-full h-full rounded-full"
              src={pman4}
              alt="#pman5"
            />
          </div>

          <p className="w-[567px] font-primary text-[#6C6E81] text-[22px] leading-[44px] mb-[37px]">
            “Wow. Amazing company amazing Expert Manager. They know how to get
            things done when it comes to online trading.{" "}
          </p>

          <Flex className="justify-between items-end">
            <div>
              <h1 className="font-bold font-secondary text-[24px] text-[#30344E] leading-[36px] mb-1">
                Robert Fox
              </h1>
              <p className="font-primary text-[16px] text-[#30344E] opacity-80 leading-[26px]">
                Digital Marketer
              </p>
            </div>

            <Flex>
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
              <FaStar className="text-[#FDB400]" />
            </Flex>
          </Flex>
        </div>
      </div>
    </Slider>
  );
}
export default SliderTestimonial;
