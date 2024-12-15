"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Updated import
import { ReactLenis } from "@studio-freight/react-lenis";
import { ClipLoader } from "react-spinners"; // Importing the loader
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Importing shadcn select
import { Textarea } from "@/components/ui/textarea"; // Importing shadcn textarea

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function Contact() {
  const services = [
    "Paint",
    "House Cleaning",
    "Fumigation",
    "Office Cleaning",
    "Sofa Cleaning",
    "Car Wash",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: services[0], // This will still work as expected
  });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      service: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult("Sending....");
    setLoading(true); // Set loading to true when form is submitted

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3b64861d-063a-46a4-8493-cf584c5c4aa5");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: services[0], // Reset to the first service
        });
        router.push("/thank-you");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after the request is completed
    }
  };

  return (
    <ReactLenis root>
      <motion.section className="relative min-h-[80dvh] overflow-hidden duration-500 bg-gradient-to-r from-blue-600 to-sky-700 text-white dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-900">
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
          className="mx-auto max-w-7xl py-28 px-6 lg:px-16  md:py-16  2xl:scale-[1] duration-500"
        >
          <div className="flex flex-col items-center justify-between gap-12 2xl:pt-3  2xl:pb-10 2xl:zoom-in-125">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center space-y-6"
            >
              <motion.h1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="font-display font-bold tracking-tight text-5xl md:text-5xl lg:text-6xl md:leading-[4rem]"
              >
                Contact Us
              </motion.h1>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-lg text-white/90"
              >
                We would love to hear from you! Please fill out the form below
                and we will get in touch with you shortly.
              </motion.p>
            </motion.div>
            <motion.form
              variants={FADE_UP_ANIMATION_VARIANTS}
              onSubmit={handleSubmit}
              className="w-full max-w-lg bg-white/90 rounded-xl shadow-lg p-6 backdrop-blur-sm transition-all hover:shadow-xl"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className=" text-gray-700 text-sm font-bold mb-2 flex items-center gap-2"
                  htmlFor="service"
                >
                  Service{" "}
                  <blockquote className="text-xs text-muted-foreground">
                    Please select a service
                  </blockquote>
                </label>
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  rows={5}
                  required
                ></Textarea>
              </div>
              {result && (
                <div className="mb-4 text-center text-sm font-medium">
                  {result}
                </div>
              )}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700 text-lg shadow-lg hover:shadow-xl transition-all"
                  size="lg"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? (
                    <ClipLoader size={24} color={"#ffffff"} />
                  ) : (
                    "Send Message"
                  )}{" "}
                  {/* // Show loader when loading */}
                </Button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </motion.section>
    </ReactLenis>
  );
}
