import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerNavs = [
  {
    label: "Services",
    items: [
      {
        href: "/booking",
        name: "Paint Services",
      },
      {
        href: "/booking", 
        name: "House Cleaning",
      },
      {
        href: "/booking",
        name: "Fumigation Services", 
      },
      {
        href: "/booking",
        name: "Office Cleaning",
      },
    ],
  },
  {
    label: "More Services",
    items: [
      {
        href: "/booking",
        name: "Sofa Cleaning",
      },
      {
        href: "/booking",
        name: "Car Wash",
      },
      {
        href: "/booking",
        name: "Paint Services",
      },
      {
        href: "/booking", 
        name: "House Cleaning",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        href: "/about",
        name: "About Us",
      },
      {
        href: "/blog",
        name: "Blog",
      },
      {
        href: "/contact",
        name: "Contact",
      },
      {
        href: "/book",
        name: "Book Now",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="pt-10 dark:bg-blue-950 bg-blue-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-4xl">
            <h3 className="text-2xl font-bold text-background dark:text-gray-200">
              Get our beautiful newsletter straight to your inbox.
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form className="flex items-center gap-x-3 md:justify-end">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-blue-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 active:shadow-none rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <Sparkles className="h-8 w-8 text-blue-600" />
            <span className="text-3xl font-bold text-background dark:text-gray-200">
              Lahore Fast Janitorial Home Services
            </span>
          </Link>
          <p className="text-gray-200 text-xl mt-4">
            Making homes sparkle, one clean at a time.
          </p>
        </div>

        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-background" key={idx}>
              <h4 className="text-background dark:text-gray-200 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    href={el.href}
                    className="text-gray-300 hover:text-blue-400 duration-150"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-10 py-11 border-t border-gray-400 items-center justify-between sm:flex">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Lahore Fast Janitorial Home Services.
            All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
