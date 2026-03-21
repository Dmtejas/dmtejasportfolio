import JFSD from '../assets/JFSD.png'
import AWS from '../assets/AWS.png'
import DSA from '../assets/DSA.png'
import Oracle from '../assets/Oracle.jpeg'
import Cisco from '../assets/Cisco.png'

const certifications = [
  {
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    year: "2024",
    image: DSA,
  },
  
  {
    title: "Oracle Cloud Foundations",
    issuer: "Oracle",
    year: "2025",
    image: Oracle,
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    year: "2025",
    image: Cisco,
  },
  {
    title: "JFSD: All about deisigning UI",
    issuer: 'Simplilearn',
    year: "2026",
    image: JFSD
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS",
    year: "2025",
    image: AWS,
  },
];

const Certification = () => {
  return (
    <div id="certification" className="mt-20 pt-5">
      <h1 className="text-5xl font-bold text-center font-serif border-3 border-l-0 border-r-0 border-t-0 pb-2 border-red-600">
        Certifications
      </h1>
      <div className="grid grid-cols-3 mt-10 w-full">
        {certifications.map((element, index) => {
          return (
            <div className="m-6 flex flex-col gap-y-5 items-center rounded-3xl text-center">
              {/* <h1 className="text-4xl font-black text-red-600 min-h-20">
                {element.title}
              </h1>
              <div className="flex justify-center gap-x-5 w-full">
                <p className="text-center text-2xl">{element.issuer}</p>
                <p className="text-2xl">{element.year}</p>
              </div> */}

              <img
                className="h-96 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110"
                src={element.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
