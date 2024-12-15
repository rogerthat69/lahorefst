"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } },
};

export function WeeklyDealsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-4xl font-semibold mb-4 tracking-tight"
        >
          Weekly Deals
        </motion.h2>
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 border-blue-500/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold tracking-tight">
                Deep Clean Special
              </h3>
              <p className="mt-2 text-gray-600">
                20% off  cleaning services
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Valid until end of week
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 border-blue-500/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold tracking-tight">
                Window Package
              </h3>
              <p className="mt-2 text-gray-600">Buy 5 windows, get 1 free</p>
              <p className="mt-1 text-sm text-gray-500">
                Interior and exterior cleaning
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 border-blue-500/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold tracking-tight">
                First-Time Offer
              </h3>
              <p className="mt-2 text-gray-600">15% off your first booking</p>
              <p className="mt-1 text-sm text-gray-500">New customers only</p>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 border-blue-500/50 hover:shadow-lg transition-all duration-300">
              <h3 className="text-lg font-semibold tracking-tight">
                Bundle & Save
              </h3>
              <p className="mt-2 text-gray-600">25% off booking 3+ services</p>
              <p className="mt-1 text-sm text-gray-500">Combine any services</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
