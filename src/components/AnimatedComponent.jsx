
import { motion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <motion.div
      className="p-6 bg-blue-500 text-white rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Welcome to the Animated World!
    </motion.div>
  );
}

export default AnimatedComponent;