"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } },
};

export function BookingPolicy() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center"
        >
          <h2
            className={clsx(
              "text-3xl font-bold tracking-tight",
              "text-gray-900 dark:text-white",
              "sm:text-4xl"
            )}
          >
            Booking Policy
          </h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", delay: 0.3 },
              },
            }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Understanding our service charges and policies
          </motion.p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", delay: 0.4 },
            },
          }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Base Visit Charge
                </h3>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  Rs. 500
                </span>
              </div>

              <div className="mt-8 space-y-4 text-gray-600 dark:text-gray-300">
                <p>• Base charge of Rs. 500 applies to each service visit</p>
                <p>• Additional charges may apply based on:</p>
                <ul className="ml-8 list-disc space-y-2">
                  <li>Scope of work required</li>
                  <li>Size of the area to be serviced</li>
                  <li>Special cleaning requirements</li>
                  <li>Equipment or supplies needed</li>
                </ul>
                <p>
                  • Final charges will be determined and agreed upon after
                  initial assessment and contract signing
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Note: All additional charges will be clearly communicated and
                agreed upon before service commencement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
