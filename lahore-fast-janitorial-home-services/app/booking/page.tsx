"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ClipLoader } from "react-spinners";

import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";

const SERVICES = [
  "Paint",
  "House Cleaning",
  "Fumigation",
  "Office Cleaning",
  "Sofa Cleaning",
  "Car Wash",
];

const SERVICE_DESCRIPTIONS = [
  "Professional painting services for interior and exterior spaces",
  "Comprehensive cleaning services for residential properties",
  "Effective pest control and fumigation treatments",
  "Commercial cleaning services for office spaces",
  "Deep cleaning services for sofas, couches and upholstery",
  "Thorough car washing and detailing services for all vehicle types",
];

const steps = ["Select a Service", "Choose Date & Time", "Enter Details"];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: selectedService,
  });
  const [result, setResult] = useState<string | JSX.Element>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const lenis = useLenis();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time) {
      setResult("Please select both date and time");
      return;
    }

    // Validate all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setResult(
        <span className="text-red-500 bg-red-500/10 p-2 rounded-lg animate-pulse">
          Please fill in all required fields
        </span>
      );
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setResult("Please enter a valid email address");
      return;
    }

    // Basic phone validation (at least 10 digits)
    const phoneRegex = /^\d{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      setResult("Please enter a valid phone number (at least 10 digits)");
      return;
    }

    setResult("Sending....");
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3b64861d-063a-46a4-8493-cf584c5c4aa5");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append("date", format(date, "PPP"));
    formDataToSend.append("time", time);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          <span className="text-green-500 bg-green-500/10 p-2 rounded-lg animate-pulse">
            Form Submitted Successfully
          </span>
        );
        setTimeout(() => {
          router.push("/thank-you");
        }, 2000);
      } else {
        console.log("Error", data);
        setResult(
          <span className="text-red-500 bg-red-500/10 p-2 rounded-lg animate-pulse">
            {data.message}
          </span>
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && (!date || !time)) {
      setResult("Please select both date and time");
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setResult("");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setResult("");
    }
  };

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setFormData((prev) => ({ ...prev, service }));
  };

  return (
    <ReactLenis root>
      <div className="max-w-3xl mx-auto px-10 md:px-0 py-10">
        <motion.h1
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Book a Session
        </motion.h1>
        <motion.p
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.1,
          }}
        >
          Schedule your healing journey with us.
        </motion.p>

        <div className="flex justify-center mb-8 relative w-full max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative z-10 flex-1"
            >
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.1,
                }}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    index <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-500 dark:bg-muted-foreground dark:text-gray-900"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-sm mt-2 text-gray-500 dark:text-gray-100 text-center">
                  {step}
                </span>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-[50%] w-full h-[2px] bg-gray-300 -z-10 dark:bg-foreground/50">
                  <div
                    className="h-full bg-blue-600 transition-all duration-300 dark:bg-blue-500"
                    style={{
                      width: currentStep > index ? "100%" : "0%",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {currentStep === 0 && (
          <motion.div
            className="grid grid-cols-1 px-10 md:px-0 md:grid-cols-3 gap-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service}
                className={`p-4 border rounded-lg ${
                  selectedService === service
                    ? "border-blue-500 bg-blue-200/50 border-2 dark:bg-blue-600 dark:border-none "
                    : "border-gray-300"
                }`}
                onClick={() => handleServiceSelect(service)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="font-bold">{service}</h3>
                <p className="text-sm mt-2">
                  {SERVICE_DESCRIPTIONS[SERVICES.indexOf(service)]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">
                  Select Date <span className="text-red-500">*</span>
                </h3>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  required
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4">
                  Select Time <span className="text-red-500">*</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`p-2 text-sm rounded-lg transition-all ${
                        time === slot
                          ? "bg-blue-500 text-white dark:bg-blue-600"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-foreground/50"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {date && time && (
                  <Table className="mt-8 border-2   dark:border-blue-400  shadow-lg hover:shadow-xl transition-all">
                    <TableHeader>
                      <TableRow className="bg-blue-50 dark:bg-blue-900/30">
                        <TableHead className="text-center text-blue-600 dark:text-blue-400 text-lg py-4">
                          Date
                        </TableHead>
                        <TableHead className="text-center text-blue-600 dark:text-blue-400 text-lg py-4">
                          Time
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-blue-50 dark:hover:bg-blue-900/10">
                        <TableCell className="text-center font-bold text-lg py-6 border-r border-blue-400">
                          {format(date, "PPP")}
                        </TableCell>
                        <TableCell className="text-center font-bold text-lg py-6">
                          {time}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                )}
              </div>
            </div>
            {result && <div className="text-red-500 text-center">{result}</div>}
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto bg-background/90 rounded-xl shadow-lg p-6 backdrop-blur-sm transition-all hover:shadow-xl dark:border-foreground/50 dark:border"
          >
            <div className="mb-4">
              <label
                className="block text-foreground text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-foreground border rounded-lg focus:outline-none dark:bg-foreground/50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-foreground text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-foreground border rounded-lg focus:outline-none dark:bg-foreground/50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-foreground text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-foreground border rounded-lg focus:outline-none dark:bg-foreground/50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-foreground text-sm font-bold mb-2"
                htmlFor="message"
              >
                Additional Notes <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-foreground border rounded-lg focus:outline-none dark:bg-foreground/50 [resize:none]"
                rows={5}
                required
              ></Textarea>
            </div>
            {result && (
              <div className="mb-4 text-center text-sm font-medium">
                {result}
              </div>
            )}
          </motion.form>
        )}

        <div className="flex justify-between mt-8 flex-col md:flex-row gap-4 w-full px-10 md:px-0">
          {currentStep > 0 && (
            <Button
              variant="link"
              onClick={handlePrevious}
              className="underline underline-offset-4 "
            >
              Previous
            </Button>
          )}
          {currentStep === 2 ? (
            <Button
              onClick={handleSubmit}
              className="bg-blue-600 text-white w-fit"
              disabled={loading}
            >
              {loading ? <ClipLoader size={24} color={"#ffffff"} /> : "Submit"}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 flex-1 md:w-fit"
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </ReactLenis>
  );
}
