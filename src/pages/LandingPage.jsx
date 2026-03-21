import Header from "../components/Header";
import linkedin from "../assets/linkedin4.png";
import github from "../assets/github2.png";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="w-full flex justify-center lg:items-center lg:justify-between lg:mt-20">
        <div className="hidden md:flex flex-col gap-y-4 ml-6 items-center">
          <a href="https://linkedin.com/in/d-m-tejas-0b721a294" target="_blank">
            <img
              className="w-10 transition-all duration-300 hover:scale-115"
              src={linkedin}
              alt=""
            />
          </a>
          <a href="https://github.com/Dmtejas">
            <img
              className="w-10 transition-all duration-300 hover:scale-115"
              src={github}
              alt=""
            />
          </a>

          <div className="w-px h-80 bg-gray-300"></div>
        </div>

        <Hero />

        <div className="hidden md:flex flex-col gap-y-4 mt-30 items-center w-10 ">
          <p className="rotate-90 text-xl">tejastejas0770@gmail.com</p>
          <div className="w-px h-96 bg-gray-300 mt-30"></div>
        </div>

        <div></div>
      </div>
      <div className="flex flex-col">
        <AboutMe />
        <MyWork />
        <Certification />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
