import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Create a media query listener
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // 2. Set the initial value
    setIsMobile(mediaQuery.matches);

    // 3. Define a callback function to handle changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // 4. Add the listener for real-time updates (rotation/resizing)
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // 5. Clean up the listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* We use the tiltEnable prop to turn off the effect on mobile 
          while keeping the DOM structure consistent.
      */}
      <Tilt
        tiltEnable={!isMobile} 
        glareEnable={!isMobile}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-2xl"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`tag-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>My work</p>
        <h2 className = {styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className = "w-full flex">
        <motion.p variants = {fadeIn("", "", 0.1, 1)} className = "mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className = "mt-20 flex flex-wrap gap-7 justify-center items-center w-full max-w-[2000px] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key = {`project-${index}`}
            index = {index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")