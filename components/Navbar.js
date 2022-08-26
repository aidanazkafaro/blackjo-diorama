import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
import LogoBlackjo from "../public/blackjo-icon.jpg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" fixed z-20 bg-[#F5F5F5] w-full ">
        <div className="w-full">
          <div className="flex items-center h-20 w-full px-5 border-b-2">
            <div className="flex items-center  sm:mx-10 md:mx-20 justify-between w-full">
              {/* logo */}
              <div className="flex justify-center items-center flex-shrink-0 -ml-[75px]">
                {/* <h1 className=" font-bold text-xl cursor-pointer">
									Blackjo Diorama
								</h1> */}
                {/* <img src={LogoBlackjo} alt="Blackjo Diorama">
                  <Link
                    activeClass="Home"
                    to="hero"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer"
                  ></Link>{" "}
                  <Image
                    src={LogoBlackjo}
                    className="scale-[30%] self-center rounded-full"
                  />
                </img> */}
                <Link className="cursor-pointer" href="/">
                  <Image
                    className="scale-[30%] self-center rounded-full "
                    src={LogoBlackjo}
                    alt="Blackjo Diorama"
                  ></Image>
                </Link>
              </div>

              {/* items on the center */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="hero"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer px-3 py-2 text-md"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="Projects"
                    to="projects"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer hover:text-gray-500 text-black px-3 py-2 duration-150"
                  >
                    Projects
                  </Link>

                  <Link
                    activeClass="About Me"
                    to="aboutme"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer hover:text-gray-500 text-black px-3 py-2 duration-150"
                  >
                    About Me
                  </Link>
                  <Link
                    activeClass="Order"
                    to="order"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer hover:text-gray-500 text-black px-3 py-2 duration-150"
                  >
                    Order
                  </Link>
                  <Link
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="cursor-pointer hover:text-gray-500 text-black px-3 py-2 duration-150"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* on mobile */}
            <div className="md:mr-14 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-black focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className=" mx-4 mr-20 pt-4 pb-4 space-y-1">
                <Link
                  activeClass="Hero"
                  to="hero"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer hover:bg-black text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>

                <Link
                  activeClass="Projects"
                  to="projects"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer hover:bg-black text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  activeClass="About Me"
                  to="aboutme"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer hover:bg-black text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Me
                </Link>

                <Link
                  activeClass="order"
                  to="order"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer hover:bg-black text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Order
                </Link>
                <Link
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer hover:bg-black text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
