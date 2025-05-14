import Container from "../layout/Container";
import Flex from "../layout/Flex";

const Cta = () => {
    return (
        <div className="mb-[124px]">
            <Container>

                <div className="py-[100px] px-[102px] bg-[url(assets/cta_bg.png)] bg-no-repeat">
                    <Flex className="justify-between items-center ">
                        <h2 className="font-secondary font-bold text-[46px] w-[577px] text-white leading-[58px]">Don’t find the answer? contact us for any query.</h2>

                    <a className="font-primary text-lg font-medium py-5 px-12 bg-secondary rounded-md text-[#2C2643] ">Contact Us</a>
                    
                    </Flex>

                </div>



            </Container>
        </div>
    )
}
export default Cta;