import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";



const App = () => {

  return (
    <>
      <div className="pt-[5.3rem]  lg:pt-[5.6rem]">
          <Header/>
          <Hero/>
          <Benefits/>
          <Collaboration/>
          <Services/>
          <Pricing/>
          <Roadmap/>
          <Footer/>
      </div>
      <ButtonGradient/>
        

    </>
  );
}

export default App;
