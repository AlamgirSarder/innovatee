import React from "react";
import Container from "../layout/Container";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import Flex from "../layout/Flex";

const Content = () => {
  const contentdetails = [
    {
      imgg: icon1,
      title: "Login or sign up to be able use our platform",
      discription:
        "This quickstart shows you how to use Identity Platform to sign in a user with an email and password.",
    },
    {
      imgg: icon2,
      title: "Connect your website with just a few click",
      discription:
        "Once your website is online, you can configure it, I will show you how to put your website online",
    },
    {
      imgg: icon3,
      title: "Take some sales data that you want",
      discription:
        "Sell your data directly: The most straightforward method is to sell your data directly to another",
    },
  ];

  return (
    <div className="mt-[50px] md:mt-[336px] pb-[50px] md:pb-[160px]">
      <Container>
        <Flex className="justify-between items-center  md:px-14 flex-col md:flex-row">
          <h1 className="md:w-[504px] font-bold font-secondary text-[36px] md:text-[46px] md:leading-[58px] tracking-[-1px] text-heading_color text-center md:text-left">
            How simple is it to use our platform?
          </h1>

          <p className="md:w-[530px]  text-[14px] md:text-lg text-para_color md:leading-8 tracking-[-0.25%] text-center md:text-left">
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </Flex>

        <Flex className="justify-between md:px-14 mt-[50px] md:mt-[116px] flex-col md:flex-row">
          {contentdetails.map((item,index) => (
            <div key={index} className="md:w-[300px] text-center mt-[20px] md:mt-0">
              <img className="mx-auto" src={item.imgg} alt="#content_icon" />
              <h2 className="font-secondary text-[30px] md:text-[24px] text-heading_color leading-8 font-bold mt-[26px] mb-[12px]">
                {item.title}
              </h2>
              <p className="font-primary text-lg text-para_color leading-[25px] md:leading-8">
                {item.discription}
              </p>
            </div>
          ))}
        </Flex>
      </Container>
    </div>
  );
};

export default Content;
