import { motion } from "framer-motion";

const hover = {
  animate: {
    transform: "rotate3d(1, 0.3, 0, -90deg)",
    transformOrigin: "50% 50% 0.4em",
    opacity: 1,
  },
  initial: {
    transformOrigin: "50% 50% 0.4em",
    opacity: 1,
  },
};
const hover2 = {
  animate: {
    transform: "rotate3d(0, 0, 0, 90deg)",
    transformOrigin: "50% 50% 0.4em",
    opacity: 1,
  },
  initial: {
    transformOrigin: "50% 50% 0.4em",
    transform: "rotate3d(-1, -0.5, 0, 90deg)",
    opacity: 1,
  },
};

export const Rotate3D = ({ text }: { text: string }) => {
  return (
    <>
      <motion.div
        initial="initial"
        className="relative h-full w-full flex-col  "
        whileHover={"animate"}
      >
        <div className="">
          {text.split("").map((char, index) => (
            <motion.span
              variants={hover}
              key={index}
              className="inline-block transform transition-transform duration-500 "
              style={{ transitionDelay: `${index * 25}s` }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div>
          {text.split("").map((char, index) => (
            <motion.span
              variants={hover2}
              key={index}
              className="inline-block transform transition-transform duration-500 "
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </>
  );
};
