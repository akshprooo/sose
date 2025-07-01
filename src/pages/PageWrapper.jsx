// pages/PageWrapper.jsx
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1},
  out: { opacity: 0},
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="w-full"
  >
    {children}
  </motion.div>
);

export default PageWrapper;
