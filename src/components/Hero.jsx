import Me from "../assets/Me.png";
import Resume from "../../public/Resume.pdf";

const Hero = () => {
  return (
    <div className="max-w-7xl ml-32 bg-transparent font-sans flex  gap-x-16">
      <div className="flex flex-col gap-y-5 pt-12">
        <h1 className="text-5xl font-thin">Hi There</h1>
        <h1 className="text-7xl font-black">
          I'm <span className="text-red-500">Tejas D M</span>
        </h1>
        <p className="text-7xl font-thin">I am a Web Developer</p>
        <div className="flex gap-x-10 mt-5">
          <a href={Resume} download>
            <button className="bg-red-600 px-16 py-3 shadow-2xl text-xl rounded-md font-thin transition-all duration-300 hover:scale-110">
              Resume
            </button>
          </a>
          <a href="#contact">
            <button className="bg-blue-400 text-xl font-thin text-white py-3 px-12  transition-all duration-300 hover:scale-110 rounded-md">
              Contact Me
            </button>
          </a>
        </div>
      </div>
      <img className="w-1/3 rounded-full" src={Me} alt="" />
    </div>
  );
};

export default Hero;
