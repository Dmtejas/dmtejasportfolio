import Cable from '../assets/Cable.png'
import Datawiz from '../assets/datawiz.png'
import Movie from '../assets/Movie.png'

const myWorks = [
  {
    title: "Cable Customer Management System",
    description:
      "Developed a full-stack application to digitize customer records and payment tracking for a village cable operator, replacing manual logbook processes.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Customer data management",
      "Monthly billing and payment tracking",
      "Admin dashboard for operations",
    ],
    github: "https://github.com/Dmtejas/Cable_Customer_Management_System.git",
    live: "https://cable-customer-management-system.vercel.app/",
    highlight: true,
    image: Cable
  },
  {
    title: "DataWiz Club Website",
    description:
      "Built a centralized platform to manage and promote club activities, improving event visibility and member engagement.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Event management and announcements",
      "Member engagement system",
      "Admin control for content updates",
    ],
    github: "https://github.com/Dmtejas/Datawiz",
    live: "https://datawiznmit.netlify.app/",
    highlight: false,
    image: Datawiz
  },
  {
    title: "Movie Finder Application",
    description:
      "Created a web application to search and explore movies using external APIs with a responsive and modern UI.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Search movies using API",
      "Dynamic UI rendering",
      "Responsive design",
    ],
    github: "https://github.com/yourusername/movie-finder",
    live: "https://movie-finder-steel-psi.vercel.app/",
    highlight: false,
    image: Movie
  },
];

const MyWork = () => {
  return (
    <div id="myWorks" className="max-w-xs lg:max-w-7xl mx-auto mt-18 pt-5 lg:pl-0">
      <h1 className="text-4xl lg:text-5xl text-center lg:text-center text-white font-inter font-bold border-3 border-l-0 border-r-0 border-t-0 pb-2 border-red-600">
        My Works
      </h1>
      <div className="flex flex-col mt-10">
        {myWorks.map((element, index) => {
          return (
            <div className="m-2 p-2 lg:p-10 shadow-[0_0_16px_rgba(255,0,0,0.5)] flex flex-col gap-y-5 items-center rounded-xl">
               
              <h1 className="text-2xl text-center lg:text-4xl font-black text-red-500">{element.title}</h1>
               
              <p className="text-center lg:text-center text-sm lg:text-xl">{element.description}</p>
              {/* <p className=" text-xs lg:text-lg">Tech Stack : {element.techStack}</p> */}
                {/* <p className="text-md font-mono">Source Code : {element.github} </p> */}
              
              <a href={element.live} target="_blank" className=" flex justify-center">
                <img className="lg:size-1/2 rounded-xl shadow-2xl transition-all duration-300 hover:scale-200" src={element.image} alt="" />
              </a>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
