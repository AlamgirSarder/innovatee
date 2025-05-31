import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import pman1 from "../../assets/pman1.jpg";
import pman2 from "../../assets/pman2.jpg";
import pman3 from "../../assets/pman3.jpg";
import pman4 from "../../assets/pman4.jpg";

import SliderTestimonial from "./SliderTestimonial";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" bg-[#F4FAFA] py-[100px] md:pt-[208px] md:pb-[193px] overflow-x-hidden">
      <Container>
        <Flex className=" flex-col md:flex-row justify-between items-center">
          <div>
            <div>
              <h2 className="md:w-[594px] font-secondary text-[30px] text-center md:text-left md:text-[46px] font-bold md:leading-[58px] text-heading_color mb-5">
                What they are talking about us?
              </h2>
              <p className="md:w-[503px] font-primary text-para_color text-lg leading-8  text-center md:text-left">
                testimonials are evidence of customers talking about your
                product or service in their own words. At their best, they are
                authentic, descriptive.
              </p>
            </div>
            <div className="text-center md:text-left">
              <a className="mt-10 mb-[85px] font-primary text-lg font-medium py-5 px-12 bg-primary rounded-md text-white inline-block">
                Get Started
              </a>
            </div>

            <Flex className="justify-between items-center w-[350px] h-[70px] m-auto md:m-0">
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
            <div className="w-[687px]">
              <SliderTestimonial />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Testimonial;
