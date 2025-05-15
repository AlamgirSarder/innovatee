import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import pman1 from "../../assets/pman1.jpg";
import pman2 from "../../assets/pman2.jpg";
import pman3 from "../../assets/pman3.jpg";
import pman4 from "../../assets/pman4.jpg";
import pman5 from "../../assets/pman5.jpg";

import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" bg-[#F4FAFA] pt-[208px] pb-[193px]">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <div>
              <h2 className="w-[594px] font-secondary text-[46px] font-bold leading-[58px] text-heading_color mb-5">
                What they are talking about us?
              </h2>
              <p className="w-[503px] font-primary text-para_color text-lg leading-8">
                testimonials are evidence of customers talking about your
                product or service in their own words. At their best, they are
                authentic, descriptive.
              </p>
            </div>
            <a className="mt-10 mb-[85px] font-primary text-lg font-medium py-5 px-12 bg-primary rounded-md text-white inline-block">
              Get Started
            </a>

            <Flex className="justify-between items-center w-[350px] h-[70px]">
              <div className="flex relative">
                <div className=" top-0 left-0 w-[58px] h-[58px] bg-[#C4C4C4] rounded-full outline-[2px] outline-white">
                  <img
                    className="w-full h-full rounded-full"
                    src={pman4}
                    alt="#pman4"
                  />
                </div>

                <div className=" absolute top-0 left-[40px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full outline-[2px] outline-white">
                  <img
                    className="w-full h-full rounded-full"
                    src={pman3}
                    alt="#pman3"
                  />
                </div>

                <div className=" absolute top-0 left-[80px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full outline-[2px] outline-white">
                  <img
                    className="w-full h-full rounded-full"
                    src={pman2}
                    alt="#pman2"
                  />
                </div>

                <div className=" absolute top-0 left-[120px] w-[58px] h-[58px] bg-[#C4C4C4] rounded-full outline-[2px] outline-white flex justify-center items-center">
                  <img
                    className="w-full h-full rounded-full"
                    src={pman1}
                    alt="#pman1"
                  />
                </div>
              </div>

              <div>
                <Flex className="w-[156px] items-center">
                  <h2 className="relative after:absolute after:content[] after:w-[2px] after:h-[16px] after:bg-[#DADBE2] after:right-[-15px] after:top-[10px]  font-secondary font-black text-[#52C5B6] text-[24px] leading-9 tracking-[-2%]">
                    4.5
                  </h2>
                  <Flex className="pl-[30px]">
                    <FaStar className="text-[#FDB400]" />
                    <FaStar className="text-[#FDB400]" />
                    <FaStar className="text-[#FDB400]" />
                    <FaStar className="text-[#FDB400]" />
                    <FaStarHalfStroke className="text-[#FDB400]" />
                  </Flex>
                </Flex>

                <div>
                  <p className="font-primary text-para_color text-lg leading-8">
                    280k Total Review
                  </p>
                </div>
              </div>
            </Flex>
          </div>

          <div>
        

            <div className=" relative w-[687px] bg-white rounded-[20px] pt-[64px] px-[60px] pb-[50px]">
              <div className="absolute top-[-80px] flex justify-center items-center w-[124px] h-[124px] rounded-full outline-[10px] outline-[#F7F7FC]">
                <img
                  className="w-full h-full rounded-full"
                  src={pman5}
                  alt="#pman5"
                />
              </div>

              <p className="w-[567px] font-primary text-[#6C6E81] text-[22px] leading-[44px] mb-[37px]">
                “Wow. Amazing company amazing Expert Manager. They know how to
                get things done when it comes to online trading.{" "}
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
        </Flex>
      </Container>
    </div>
  );
};

export default Testimonial;
