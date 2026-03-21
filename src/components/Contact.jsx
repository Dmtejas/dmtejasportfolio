import contact from "../assets/contact1.png";
import Linkedin from "../assets/linkedin4.png";
import Github from "../assets/github2.png";

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-10 max-w-xs lg:max-w-7xl mx-auto w-full text-center pt-5"
    >
      <h1 className="text-4xl lg:text-5xl font-bold font-serif border-2 border-l-0 border-r-0 border-t-0 border-red-600 pb-5">
        Contact Me
      </h1>
      <div className="flex lg:flex-row flex-col mt-0 text-start text-md lg:text-xl w-full mx-auto gap-y-5 rounded-xl justify-around items-center">
        <img className=" lg:w-1/2" src={contact} alt="" />
        <div className="flex flex-col gap-y-2 lg:gap-y-5 font-mono">
          <h1>
            Email:{" "}
            <a href="mailto:tejastejas0770@gmail.com" target="_blank">
              tejastejas0770@gmail.com
            </a>
          </h1>
          <h1>Phone: +91 8217012876</h1>
          <div className="flex flex-row justify-start gap-x-5 w-36">
            <div>
              <a href="https://linkedin.com/in/d-m-tejas-0b721a294">
                <img className="transition-all duration-300 hover:scale-110" src={Linkedin} alt="" />
              </a>
            </div>
            <div>
              <a href="https://github.com/Dmtejas">
                <img className="w-3/4 transition-all duration-300 hover:scale-110" src={Github} alt="" />
              </a>
            </div>
          </div>

          <button
            onClick={() =>
              (window.location.href = "mailto:tejastejas0770@gmail.com")
            }
            className="bg-red-500 rounded-md mt-5 text-xl py-2 shadow-2xl transition-all duration-200 hover:scale-110"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
