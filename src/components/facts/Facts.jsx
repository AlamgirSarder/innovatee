import React from "react";
import Container from "../layout/Container";
import imgfact from "../../assets/fact_bg.png";
import Flex from "../layout/Flex";
const Facts = () => {
  const fact = [
    {
      digit: "720+",
      para: "Over 500 business powered with us",
    },
    {
      digit: "4.9",
      para: "Rating on google play and app store",
    },
    {
      digit: "200+",
      para: "Easily integrate with your favorite apps",
    },
  ];

  return (
    <div>
      <Container>
        <div className="bg-[url(assets/fact_bg.png)] bg-center bg-no-repeat py-[85px] pr-[70px] mb-[140px]">

            <div className="w-[608px] ms-auto">
                  <div>
            <h2 className="w-[554px] font-bold font-secondary text-[44px] text-white mb-[64px]">
              Trusted by 35,000+ happy customers.
            </h2>
            <Flex className="justify-between">
              {fact.map((item) => (
                <div>
                  <h2 className="font-secondary text-[44px] font-black leading-[54px] text-white">{item.digit}</h2>
                  <p className="w-[176px] font-primary text-lg leading-8 font-medium text-white opacity-75">{item.para}</p>
                </div>
              ))}
            </Flex>
            
          </div>
            </div>
        
        </div>
      </Container>
    </div>
  );
};

export default Facts;
