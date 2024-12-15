"use client";

import { Card } from "@/components/ui/card";
import { Star, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.4 } },
};

export function FeaturesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Should You Choose Us?
        </motion.h2>
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 group hover:shadow-lg transition-all duration-300 border-blue-500/50">
              <Shield className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 group-hover:-rotate-[360deg] transition-all duration-700" />
              <h3 className="text-lg font-semibold tracking-tight">
                Trusted & Verified
              </h3>
              <p className="mt-2 text-foreground">
                All our cleaners are professionally trained.
              </p>
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 group hover:shadow-lg transition-all duration-300 border-blue-500/50">
              <Clock className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 group-hover:-rotate-[360deg] transition-all duration-700" />
              <h3 className="text-lg font-semibold tracking-tight">
                Flexible Scheduling
              </h3>
              <p className="mt-2 text-foreground">
                Book your preferred time slot that works best for you.
              </p>
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 group hover:shadow-lg transition-all duration-300 border-blue-500/50">
              <Star className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 group-hover:-rotate-[360deg] transition-all duration-700" />
              <h3 className="text-lg font-semibold tracking-tight">
                Quality Service
              </h3>
              <p className="mt-2 text-foreground">
                Exceptional cleaning service guaranteed every time.
              </p>
            </Card>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { type: "spring" } },
            }}
          >
            <Card className="p-6 group hover:shadow-lg transition-all duration-300 border-blue-500/50">
              <Award className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 group-hover:-rotate-[360deg] transition-all duration-700" />
              <h3 className="text-lg font-semibold tracking-tight">
                Satisfaction Guaranteed
              </h3>
              <p className="mt-2 text-foreground">
                Not happy? We'll re-clean for free.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
