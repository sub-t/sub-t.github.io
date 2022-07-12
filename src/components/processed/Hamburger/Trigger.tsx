import { motion, Variants } from 'framer-motion';
import { MdDragIndicator } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { DropdownMenuTrigger } from '@/components/material/DropdownMenu';

const TriggerVariants: Variants = {
  initial: {},
  hover: {},
};

const IndicatorVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, duration: 0.5, stiffness: 1000 },
  },
};

export const Trigger = () => (
  <motion.div
    className="relative"
    variants={TriggerVariants}
    initial="initial"
    whileHover="hover"
  >
    <DropdownMenuTrigger asChild>
      <button
        aria-label="hamburger menu"
        className="icon-btn rounded-full bg-white dark:bg-black shadow-xl"
      >
        <RiMenu4Line size={28} />
      </button>
    </DropdownMenuTrigger>
    <motion.div
      className="p-1 icon-btn absolute -bottom-2 -right-2 rounded-full bg-white dark:bg-black shadow-xl cursor-grab"
      variants={IndicatorVariants}
    >
      <MdDragIndicator size={16} />
    </motion.div>
  </motion.div>
);
