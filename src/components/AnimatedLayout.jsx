import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const AnimatedLayout = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const AnimatedComponent = ({ children, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);