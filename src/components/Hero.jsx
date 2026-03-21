import Me from "../assets/Me.png";
import Resume from "../../public/Resume.pdf";

const Hero = () => {
  return (
    <div className=" lg:max-w-7xl lg:ml-32 lg:bg-transparent font-sans flex lg:flex-row flex-col lg:pl-0  gap-x-16">
      <div className="flex flex-col gap-y-5 pt-12 items-center lg:items-start">
        <h1 className="lg:text-5xl text-4xl font-thin">Hi There</h1>
        <h1 className="lg:text-7xl text-5xl font-black">
          I'm <span className="text-red-500">Tejas D M</span>
        </h1>
        <p className="lg:text-7xl text-5xl font-thin lg:text-start text-center">I am a Web Developer</p>
        <div className="flex lg:flex-row flex-col gap-y-5 lg:gap-x-10 mt-5">
          <a href={Resume} download>
            <button className="bg-red-600 px-16 py-3 shadow-2xl text-xl rounded-md font-mono transition-all duration-300 hover:scale-110 w-full">
              Resume
            </button>
          </a>
          <a href="#contact">
            <button className="bg-blue-400 text-xl font-mono text-white py-3 px-12  transition-all duration-300 hover:scale-110 rounded-md">
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <img className="lg:w-1/3 rounded-full lg:pt-0 pt-18" src={Me} alt="" />
    </div>
  );
};

export default Hero;
