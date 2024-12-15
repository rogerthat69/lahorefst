"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.2 } },
};

const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const SERVICES_DATA = [
  {
    title: "Paint Services",
    description:
      "Painting services for both interior and exterior spaces, delivering flawless finishes.",
    image:
      "https://res.cloudinary.com/dhdooucif/image/upload/v1733673457/mx1sx0tlzbvkjma4meez.jpg",
    alt: "Paint Services",
  },
  {
    title: "House Cleaning",
    description:
      "Comprehensive house cleaning services to keep your living space spotless and hygienic.",
    image:
      "https://res.cloudinary.com/dhdooucif/image/upload/v1733673893/zlcqnroktxlcoofzvdq6.jpg",
    alt: "House Cleaning",
  },
  {
    title: "Fumigation Services",
    description:
      "Effective pest control and fumigation solutions to keep your space pest-free and safe.",
    image:
      "https://res.cloudinary.com/dhdooucif/image/upload/v1733673900/xtwnpumaafpj9oy9xzcb.jpg",
    alt: "Fumigation",
  },
  {
    title: "Office Cleaning",
    description:
      "Professional office cleaning services to maintain a clean and productive work environment.",
    image:
      "https://res.cloudinary.com/dhdooucif/image/upload/v1733673900/qrsqn6ltymi8nwkapo1d.jpg",
    alt: "Office Cleaning",
  },
  {
    title: "Sofa Cleaning",
    description:
      "Specialized sofa and upholstery cleaning services to restore and maintain your furniture.",
    image:
      "https://res.cloudinary.com/dhdooucif/image/upload/v1733673905/fytk7ufgw7b7fsjfpcdt.jpg",
    alt: "Sofa Cleaning",
  },
  {
    title: "Car Wash",
    description:
      "Thorough car washing and detailing services to keep your vehicle clean and looking its best.",
    image:
      "https://res.cloudinary.com/dhdooucif/image/upload/v1733673900/ofqk49pzub3ismvx5axs.jpg",
    alt: "Car Wash",
  },
];

export function ServicesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      className="py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-12 text-center tracking-tight">
            Our Services
          </h2>
        </motion.div>
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 px-5 md:px-0 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES_DATA.map((service, index) => (
            <motion.div key={index} variants={STAGGER_CHILD_VARIANTS}>
              <Card className="p-6   hover:border-blue-700 hover:bg-blue-700/10  hover:shadow-lg group border dark:border-blue-400/50 border-blue-500/50 hover:scale-105 transition-all duration-500">
                <div className="relative w-full h-48 mb-4">
                  <Link href={`/booking`}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className=" select-none object-cover rounded-lg group-hover:scale-95 transition-all duration-300 group-hover:shadow-lg"
                      priority={index === 0}
                      quality={80}
                    />
                  </Link>
                </div>
                <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2 tracking-tight transition-all duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 group-hover:after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white after:bg-blue-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 cursor-default">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t dark:border-t-blue-500">
                  <span className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:text-blue-700 group-hover:font-bold">
                    <Link href={`/booking`}>Book a Session</Link>
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
