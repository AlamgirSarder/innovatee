import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";
import featureleft from "../../assets/featureleft.png";

const Features = () => {
  return (
    <div className="mb-[55px]">
      <Container>
        <Flex className="justify-between">
          <div>
            <div>
                <img src={featureleft} alt="#featureleft_img" />
            </div>
          </div>
          <div>
            <h2 className="w-[553px] font-secondary font-bold text-[46px] text-heading_color leading-[58px]">
              We provide features for your Business
            </h2>

            <Flex className="mt-16 justify-between">
              <div>
                <img src={feature1} alt="#feature1_img" />
                <h2 className="font-secondary text-[22px] font-bold leading-[34px] tracking-[-0.5p%] text-heading_color mt-[14px] mb-[6px]">
                  Fast and Easy to use
                </h2>
                <p className="font-primary text-lg leading-8 text-para_color w-[220px]">
                  Easily to convert API with just a few clicks
                </p>
              </div>
              <div>
                <img src={feature2} alt="#feature1_img" />
                <h2 className="font-secondary text-[22px] font-bold leading-[34px] tracking-[-0.5p%] text-heading_color mt-[14px] mb-[6px]">
                  Safely Security
                </h2>
                <p className="font-primary text-lg leading-8 text-para_color w-[220px]">
                All customer data is encrypted
                </p>
              </div>
            </Flex>

            <Flex className="mt-10  justify-between">
              <div>
                <img src={feature3} alt="#feature1_img" />
                <h2 className="font-secondary text-[22px] font-bold leading-[34px] tracking-[-0.5p%] text-heading_color mt-[14px] mb-[6px]">
                Get Organized
                </h2>
                <p className="font-primary text-lg leading-8 text-para_color w-[220px]">
                From lists to boards, organize work your way. 
                </p>
              </div>
              <div className="flex items-end">
                <a className="bg-primary font-primary text-lg font-medium py-5 px-12 rounded-md text-white">
                  Get Started
                </a>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Features;
