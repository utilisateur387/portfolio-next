import useAnchor from './useAnchor.js';
import { motion } from 'framer-motion';

const Headline = () => {
  const anchor = useAnchor();
  const handleClick = (e) => {
    e.preventDefault();
    anchor.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <motion.div
      className="headline"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <motion.p
        className="headline-content">
        Hi, I’m Miebi, a web developer and digital designer based in France
      </motion.p>

      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0
        }}
        animate={{
          opacity: 1,
          scale: 0.8,
          y: [80, 90, 80],
        }}
        transition={{
          delay: 1,
          duration: 1,
          ease: "easeInOut",
          loop: Infinity,
          repeatDelay: 3
        }}
      >
        <div className="scroll-message">
          <a href="#projects" onClick={handleClick}>
            <img src="images/general/arrow_down.png" alt="" />
          </a>
        </div>

      </motion.div>
    </motion.div>
  )
}

export default Headline;
