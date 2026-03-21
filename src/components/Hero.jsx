import Me from "../assets/Me.png";
import Resume from "../../public/Resume.pdf";

const Hero = () => {
  return (
    <div className=" lg:max-w-7xl lg:ml-32 lg:bg-transparent font-sans flex lg:flex-row flex-col lg:pl-0  gap-x-16">
      <div className="flex flex-col gap-y-5 lg:pt-12 items-center lg:items-start">
        <img className="flex lg:hidden w-1/2 rounded-full pt-10 lg:pt-0" src={Me} alt="" />
        <h1 className="lg:text-5xl text-3xl font-thin">Hi There</h1>
        <h1 className="lg:text-7xl text-4xl font-black">
          I'm <span className="text-red-500">Tejas D M</span>
        </h1>
        <p className="lg:text-7xl text-4xl font-light lg:text-start text-center">I am a Web Developer</p>
        <div className="flex lg:flex-row flex-col gap-y-5 lg:gap-x-10 mt-5">
          <a href={Resume} download>
            <button className="bg-red-600 px-16 py-2 shadow-2xl lg:text-xl rounded-md font-mono transition-all duration-300 hover:scale-110 w-full">
              Resume
            </button>
          </a>
          <a href="#contact">
            <button className="bg-blue-400 lg:text-xl font-mono text-white py-2 px-12  transition-all duration-300 hover:scale-110 rounded-md">
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <img className="hidden lg:flex lg:w-1/3 rounded-full lg:pt-0 pt-18" src={Me} alt="" />
    </div>
  );
};

export default Hero;
