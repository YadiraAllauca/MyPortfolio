import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "CERTIFICATES",
    description: "---------------------------------",
  },
  {
    name: "Computer Systems Assistant - 2016",
    description: "Training Institute Computer Center P, B.",
  },
  {
    name: "Neural Networks for AI - 2022",
    description: "Technical University of Ambato",
  },
  {
    name: "IV Conference on Computer Science, Electronics and Industrial Engineering - 2022",
    description: "Technical University of Ambato",
  },
  {
    name: "Information Security Assistant - 2023",
    description: "Training Institute Computer Center P, B.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 bg-cover bg-smaller"
          >
            <h2
              className="h2 text-accent mb-6"
              style={{
                fontSize: "3rem",
              }}
            >
              
            </h2>
          </motion.div>

          {}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <hr />
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div>
                    <div className="max-w-[1000px]">
                      <h4
                        className="text-[20px] tracking-wider font-primary font-semibold mb-6"
                        style={{ marginBottom: "2vh" }}
                      >
                        {name}
                      </h4>
                      <p
                        className="font-secondary leading-tight"
                        style={{ marginBottom: "3vh" }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
