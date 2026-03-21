import HeaderButton from "./HeaderButton";

const Header = () => {
  const left = `</ `;
  const name = 'Tejas';
  const right = ` >`;

  return (
    <div className="lg:mt-10 lg:mx-60 flex lg:justify-around border border-t-0 border-l-0 border-r-0 border-white p-5 ">
      <button className="lg:text-3xl text-xl font-bold flex"><p className="text-red-500">{left}</p><p>{name}</p><p className="text-red-500">{right}</p></button>
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
  );
};

export default Header;
