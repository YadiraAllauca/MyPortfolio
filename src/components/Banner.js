import React from "react";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
      style={{ marginTop: "-15vh", marginLeft: "40px" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg: gap-x-12">
          {}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold  leading-[1]"
            >
              <span className=" text-white mr-4">I'm a</span>
              <TypeAnimation
                sequence={["Software Engineer", 1500, "Frontend Developer", 1500]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a developer of desktop, web and mobile applications.
              Additionally, I handle areas such as AI and BI. I'm passionate
              about creating attractive and efficient digital experiences.
              Contact me to collaborate on exciting projects!
            </motion.p>
            {}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/YadiraAllauca" target="_blank">
                <FaGithub></FaGithub>
              </a>
              <a href="https://github.com/YadiraAllauca" target="_blank">
                <FaLinkedin></FaLinkedin>
              </a>
            </motion.div>
          </div>
          {}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
            <img
              src={Image}
              alt=""
              style={{ marginTop: "-15vh", height: "60vh" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
