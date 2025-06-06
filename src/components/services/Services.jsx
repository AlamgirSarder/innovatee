import React from "react";
import Container from "../layout/Container";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import Flex from "../layout/Flex";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

const Services = () => {
  const service_card = [
    {
      bgcolor: "bg-[#FAEAE8] group-hover:bg-[#ffffff]",
      img: service1,
      title: "Plan Product Roadmap",
      description:
        "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
    },
    {
      bgcolor: "bg-[#DFE0F7] group-hover:bg-[#ffffff]",
      img: service2,
      title: "Plan Product Roadmap",
      description:
        "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
    },
    {
      bgcolor: "bg-[#E8FAF0] group-hover:bg-[#ffffff]",
      img: service3,
      title: "Plan Product Roadmap",
      description:
        "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
    },
    {
      bgcolor: "bg-[#E8F2FA] group-hover:bg-[#ffffff]",
      img: service4,
      title: "Plan Product Roadmap",
      description:
        "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
    },
  ];

  return (
    <div className="mt-[50px] md:mt-[140px] mb-[80px] md:mb-[140px]">
      <Container>
        <div>
          <div>
            <p className="font-primary font-medium text-[20px] text-[#FF7364] text-center">
              Our Services
            </p>
            <h2 className="font-secondary font-bold text-heading_color text-[30px] md:text-[46px] leading-[58px] text-center mt-1 md:mb-20 ">
              How It Works
            </h2>
          </div>
          <Flex className="flex-col md:flex-row justify-between">
            {service_card.map((item) => (
              <div className="mt-[30px] md:mt-0 w-[330px] m-auto rounded-[20px] border border-solid border-[#DCE7FE] p-9 hover:bg-primary group cursor-pointer transition-all">
                <div
                  className={`flex justify-center ${item.bgcolor} items-center w-[92px] h-[92px] rounded-full m-auto md:m-0`}
                >
                  <img src={item.img} alt="#service_img" />
                </div>

                <h2 className="font-secondary font-bold text-[22px] text-heading_color leading-[34px] mt-[26px] mb-2 group-hover:text-white text-center md:text-left">
                  {item.title}
                </h2>
                <p className="font-primary font-[16px] text-para_color leading-[26px] tracking-[-0.25%] mb-[26px] group-hover:text-white text-center md:text-left">
                  {item.description}
                </p>
                <div className="text-center md:text-left">
                  <a
                    className="font-primary text-[16px] text-primary leading-[26px] font-bold group-hover:text-white"
                    href=""
                  >
                    Read More <FaArrowRightLong className="inline-block" />
                  </a>
                </div>
              </div>
            ))}
          </Flex>
          <div className="text-center">
            <a className="font-primary text-lg not-[]:font-medium py-5 px-12 border border-solid border-primary rounded-md text-primary mt-[80px] inline-block cursor-pointer">
              Register
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
