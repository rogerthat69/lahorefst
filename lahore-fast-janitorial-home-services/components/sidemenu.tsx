"use client";

import { motion } from "framer-motion";

//just move open/close state to parent component
export const MobileMenuBtn = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <button
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      className={
        "flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full"
      }
    >
      <motion.div
        style={{
          width: "20px",
          borderTop: "2px solid var(--neutral-500)",
          transformOrigin: "center",
        }}
        initial={{ translateY: "-3px" }}
        animate={
          isOpen
            ? { rotate: "45deg", translateY: "1px" }
            : { translateY: "-3px", rotate: "0deg" }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: "20px",
          borderTop: "2px solid var(--neutral-500)",
          transformOrigin: "center",
        }}
        initial={{ translateY: "3px" }}
        animate={
          isOpen
            ? { rotate: "-45deg", translateY: "-1px" }
            : { translateY: "3px", rotate: "0deg", scaleX: 1 }
        }
      />
    </button>
  );
};
