import contact from "../assets/contact1.png";

const Contact = () => {
  return (
    <div id="contact" className="mt-10 max-w-7xl mx-auto w-full text-center pt-5">
      <h1 className="text-5xl font-bold font-serif border-2 border-l-0 border-r-0 border-t-0 border-red-600 pb-5">
        Contact Me
      </h1>
      <div className="flex mt-10 text-start text-3xl w-full mx-auto gap-y-5 rounded-xl justify-around items-center">
        <img className="w-1/2" src={contact} alt="" />
        <div className="flex flex-col gap-y-5">
          <h1>
            Email:{" "}
            <a href="tejastejas0770@gmail.com" target="_blank">
              tejastejas0770@gmail.com
            </a>
          </h1>
          <h1>Phone: +91 8217012876</h1>
          <h1>Linkedin: </h1>
          <h1>Github: </h1>
          <button className="bg-red-500 rounded-md mt-5 text-xl py-2 shadow-2xl transition-all duration-200 hover:scale-110">
            Mail Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
