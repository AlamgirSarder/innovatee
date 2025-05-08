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
    <div className="mt-[336px] pb-[160px]">
      <Container>
        <Flex className="justify-between items-center px-14">
          <h1 className="w-[504px] font-bold font-secondary text-[46px] leading-[58px] tracking-[-1px] text-heading_color">
            How simple is it to use our platform?
          </h1>

          <p className="w-[530px] text-lg text-para_color leading-8 tracking-[-0.25%]">
            This Innovate Con guide explores the most popular platforms and
            walks you through how to use them to grow your business.
          </p>
        </Flex>

        <Flex className="justify-between px-14 mt-[116px]">
          {contentdetails.map((item) => (
            <div className="w-[300px] text-center">
              <img className="mx-auto" src={item.imgg} alt="#content_icon" />
              <h2 className="font-secondary text-[24px] text-heading_color leading-8 font-bold mt-[26px] mb-[12px]">
                {item.title}
              </h2>
              <p className="font-primary text-lg text-para_color leading-8">
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
