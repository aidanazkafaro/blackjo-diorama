import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import heroImage from "../public/images/creative-image.jpg";
import toIG from "../public/assets/instagram.png";
import {
  TheHallway1,
  TheHallway2,
  TheHallway3,
  TheHallway4,
  TheHallway5,
  TheHallway6,
  TheHallway7,
  Barnyard1,
  Barnyard2,
  Barnyard3,
  Cave1,
  Cave2,
  Cave3,
  Cave4,
  Cave5,
  Cave6,
  Cave7,
  Cave21,
  Cave22,
  Cave23,
  Cave24,
  Cave25,
  Cave26,
  Cave27,
  cave28,
  Island1,
  Island2,
  Island3,
  Italian1,
  Italian2,
  Italian3,
  Italian4,
  Italian5,
  Italian6,
  Italian7,
  American1,
  American2,
  American3,
  American4,
  American5,
  Cave28,
} from "../components/images";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="px-6 md:px-24 pt-16 bg-[#e9e1d6]">
      <p className="font-Manrope text-sm text-center w-full">PORTFOLIO</p>
      <h3 className="text-4xl mx-12 font-semibold mb-10 text-center font-Manrope">
        Some of My Projects
      </h3>
      {/* project 1 */}
      <div className="w-full h-fit ">
        <div className="h-fit w-full md:pl-32">
          <h2 className="text-3xl md:text-5xl font-semibold font-Manrope  mt-5">
            01.{" "}
          </h2>
          <h3 className="text-xl md:text-2xl font-medium font-Manrope md:my-5">
            {" "}
            The Hallway
          </h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-6 grid-rows-4 grid-flow-col gap-2">
            <div className="w-full col-span-3 row-span-2 ">
              <Image
                src={TheHallway1}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
            <div className="w-full col-span-3 row-span-2 ">
              <Image
                src={TheHallway2}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>

            <div className="w-full col-span-3 row-span-2 ">
              <Image
                src={TheHallway4}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>

            <div className="w-full col-span-3 row-span-2 ">
              <Image
                src={TheHallway5}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* project 2 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full md:pr-32 text-right">
          <h2 className="text-3xl md:text-5xl  font-semibold font-Manrope mt-5">
            02.{" "}
          </h2>
          <h3 className="text-xl md:text-2xl font-medium font-Manrope md:my-5">
            {" "}
            American Building
          </h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-6 grid-rows-1  gap-2 ">
            <div className="w-full  col-span-2 ">
              <Image
                src={American1}
                alt="American1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
            <div className="w-full col-span-2 ">
              <Image
                src={American2}
                alt="American2"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
            <div className="w-full col-span-2 ">
              <Image
                src={American3}
                alt="American3"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* project 3 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full md:px-32 text-left ">
          <h2 className="text-3xl md:text-5xl  font-semibold font-Manrope mt-5">
            03.{" "}
          </h2>
          <h3 className="text-xl md:text-2xl font-medium font-Manrope md:my-5">
            {" "}
            The Barnyard
          </h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-3 grid-rows-1 gap-2">
            <div className="w-fit row-span-1 ">
              <Image
                src={Barnyard3}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
                height={2800}
              />
            </div>
            <div className="w-fit row-span-1  ">
              <Image
                src={Barnyard1}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
                height={2800}
              />
            </div>
            <div className="w-fit row-span-1 ">
              <Image
                src={Barnyard2}
                alt="TheHallway1"
                className="inset-0 h-full w-full object-cover object-center rounded  "
                height={2708}
              />
            </div>
          </div>
        </div>
      </div>
      {/* project 4 */}

      <div className="w-full h-fit ">
        <div className="h-fit w-full md:pr-32 text-right">
          <h2 className="text-3xl md:text-5xl  font-semibold font-Manrope mt-5">
            04.
          </h2>
          <h3 className="text-xl md:text-2xl font-medium font-Manrope md:my-5">
            The Cave
          </h3>
        </div>
        <div className="container lg:px-32 px-4 py-8 mx-auto items-center">
          <div className="grid grid-cols-3 grid-rows-1  gap-2">
            <div className="w-full row-span-2 ">
              <Image
                src={Cave21}
                alt="Cave1"
                height={3000}
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
            <div className="w-full row-span-2 ">
              <Image
                src={Cave25}
                height={3000}
                alt="Cave5"
                className="inset-0 h-full w-full object-cover object-center rounded  "
              />
            </div>
            <div className="w-full row-span-2  ">
              <Image
                src={Cave24}
                alt="Cave4"
                height={3000}
                className="inset-0 h-full w-full object-cover object-center  rounded  "
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Projects;
