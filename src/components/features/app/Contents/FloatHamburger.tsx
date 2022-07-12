import React from 'react';
import { Portal } from '@radix-ui/react-portal';
import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { Hamburger } from '../Hamburger';

const MotionSlot = motion(Slot);

type Props = { hamburgerMenu?: React.ReactNode };

export const FloatHamburger: React.VFC<Props> = ({ hamburgerMenu }) => {
  const constraintRef = React.useRef(null);

  return (
    <>
      <Portal
        ref={constraintRef}
        style={{ zIndex: -1, position: 'fixed', inset: 16 }}
      />
      <Portal>
        <MotionSlot drag dragConstraints={constraintRef}>
          <div className="z-50 fixed left-8 bottom-8">
            <Hamburger>{hamburgerMenu}</Hamburger>
          </div>
        </MotionSlot>
      </Portal>
    </>
  );
};
