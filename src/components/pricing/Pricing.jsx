import React, { useState } from "react";
import Container from "../layout/Container";
import pricing1 from "../../assets/pricing1.png";
import pricing2 from "../../assets/pricing2.png";
import pricing3 from "../../assets/pricing3.png";
import Flex from "../layout/Flex";
import { GiCheckMark } from "react-icons/gi";

const Pricing = () => {
  const [hovrIndex, setHoverIndex] = useState(null);

  const card = [
    {
      img: pricing1,
      bgColor: "bg-[#E8F2FA] group-hover:bg-[#ffffff]",
      title: "Personal",
      dollar: 10,
      annual_pricing: "20",
      list: [
        "Calendar View",
        "Custom Templates",
        "List view",
        "Board view",
        "Assignees & Due Dates",
      ],
    },
    {
      img: pricing2,
      bgColor: "bg-[#B4B6EB] group-hover:bg-[#ffffff]",
      title: "Team",
      dollar: 25,
      annual_pricing: "35",
      list: [
        "Timeline Review",
        "Custom fields",
        "Custom Templates",
        "Task dependencies",
        "Milestones Manage",
      ],
    },
    {
      img: pricing3,
      bgColor: "bg-[#ECE8F9] group-hover:bg-[#ffffff]",
      title: "Enterprise",
      dollar: 50,
      annual_pricing: "40",
      list: [
        "Data export & deletion",
        "Block native integrations",
        "Custom branding",
        "Lock custom fields",
        "Priority support",
      ],
    },
  ];

  return (
    <div>
      <Container>
        <div className=" pb-[50px] md:pb-[160px] mt-[50px] md:mt-0">
          <h2 className="md:w-[634px] font-secondary font-bold text-[30px] md:text-[46px] md:leading-[58px] text-heading_color text-center mx-auto">
            Pricing Designed To Fit Your Business
          </h2>

          <p className="font-bold font-secondary text-[24px] leading-[100%] text-primary opacity-80 text-center md:mb-[77px] mt-[39px]">
            Monthly
          </p>

          <Flex className="justify-between flex-col md:flex-row">
            {card.map((items,index) => (
              <div key={index}
                className={`md:w-[450px] mt-[30px] md:mt-0 py-10 px-[30px] md:px-[60px] rounded-[20px] border border-solid border-[#DCE7FE] group hover:bg-primary transition-all duration-[0.5s] cursor-pointer`}
              >
                <Flex
                  className={`w-[90px] h-[90px] ${items.bgColor} rounded-full justify-center items-center mx-auto`}
                >
                  <img src={items.img} alt={`${items.title} pricing icon`} />
                </Flex>

                <h2 className="font-bold font-secondary text-[24px] leading-[36px] text-primary mt-8 text-center group-hover:text-[#43E7DF]">
                  {items.title}
                </h2>
                <h3 className="font-secondary font-bold text-[44px] leading-[54px] tracking-[-2%] mb-[14px] text-center group-hover:text-white">
                  ${items.dollar}/mth
                </h3>
                <p className="font-primary font-medium text-lg leading-[18px] text-[#645E76] text-center mb-10 group-hover:text-white">
                  Annual pricing{" "}
                  <span className="text-primary group-hover:text-[#43E7DF]">
                    (save {items.annual_pricing}%)
                  </span>
                </p>

                <ul className="flex flex-col gap-y-[26px]">
                  {items.list.map((item) => (
                    <li>
                      <Flex className="gap-x-[22px] items-center">
                        <div className="w-6 h-6 rounded-full bg-[#F4EBFF] flex justify-center items-center">
                          <GiCheckMark className="w-[10px] h-[10px] text-primary" />
                        </div>
                        <p className="font-primary font-medium text-para_color text-lg leading-8 group-hover:text-white">
                          {item}
                        </p>
                      </Flex>
                    </li>
                  ))}
                </ul>

                <a className=" group-hover:text-[#2C2643] group-hover:bg-[#43E7DF] font-primary text-lg font-medium py-5 px-12 bg-primary rounded-md text-white inline-block mt-10 w-full text-center">
                  Purchase Now
                </a>
              </div>
            ))}
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
