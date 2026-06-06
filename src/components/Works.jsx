import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, arts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const AnimationModal = ({ src, name, onClose }) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative mx-4"
        style={{
          width: isPortrait ? "auto" : "100%",
          maxWidth: isPortrait ? "none" : "56rem",
          height: isPortrait ? "90vh" : "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 black-gradient w-10 h-10 rounded-full text-white font-bold flex items-center justify-center hover:text-gray-300"
        >
          ✕
        </button>
        {src?.endsWith(".mp4") || src?.endsWith(".webm") ? (
          <video
            autoPlay loop controls
            src={src}
            className="rounded-2xl"
            style={{
              width: isPortrait ? "auto" : "100%",
              height: isPortrait ? "90vh" : "auto",
              maxWidth: "100%",
            }}
            onLoadedMetadata={(e) => {
              const { videoWidth, videoHeight } = e.target;
              setIsPortrait(videoHeight > videoWidth);
            }}
          />
        ) : (
          <img src={src} alt={name} className="w-full rounded-2xl" />
        )}
      </div>
    </div>,
    document.body
  );
};

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex w-full sm:w-[360px]" // Explicit width here prevents collapse
    >
      <div className="relative p-[2px] rounded-2xl magic-card overflow-hidden shadow-2xl flex flex-col w-full h-full">
        {isMobile ? (
          // MOBILE: No Tilt, just the background div
          <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col">
            <div className="relative w-full h-[230px]">
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`tag-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
              ))}
            </div>
          </div>
        ) : (
          // DESKTOP: Tilt enabled
          <Tilt
            tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1} transitionSpeed={450}
            className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col"
          >
            <div className="relative w-full h-[230px]">
              <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                </div>
              </div>
            </div>
            <div className="mt-5 flex-1">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`tag-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
              ))}
            </div>
          </Tilt>
        )}
      </div>
    </motion.div>
  );
};

const ArtCard = ({ index, name, description, tags, image, animation_src }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const PlayButton = () => (
    <div
      onClick={() => setShowModal(true)}
      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
      title="View animation"
    >
      {/* Simple play triangle — swap for an icon if you have one */}
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5">
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );


  const cardContent = (
    <>
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <PlayButton />
        </div>
      </div>
      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`tag-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </>
  );

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="flex w-full sm:w-[360px]"
      >
        <div className="relative p-[2px] rounded-2xl magic-card overflow-hidden shadow-2xl flex flex-col w-full h-full">
          {isMobile ? (
            <div className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col">
              {cardContent}
            </div>
          ) : (
            <Tilt
              tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1} transitionSpeed={450}
              className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col"
            >
              {cardContent}
            </Tilt>
          )}
        </div>
      </motion.div>

      {showModal && (
        <AnimationModal
          src={animation_src ?? image} // fall back to image if no animation yet
          name={name}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>

      {/* Grid container: ensures cards stay in their lanes */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center w-full">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Creative Technology.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience using creative technology to create visual and interactive experiences. 
        </motion.p>
      </div>

      {/* Grid container: ensures cards stay in their lanes */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center w-full">
        {arts.map((art, index) => (
          <ArtCard key={`art-${index}`} index={index} {...art} />
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(Works, "work");