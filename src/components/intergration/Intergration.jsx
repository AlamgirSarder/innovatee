import React from 'react'
import Container from '../layout/Container'
import intergration_bg from "../../assets/intergration_bg.png"
import frame1 from "../../assets/frame1.png"
import frame2 from "../../assets/frame2.png"
import frame3 from "../../assets/frame3.png"
import frame4 from "../../assets/frame4.png"
import frame5 from "../../assets/frame5.png"
import frame6 from "../../assets/frame6.png"
import frame7 from "../../assets/frame7.png"
import Flex from '../layout/Flex'



const Intergration = () => {
  return (
    <div className='pt-[124px] pb-[120px] bg-[#F4FAFA]'>
        <Container>
                <Flex className="justify-between items-center">
                <div className='relative'>
                    <p className='text-[#FF7364] font-primary font-medium text-[20px]'>Integrations</p>
                    <h2 className='w-[587px] font-secondary text-[46px] leading-[58px] tracking-[-1px] text-heading_color font-bold mt-1 mb-5'>Easily integrate with your favorite apps</h2>
                    <p className='w-[533px] font-primary text-lg leading-8 text-para_color tracking-[-0.25%] mb-10'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                    <a className="bg-primary font-primary text-lg font-medium py-5 px-12 rounded-md text-white">
                  Get Started
                </a>
                <img className="absolute left-[-142px] bottom-[-159px] w-[152px] h-[152px]" src={intergration_bg} alt="#intergration_bg img" />
                   
                </div>
                
                <div>

                    <Flex>
                    <div className=' flex justify-center items-center w-[332px] h-[142px] rounded-[12px] bg-white mr-[30px]'>
                        <img src={frame1} alt="#frame1" />
                    </div>

                     
                    <div className=' flex justify-center items-center w-[332px] h-[142px] rounded-[12px] bg-white '>
                        <img src={frame2} alt="#frame2" />
                    </div>
                    </Flex>

                    <Flex className="mt-[35px]">
                    <div className=' flex justify-center items-center w-[151px] h-[142px] rounded-[12px] bg-white mr-[30px]'>
                        <img src={frame3} alt="#frame3" />
                    </div>

                    <div className=' flex justify-center items-center w-[332px] h-[142px] rounded-[12px] bg-white mr-[30px]'>
                        <img src={frame4} alt="#frame4" />
                    </div>

                    <div className=' flex justify-center items-center w-[151px] h-[142px] rounded-[12px] bg-white '>
                        <img src={frame5} alt="#frame5" />
                    </div>
                    </Flex>

                    <Flex className="mt-[35px]">
                    <div className=' flex justify-center items-center w-[290px] h-[142px] rounded-[12px] bg-white mr-[30px]'>
                        <img src={frame6} alt="#frame6" />
                    </div>

                    
                    <div className=' flex justify-center items-center w-[151px] h-[142px] rounded-[12px] bg-white mr-[30px] '>
                        <img src={frame5} alt="#frame5" />
                    </div>

                    
                    <div className=' flex justify-center items-center w-[196px] h-[142px] rounded-[12px] bg-white '>
                        <img src={frame7} alt="#frame7" />
                    </div>
                    </Flex>

                </div>
                </Flex>
        </Container>
    </div>
  )
}

export default Intergration