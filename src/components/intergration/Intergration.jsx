import React from "react";
import Container from "../layout/Container";
import intergration_bg from "../../assets/intergration_bg.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";
import frame7 from "../../assets/frame7.png";
import Flex from "../layout/Flex";

const Intergration = () => {
  return (
    <div className="pt-[50px] md:pt-[124px] pb-[50px] md:pb-[120px] bg-[#F4FAFA]">
      <Container>
        <Flex className="justify-between items-center flex-col md:flex-row">
          <div className="relative text-center md:text-left">
            <p className="text-[#FF7364] font-primary font-medium text-[20px]">
              Integrations
            </p>
            <h2 className="md:w-[587px] font-secondary text-[30px] md:text-[46px] leading-[40px] md:leading-[58px] tracking-[-1px] text-heading_color font-bold mt-1 mb-5">
              Easily integrate with your favorite apps
            </h2>
            <p className="md:w-[533px] font-primary text-[16px] md:text-lg leading-[26px] md:leading-8 text-para_color tracking-[-0.25%] mb-10 text-justify md:text-start">
              App integration, in a general sense, is the process of bringing
              resources or capabilities from one application to another. As the
              world of apps continues to evolve, app integration is becoming
              expected in many contexts.
            </p>
            <a className="bg-primary font-primary text-lg font-medium py-5 px-12 rounded-md text-white inline-block mb-[50px] md:mb-0">
              Get Started
            </a>
            <img
              className="hidden md:block absolute left-[-142px] bottom-[-159px] w-[152px] h-[152px]"
              src={intergration_bg}
              alt="#intergration_bg img"
            />
          </div>

          <div className="w-full md:w-auto">
            <Flex className="gap-x-[20px] md:gap-x-[30px] justify-center md:justify-between ">
              <div className="flex justify-center items-center w-[332px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame1} alt="#frame1" className="px-[20px] md:px-0" />
              </div>

              <div className="flex justify-center items-center w-[332px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame2} alt="#frame2" className="px-[20px] md:px-0" />
              </div>
            </Flex>

            <Flex className="mt-[20px] md:mt-[35px] gap-x-[20px] md:gap-x-[30px] justify-center md:justify-between ">
              <div className=" flex justify-center items-center w-[151px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame3} alt="#frame3" className="px-[20px] md:px-0" />
              </div>

              <div className=" flex justify-center items-center w-[332px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame4} alt="#frame4" className="px-[20px] md:px-0" />
              </div>

              <div className=" flex justify-center items-center w-[151px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame5} alt="#frame5" className="px-[20px] md:px-0" />
              </div>
            </Flex>

            <Flex className="mt-[20px] md:mt-[35px] gap-x-[20px] md:gap-x-[30px] justify-center md:justify-between">
              <div className=" flex justify-center items-center w-[290px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame6} alt="#frame6" className="px-[20px] md:px-0" />
              </div>

              <div className=" flex justify-center items-center w-[151px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame5} alt="#frame5" className="px-[20px] md:px-0" />
              </div>

              <div className=" flex justify-center items-center w-[196px] h-[100px] md:h-[142px] rounded-[12px] bg-white">
                <img src={frame7} alt="#frame7" className="px-[20px] md:px-0" />
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Intergration;
