"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function ThankYou() {
  return (
    <motion.section className="relative min-h-screen overflow-hidden duration-500 bg-gradient-to-r from-green-600 to-teal-700 text-white dark:bg-gradient-to-r dark:from-green-800 dark:to-teal-900">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mx-auto max-w-7xl pt-52 py-28 px-6 lg:px-16"
      >
        <div className="flex flex-col items-center justify-between gap-12 2xl:pt-12 2xl:zoom-in-125">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-center space-y-6"
          >
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="font-display font-bold tracking-tight text-5xl md:text-5xl lg:text-6xl md:leading-[4rem]"
            >
              Thank You!
            </motion.h1>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg text-white/90"
            >
              Your request has been submitted successfully. We will get in touch
              with you shortly.
            </motion.p>
          </motion.div>
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex justify-center"
          >
            <Link href="/">
              <Button
                className="bg-green-600 text-white hover:bg-green-700 text-lg shadow-lg hover:shadow-xl transition-all"
                size="lg"
              >
                Go to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
