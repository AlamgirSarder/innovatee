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
      headingi: "Guides and resources",
      products: ["Blog", "Tools", "Support"],
    },
  ];

  return (
    <div className="bg-[#F7F7FC] pt-[291px] pb-[30px]">
      <Container>

        


        <Flex className="justify-between">
          <div>
            <img src={footer_logo} alt="#footer_logo" />
            <p className="w-[263px] mt-[26px] font-primary text-[16px] leading-7 text-para_color">
              Build a modern and creative website with Innovate.
            </p>
            <Flex className="gap-x-[6px] mt-6">
              <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                <FaGoogle className="text-para_color" />
              </Flex>
              <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                <FaTwitter className="text-para_color" />
              </Flex>

              <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                <FaInstagram className="text-para_color" />
              </Flex>
              <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                <FaLinkedin className="text-para_color" />
              </Flex>
            </Flex>
          </div>

          <div className="w-[944px]">
            <div className="flex justify-between">
              {list.map((items) => (
                <div className="">
                  <h1 className="font-primary font-medium text-lg leading-8 text-heading_color mb-5">
                    {items.headingi}
                  </h1>

                  {items.products.map((item) => (
                    <ul>
                      <li className="font-primary text-[16px] leading-[26px] text-para_color mb-3">
                        {item}
                      </li>
                    </ul>
                  ))}
                </div>
              ))}

              <div>
                <h2 className="font-primary font-medium text-lg leading-8 text-heading_color mb-[18px]">
                  Get Latest Updates
                </h2>
                <p className="w-[285px] font-primary text-[16px] leading-[26px] text-para_color">
                  Subscribe to our newsletter and get many interesting things
                  every week
                </p>
                <div className="w-[269px] relative mt-8">
                  <input
                    className="pt-4 pb-[18px] pl-[18px] rounded-[5px] w-[269px] h-[46px] outline-0 border border-[#D2D2D2] placeholder:font-secondary placeholder:text-[12px] placeholder:text-[#A1A2A3] placeholder:leading-[150%]"
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
        <hr className="mt-[86px] h-[4px] bg-[#D2D2D2] border-0 opacity-20" />
        <p className="font-primary text-[14px] leading-[22px] text-para_color opacity-80 mt-6">© 2024 Innovate - All Right Reserved</p>
      </Container>
    </div>
  );
};
export default Footer;
