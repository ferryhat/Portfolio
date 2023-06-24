import React from "react";
import bisho from "../../images/memoji.png";
import AboutMe from "../../component/aboutMe";
import Contact from "../../component/contact";
import Section from "../../component/motion/useInView";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "../../component/cards";

function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="text-white">
      <Section className="position-relative">
        <motion.div
          className="d-flex flex-wrap justify-content-around align-items-center gap-2 myHeight mb-5"
          style={{ scale, opacity }}
          ref={targetRef}
        >
          <motion.div>
            <div className="d-flex flex-column">
              <h1 className="hello fs-1">My Portfolio</h1>
              <span className="fs-2">Feriel Hattou</span>
              <span className="fs-1">Full Stack Developer</span>
              <motion.a
                className="btn btn-outline-secondary fs-3 text-white mt-3"
                href="mailto:feriel1hattou@gmail.com"
                initial={{}}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 0.5,
                  },
                  textShadow: "0px 0px 10px rgb(255,255,255)",
                  boxShadow: "0px 0px 10px rgb(255,255,255)",
                }}
              >
                <i className="bi bi-envelope"></i> Contact me
              </motion.a>
            </div>
          </motion.div>
          <div className="hi">
            <img
              src={bisho}
              alt=""
              className="w-100 h-100 myshadow"
              style={{ maxWidth: "400px" }}
            />
          </div>
        </motion.div>
      </Section>
      <Section className="position-relative m-5">
        <span id="about"></span>
        <AboutMe />
      </Section>{" "}
      <Section className="position-relative">
        <span id="contact"></span>
        <Contact />
      </Section>
      <Section className="position-relative">
        <span id="projects"></span>
        <Cards />
      </Section>
    </div>
  );
}

export default HomePage;
