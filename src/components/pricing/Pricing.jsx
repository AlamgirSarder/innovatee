import React from "react";
import Container from "../layout/Container";
import pricing1 from "../../assets/pricing1.png";
import Flex from "../layout/Flex";
import { GiCheckMark } from "react-icons/gi";



const Pricing = () => {
  const card = [
    {
      img: pricing1,
      annual_pricing: "20",
    },
      {
      img: pricing1,
      annual_pricing: "20",
    },
      {
      img: pricing1,
      annual_pricing: "20",
    },
  ];

  return (
    <div>
      <Container>
        <div className="pb-[160px]">
          <h2 className="w-[634px] font-secondary font-bold text-[46px] leading-[58px] text-heading_color text-center mx-auto">
            Pricing Designed To Fit Your Business
          </h2>

          <p className="font-bold font-secondary text-[24px] leading-[100%] text-primary opacity-80 text-center mb-[77px] mt-[39px]">Monthly</p>

          <Flex className="justify-between">
            {card.map((items) => (
              <div className="w-[450px] py-10 px-[60px] rounded-[20px] border border-solid border-[#DCE7FE]">
                <Flex className="w-[90px] h-[90px] rounded-full bg-[#E8F2FA] justify-center items-center mx-auto">
                  <img src={items.img} alt="#card_img" />
                </Flex>
                <h2 className="font-bold font-secondary text-[24px] leading-[36px] text-primary mt-8 text-center">
                  Personal
                </h2>
                <h3 className="font-secondary font-bold text-[44px] leading-[54px] tracking-[-2%] mb-[14px] text-center">
                  $10/mth
                </h3>
                <p className="font-primary font-medium text-lg leading-[18px] text-[#645E76] text-center mb-10">Annual pricing <span className="text-primary">(save {items.annual_pricing}%)</span></p>

                <ul className="flex flex-col gap-y-[26px]">
                    <li>
                        <Flex className="gap-x-[22px] items-center">
                            <div className="w-6 h-6 rounded-full bg-[#F4EBFF] flex justify-center items-center">
                                <GiCheckMark className="w-[10px] h-[10px] text-primary"/>
                            </div>
                            <p className="font-primary font-medium text-para_color text-lg leading-8">Calendar View</p>
                        </Flex>
                    </li>
                       <li>
                        <Flex className="gap-x-[22px] items-center">
                           <div className="w-6 h-6 rounded-full bg-[#F4EBFF] flex justify-center items-center">
                                <GiCheckMark className="w-[10px] h-[10px] text-primary"/>
                            </div>
                            <p className="font-primary font-medium text-para_color text-lg leading-8">Custom Templates</p>
                        </Flex>
                    </li>
                       <li>
                        <Flex className="gap-x-[22px] items-center">
                            <div className="w-6 h-6 rounded-full bg-[#F4EBFF] flex justify-center items-center">
                                <GiCheckMark className="w-[10px] h-[10px] text-primary"/>
                            </div>
                            <p className="font-primary font-medium text-para_color text-lg leading-8">List view</p>
                        </Flex>
                    </li>
                       <li>
                        <Flex className="gap-x-[22px] items-center">
                           <div className="w-6 h-6 rounded-full bg-[#F4EBFF] flex justify-center items-center">
                                <GiCheckMark className="w-[10px] h-[10px] text-primary"/>
                            </div>
                            <p className="font-primary font-medium text-para_color text-lg leading-8">Board view</p>
                        </Flex>
                    </li>
                       <li>
                        <Flex className="gap-x-[22px] items-center">
                           <div className="w-6 h-6 rounded-full bg-[#F4EBFF] flex justify-center items-center">
                                <GiCheckMark className="w-[10px] h-[10px] text-primary"/>
                            </div>
                            <p className="font-primary font-medium text-para_color text-lg leading-8">Assignees & Due Dates</p>
                        </Flex>
                    </li>
                      
                </ul>

                <a className="font-primary text-lg font-medium py-5 px-12 bg-primary rounded-md text-white inline-block mt-10 w-full text-center">Purchase Now</a>




              </div>
            ))}
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
