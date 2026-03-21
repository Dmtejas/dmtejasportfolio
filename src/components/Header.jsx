import HeaderButton from "./HeaderButton";
import hamburger from "../assets/hamburger.png";
import { useState } from "react";

const Header = () => {
  const left = `</ `;
  const name = "Tejas";
  const right = ` >`;

  const [open, setOpen] = useState(false);

  return (
    <div className="lg:mt-10 lg:mx-60 flex justify-between lg:justify-around lg:border lg:border-t-0 lg:border-l-0 lg:border-r-0 border-white p-5 ">
      <button className="lg:text-3xl text-xl font-bold flex">
          <p className="text-red-500">{left}</p>
          <p>{name}</p>
          <p className="text-red-500">{right}</p>
        </button>
      <div>
        <div className="hidden text-xl lg:flex gap-x-10 font-bold">
          <HeaderButton button_name="Home" path="/" />
          <HeaderButton button_name="About" path="#about" />
          <HeaderButton button_name="Certification" path="#certification" />
          <HeaderButton button_name="My Works" path="#myWorks" />
          {/* <a href="#contact">
            <button className="bg-blue-400 py-2 px-5 rounded-md transition-all duuration-200 hover:scale-110">Let's Talk</button>
        </a> */}
        </div>
      </div>

      <div className="flex flex-col lg:hidden items-end fixed pr-2 ">
        <img onClick={() => setOpen(!open)} className="w-1/10 lg:hidden" src={hamburger} alt="" />
        {
          open ? <div className="flex flex-col items-start pt-4 gap-y-3 transform transition-transform duration-300 translate-x-0 bg-gray-600 mt-2 shadow-2xl rounded-2xl">
          <HeaderButton button_name="Home" path="/" />
          <HeaderButton button_name="About" path="#about" />
          <HeaderButton button_name="Certification" path="#certification" />
          <HeaderButton button_name="My Works" path="#myWorks" />
        </div> : <div className="flex flex-col items-end pt-4 gap-y-3 transform transition-transform duration-300 translate-x-full">
          <HeaderButton button_name="Home" path="/" />
          <HeaderButton button_name="About" path="#about" />
          <HeaderButton button_name="Certification" path="#certification" />
          <HeaderButton button_name="My Works" path="#myWorks" />
        </div>
        }
        
      </div>
    </div>
  );
};

export default Header;
