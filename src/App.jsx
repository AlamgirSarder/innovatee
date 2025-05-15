
import './App.css'
import Banner from './components/banner/Banner'
import Content from './components/content/Content'
import Facts from './components/facts/Facts'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import Intergration from './components/intergration/Intergration'
import Navbar from './components/navbar/Navbar'
import Pricing from './components/pricing/Pricing'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <Content/>
      <Features/>
      <Intergration/>
      <Services/> 
      <Facts/>
      <Pricing/>
      <Testimonial/>
  
      <Footer/>
     


    </>
  )
}

export default App
