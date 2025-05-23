import React from "react";
import Container from "../layout/Container";
import imgfact from "../../assets/fact_bg.png";
import facttwo from "../../assets/factstwo.png";
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
        <div className="bg-primary bg-[url(assets/textline.png)] bg-no-repeat bg-cover bg-center  md:bg-[url(assets/fact_bg.png)] md:bg-center md:bg-no-repeat pt-[50px]  md:py-[85px] md:pr-[70px] md:mb-[140px] rounded-[20px]">

            <div className="w-full md:w-[608px] md:ms-auto text-center md:text-left">
            <div>
            <h2 className="md:w-[554px] font-bold font-secondary text-[30px] md:text-[44px] text-white mb-[30px] md:mb-[64px]">
              Trusted by 35,000+ happy customers.
            </h2>
            <Flex className="justify-between flex-col md:flex-row text-center">
              {fact.map((item) => (
                <div className=" mt-[30px] md:mt-0">
                  <h2 className="font-secondary text-[44px] font-black leading-[54px] text-white">{item.digit}</h2>
                  <p className="md:w-[176px] font-primary text-lg leading-8 font-medium text-white opacity-75">{item.para}</p>
                </div>
              ))}
            </Flex>
            
      
          </div>
           </div>

            <div className="md:hidden mt-[50px] flex justify-center">
              <img className="w-[70%]" src={facttwo} alt="factwo" />
            </div>
        
        </div>
      </Container>
    </div>
  );
};

export default Facts;
