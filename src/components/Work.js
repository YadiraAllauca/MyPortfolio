import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Img1 from "../assets/portfolio-img1.jpg";
import Img2 from "../assets/portfolio-img2.jpg";
import Img3 from "../assets/portfolio-img3.jpg";

const Work = () => {
  const projects = [
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/03f6076c-20db-4bb0-a5a1-51bbd037114f.image.png?v=1701395346745",
      title: "Personal: My Notes - Web App",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/9a179a66-966f-4fd3-abc8-8a4e870e25bc.image.png?v=1702182564016",
      title: "Personal: Mis Mascotas - Mobile App",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/ae70c59e-d3c8-47c6-a015-a2427b42ba8e.image.png?v=1702183014681",
      title: "Personal: SuperLista - Mobile App",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/925420c3-bc26-4d0d-9f66-1d7f39ffd20d.image.png?v=1701400312941",
      title: "Personal:  Alquiler Vehículos - Web App",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/1c35f5f7-f5e8-4f95-bacb-edbcda6bbfe8.image.png?v=1702183279628",
      title: "Personal:  Alquiler Vehículos - Mobile App",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/197525be-0576-494d-b493-92b6b8b92f0f.image.png?v=1701818217543",
      title: "Colab: Electronic Voting System - Web App",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/010760f7-8140-4554-bc60-f82579f64069.image.png?v=1702183756111",
      title: "Colab: Electronic Billing - Mobile App",
    },
    {
      image:
        "https://cdn.glitch.global/1d3dd682-c1e7-4386-94b7-857b9d3c741b/d1704f62-01c5-433a-bb2e-7b42ad99f853.jpg?v=1688858510973",
      title:
        "Colab: System for the sale of tickets to interprovincial bus users in Ecuador",
    },
    {
      image:
        "https://cdn.glitch.global/67cd472b-72c6-4b72-8f91-3c3387cbf446/1a21abf2-3c44-4f97-90b7-3700364dc732.image.png?v=1702183858564",
      title: "Colab:  System for recording IT activities",
    },
    {
      image:
        "https://blog.facialix.com/wp-content/uploads/2021/11/3809174_9a5b_2.jpg",
      title: "Colab:  Facial Recognition",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === "prev") {
      setCurrentProject(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
    } else {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto relative text-center">
        <div className="flex flex-col lg:flex-row gap-x-10 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2
                className="h2 leading-tight text-accent"
                style={{ fontSize: "1.8rem" }}
              >
                My latest projects
              </h2>
              <p className="hidden lg:block" style={{ fontSize: "1.4rem" }}>
                Hover over image for details.
              </p>
              <p className="hidden lg:block" style={{ fontSize: "1.4rem" }}>
                Use left and right arrow keys to navigate.
              </p>
              <p className="hidden lg:block" style={{ fontSize: "1.4rem" }}>
                <a
                  href="https://github.com/YadiraAllauca"
                  target="_blank"
                  className="text-accent"
                >
                  More information in:
                  <center>
                    <FaGithub></FaGithub>
                  </center>
                </a>
              </p>
            </div>
            <div
              className="group relative overflow-hidden border-4 border-white/50 mx-auto"
              style={{
                width: "80%",
                maxWidth: "700px",
                height: "350px",
                marginTop: "-4vh",
              }}
            >
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                src={projects[currentProject].image}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-500 z-50">
                <span className="text-gradient">
                  {" "}
                  {projects[currentProject].title}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleArrowClick("prev")}
            className="text-5xl lg:text-6xl text-white font-bold focus:outline-none"
          >
            &lt;
          </motion.button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleArrowClick("next")}
            className="text-5xl lg:text-6xl text-white font-bold focus:outline-none"
          >
            &gt;
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Work;