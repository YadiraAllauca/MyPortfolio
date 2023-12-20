import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[350px] mix-blend-lighten bg-top"
          >
            <p
              style={{
                fontSize: "1.3rem",
                marginTop: "350px",
              }}
            >
              <b>Hobby:</b> Singing🎶
            </p>
          </motion.div>
          {}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="mb-6" style={{ fontSize: "25px" }}>
              I enjoy developing web applications, but I also have knowledge of
              mobile and desktop applications.{" "}
            </h3>
            <p className="mb-6">
              {}
              <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Years in the Development World
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    +
                    {inView ? (
                      <CountUp start={0} end={30} duration={3} />
                    ) : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Developed Projects
                  </div>
                </div>
                <div>
                  <div className="text-[40px] font-tertiary text-gradient">
                    +
                    {inView ? (
                      <CountUp start={0} end={20} duration={3} />
                    ) : null}
                  </div>
                  <div className="font-primary text-sm tracking-[2px]">
                    Used technology
                  </div>
                </div>
              </div>
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1"
              >
                <div className="text-[20px] font-tertiary text-gradient">
                  HTML - CSS - JAVASCRIPT - ANGULAR
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  INTERMEDIATE LEVEL
                </div>
                <br />
                <p className="font-primary text-sm tracking-[2px]">
                  💡I optimized the visualization of processes with the science
                  of Business Intelligence in the "Laboratorio Neo-Fármaco"
                </p>
              </motion.div>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
