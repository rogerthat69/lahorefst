"use client";

import Link from "next/link";
import { ChangeEvent, useState, useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  "Paint",
  "House Cleaning",
  "Fumigation",
  "Office Cleaning",
  "Sofa Cleaning",
  "Car Wash",
];

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

interface SearchBarProps {
  searchQuery: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ searchQuery, onSearch }: SearchBarProps) {
  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="flex items-center bg-white/90 rounded-xl shadow-lg p-2 mx-auto md:mx-0 max-w-lg md:max-w-none backdrop-blur-sm transition-all hover:shadow-xl"
    >
      <motion.input
        type="text"
        value={searchQuery}
        onChange={onSearch}
        placeholder="Search the service you need!"
        className="flex-grow px-4 py-2 text-foreground rounded-l-xl focus:outline-none placeholder:select-none bg-transparent dark:text-black"
      />
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
      >
        <svg
          className="h-6 w-6 text-blue-500 dark:text-blue-400 stroke-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}

interface PopularServicesProps {
  services: string[];
  searchQuery: string;
}

function PopularServices({ services, searchQuery }: PopularServicesProps) {
  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      className="mt-6 text-center md:text-left"
    >
      <motion.h3
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-lg font-medium tracking-tight mb-3"
      >
        {searchQuery ? "Search Results" : "Popular Services"}
      </motion.h3>
      {searchQuery && services.length === 0 ? (
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-white/80"
        >
          No services found
        </motion.p>
      ) : (
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-3"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {(searchQuery ? services : services.slice(0, 4)).map(
            (service, index) => (
              <motion.span
                variants={FADE_UP_ANIMATION_VARIANTS}
                whileTap={{ scale: 0.95 }}
                key={index}
                className="bg-white/95 dark:bg-gray-200 text-blue-600  px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm font-semibold tracking-tight"
              >
                <Link href={`/services`}>{service}</Link>
              </motion.span>
            )
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(SERVICES);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = SERVICES.filter((service) =>
      service.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const videoSrc = useMemo(
    () =>
      "https://res.cloudinary.com/dhdooucif/video/upload/v1733738780/ry7e083notkflrzvxtwa.mp4",
    []
  );

  return (
    <motion.section className="relative min-h-[80dvh] overflow-hidden duration-500 text-white">
      <video
        preload="none"
        src={videoSrc}
        loop
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
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
        className="mx-auto max-w-7xl py-28 px-6 lg:px-12 z-40"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 2xl:pt-12 2xl:zoom-in-125">
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="md:w-1/2 text-center md:text-left space-y-6 md:h-auto min-h-[450px]  md:pt-8 z-40"
          >
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className={clsx(
                "font-display font-bold tracking-tight",
                "text-5xl md:text-5xl lg:text-6xl",
                " md:leading-[4rem]"
              )}
            >
              Your Trusted Home Cleaning Service
            </motion.h1>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-lg md:pr-20 px-4 md:px-0 text-white/90"
            >
              Professional cleaning services tailored to your needs. Experience
              the difference of a truly clean home.
            </motion.p>
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex justify-center md:justify-start gap-4 pt-4"
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link href="/book">
                  <button className="group relative h-12 rounded-full  bg-blue-600 px-7 text-white ">
                    <span className="relative inline-flex overflow-hidden">
                      <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                        Book Now
                      </div>
                      <div className="absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        Book Now
                      </div>
                    </span>
                  </button>
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link href="/services">
                  <div className="group relative cursor-pointer px-2 py-[0.7rem] w-36  bg-background dark:bg-foreground dark:text-background rounded-full overflow-hidden text-foreground text-center font-semibold">
                    <span className=" group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                      Our Services
                    </span>
                    <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-10 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
                      <span>Our Services</span>
                      <ArrowRight />
                    </div>
                    <div className="absolute top-[44%] left-[10%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-transparent scale-[1]  group-hover:bg-blue-600 group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="md:w-1/2 w-full space-y-6 z-30"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className={clsx(
                "font-display font-semibold text-center md:text-left",
                "text-4xl md:-mt-20  mt-24",
                "tracking-tight"
              )}
            >
              Search the Service You Need
            </motion.h2>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
            </motion.div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <PopularServices
                services={filteredServices}
                searchQuery={searchQuery}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
