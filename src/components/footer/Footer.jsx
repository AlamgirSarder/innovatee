import Container from "../layout/Container";
import footer_logo from "../../assets/footer_logo.png";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import Flex from "../layout/Flex";

const Footer = () => {
  const list = [
    {
      headingi: "Product",
      products: ["Landingpages", "Pricing", "Benefits", "Features"],
    },
    {
      headingi: "Privacy Policy",
      products: ["Terms & Conditions", "Partners", "Contact"],
    },
    {
      headingi: "Resources",
      products: ["Guides and resources", "Blog", "Tools", "Support"],
    },
  ];

  return (
    <div className=" mt-[250px] md:mt-[317px] bg-[#F7F7FC] pb-[8px] md:pb-[30px]">
      <Container>
        <div className="relative">
          <div className=" absolute w-full top-[-149px] left-0 py-[50px] md:py-[100px] px-5 rounded-[20px] md:px-[102px] bg-[url(assets/cta_bg.png)] bg-cover bg-center md:bg-[url(assets/cta_bg.png)] md:bg-no-repeat">
            <Flex className="justify-between items-center flex-col md:flex-row">
              <h2 className="font-secondary font-bold text-[25px] md:text-[46px] md:w-[577px] text-white md:leading-[58px] text-center md:text-left mb-[50px] md:mb-0">
                Don't find the answer? contact us for any query.
              </h2>

              <a className="font-primary text-lg font-medium py-5 px-12 bg-secondary rounded-md text-[#2C2643] ">
                Contact Us
              </a>
            </Flex>
          </div>

          <Flex className="justify-between pt-[200px] md:pt-[291px] flex-col md:flex-row">
            <div>
              <div className="w-full flex justify-center md:justify-start">
                <img src={footer_logo} alt="#footer_logo" />
              </div>
              <p className="md:w-[263px] mt-[26px] font-primary text-[16px] leading-7 text-para_color text-center md:text-left hidden md:block">
                Build a modern and creative website with Innovate.
              </p>

              <div className="hidden md:block">
                <ul className="gap-x-[6px] mt-6 flex justify-center md:justify-start mb-[50px] ">
                  <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                    <FaGoogle className="text-para_color group-hover:text-white" />
                  </li>
                  <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                    <FaTwitter className="text-para_color group-hover:text-white" />
                  </li>
                  <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                    <FaInstagram className="text-para_color group-hover:text-white" />
                  </li>
                  <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                    <FaLinkedin className="text-para_color group-hover:text-white" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:w-[944px] mt-[50px]">
              <div className="md:flex justify-between grid grid-cols-2 gap-[20px]">
                {list.map((items) => (
                  <div className="">
                    <h1 className="font-primary font-medium text-lg leading-8 text-heading_color md:mb-5 text-center md:text-left">
                      {items.headingi}
                    </h1>

                    {items.products.map((item) => (
                      <ul className="text-center md:text-left">
                        <li className="font-primary text-[16px] leading-[26px] text-para_color md:mb-3">
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}

                <div>
                  <h2 className="font-primary font-medium text-lg leading-8 text-heading_color md:mb-[18px] text-center md:text-left">
                    Get Latest Updates
                  </h2>
                  <p className="md:w-[285px] font-primary text-[16px] leading-[26px] text-para_color text-center md:text-left">
                    Subscribe to our newsletter and get many interesting things
                    every week
                  </p>
                  <div className="md:w-[269px] relative mt-8 hidden md:block">
                    <input
                      className="pt-4 pb-[18px] pl-[18px] rounded-[5px] md:w-[269px] h-[46px] outline-0 border border-[#D2D2D2] placeholder:font-secondary placeholder:text-[12px] placeholder:text-[#A1A2A3] placeholder:leading-[150%] w-full"
                      type="text"
                      placeholder="Your Email Address"
                    />

                    <div className=" absolute top-[50%] translate-y-[-50%] right-[5px] w-9 h-9 bg-primary rounded-[6px] flex justify-center items-center">
                      <RiSendPlaneFill className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Flex>

          <div className=" w-[70%] md:w-[269px] relative mt-8 m-auto md:hidden">
            <input
              className="pt-4 pb-[18px] pl-[18px] rounded-[5px] md:w-[269px] h-[46px] outline-0 border border-[#D2D2D2] placeholder:font-secondary placeholder:text-[12px] placeholder:text-[#A1A2A3] placeholder:leading-[150%] w-full"
              type="text"
              placeholder="Your Email Address"
            />

            <div className=" absolute top-1/2 -translate-y-1/2 right-[5px] w-9 h-9 bg-primary rounded-[6px] flex justify-center items-center">
              <RiSendPlaneFill className="text-white" />
            </div>
          </div>

          <div className="md:hidden">
            <p className="md:w-[263px] mt-[26px] font-primary text-[16px] leading-7 text-para_color text-center md:text-left">
              Build a modern and creative website with Innovate.
            </p>

            <ul className="gap-x-[6px] mt-6 flex justify-center md:justify-start mb-[50px]">
              <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                <FaGoogle className="text-para_color group-hover:text-white" />
              </li>
              <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                <FaTwitter className="text-para_color group-hover:text-white" />
              </li>
              <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                <FaInstagram className="text-para_color group-hover:text-white" />
              </li>
              <li className="flex w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center cursor-pointer group hover:bg-primary transition-all">
                <FaLinkedin className="text-para_color group-hover:text-white" />
              </li>
            </ul>
          </div>

          <hr className="md:mt-[86px] h-[4px] bg-[#D2D2D2] border-0 opacity-20" />
          <p className="font-primary text-[14px] leading-[22px] text-para_color opacity-80 mt-2 md:mt-6 text-center md:text-left">
            &copy; 2024 Innovate - All Right Reserved
          </p>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
