import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollDrift: Gives elements a zero-gravity parallax lag when scrolling.
 * Heavier items should use a smaller offset, lighter items a larger offset.
 */
export const ScrollDrift = ({ children, offset = 30, className = "" }) => {
  const ref = useRef(null);
  
  // Track this element's position relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Map scroll progress to a subtle vertical drift
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

/**
 * FloatUpText: Entrances that float up with a gentle bounce, 
 * simulating an object catching a breeze in zero-g.
 */
export const FloatUpText = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 14,
        mass: 1.2,
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
