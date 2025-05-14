import Container from "../layout/Container"
import footer_logo from "../../assets/footer_logo.png"
import { FaGoogle,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";

import Flex from "../layout/Flex";

const Footer = () => {
  return (
    <div className="mb-[200px]">
        <Container>

                <div>
                    <img src={footer_logo} alt="#footer_logo" />
                    <p className="w-[263px] mt-[26px] font-primary text-[16px] leading-7 text-para_color">Build a modern and creative website with Innovate.</p>
                    <Flex className="gap-x-[6px] mt-6">
                    
                        <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                            <FaGoogle className="text-para_color"/>
                        </Flex>
                        <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                           <FaTwitter className="text-para_color"/>
                        </Flex> 

                        <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                           <FaInstagram className="text-para_color"/>
                        </Flex>
                        <Flex className="w-[42px] h-[42px] bg-[#EEEEEE] rounded-full justify-center items-center">
                           <FaLinkedin className="text-para_color"/>
                        </Flex>
                    </Flex>
                </div>

        </Container>
    </div>
  )
}
export default Footer