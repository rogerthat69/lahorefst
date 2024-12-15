"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReactLenis from "@studio-freight/react-lenis";

export default function About() {
  return (
    <ReactLenis root>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Us
          </h1>
          <p className="mt-6 text-2xl tracking-tight leading-8 text-muted-foreground">
            Providing professional cleaning services in{" "}
            <span className="bg-blue-500 text-white px-2 rounded-2xl">
              Lahore
            </span>{" "}
            since{" "}
            <span className="bg-blue-500 text-white px-2 rounded-2xl">
              2015
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/logo.jpg"
              alt="Cleaning professionals at work"
              width={600}
              height={400}
              className="rounded-lg shadow-lg  object-fit h-[34rem] w-[33rem] "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground">
              Lahore Fast Janitorial Home Services started with a simple
              mission: to provide high-quality, reliable cleaning services to
              homes and businesses in Lahore. Over the years, we've grown from a
              small team to a trusted name in the industry.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Why Choose Us?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Professional and trained cleaning staff</li>
                <li>✓ Eco-friendly cleaning products</li>
                <li>✓ Flexible scheduling options</li>
                <li>✓ Competitive pricing</li>
                <li>✓ 100% satisfaction guarantee</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our services, using the
                best products and techniques.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-muted-foreground">
                Count on us to show up on time and deliver consistent results
                every time.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <div className="flex justify-center mb-4">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority. We listen to your needs
                and deliver accordingly.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Note: Replace image URLs with the ones you'll provide */}
            <div className="text-center">
              <Image
                src="/front.jpg"
                alt="Team Member 1"
                width={190}
                height={300}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Cleaning Specialist</h3>
            </div>
            <div className="text-center">
              <Image
                src="/logo.jpg"
                alt="Team Member 2"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Cleaning Specialist</h3>
            </div>
            <div className="text-center">
              <Image
                src="/back.jpg"
                alt="Team Member 3"
                width={330}
                height={300}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Cleaning Specialist</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </ReactLenis>
  );
}
